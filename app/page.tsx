import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { GitHubActivity } from "@/components/github-activity-section";
import { Direction } from "@/components/direction";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <Hero />
        <Experience />
        <Projects />
        <GitHubActivity />
        <Direction />
        <SiteFooter />
      </main>
    </div>
  );
}
