import { Card } from "@/components/ui/card";
import { Clock, XCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  const beforeData = [
    { stage: "Job Posting", time: "2-5 hours", description: "Writing, posting to job boards, tracking" },
    { stage: "Applicant Screening", time: "5-15 hours", description: "Resume review, background checks, compliance verification" },
    { stage: "Interview Coordination", time: "3-5 hours", description: "Scheduling, rescheduling, following up" },
    { stage: "Credential Verification", time: "1-2 hours", description: "Series 7, 63, CFP, CFA validation" },
    { stage: "Compliance & Onboarding", time: "2-4 hours", description: "FINRA paperwork, system setup, policy walkthrough" },
    { stage: "Backfills & Replacements", time: "1-3 days", description: "Reposting and starting over" },
  ];

  const afterData = [
    { stage: "Job Posting", time: "0 hours", description: "ShiftRx lists openings across multiple channels" },
    { stage: "Applicant Screening", time: "0-1 hour", description: "Only pre-vetted, licensed candidates sent" },
    { stage: "Interview Coordination", time: "0-1 hour", description: "ShiftRx coordinates or fills roles directly" },
    { stage: "Credential Verification", time: "0 hours", description: "ShiftRx verifies all licenses upfront" },
    { stage: "Compliance & Onboarding", time: "0-1 hour", description: "Talent arrives ready with compliance handled" },
    { stage: "Backfills & Replacements", time: "<1 day", description: "Fast replacements and backup staff" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Take Back Your Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reducing operational strain in financial services hiring
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Before ShiftRx */}
          <Card className="p-8 shadow-lg border-destructive/20 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Before ShiftRx</h3>
            </div>
            
            <div className="space-y-4">
              {beforeData.map((item, index) => (
                <div key={index} className="border-l-2 border-destructive/20 pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-foreground">{item.stage}</span>
                    <span className="text-destructive font-bold">{item.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-foreground">Total Time</span>
                  <span className="text-2xl font-bold text-destructive">15-30+ hours</span>
                </div>
              </div>
            </div>
          </Card>

          {/* With ShiftRx */}
          <Card className="p-8 shadow-lg border-secondary/30 bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="p-2 rounded-lg bg-secondary/20">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">With ShiftRx</h3>
            </div>
            
            <div className="space-y-4 relative">
              {afterData.map((item, index) => (
                <div key={index} className="border-l-2 border-secondary/40 pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-foreground">{item.stage}</span>
                    <span className="text-secondary font-bold">{item.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-foreground">Total Time</span>
                  <span className="text-2xl font-bold text-secondary">1-3 hours</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-secondary/10 border border-secondary/20">
            <Clock className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Time Saved Per Hire</div>
              <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
                Up to 90%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
