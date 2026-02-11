"use client";

import { GitHubContributionGraph } from "@/components/github-activity";
import { SectionHeading } from "@/components/experience";

export function GitHubActivity() {
  return (
    <section id="github" className="mb-28 sm:mb-36 slide-up" style={{ animationDelay: "0.35s" }}>
      <SectionHeading>GitHub Activity</SectionHeading>
      <GitHubContributionGraph username="pankajkumar2608" />
    </section>
  );
}
