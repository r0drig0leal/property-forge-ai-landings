const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">PropertyForge AI</h3>
          <p className="text-xl mb-6 opacity-90">Where Data Meets Destiny</p>
          <p className="text-sm opacity-75 mb-4">
            © 2025 PropertyForge AI. All rights reserved.
          </p>
          <a
            href="mailto:hello@propertyforge.ai"
            className="text-background hover:text-accent transition-colors underline"
          >
            hello@propertyforge.ai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
