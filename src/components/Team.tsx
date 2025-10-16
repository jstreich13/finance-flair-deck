import { Card } from "@/components/ui/card";

const Team = () => {
  const founders = [
    {
      name: "Jane Smith",
      role: "CEO & Co-Founder",
      bio: "Former Managing Director at Goldman Sachs. Led digital transformation for institutional banking. Stanford MBA, Series in Computer Science.",
      credentials: ["Goldman Sachs", "JP Morgan", "Stanford MBA"],
    },
    {
      name: "John Doe",
      role: "CTO & Co-Founder",
      bio: "Veteran engineering leader. Built scalable systems for high-volume trading platforms. MIT Computer Science, distributed systems expert.",
      credentials: ["Robinhood", "MIT"],
    },
  ];

  const backers = [
    "Sequoia Capital",
    "a16z",
    "Paradigm",
    "Tiger Global",
    "Founders Fund",
  ];

  const partners = [
    "Goldman Sachs",
    "JP Morgan",
    "Fidelity",
    "Charles Schwab",
    "Morgan Stanley",
    "BlackRock",
  ];

  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
            <span className="text-primary font-bold text-sm">Team & Backers</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 tracking-tighter">
            Built by <span className="gradient-text">financial veterans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Deep expertise in fintech, institutional banking, and blockchain technology
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {founders.map((founder, index) => (
            <Card key={index} className="p-8 border-border bg-card hover:shadow-soft transition-smooth">
              <h3 className="text-2xl font-black text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="gradient-text font-bold mb-4">{founder.role}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {founder.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {founder.credentials.map((cred, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-gradient-card border border-primary/20 text-foreground text-sm font-semibold"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Backers & Partners */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-foreground mb-8 text-center">
                Backed By
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backers.map((backer, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-card border border-primary/20 text-center font-bold text-foreground hover:border-primary/40 transition-smooth"
                  >
                    {backer}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-black text-foreground mb-8 text-center">
                Trusted By
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-card border border-primary/20 text-center font-bold text-foreground hover:border-primary/40 transition-smooth"
                  >
                    {partner}
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
