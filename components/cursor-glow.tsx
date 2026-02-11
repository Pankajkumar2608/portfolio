"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a subtle radial glow that follows the cursor.
 * Purely decorative -- adds a sense of warmth and interactivity.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let mx = 0;
    let my = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      el.style.background = `radial-gradient(600px circle at ${mx}px ${my}px, var(--highlight-glow, rgba(200,149,108,0.04)), transparent 60%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
