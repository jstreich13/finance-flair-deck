import { Card } from "@/components/ui/card";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      label: "Time to fill positions",
      before: "22 days",
      after: "14 hours",
      improvement: "98% faster",
      trend: "down",
    },
    {
      label: "Cost per hire",
      before: "$8,500",
      after: "$900",
      improvement: "89% reduction",
      trend: "down",
    },
    {
      label: "Credentialing time",
      before: "12 hrs/week",
      after: "0 hrs/week",
      improvement: "100% automated",
      trend: "down",
    },
    {
      label: "Quality of hire score",
      before: "72%",
      after: "94%",
      improvement: "31% increase",
      trend: "up",
    },
  ];

  const impactMetrics = [
    { value: "$2.3M", label: "Annual Savings", description: "Per institution" },
    { value: "94%", label: "Compliance Rate", description: "First-time pass" },
    { value: "14hrs", label: "Avg Fill Time", description: "Critical roles" },
    { value: "98%", label: "Retention Rate", description: "After 90 days" },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
            <span className="text-primary font-bold text-sm">Real Results</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            The numbers speak
            <br />
            <span className="gradient-text">for themselves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Financial institutions using our platform see immediate ROI
          </p>
        </div>

        {/* Metrics Comparison */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-8 border-border bg-card hover:shadow-soft transition-smooth">
                <div className="mb-4">
                  <h3 className="font-bold text-foreground mb-1">{metric.label}</h3>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Before</div>
                    <div className="text-2xl font-bold text-foreground">{metric.before}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">After</div>
                    <div className="text-2xl font-bold gradient-text">{metric.after}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  {metric.trend === "down" ? (
                    <TrendingDown className="h-5 w-5 text-primary" />
                  ) : (
                    <TrendingUp className="h-5 w-5 text-primary" />
                  )}
                  <span className="font-bold gradient-text">{metric.improvement}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-black text-center mb-12">Financial Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {impactMetrics.map((item, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-smooth group text-center"
              >
                <div className="mb-4">
                  <div className="text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-bounce">
                    {item.value}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary mx-auto opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="font-bold text-foreground mb-1">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
