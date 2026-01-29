import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { AppFeatures } from "@/components/sections/app-features";
import { DarkModeShowcase } from "@/components/sections/dark-mode-showcase";
import { OfflineCredibility } from "@/components/sections/offline-credibility";
import { Mentors } from "@/components/sections/mentors";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ProblemSolution />
      <AppFeatures />
      <DarkModeShowcase />
      <OfflineCredibility />
      <Mentors />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
