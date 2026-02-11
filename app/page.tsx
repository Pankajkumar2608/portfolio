import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { GitHubActivity } from "@/components/github-activity-section";
import { Direction } from "@/components/direction";
import { ContactCTA } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <GitHubActivity />
        <Direction />
        <ContactCTA />
        <SiteFooter />
      </main>
    </div>
  );
}
