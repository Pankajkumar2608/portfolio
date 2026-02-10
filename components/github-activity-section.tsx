"use client";

import { GitHubContributionGraph } from "@/components/github-activity";
import { SectionHeading } from "@/components/experience";

export function GitHubActivity() {
  return (
    <section id="github" className="mb-32 slide-up" style={{ animationDelay: "0.3s" }}>
      <SectionHeading>Code Activity</SectionHeading>
      <GitHubContributionGraph username="pankajkumar2608" />
    </section>
  );
}
