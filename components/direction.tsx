import { SectionHeading } from "@/components/experience";

const directions = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Low-level Systems",
    description:
      "Rust and C. Understanding memory, ownership, and what happens at the hardware boundary.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Distributed Systems",
    description:
      "Consensus algorithms, state machines, and building fault-tolerant systems that scale.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Clean Architecture",
    description:
      "Simplicity as a feature. Designing for observability, maintainability, and clear boundaries.",
  },
];

export function Direction() {
  return (
    <section
      id="about"
      className="mb-28 sm:mb-36 slide-up"
      style={{ animationDelay: "0.4s" }}
    >
      <SectionHeading>Direction</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {directions.map((item) => (
          <div
            key={item.title}
            className="group p-5 sm:p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-highlight/20 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
              {item.icon}
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
