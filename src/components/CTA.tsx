import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "Our team will reach out within 24 hours.",
      });
      setEmail("");
    }
  };

  const benefits = [
    "No setup fees",
    "14-day free trial",
    "Cancel anytime",
    "24/7 support",
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-primary-foreground">
            Ready to transform
            <br />
            your hiring?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-medium">
            Join 500+ financial institutions using ShiftRx to deploy talent faster than ever.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-14 h-16 bg-background/95 backdrop-blur border-0 text-foreground placeholder:text-muted-foreground rounded-2xl text-lg shadow-soft"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background h-16 px-10 rounded-2xl font-black text-lg transition-bounce hover:scale-105 shadow-soft"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-5xl font-black text-primary-foreground mb-2">500+</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary-foreground mb-2">7K+</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary-foreground mb-2">$2.3M</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Avg. Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
