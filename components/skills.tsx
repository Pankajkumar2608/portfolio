"use client";

import { SectionHeading } from "@/components/experience";
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
    skills: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#888" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Three.js", color: "#049ef4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Django", color: "#092e20" },
      { name: "FastAPI", color: "#009688" },
      { name: "Express", color: "#888" },
    ],
  },
  {
    label: "Data & Infra",
    skills: [
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "Redis", color: "#dc382d" },
      { name: "AWS", color: "#ff9900" },
      { name: "GCP", color: "#4285f4" },
      { name: "Docker", color: "#2496ed" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mb-28 sm:mb-36 slide-up" style={{ animationDelay: "0.25s" }}>
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors duration-300"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              {group.label}
            </h3>
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
        ))}
      </div>
    </section>
  );
}
