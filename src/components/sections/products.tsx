import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Star, Zap } from "lucide-react";
import productLineup from "@/assets/product-lineup.png";

const ProductsSection = () => {
  const products = [
    {
      size: "250ml",
      title: "Compact Choice",
      description: "Perfect for events, samples, and quick refreshments",
      features: ["Lightweight", "Event-friendly", "Cost-effective"],
      popular: false,
      price: "Starting at $0.45/bottle"
    },
    {
      size: "500ml",
      title: "Perfect Balance",
      description: "The ideal size for meetings, conferences, and daily hydration",
      features: ["Most Popular", "Professional look", "Premium feel"],
      popular: true,
      price: "Starting at $0.65/bottle"
    },
    {
      size: "1L",
      title: "Premium Impact",
      description: "Make a statement with our largest custom-branded bottles",
      features: ["Maximum impact", "Family size", "Extended use"],
      popular: false,
      price: "Starting at $0.95/bottle"
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-muted/30 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-soft/20 text-primary-deep rounded-full text-sm font-medium mb-4">
            🌊 Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="text-primary">Perfect Size</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium mineral water in three perfectly sized bottles, 
            each ready to showcase your brand with crystal-clear quality.
          </p>
        </div>

        {/* Product Image */}
        <div className="mb-16 text-center">
          <img 
            src={productLineup}
            alt="LabelSip Product Lineup - 250ml, 500ml, 1L bottles"
            className="mx-auto max-w-full h-auto float"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`card-premium interactive relative ${
                product.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                {/* Size Badge */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-deep rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  {product.size}
                </div>
                
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                      {feature === "Most Popular" ? (
                        <Star className="w-4 h-4 text-primary" />
                      ) : (
                        <Zap className="w-4 h-4 text-primary" />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <p className="text-lg font-semibold text-primary mb-1">
                    {product.price}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Minimum order: 100 bottles
                  </p>
                </div>
                
                <Button 
                  className={`w-full bounce-hover ${
                    product.popular ? 'bg-primary hover:bg-primary-deep' : ''
                  }`}
                  variant={product.popular ? "default" : "outline"}
                >
                  <Droplets className="w-4 h-4 mr-2" />
                  Choose {product.size}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Branding Note */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto card-premium p-8">
            <h3 className="text-xl font-bold mb-4">🎨 Custom Branding Included</h3>
            <p className="text-muted-foreground mb-6">
              Every bottle comes with professional label printing featuring your logo, 
              brand colors, and custom messaging. No setup fees, no hidden costs.
            </p>
            <Button variant="outline" className="bounce-hover">
              See Design Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;