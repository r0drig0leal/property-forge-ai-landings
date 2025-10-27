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
    <Card className="group p-8 hover:shadow-hover transition-smooth transform hover:-translate-y-2 bg-gradient-card border-2 border-border hover:border-primary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-smooth" />
      
      {/* Icon container with background */}
      <div className="relative mb-6">
        <div className="inline-flex p-4 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-border shadow-card group-hover:shadow-glow group-hover:scale-110 transition-bounce">
          <Icon className={iconColor} size={32} strokeWidth={2} />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-smooth">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-smooth origin-left" />
    </Card>
  );
};

export default FeatureCard;
