import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you within 24 hours with a personalized quote.",
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      badge: "Instant Response"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@labelsip.com",
      action: "mailto:hello@labelsip.com",
      badge: "24h Response"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat support",
      action: "https://wa.me/15551234567",
      badge: "Always Online"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-soft/20 text-primary-deep rounded-full text-sm font-medium mb-4">
            💬 Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a <span className="text-primary">Splash?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get your custom quote in minutes! Tell us about your project 
            and we'll create the perfect branded water solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Get Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="First Name" 
                      required 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Last Name" 
                      required 
                      className="h-12"
                    />
                  </div>
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="h-12"
                />
                
                <Input 
                  placeholder="Company Name" 
                  className="h-12"
                />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="h-12 px-3 rounded-md border border-input bg-background text-foreground">
                    <option value="">Bottle Size</option>
                    <option value="250ml">250ml</option>
                    <option value="500ml">500ml</option>
                    <option value="1L">1L</option>
                    <option value="mixed">Mixed Sizes</option>
                  </select>
                  
                  <Input 
                    type="number" 
                    placeholder="Quantity" 
                    min="100"
                    className="h-12"
                  />
                </div>
                
                <Textarea 
                  placeholder="Tell us about your project, event, or branding needs..."
                  rows={4}
                  className="resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bounce-hover glow group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Quote
                      <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            {/* Quick Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-premium interactive group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <method.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {method.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Info */}
            <Card className="card-premium">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit Our Office
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>123 Water Street, Suite 456</p>
                  <p>Fresh Springs, CA 90210</p>
                  <div className="flex items-center gap-2 mt-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Fri: 9AM-6PM PST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-premium bg-gradient-to-br from-primary/10 to-primary-soft/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4">Why Choose LabelSip?</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">2M+</p>
                    <p className="text-xs text-muted-foreground">Bottles Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">24h</p>
                    <p className="text-xs text-muted-foreground">Avg Response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bounce-hover glow shadow-lg bg-green-500 hover:bg-green-600 text-white"
            asChild
          >
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;