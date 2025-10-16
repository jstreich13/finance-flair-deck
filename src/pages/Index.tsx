import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Results from "@/components/Results";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <Results />
      <Team />
      <CTA />
    </main>
  );
};

export default Index;
