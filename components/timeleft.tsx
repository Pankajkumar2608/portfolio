"use client";

import { useEffect, useState } from "react";

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-5 py-4 rounded-2xl border border-border bg-background/40 backdrop-blur-sm min-w-[90px] transition-all duration-300 hover:border-highlight/40 hover:scale-105">
      <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const calculateTimeLeft = () => {
    const target = new Date("2106-02-22T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <section className="mb-28 sm:mb-36 fade-in fade-in-delay-2">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-6">
        Countdown to <span className="text-highlight">2106</span>
      </h2>

      <div className="flex flex-wrap gap-4">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}
