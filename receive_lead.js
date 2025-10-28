import express from "express";
import fs from "fs";
import path from "path";
import { google } from "googleapis";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Caminhos
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");
const TOKEN_PATH = path.join(process.cwd(), "token.json");

// ======== 1️⃣ AUTENTICAÇÃO COM GMAIL ========
async function getAuth() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
    return oAuth2Client;
  }

  // Primeira vez: gerar link de autorização
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
  });
  console.log("Authorize this app by visiting this url:", authUrl);

  // Depois de autorizar, cole o código aqui manualmente (só 1 vez)
  throw new Error("❗ Autorize o app visitando o link acima e depois salve o token.json");
}

// ======== 2️⃣ FUNÇÃO DE ENVIO DE E-MAIL ========
async function sendGmail(oAuth2Client, subject, body) {
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  const messageParts = [
    `To: SEU_EMAIL@gmail.com`,
    `Subject: ${subject}`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
  ];
  const message = messageParts.join("\n");
  const encodedMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
}

// ======== 3️⃣ ENDPOINT PARA RECEBER O FORM ========
app.post("/receive_lead", async (req, res) => {
  try {
    const auth = await getAuth();

    const data = req.body;
    const ts = new Date().toISOString();
    const subject = `📩 Novo Lead (${ts})`;
    const body = `
Novo lead recebido pelo formulário:

Nome: ${data.name || "N/A"}
Email: ${data.email || "N/A"}
Telefone: ${data.phone || "N/A"}
Mensagem:
${data.message || "(sem mensagem)"}

--- 
IP: ${req.ip}
User-Agent: ${req.get("User-Agent")}
`;

    await sendGmail(auth, subject, body);
    console.log(`[${ts}] Lead enviado com sucesso`);
    res.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar lead:", err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ======== 4️⃣ INICIAR SERVIDOR ========
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Recebendo leads em http://localhost:${PORT}/receive_lead`));
