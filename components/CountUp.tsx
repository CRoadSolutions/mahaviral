"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

/** Animates a number up from 0 when scrolled into view. Renders the final value for SSR / no-JS. */
export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  locale = "en-IN",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  locale?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const shown = value ?? to;
  const text = shown.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
