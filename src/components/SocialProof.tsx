import { Card } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by Florida's Smartest Investors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-warning text-warning" size={20} />
              ))}
            </div>
            <p className="text-lg text-card-foreground mb-4 italic leading-relaxed">
              "PropertyForge turned a 'maybe' flip into a 22% ROI win. Game-changer."
            </p>
            <p className="text-muted-foreground font-semibold">— Alex T., Orlando Investor</p>
          </Card>

          <Card className="p-8 bg-primary text-primary-foreground border-primary shadow-elegant">
            <TrendingUp className="mb-4" size={32} />
            <p className="text-3xl font-bold mb-2">1,000+</p>
            <p className="text-lg mb-2">Orange County properties analyzed</p>
            <p className="text-2xl font-bold mb-1">92%</p>
            <p className="text-sm">User satisfaction in beta</p>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent px-8 py-4 rounded-xl">
            <p className="text-accent font-bold text-lg">
              Expanding to Broward & Palm Beach next month—secure your spot today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
