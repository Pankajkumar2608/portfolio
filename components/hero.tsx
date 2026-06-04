"use client";

import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import { Github, Linkedin, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import HeroButtons from "./ui/pbutton";

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

function InlineTech({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 mx-0.5 text-[0.82em] font-medium rounded-md bg-highlight/10 text-highlight border border-highlight/20 transition-all duration-200 hover:bg-highlight/20 hover:scale-105 cursor-default">
      {children}
    </span>
  );
}

/* typing cursor blink */
function Cursor() {
  return (
    <span className="inline-block w-[2px] h-[1.1em] bg-highlight ml-0.5 align-middle animate-pulse" />
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/pankajkumar2608",
    icon: (
      <HugeiconsIcon
        icon={Github}
        width={18}
        height={18}
        className=" transition-colors duration-200"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pankaj-jaat/",
    icon: (
      <HugeiconsIcon
        icon={Linkedin}
        width={18}
        height={18}
        className=" transition-colors duration-200"
      />
    ),
  },
  {
    label: "Email",
    href: "mailto:pankajjaat2608@gmail.com",
    icon: (
      <HugeiconsIcon
        icon={NewTwitterIcon}
        width={18}
        height={18}
        className=" transition-colors duration-200"
      />
    ),
  },
];

export function Hero() {
  return (
    <section className="mb-28 sm:mb-36">
      {/* Availability badge */}
      <div className="mb-8 fade-in">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for opportunities
        </span>
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-5 mb-8 fade-in fade-in-delay-1">
        <Image
          src="/avatar.jpg"
          alt="Pankaj Kumar"
          width={80}
          height={80}
          className="rounded-2xl ring-2 ring-border/60 shadow-md shrink-0 hover:ring-highlight/40 transition-all duration-300"
          priority
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
            {"Hi, I'm "}
            <ScrambleText text="Pankaj" className="text-highlight" />
            <Cursor />
          </h1>
          <p className="text-muted-foreground text-lg mt-1.5">
            A Software Engineer.
          </p>
        </div>
      </div>

      {/* Bio with inline tech */}
      <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-8 fade-in fade-in-delay-2 max-w-2xl">
        I build performant, production-grade systems using
        <InlineTech>TypeScript</InlineTech>,
        <InlineTech>React</InlineTech>,
        <InlineTech>Next.js</InlineTech>,
        <InlineTech>Rust</InlineTech> and
        <InlineTech>PostgreSQL</InlineTech>.
        {" "}Focused on <strong className="text-foreground font-medium">distributed systems</strong> and{" "}
        <strong className="text-foreground font-medium">low-level architecture</strong>.
      </p>

      <HeroButtons />
      

      {/* Social icons */}
      <div className="flex items-center gap-1 fade-in fade-in-delay-4">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110"
            aria-label={s.label}
            style={{ animationDelay: `${0.4 + i * 0.05}s` }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
