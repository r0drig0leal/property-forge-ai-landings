import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const FeatureCard = ({ icon: Icon, title, description, iconColor = "text-primary" }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-smooth transform hover:-translate-y-1 bg-card border-border">
      <div className={`${iconColor} mb-4`}>
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;
