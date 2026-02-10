"use client";

import { useEffect, useRef, useCallback } from "react";

interface ObfuscatedTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text on a canvas that is always blurred.
 * The real string never appears in the DOM -- only on the canvas bitmap,
 * so it cannot be read via Inspect Element or selection.
 * Hover does NOT reveal the text.
 */
export function ObfuscatedText({ text, className = "" }: ObfuscatedTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const computedStyle = window.getComputedStyle(canvas);
    const fontSize = parseFloat(computedStyle.fontSize) || 16;
    const fontFamily = computedStyle.fontFamily || "sans-serif";
    const color = computedStyle.color || "#000000";

    const fontString = `${computedStyle.fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.font = fontString;

    const metrics = ctx.measureText(text);
    const width = Math.ceil(metrics.width) + 4; // small padding
    const height = Math.ceil(fontSize * 1.3);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.font = fontString;
    ctx.fillStyle = color;
    ctx.textBaseline = "middle";

    ctx.clearRect(0, 0, width, height);
    ctx.filter = "blur(5px)";
    ctx.fillText(text, 2, height / 2);
  }, [text]);

  useEffect(() => {
    draw();

    // Redraw on theme change so the color stays correct
    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} cursor-default select-none`}
      aria-label="Confidential"
      role="img"
    />
  );
}
