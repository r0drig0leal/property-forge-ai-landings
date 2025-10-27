import FeatureCard from "./FeatureCard";
import { DollarSign, AlertTriangle, Users, Cloud, TrendingUp, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Instant Property Valuation",
      description: "AI-powered comps analysis, price per square foot, trend detection, under/overvaluation benchmark.",
      iconColor: "text-success",
    },
    {
      icon: AlertTriangle,
      title: "Financial Risk Score (0–10)",
      description: "Tax burden stability, exemptions, delinquency alerts, lien prediction.",
      iconColor: "text-warning",
    },
    {
      icon: Users,
      title: "Social Risk Score (0–10)",
      description: "Crime data, HUD LMI zones, income & population density. Predicts tenant churn.",
      iconColor: "text-accent",
    },
    {
      icon: Cloud,
      title: "Climate Risk Score (0–10)",
      description: "FEMA/NOAA flood zones, hurricanes, heat, wind exposure. Insurance projections.",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "ROI Potential Calculator",
      description: "Rent vs. cost modeling (repairs, eviction, taxes). Personalized yield vs. county averages.",
      iconColor: "text-success",
    },
    {
      icon: FileText,
      title: "Comprehensive Investment Report",
      description: "Professional PDF reports with all metrics, charts, and recommendations. Export and share with partners or lenders.",
      iconColor: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Invest Smarter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PropertyForge AI delivers comprehensive insights across five critical dimensions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
