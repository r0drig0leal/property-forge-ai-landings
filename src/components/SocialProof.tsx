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
          <Card className="group p-8 bg-gradient-card border-2 border-border shadow-card hover:shadow-hover transition-smooth hover:-translate-y-1 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-4 text-primary/10 text-6xl font-serif">"</div>
            
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-warning text-warning drop-shadow-sm" size={22} />
              ))}
            </div>
            <p className="text-lg text-card-foreground mb-4 italic leading-relaxed relative z-10 font-medium">
              "PropertyForge turned a 'maybe' flip into a 22% ROI win. Game-changer."
            </p>
            <p className="text-muted-foreground font-semibold relative z-10">— Alex T., Orlando Investor</p>
          </Card>

          <Card className="group p-8 bg-gradient-accent text-primary-foreground border-2 border-primary shadow-elegant hover:shadow-hover transition-smooth hover:-translate-y-1 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex p-3 bg-primary-foreground/20 rounded-xl mb-4 backdrop-blur-sm">
                <TrendingUp size={32} strokeWidth={2.5} />
              </div>
              <p className="text-4xl font-bold mb-2 drop-shadow-sm">1,000+</p>
              <p className="text-lg mb-4 text-primary-foreground/90">Orange County properties analyzed</p>
              <div className="h-px bg-primary-foreground/20 my-4" />
              <p className="text-3xl font-bold mb-1 drop-shadow-sm">92%</p>
              <p className="text-base text-primary-foreground/90">User satisfaction in beta</p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent px-8 py-5 rounded-2xl shadow-glow hover:shadow-hover transition-smooth backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-smooth" />
            <p className="text-accent font-bold text-lg relative z-10">
              🚀 Expanding to Broward & Palm Beach next month—secure your spot today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
