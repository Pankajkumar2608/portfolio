"use client";

import { useEffect, useRef, useState } from "react";

interface ObfuscatedTextProps {
    text: string;
    className?: string; // For things like font-size, font-weight from tailwind
}

export function ObfuscatedText({ text, className = "" }: ObfuscatedTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Get computed styles to match surrounding text
        const computedStyle = window.getComputedStyle(canvas);
        const fontSize = parseFloat(computedStyle.fontSize) || 16;
        const fontFamily = computedStyle.fontFamily || "sans-serif";
        const color = computedStyle.color || "#000000";

        // Set font for measurement
        const fontString = `${computedStyle.fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.font = fontString;

        // Measure text
        const metrics = ctx.measureText(text);
        const width = metrics.width;
        const height = fontSize * 1.2; // Approximate line height

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);
        ctx.font = fontString;
        ctx.fillStyle = color;
        ctx.textBaseline = "middle";

        // Clear and draw
        ctx.clearRect(0, 0, width, height);

        if (isHovered) {
            // Draw clear text
            ctx.fillText(text, 0, height / 2);
        } else {
            // Draw blurred/scrambled text effect
            ctx.filter = "blur(3px)";
            ctx.fillText(text, 0, height / 2);
        }

    }, [text, isHovered, className]); // Re-render when hover state changes

    return (
        <canvas
            ref={canvasRef}
            className={`${className} cursor-default select-none transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Hidden text"
            role="img"
        />
    );
}
