"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
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
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-md transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-5 bg-border mx-1" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
