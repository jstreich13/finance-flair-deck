import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Demo request received!",
        description: "Our team will contact you within 24 hours.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Join leading financial institutions using ShiftRx to access qualified talent 
            in hours, not weeks. No cost to join.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-card/95 backdrop-blur border-primary-foreground/20 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold h-14 px-8 transition-smooth"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">7,000+</div>
              <div className="text-sm text-primary-foreground/70">Qualified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">90%</div>
              <div className="text-sm text-primary-foreground/70">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$320K</div>
              <div className="text-sm text-primary-foreground/70">Annual Savings</div>
            </div>
          </div>

          <p className="mt-12 text-primary-foreground/60 text-sm">
            Visit ShiftRx.io or contact us at sales@shiftrx.io
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
