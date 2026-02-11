"use client";

import { SectionHeading } from "@/components/experience";
import { Reveal } from "@/components/reveal";
import { useState, useCallback, useRef, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function ScrambleLabel({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    frameRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            i < frameRef.current
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      if (frameRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 25);
  }, [text]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  }, [text]);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    []
  );

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className="cursor-default"
      style={{ minWidth: `${text.length}ch`, display: "inline-block" }}
    >
      {display}
    </span>
  );
}

const skillGroups = [
  {
    label: "Languages",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "TypeScript", color: "#3178c6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "Python", color: "#3776ab" },
      { name: "Rust", color: "#ce422b" },
      { name: "Kotlin", color: "#7f52ff" },
      { name: "C", color: "#555555" },
    ],
  },
  {
    label: "Frontend",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    skills: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#888" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Three.js", color: "#049ef4" },
    ],
  },
  {
    label: "Backend",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Django", color: "#092e20" },
      { name: "FastAPI", color: "#009688" },
      { name: "Express", color: "#888" },
    ],
  },
  {
    label: "Data & Infra",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "Redis", color: "#dc382d" },
      { name: "AWS", color: "#ff9900" },
      { name: "GCP", color: "#4285f4" },
      { name: "Docker", color: "#2496ed" },
    ],
  },
];

/* all skills flat for marquee */
const allSkills = skillGroups.flatMap((g) => g.skills);

export function Skills() {
  return (
    <section id="skills" className="mb-28 sm:mb-36">
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={0.08 * (i + 1)}>
            <div className="group h-full p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-highlight/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-highlight/10 flex items-center justify-center text-highlight transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  {group.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="group/skill inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50 transition-all duration-200 hover:border-highlight/40 hover:bg-highlight/5 cursor-default select-none font-mono"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 transition-transform duration-200 group-hover/skill:scale-150"
                      style={{ backgroundColor: skill.color }}
                    />
                    <ScrambleLabel text={skill.name} />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Marquee strip */}
      <Reveal delay={0.4}>
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30 py-3">
          <div className="flex animate-marquee gap-6 whitespace-nowrap">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span
                key={`${s.name}-${i}`}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground/60 font-mono select-none"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: s.color, opacity: 0.6 }}
                />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
