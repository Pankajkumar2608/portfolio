"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#github", label: "GitHub" },
  { href: "#about", label: "About" },
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
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm shadow-background/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="block shrink-0 group" aria-label="Back to top">
          <Image
            src="/avatar.jpg"
            alt="Pankaj Kumar"
            width={30}
            height={30}
            className="rounded-full transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </a>
        <div className="flex items-center gap-5 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
