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
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-smooth transform hover:-translate-y-1 bg-card border-border">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <audience.icon className="text-primary" size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
