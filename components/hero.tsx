"use client";

import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";

const techStack = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#888" },
  { name: "Node.js", color: "#339933" },
  { name: "Kotlin", color: "#7f52ff" },
  { name: "Python", color: "#3776ab" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "Redis", color: "#dc382d" },
  { name: "Rust", color: "#ce422b" },
  { name: "AWS", color: "#ff9900" },
  { name: "GCP", color: "#4285f4" },
  { name: "Docker", color: "#2496ed" },
];

/* ── scramble text on hover ─────────────────────────────────────────────── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

function ScrambleText({ text }: { text: string }) {
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
            i < frameRef.current ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      if (frameRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);
  }, [text]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  }, [text]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className="font-mono"
      style={{ minWidth: `${text.length}ch`, display: "inline-block" }}
    >
      {display}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mb-32">
      <div className="flex items-start gap-6 mb-10 fade-in">
        <Image
          src="/avatar.jpg"
          alt="Pankaj Kumar"
          width={72}
          height={72}
          className="rounded-full ring-2 ring-border/60 shadow-sm mt-1 shrink-0"
          priority
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Pankaj Kumar
          </h1>
          <p className="text-muted-foreground text-lg mt-2 leading-relaxed">
            Building systems that think clearly.
          </p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-lg mb-10 fade-in fade-in-delay-1 max-w-xl">
        Full-stack developer focused on correctness and fundamentals.
        Exploring distributed systems, low-level architecture, and tools that last.
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mb-10 fade-in fade-in-delay-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="group/pill inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary/80 text-secondary-foreground border border-border/50 transition-all duration-200 hover:border-highlight/40 hover:bg-highlight/5 cursor-default select-none"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover/pill:scale-150"
              style={{ backgroundColor: tech.color }}
            />
            <ScrambleText text={tech.name} />
          </span>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-5 text-sm fade-in fade-in-delay-3">
        <a
          href="https://github.com/pankajkumar2608"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="link-underline">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pankaj-jaat/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="link-underline">LinkedIn</span>
        </a>
        <a
          href="mailto:pankajjaat2608@gmail.com"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-110">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="link-underline">Email</span>
        </a>
      </div>
    </section>
  );
}
