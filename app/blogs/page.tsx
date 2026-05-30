"use client";

import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";
import { useTilt } from "@/hooks/use-tilt";
import { useRef, useCallback } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/experience";
import { Reveal } from "@/components/reveal";

import { blogs, type Blog } from "@/lib/blogs";

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
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
        <Link href={`/blogs/${blog.slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">View Article</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-highlight transition-colors duration-200">
              {blog.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {blog.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/40 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground/60 w-full md:w-auto justify-between">
            <div className="flex items-center gap-2">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            <span className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-200">
              Read more <ArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-highlight selection:text-white">
      <CursorGlow />
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 z-10 relative">
        <Reveal>
          <div className="mb-10">
            <SectionHeading>Blog</SectionHeading>
            <h2 className="text-muted-foreground text-lg sm:text-xl font-medium mt-2">
              Thoughts, tutorials, and insights on engineering and programming.
            </h2>
          </div>
        </Reveal>

        <section className="flex flex-col gap-5 sm:gap-6">
          {blogs.map((blog, idx) => (
            <Reveal key={blog.slug} delay={0.1 + idx * 0.1}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
