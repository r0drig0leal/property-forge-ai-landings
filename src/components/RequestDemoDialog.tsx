import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

const demoRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Empresa deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Empresa deve ter no máximo 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Telefone deve ter pelo menos 10 caracteres" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Formato de telefone inválido" }),
  investmentType: z
    .string()
    .trim()
    .min(1, { message: "Selecione um tipo de investimento" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" })
    .optional(),
});

type DemoRequestForm = z.infer<typeof demoRequestSchema>;

interface RequestDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestDemoDialog = ({ open, onOpenChange }: RequestDemoDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<DemoRequestForm>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      investmentType: "",
      message: "",
    },
  });

  const onSubmit = async (data: DemoRequestForm) => {
    setIsSubmitting(true);
    
    try {
      // Simular envio (aqui você conectaria com backend/email service)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Criar mensagem formatada para WhatsApp
      const whatsappMessage = `*Nova Solicitação de Demo API - PropertyForge*%0A%0A*Nome:* ${encodeURIComponent(data.name)}%0A*Email:* ${encodeURIComponent(data.email)}%0A*Empresa:* ${encodeURIComponent(data.company)}%0A*Telefone:* ${encodeURIComponent(data.phone)}%0A*Tipo:* ${encodeURIComponent(data.investmentType)}%0A${data.message ? `*Mensagem:* ${encodeURIComponent(data.message)}` : ''}`;
      
      // Abrir WhatsApp (substitua pelo número real)
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
      
      setIsSuccess(true);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      
      // Reset form após 2 segundos
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onOpenChange(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-card border-2 border-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">
            Request API Demo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Fill out the form below and we'll schedule a personalized demo for your needs.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 p-4 bg-success/10 rounded-full">
              <CheckCircle className="text-success" size={64} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Request Sent Successfully!
            </h3>
            <p className="text-muted-foreground">
              Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="border-2 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          {...field}
                          className="border-2 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Company LLC"
                          {...field}
                          className="border-2 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          {...field}
                          className="border-2 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="investmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Type *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select your profile</option>
                        <option value="individual">Individual Investor</option>
                        <option value="broker">Realtor/Broker</option>
                        <option value="institutional">Institutional Fund</option>
                        <option value="developer">Developer</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your needs and what you'd like to see in the demo..."
                        className="min-h-[120px] border-2 focus:border-primary resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 shadow-elegant"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request Demo"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoDialog;
