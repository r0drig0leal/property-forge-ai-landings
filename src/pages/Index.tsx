import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Differentiation from "@/components/Differentiation";
import Audiences from "@/components/Audiences";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Differentiation />
      <Audiences />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
