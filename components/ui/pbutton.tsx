"use client";

import { Linkedin, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, MouseEvent } from "react";

/* ─── Magnetic shimmer primary button ─── */
export function GetInTouchButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--mx", `${x}px`);
    btn.style.setProperty("--my", `${y}px`);
  };

  return (
    <a
      ref={btnRef}
      href="mailto:pankajjaat2608@gmail.com"
      onMouseMove={handleMouseMove}
      className="get-in-touch-btn group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden"
    >
      {/* animated shimmer spotlight */}
      <span className="shimmer-spot" />
      {/* animated gradient border */}
      <span className="gradient-border" />
      {/* content */}
      <span className="relative z-10 flex items-center gap-2 text-white">
        Get in touch
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>

      <style>{`
        .get-in-touch-btn {
          --mx: 50%;
          --my: 50%;
          background: #0f0f0f;
          border: 1px solid transparent;
          background-clip: padding-box;
        }

        /* gradient animated border via pseudo */
        .get-in-touch-btn .gradient-border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            #ffffff44 0%,
            #ffffff11 40%,
            #ffffff44 100%
          );
          background-size: 200% 200%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: border-spin 3s linear infinite;
          pointer-events: none;
        }

        @keyframes border-spin {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }

        /* mouse-follow spotlight */
        .get-in-touch-btn .shimmer-spot {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          background: radial-gradient(
            120px circle at var(--mx) var(--my),
            rgba(255,255,255,0.12) 0%,
            transparent 70%
          );
          transition: opacity 0.2s;
          pointer-events: none;
        }

        .get-in-touch-btn:hover .shimmer-spot {
          opacity: 1;
        }

        .get-in-touch-btn:hover {
          background: #1a1a1a;
        }
      `}</style>
    </a>
  );
}

/* ─── Ghost fill-sweep GitHub button ─── */
export function ViewGitHubButton() {
  return (
    <a
      href="https://github.com/pankajkumar2608"
      target="_blank"
      rel="noopener noreferrer"
      className="github-btn group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden"
    >
      {/* sweep fill on hover */}
      <span className="sweep" />

      <span className="relative z-10 flex items-center gap-2 text-foreground">
        {/* GitHub icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        View GitHub
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>

      <style>{`
        .github-btn {
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75);
          background: transparent;
          transition: color 0.3s, border-color 0.3s;
        }

        .github-btn:hover {
          color: rgba(255,255,255,1);
          border-color: rgba(255,255,255,0.25);
        }

        /* fill sweep */
        .github-btn .sweep {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.06);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: inherit;
        }

        .github-btn:hover .sweep {
          transform: scaleX(1);
        }
      `}</style>
    </a>
  );
}

export function ViewLinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/pankaj-jaat/"
      target="_blank"
      rel="noopener noreferrer"
      className="github-btn group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg overflow-hidden"
    >
      {/* sweep fill on hover */}
      <span className="sweep" />

      <span className="relative z-10 text-foreground flex items-center gap-2">
        {/* GitHub icon */}
        <HugeiconsIcon size={18} icon={Linkedin01Icon} />
        Linkedin
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>

      <style>{`
        .github-btn {
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75);
          background: transparent;
          transition: color 0.3s, border-color 0.3s;
        }

        .github-btn:hover {
          color: rgba(255,255,255,1);
          border-color: rgba(255,255,255,0.25);
        }

        /* fill sweep */
        .github-btn .sweep {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.06);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: inherit;
        }

        .github-btn:hover .sweep {
          transform: scaleX(1);
        }
      `}</style>
    </a>
  );
}