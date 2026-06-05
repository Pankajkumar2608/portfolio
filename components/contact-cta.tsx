import Image from "next/image";
import { GetInTouchButton, ViewLinkedinButton } from "./ui/pbutton";

export function ContactCTA() {
  return (
    <section className="mb-28 sm:mb-36 slide-up" style={{ animationDelay: "0.5s" }}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
        {/* Subtle gradient background */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, var(--highlight) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col sm:flex-row items-center gap-8">
          <Image
            src="/avatar.jpg"
            alt="Pankaj Kumar"
            width={80}
            height={80}
            className="rounded-2xl ring-2 ring-border/50 shadow-md shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-balance">
              {"Hey, you scrolled this far -- let's talk."}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              {"I'm always open to discussing new projects, ideas, or opportunities to be part of your vision."}
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <GetInTouchButton />
              <ViewLinkedinButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
