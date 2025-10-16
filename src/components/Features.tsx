import { Card } from "@/components/ui/card";
import { Sparkles, Users, Shield, Zap, TrendingUp, Clock } from "lucide-react";
import platformImage from "@/assets/platform-visual.jpg";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates based on skills, credentials, and cultural fit for financial services roles.",
    },
    {
      icon: Shield,
      title: "Compliance Built-In",
      description: "FINRA, Series licensing, background checks, and regulatory requirements verified upfront.",
    },
    {
      icon: Users,
      title: "Pre-Vetted Talent Pool",
      description: "7,000+ qualified financial professionals including analysts, advisors, compliance officers, and operations specialists.",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Fill critical roles in hours. From investment banking to wealth management, talent ready when you need them.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights into hiring efficiency, cost savings, and team performance metrics.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated account management with round-the-clock support for urgent staffing needs.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-secondary font-semibold text-sm">Platform Features</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Built for Financial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade talent platform designed specifically for the unique needs of banks, 
            wealth management firms, and financial technology companies.
          </p>
        </div>

        {/* Platform Visual */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={platformImage} 
              alt="ShiftRx platform analytics dashboard" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 border-border hover:border-secondary/40 transition-smooth hover:shadow-md bg-card group"
            >
              <div className="mb-4 p-3 rounded-xl bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-fast">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Discover what you can automate today
          </p>
          <div className="inline-flex items-center gap-2 text-secondary font-semibold">
            <span>100% Skills Match Guaranteed</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
