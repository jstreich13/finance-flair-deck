import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern financial services office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm">
            <span className="text-secondary font-medium text-sm">Trusted by Leading Financial Institutions</span>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            Talent Smarter
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Find qualified financial professionals for your team in hours, not weeks. 
            AI-powered talent matching for banks, wealth management, and fintech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold text-lg px-8 py-6 transition-smooth"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 backdrop-blur-sm transition-smooth"
            >
              View Platform
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center gap-8 opacity-80">
            <div className="text-primary-foreground/70 text-sm font-medium">
              Official Partners:
            </div>
            <div className="flex flex-wrap gap-6 text-primary-foreground/60 text-sm font-semibold tracking-wide">
              <span>GOLDMAN SACHS</span>
              <span className="text-primary-foreground/30">|</span>
              <span>JP MORGAN</span>
              <span className="text-primary-foreground/30">|</span>
              <span>MORGAN STANLEY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
