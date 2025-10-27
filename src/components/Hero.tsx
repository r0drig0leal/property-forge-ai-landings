import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/orlando-hero.jpg";
import { ArrowRight } from "lucide-react";
import RequestDemoDialog from "./RequestDemoDialog";

const Hero = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <>
      <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orlando skyline with property data visualization"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(217_91%_60%/0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
          PropertyForge AI: Unlock Smarter Real Estate Decisions in Seconds
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto font-medium">
          Imagine spotting a killer deal in Orlando—before the competition does.
        </p>
        <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
          No more spreadsheets, endless Zillow scrolls, or gut-feel gambles. PropertyForge AI delivers instant, AI-powered insights on property risks, valuations, and ROI potential. Built for Florida's dynamic market, starting with Orange County.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero" 
            className="text-lg px-8 py-6 group shadow-hover"
            onClick={() => setDemoDialogOpen(true)}
          >
            Start Free Risk Assessment
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm bg-primary-foreground/10"
            onClick={() => setDemoDialogOpen(true)}
          >
            Request API Demo
          </Button>
        </div>

        {/* Urgency Badge */}
        <div className="mt-8 inline-block">
          <div className="relative bg-warning text-warning-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-glow">
            <div className="absolute inset-0 bg-warning rounded-full animate-ping opacity-30" />
            <span className="relative z-10">⚡ Beta access limited to 100 users • Expanding soon</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
