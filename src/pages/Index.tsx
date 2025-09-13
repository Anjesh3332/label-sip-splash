import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProductsSection from "@/components/sections/products";
import ContactSection from "@/components/sections/contact";
import FloatingBubbles from "@/components/ui/floating-bubbles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingBubbles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground/5 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LabelSip. Making brands memorable, one sip at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
