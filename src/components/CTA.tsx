import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Imagine knowing in 15 seconds whether a property is a smart deal
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
            Don't let a flood zone destroy your ROI.
          </p>
          <p className="text-lg mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
            Built by investors, for investors. Zero fluff. Pure data. Actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 bg-background text-primary hover:bg-background/90 group shadow-elegant">
              Start Free Risk Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2" />
              Book 10-Min Call
            </Button>
          </div>

          <div className="text-primary-foreground/90 text-sm">
            <p className="font-semibold mb-2">Invite-only beta • Founding partners get early access</p>
            <p>Brokers get 50% off first year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
