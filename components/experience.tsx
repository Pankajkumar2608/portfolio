"use client";

import { ObfuscatedText } from "@/components/obfuscated-text";

const experiences = [
  {
    company: "Tradzy",
    role: "Founding Engineer",
    period: "Apr 2024 -- Present",
    location: "Remote",
    description:
      "Migrated legacy HTML/CSS/JS to Next.js, improving performance by 40%. Deployed on AWS EC2, built REST APIs with Django and FastAPI. Implemented RAG-based AI system.",
    tech: ["Next.js", "Django", "FastAPI", "AWS", "RAG", "PostgreSQL"],
    current: true,
  },
  {
    company: "Pronest",
    role: "Frontend Developer Intern",
    period: "Jan 2024 -- Mar 2024",
    location: "Remote",
    description:
      "Built responsive UI components with Next.js and Tailwind CSS. Translated design mockups into maintainable frontend code.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="mb-28 sm:mb-36 slide-up" style={{ animationDelay: "0.1s" }}>
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="group relative p-5 sm:p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/10 transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                {/* Company initial badge */}
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0 border border-border/50">
                  <ObfuscatedText
                    text={exp.company.charAt(0)}
                    className="text-sm font-bold"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <ObfuscatedText text={exp.company} className="font-semibold" />
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-highlight/10 text-highlight border border-highlight/20">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                        Working
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground/60 font-mono sm:text-right">
                <div>{exp.period}</div>
                <div>{exp.location}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              {exp.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
        Featured
      </span>
      <div className="flex-1 h-px bg-border" />
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
        {children}
      </h2>
    </div>
  );
}
