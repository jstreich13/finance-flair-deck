import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      label: "Admin time for scheduling",
      before: "18-22 hrs/week",
      after: "3-5 hrs/week",
      improvement: "75% reduction",
      trend: "down",
    },
    {
      label: "Time to onboard new staff",
      before: "22 days",
      after: "14 days",
      improvement: "36% faster",
      trend: "down",
    },
    {
      label: "Credentialing admin time",
      before: "12 hrs/week",
      after: "2 hrs/week",
      improvement: "83% reduction",
      trend: "down",
    },
    {
      label: "Staff satisfaction scores",
      before: "68%",
      after: "84%",
      improvement: "24% increase",
      trend: "up",
    },
  ];

  const costMetrics = [
    { label: "Medication Errors", value: "35%", description: "Reduction during staffed shifts" },
    { label: "Administrative Time", value: "52 hrs", description: "Hours saved per month" },
    { label: "Staff Retention", value: "24%", description: "Improvement in retention rates" },
    { label: "Annual Savings", value: "$320K", description: "Per facility cost savings" },
  ];

  return (
    <section className="py-24 gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">
            ShiftRx in Action
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Proven results to bring the power back to you, where it belongs
          </p>
        </div>

        {/* Main Metrics Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="overflow-hidden bg-card/95 backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">Metric</th>
                    <th className="text-left p-6 font-semibold text-foreground">Before ShiftRx</th>
                    <th className="text-left p-6 font-semibold text-foreground">After ShiftRx</th>
                    <th className="text-left p-6 font-semibold text-foreground">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border last:border-0 hover:bg-muted/5 transition-fast"
                    >
                      <td className="p-6 font-medium text-foreground">{metric.label}</td>
                      <td className="p-6 text-muted-foreground">{metric.before}</td>
                      <td className="p-6 font-semibold text-secondary">{metric.after}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          {metric.trend === "down" ? (
                            <TrendingDown className="h-5 w-5 text-secondary" />
                          ) : (
                            <TrendingUp className="h-5 w-5 text-secondary" />
                          )}
                          <span className="font-bold text-secondary">{metric.improvement}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Cost Impact Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-3xl text-center mb-12">
            Financial Impact Analysis
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costMetrics.map((item, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/95 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-smooth hover:shadow-gold group"
              >
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-accent bg-clip-text text-transparent">
                      {item.value}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-fast" />
                  </div>
                </div>
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
