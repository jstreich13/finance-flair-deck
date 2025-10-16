import { Card } from "@/components/ui/card";
import teamImage from "@/assets/team-collab.jpg";

const Team = () => {
  const founders = [
    {
      name: "Autumn-Kyoko Cushman",
      role: "Chief Executive Officer, Co-Founder",
      bio: "Former Goldman Sachs Managing Director with 15+ years in financial services. Led digital transformation initiatives across investment banking, wealth management, and fintech. Expert in regulatory compliance and institutional banking operations.",
      experience: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "McKinsey"],
    },
    {
      name: "Leann Haddad",
      role: "Chief Product Officer, Co-Founder",
      bio: "Started career at BlackRock in operations and technology. Led product teams at major fintech companies. Deep expertise in financial services workflows, compliance automation, and enterprise SaaS platforms.",
      experience: ["BlackRock", "Stripe", "Robinhood", "Deloitte"],
    },
  ];

  const partners = [
    "Goldman Sachs",
    "JP Morgan",
    "Morgan Stanley",
    "BlackRock",
    "Fidelity",
    "Charles Schwab",
  ];

  const investors = [
    "Sequoia Capital",
    "Andreessen Horowitz",
    "Accel Partners",
    "Index Ventures",
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Image */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={teamImage} 
              alt="ShiftRx leadership team" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Founded with a Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by financial services veterans who understand your challenges
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <Card key={index} className="p-8 shadow-md border-border bg-card">
              <h3 className="font-serif text-2xl text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-secondary font-semibold mb-4">{founder.role}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {founder.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {founder.experience.map((company, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Partners & Investors */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
                Official Partners
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="px-6 py-3 rounded-lg bg-card border border-border text-foreground font-semibold text-sm shadow-sm hover:shadow-md transition-smooth"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
                Backed By
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {investors.map((investor, index) => (
                  <div 
                    key={index}
                    className="px-6 py-3 rounded-lg bg-card border border-secondary/20 text-foreground font-semibold text-sm shadow-sm hover:border-secondary/40 transition-smooth"
                  >
                    {investor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
