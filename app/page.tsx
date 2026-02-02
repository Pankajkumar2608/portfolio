"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubContributionGraph } from "@/components/github-activity";
import { ObfuscatedText } from "@/components/obfuscated-text";

const techStack = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776ab" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "Redis", color: "#dc382d" },
  { name: "Rust", color: "#ce422b" },
];

const exp = [
  {
    c: "Tradzy",
    r: "Founding Engineer",
    p: "Apr 2024 — Present",
    d: "Migrated legacy HTML/CSS/JS to Next.js, improving performance by 40%. Deployed on AWS EC2, built REST APIs with Django and FastAPI. Implemented RAG-based AI system.",
    current: true,
  },
  {
    c: "Pronest",
    r: "Frontend Developer Intern",
    p: "Jan 2024 — Mar 2024",
    d: "Built responsive UI components with Next.js and Tailwind CSS. Translated design mockups into maintainable frontend code.",
    current: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="hover-scale block shrink-0">
            <Image
              src="/avatar.jpg"
              alt="Pankaj Kumar"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#github" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="mb-24">
          <div className="flex items-center gap-5 mb-8 fade-in">
            <Image
              src="/avatar.jpg"
              alt="Pankaj Kumar"
              width={80}
              height={80}
              className="rounded-full ring-2 ring-border shadow-sm"
              priority
            />
            <div>
              <h1 className="text-3xl font-medium tracking-tight mb-2">Pankaj Kumar</h1>
              <p className="text-muted-foreground text-lg">
                Building systems that think clearly.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg mb-8 fade-in fade-in-delay-1 max-w-lg">
            Full Stack developer focused on correctness and fundamentals.
            Exploring distributed systems, low-level architecture, and tools that last.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2.5 mb-8 fade-in fade-in-delay-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 text-sm fade-in fade-in-delay-3">
            <a href="https://github.com/pankajkumar2608" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pankaj-jaat/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn
            </a>
            <a href="mailto:pankajjaat2608@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              Email
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24 slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Experience</h2>

          <div className="space-y-10">
            {exp.map((e, i) => (
              <article key={i} className="group relative pl-6 border-l border-border hover:border-primary/50 transition-colors">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-border bg-background group-hover:border-primary transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground text-lg flex items-center gap-2">
                      <ObfuscatedText text={e.c} className="font-semibold blur-xs" />
                    </h3>
                    {e.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground/60 font-mono">{e.p}</span>
                </div>

                <div className="text-muted-foreground text-sm font-medium mb-2">{e.r}</div>
                <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-2xl">
                  {e.d}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Selected Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Findable */}
            <article className="col-span-1 md:col-span-2 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 card-glow group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-lg">Findable</h3>
                    <span className="px-2 py-0.5 text-[10px] bg-primary/5 text-muted-foreground rounded-full border border-border/50 uppercase tracking-wide font-medium">Featured</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Anonymous recovery system</p>
                </div>
                <a href="https://findable.itzpankaj.site" target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
                >
                  Visit <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl">
                A system for tracking and recovering lost items. When someone finds your item,
                they scan a QR code, send a message, and you get notified. Privacy-focused architecture ensures no personal data is leaked.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">Next.js</span>
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">PostgreSQL</span>
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">Email Wrappers</span>
              </div>
            </article>

            {/* Book Reader */}
            <article className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium">Book Reader</h3>
                <a href="https://reader.itzpankaj.site" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all"
                  aria-label="Visit Book Reader"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              </div>
              <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 grow">
                A simple book reader app built with Next.js, Tailwind CSS, TypeScript and Pdf-libs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">Next.js</span>
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">Tailwind CSS</span>
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted text-muted-foreground">TypeScript</span>
              </div>
            </article>

            {/* Motivation Kaksha */}
            <article className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium">Motivation Kaksha</h3>
                <a href="https://motivationkaksha.in" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all"
                  aria-label="Visit Motivation Kaksha"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              </div>
              <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 flex-grow">
                JEE college prediction platform catering to 50k+ active users. High-performance REST API with Redis caching layer.
              </p>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">Express</span>
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">Redis</span>
              </div>
            </article>

            {/* Kaksha AI */}
            <article className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium">Kaksha AI</h3>
                <span className="flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                  Building
                </span>
              </div>
              <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 flex-grow">
                RAG-based educational assistant. Explains complex problems step-by-step using context-aware LLM agents.
              </p>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">GenAI</span>
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">RAG</span>
              </div>
            </article>

            {/* Instagram Automation */}
            <article className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium">DM Automation</h3>
                <span className="text-[10px] text-muted-foreground px-2 py-0.5">Feb 2025</span>
              </div>
              <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 flex-grow">
                Automated engagement tool for creators. Real-time webhook processing for Instagram Direct Messages.
              </p>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">Webhooks</span>
                <span className="text-[10px] bg-muted/50 px-2 py-1 rounded">Instagram API</span>
              </div>
            </article>
          </div>
        </section>

        {/* GitHub */}
        <section id="github" className="mb-24 slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Code Activity</h2>
          <GitHubContributionGraph username="pankajkumar2608" />
        </section>

        {/* About / Direction */}
        <section id="about" className="mb-24 slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Direction</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 dark:text-red-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <h3 className="text-sm font-medium">Low-level</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rust and C. Understanding memory, ownership, and what happens at the hardware boundary.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /><line x1="3.27" y1="6.96" x2="3.27" y2="22.08" /><line x1="20.73" y1="6.96" x2="20.73" y2="22.08" /></svg>
              </div>
              <h3 className="text-sm font-medium">Distributed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consensus algorithms, state machines, and building fault-tolerant systems that scale.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 dark:text-purple-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3 className="text-sm font-medium">Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simplicity as a feature. Designing for observability, maintainability, and clear boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center text-sm">
          <div className="space-y-1">
            <div className="font-medium text-foreground">Pankaj Kumar</div>
            <p className="text-muted-foreground text-xs">Rajasthan, India</p>
          </div>
          <div className="flex gap-6 text-muted-foreground/60">
            <span>© 2026</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
