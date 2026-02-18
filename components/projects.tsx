"use client";

import { SectionHeading } from "@/components/experience";
import { Reveal } from "@/components/reveal";
import { useTilt } from "@/hooks/use-tilt";
import { useRef, useCallback } from "react";

const projects = [
  {
    title: "Findable",
    tagline: "Anonymous recovery system",
    description:
      "A system for tracking and recovering lost items. When someone finds your item, they scan a QR code, send a message, and you get notified. Privacy-focused architecture.",
    url: "https://findable.itzpankaj.site",
    stack: ["Next.js", "PostgreSQL", "Email Wrappers"],
    featured: true,
    status: "Live",
  },
  {
    title: "Motivation Kaksha",
    tagline: "50k+ users",
    description: (
      <>
        JEE college prediction platform catering to{" "}
        <span className="font-bold">50k+ active users</span>. High-performance
        REST API with Redis caching layer (Working on mobile app).
      </>
    ),
    url: "https://motivationkaksha.in",
    stack: ["Express", "Redis", "Node.js"],
    featured: false,
    status: "Live",
  },
  {
    title: "Book Reader",
    tagline: "PDF reader app",
    description:
      "A simple book reader app built with Next.js, Tailwind CSS, TypeScript and Pdf-libs.",
    url: "https://reader.itzpankaj.site",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    featured: false,
    status: "Live",
  },
  {
    title: "Kaksha AI",
    tagline: "Educational assistant",
    description:
      "RAG-based educational assistant. Explains complex problems step-by-step using context-aware LLM agents.",
    url: null,
    stack: ["GenAI", "RAG", "Python"],
    featured: false,
    status: "Building",
  },
  {
    title: "Kat n Trim",
    tagline: "Youtube video trimmer",
    description:
      "Automated engagement tool for creators. Real-time webhook processing for Instagram Direct Messages.",
    url: "https://v0-kat-ntrim-project.vercel.app/",
    stack: ["ytdl", "Youtube API", "Node.js"],
    featured: false,
    status: "Live",
  },
];

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isBuilding = status === "Building";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold rounded-full border ${
        isBuilding
          ? "bg-highlight/10 text-highlight border-highlight/20"
          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isBuilding ? "bg-highlight animate-pulse" : "bg-emerald-500"
        }`}
      />
      {status}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mb-28 sm:mb-36">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <FeaturedProject project={projects[0]} />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.slice(1).map((project, i) => (
          <Reveal key={project.title} delay={0.15 + i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  const tilt = useTilt<HTMLElement>(3);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      tilt.onMouseMove(e);
      const el = spotRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    },
    [tilt]
  );

  return (
    <article
      ref={(el) => {
        (tilt.ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (spotRef as React.MutableRefObject<HTMLDivElement | null>).current = el as HTMLDivElement | null;
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative overflow-hidden p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-highlight/30 transition-[border-color,box-shadow] duration-300 will-change-transform hover:shadow-xl hover:shadow-highlight/5"
      style={
        {
          transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s",
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(500px circle at var(--mx) var(--my), var(--highlight-glow), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-sm font-semibold text-muted-foreground">{project.tagline}</p>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-all duration-200 group-hover:gap-2"
            >
              Visit <ArrowUpRight />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/40 transition-colors duration-200 hover:text-foreground hover:border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const tilt = useTilt<HTMLElement>(5);
  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group h-full p-5 sm:p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/10 transition-[border-color,background-color] duration-300 flex flex-col will-change-transform"
      style={{
        transition:
          "transform 0.15s ease-out, border-color 0.3s, background-color 0.3s",
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-all duration-200 group-hover:gap-2"
          >
            Visit <ArrowUpRight />
          </a>
        ) : (
          <StatusBadge status={project.status} />
        )}
      </div>
      <p className="text-xs font-semibold text-muted-foreground/60 mb-3">
        {project.tagline}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-medium rounded bg-secondary/70 text-muted-foreground border border-border/30 transition-colors duration-200 hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
