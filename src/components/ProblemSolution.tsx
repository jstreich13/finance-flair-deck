import { Card } from "@/components/ui/card";
import { Clock, X, Check } from "lucide-react";

const ProblemSolution = () => {
  const comparisonData = [
    { 
      stage: "Job Posting", 
      traditional: "2-5 hours", 
      shiftrx: "0 hours",
      description: "Automated across multiple channels"
    },
    { 
      stage: "Screening & Verification", 
      traditional: "10-20 hours", 
      shiftrx: "0 hours",
      description: "Pre-vetted, licensed candidates only"
    },
    { 
      stage: "Credential Verification", 
      traditional: "1-2 hours per candidate", 
      shiftrx: "0 hours",
      description: "Real-time license validation"
    },
    { 
      stage: "Compliance & Onboarding", 
      traditional: "2-4 hours", 
      shiftrx: "30 mins",
      description: "Automated FINRA compliance"
    },
    { 
      stage: "Total Time Investment", 
      traditional: "15-30+ hours", 
      shiftrx: "30 mins",
      description: "Per hire"
    },
  ];

  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-flow-slow" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl float-gentle" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl float-gentle" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
            <span className="text-primary font-bold text-sm">Traditional vs our platform</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            Stop wasting time on
            <br />
            <span className="gradient-text">manual hiring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            The old way of hiring financial talent is broken. We built something better.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-6xl mx-auto space-y-4">
          {comparisonData.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 border-border bg-card hover:shadow-soft transition-smooth float-gentle"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{item.stage}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Traditional</div>
                    <div className="text-lg font-bold text-foreground">{item.traditional}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">our platform</div>
                    <div className="text-lg font-bold gradient-text">{item.shiftrx}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 gradient-primary border-0 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Clock className="h-12 w-12 text-primary-foreground" />
              <div className="text-primary-foreground">
                <div className="text-sm font-semibold mb-2">Time Saved Per Hire</div>
                <div className="text-5xl font-black">Up to 98%</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
