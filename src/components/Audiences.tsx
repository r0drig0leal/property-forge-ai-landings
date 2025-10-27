import { Card } from "@/components/ui/card";
import { Home, Building2, TrendingUp } from "lucide-react";

const Audiences = () => {
  const audiences = [
    {
      icon: Home,
      title: "Individual Investors & Homebuyers",
      description: "Make confident decisions with instant risk assessments and ROI predictions on every property.",
    },
    {
      icon: Building2,
      title: "Realtors & Brokerages",
      description: "Close deals faster by providing clients with data-backed insights they can't find elsewhere.",
    },
    {
      icon: TrendingUp,
      title: "Institutional Funds & Portfolio Managers",
      description: "Scale your analysis with API access and automate risk screening across thousands of properties.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Every Real Estate Professional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual investors to institutional funds, PropertyForge scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="group p-8 text-center hover:shadow-hover transition-bounce transform hover:-translate-y-2 bg-gradient-card border-2 border-border hover:border-primary/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-smooth" />
              
              {/* Icon container */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-smooth" />
                  <div className="relative bg-primary/10 p-5 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-smooth group-hover:scale-110 transition-bounce">
                    <audience.icon className="text-primary" size={48} strokeWidth={2} />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-smooth relative z-10">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{audience.description}</p>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-smooth" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
