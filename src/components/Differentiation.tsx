import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import RequestDemoDialog from "./RequestDemoDialog";

const Differentiation = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  const benefits = [
    "100+ data points from public records and government APIs",
    "Surface deal-breakers before they cost you five figures",
    "Used by 500+ local investors to avoid $10K+ mistakes",
    "Real-time updates from FEMA, HUD, Census, and NOAA",
  ];

  return (
    <>
      <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Makes PropertyForge Different
            </h2>
            <p className="text-2xl text-foreground font-medium mb-8 leading-relaxed">
              While Zillow shows listings, we show what's behind the curtain.
            </p>
          </div>

          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-hover border-2 border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                PropertyForge crunches <span className="text-primary font-bold text-2xl">100+ data points</span> from public records and government APIs to surface deal-breakers before they cost you five figures.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1 p-1 bg-success/10 rounded-lg group-hover:bg-success/20 transition-smooth">
                      <CheckCircle className="text-success" size={24} strokeWidth={2.5} />
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  variant="default" 
                  className="group shadow-elegant"
                  onClick={() => setDemoDialogOpen(true)}
                >
                  See What 1,000+ Properties Already Revealed
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Differentiation;
