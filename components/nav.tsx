"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Work" },
  { href: "/blogs", label: "Blogs" },
  { href: "#projects", label: "Projects" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="block shrink-0 group" aria-label="Back to top">
          <Image
            src="/avatar.jpg"
            alt="Pankaj Kumar"
            width={28}
            height={28}
            className="rounded-full ring-1 ring-border/60 transition-transform duration-200 group-hover:scale-110"
            priority
          />
        </a>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                active === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === link.href && (
                <span
                  className="absolute inset-0 bg-accent rounded-md"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
          <div className="w-px h-5 bg-border mx-1.5" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
