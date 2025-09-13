import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles } from "lucide-react";
import heroBottle from "@/assets/hero-bottle-500ml.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-soft/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <Droplets className="text-primary/30 w-8 h-8 float" />
        </div>
        <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2">
          <Sparkles className="text-primary-soft/40 w-6 h-6 float-delayed" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-soft/20 text-primary-deep rounded-full text-sm font-medium mb-4">
              🚀 Premium Water Branding Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Branding on</span>
            <br />
            <span className="text-primary">Mineral Water,</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              Made Fun
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
            Transform your brand with custom-labeled mineral water bottles. 
            Perfect for businesses, events, and memorable moments that make a splash.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bounce-hover group">
              Start Your Order
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bounce-hover">
              View Products
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Custom Branding</span>
            </div>
          </div>
        </div>

        {/* Right Content - Floating Bottle */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative">
            {/* Main Bottle */}
            <img
              src={heroBottle}
              alt="Premium LabelSip Bottle"
              className="w-80 h-auto float glow"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-soft/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/4 -right-12 w-6 h-6 bg-primary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Ripple Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/20 rounded-full animate-ripple"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;