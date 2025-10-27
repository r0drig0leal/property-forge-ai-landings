import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Differentiation = () => {
  const benefits = [
    "100+ data points from public records and government APIs",
    "Surface deal-breakers before they cost you five figures",
    "Used by 500+ local investors to avoid $10K+ mistakes",
    "Real-time updates from FEMA, HUD, Census, and NOAA",
  ];

  return (
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

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              PropertyForge crunches <span className="text-primary font-bold">100+ data points</span> from public records and government APIs to surface deal-breakers before they cost you five figures.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-success flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <Button size="lg" variant="default" className="group">
                See What 1,000+ Properties Already Revealed
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
