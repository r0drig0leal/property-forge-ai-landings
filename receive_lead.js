const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const LOG_FILE = path.join(DATA_DIR, 'messages.jsonl');

// Middleware para parsear JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Criar diretório data/ se não existir
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Endpoint POST /receive_lead
app.post('/receive_lead', (req, res) => {
  try {
    // Capturar dados da requisição
    const timestamp = new Date().toISOString();
    const client_ip = req.ip || req.connection.remoteAddress || 'unknown';
    const user_agent = req.get('user-agent') || 'unknown';
    const payload = req.body;
    const message = payload.message || payload.msg || '';

    // Montar registro
    const record = {
      timestamp,
      client_ip,
      user_agent,
      payload,
      message
    };

    // Converter para JSON e adicionar quebra de linha
    const jsonLine = JSON.stringify(record) + '\n';

    // Gravar no arquivo (append)
    fs.appendFile(LOG_FILE, jsonLine, { encoding: 'utf8', flag: 'a' }, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ 
          ok: false, 
          error: 'Failed to save lead data' 
        });
      }

      // Sucesso
      res.json({ ok: true });
    });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Internal server error' 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
