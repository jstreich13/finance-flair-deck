import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gradient-card border border-primary/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold gradient-text">Trusted by 500+ Financial Institutions</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
            The future of
            <br />
            <span className="gradient-text">financial talent</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            AI-powered platform connecting financial institutions with verified, 
            credentialed professionals. Deploy talent in hours, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-10 py-7 rounded-2xl font-bold transition-bounce hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground/10 hover:border-primary/50 text-lg px-10 py-7 rounded-2xl font-bold backdrop-blur-sm transition-smooth hover:bg-gradient-card"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-border/50">
            <div>
              <div className="text-4xl font-black gradient-text mb-2">7K+</div>
              <div className="text-sm text-muted-foreground font-medium">Verified Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">90%</div>
              <div className="text-sm text-muted-foreground font-medium">Time Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground font-medium">Average Fill Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
