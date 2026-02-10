"use client";

import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";

/* ── scramble text on hover ─────────────────────────────────────────────── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
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
    }, 28);
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
      className={`font-mono cursor-default ${className}`}
      style={{ minWidth: `${text.length}ch`, display: "inline-block" }}
    >
      {display}
    </span>
  );
}

/* ── inline tech tag ────────────────────────────────────────────────────── */
function InlineTech({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 mx-0.5 text-[0.85em] font-medium rounded-md bg-highlight/10 text-highlight border border-highlight/20 transition-colors hover:bg-highlight/15">
      {children}
    </span>
  );
}

/* ── social icons ───────────────────────────────────────────────────────── */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/pankajkumar2608",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pankaj-jaat/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:pankajjaat2608@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="mb-28 sm:mb-36">
      {/* Avatar + name */}
      <div className="flex items-center gap-5 mb-8 fade-in">
        <Image
          src="/avatar.jpg"
          alt="Pankaj Kumar"
          width={80}
          height={80}
          className="rounded-2xl ring-2 ring-border/60 shadow-md shrink-0"
          priority
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
            {"Hi, I'm "}
            <ScrambleText text="Pankaj" className="text-highlight" />
            {" -- "}
            <span className="text-muted-foreground font-medium">
              A Full Stack Developer.
            </span>
          </h1>
        </div>
      </div>

      {/* Bio with inline tech */}
      <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-8 fade-in fade-in-delay-1 max-w-2xl">
        I build performant, production-grade systems using
        <InlineTech>TypeScript</InlineTech>,
        <InlineTech>React</InlineTech>,
        <InlineTech>Next.js</InlineTech>,
        <InlineTech>Rust</InlineTech> and
        <InlineTech>PostgreSQL</InlineTech>.
        {" "}With a focus on <strong className="text-foreground font-medium">distributed systems</strong> and{" "}
        <strong className="text-foreground font-medium">low-level architecture</strong>.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-8 fade-in fade-in-delay-2">
        <a
          href="mailto:pankajjaat2608@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="https://github.com/pankajkumar2608"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
        >
          View GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>

      {/* Social row */}
      <div className="flex items-center gap-2 fade-in fade-in-delay-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
