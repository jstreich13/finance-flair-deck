import { Card } from "@/components/ui/card";
import { Bot, Shield, Zap, BarChart3, Globe, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Machine learning algorithms match candidates based on skills, compliance history, and institutional fit.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Shield,
      title: "Instant Compliance",
      description: "Real-time FINRA verification, Series licensing validation, and automated background checks.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Deploy in Hours",
      description: "Fill critical roles instantly. From wealth advisors to trading desk analysts, talent ready on-demand.",
      gradient: "from-accent to-primary",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track hiring velocity, cost per hire, and team performance metrics in real-time.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access 7,000+ verified professionals across investment banking, wealth management, and fintech.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliant, and full audit trails for regulatory requirements.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
            <span className="text-primary font-bold text-sm">Platform Features</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            Built for the future of
            <br />
            <span className="gradient-text">financial services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Enterprise-grade infrastructure designed for regulated financial institutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 border-border hover:border-primary/50 transition-smooth bg-card relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-gradient-card w-fit group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-black text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-card border border-primary/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary" />
              ))}
            </div>
            <span className="font-bold gradient-text">100% Skills Match Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
