import { SectionHeading } from "@/components/experience";

const featured = {
  title: "Findable",
  tagline: "Anonymous recovery system",
  description:
    "A system for tracking and recovering lost items. When someone finds your item, they scan a QR code, send a message, and you get notified. Privacy-focused architecture ensures no personal data is leaked.",
  url: "https://findable.itzpankaj.site",
  stack: ["Next.js", "PostgreSQL", "Email Wrappers"],
};

const projects = [
  {
    title: "Motivation Kaksha",
    description:
      "JEE college prediction platform catering to 50k+ active users. High-performance REST API with Redis caching layer.",
    url: "https://motivationkaksha.in",
    stack: ["Express", "Redis"],
  },
  {
    title: "Book Reader",
    description:
      "A simple book reader app built with Next.js, Tailwind CSS, TypeScript and Pdf-libs.",
    url: "https://reader.itzpankaj.site",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Kaksha AI",
    description:
      "RAG-based educational assistant. Explains complex problems step-by-step using context-aware LLM agents.",
    url: null,
    status: "Building",
    stack: ["GenAI", "RAG"],
  },
  {
    title: "DM Automation",
    description:
      "Automated engagement tool for creators. Real-time webhook processing for Instagram Direct Messages.",
    url: null,
    date: "Feb 2025",
    stack: ["Webhooks", "Instagram API"],
  },
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mb-32 slide-up" style={{ animationDelay: "0.2s" }}>
      <SectionHeading>Selected Projects</SectionHeading>

      {/* Featured project */}
      <article className="p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-highlight/30 transition-all duration-300 mb-6 group">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-foreground">{featured.title}</h3>
              <span className="px-2.5 py-0.5 text-[10px] bg-highlight/10 text-highlight rounded-full border border-highlight/20 uppercase tracking-wider font-semibold">
                Featured
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{featured.tagline}</p>
          </div>
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 text-xs font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            Visit <ArrowUpRight />
          </a>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl">
          {featured.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {featured.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group p-5 sm:p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/10 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-medium text-foreground">{project.title}</h3>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-all"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight />
                </a>
              ) : project.status ? (
                <span className="shrink-0 flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full bg-highlight/10 text-highlight border border-highlight/20 font-medium">
                  <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                  {project.status}
                </span>
              ) : project.date ? (
                <span className="shrink-0 text-[11px] text-muted-foreground/60 font-mono">
                  {project.date}
                </span>
              ) : null}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium rounded bg-secondary/60 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
