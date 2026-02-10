"use client";

import { ObfuscatedText } from "@/components/obfuscated-text";

const experiences = [
  {
    company: "Tradzy",
    role: "Founding Engineer",
    period: "Apr 2024 -- Present",
    description:
      "Migrated legacy HTML/CSS/JS to Next.js, improving performance by 40%. Deployed on AWS EC2, built REST APIs with Django and FastAPI. Implemented RAG-based AI system.",
    current: true,
  },
  {
    company: "Pronest",
    role: "Frontend Developer Intern",
    period: "Jan 2024 -- Mar 2024",
    description:
      "Built responsive UI components with Next.js and Tailwind CSS. Translated design mockups into maintainable frontend code.",
    current: false,
  },
];

export function Experience() {
  return (
    <section className="mb-32 slide-up" style={{ animationDelay: "0.1s" }}>
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8"
          >
            {/* Period column */}
            <div className="text-sm text-muted-foreground/60 font-mono pt-0.5 shrink-0">
              {exp.period}
            </div>

            {/* Content column */}
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <h3 className="font-medium text-foreground flex items-center gap-2">
                  <ObfuscatedText text={exp.company} className="font-semibold" />
                  <span className="text-muted-foreground/40 font-normal">
                    /
                  </span>
                  <span className="text-muted-foreground font-normal text-sm">
                    {exp.role}
                  </span>
                </h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-highlight/10 text-highlight border border-highlight/20">
                    <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                {exp.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export { SectionHeading };
