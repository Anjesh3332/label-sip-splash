import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every bottle is crafted with care and attention to detail, ensuring your brand shines beautifully."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We partner with local businesses and events to create memorable experiences that bring people together."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising quality. Your brand, delivered when you need it."
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Only the finest mineral water and printing materials, ensuring your brand looks professional and fresh."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-soft/20 text-primary-deep rounded-full text-sm font-medium mb-4">
            💫 Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Making Brands <span className="text-primary">Memorable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At LabelSip, we believe every brand deserves to make a splash. 
            We transform ordinary moments into extraordinary memories with 
            premium custom-labeled mineral water that tells your story.
          </p>
        </div>

        {/* Mission Story */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed mb-8">
              "It started with a simple idea: what if every sip could carry your brand's essence? 
              Today, we're proud to help businesses, event organizers, and dreamers create 
              connections that matter, one refreshing bottle at a time."
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <span>The LabelSip Team</span>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-premium interactive group hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;