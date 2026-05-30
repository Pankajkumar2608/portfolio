"use client";

import { ObfuscatedText } from "@/components/obfuscated-text";
import { Reveal } from "@/components/reveal";
import { useRef, useCallback } from "react";

const experiences = [
  {
    company: "Tradzy",
    role: "Founding Engineer",
    period: "Apr 2024 -- Present",
    location: "Remote",
    highlights: [
      "Built a multi-asset backtesting engine supporting advanced order management and years of historical market data",
      "Designed backend services and APIs powering trading, analytics, and quantitative research workflows",
      "Managed VPS infrastructure, Docker deployments, AWS services, and Cloudflare networking",
      "Developed AI-powered research and strategy analysis tools for traders",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Cloudflare",
      "WebSockets",
    ],
    current: true,
  },
  {
    company: "Pronest",
    role: "Frontend Developer Intern",
    period: "Jan 2024 -- Mar 2024",
    location: "Remote",
    highlights: [
      "Built responsive UI components using Next.js and Tailwind CSS",
      "Translated Figma designs into production-ready frontend code",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    current: false,
  },
];

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--x) var(--y), var(--highlight-glow), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mb-28 sm:mb-36">
      <Reveal>
        <SectionHeading>Experience</SectionHeading>
      </Reveal>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <Reveal key={i} delay={0.1 * (i + 1)}>
            <SpotlightCard className="group rounded-xl border border-border bg-card/50 hover:bg-card hover:border-highlight/20 transition-all duration-300">
              <div className="relative p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-5">
                  <div className="flex gap-4">
                    {/* <div className="w-11 h-11 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/15 text-highlight font-bold shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <ObfuscatedText
                        text={exp.company.charAt(0)}
                        className="font-bold"
                      />
                    </div> */}

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg text-foreground">
                          {exp.role}
                        </h3>

                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full bg-highlight/10 text-highlight border border-highlight/20">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight" />
                            </span>
                            Building
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mt-1">
                        <ObfuscatedText text={exp.company} />
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground/70 font-mono sm:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
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
