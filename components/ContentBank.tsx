"use client";

import { useState } from "react";
import { DECISIONS } from "@/lib/data";

const FILTERS = ["All", "Industries", "Marathi Language"] as const;

export default function ContentBank() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const items = DECISIONS.filter((d) => f === "All" || d.dept === f);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter decisions by department">
        {FILTERS.map((x) => {
          const count = x === "All" ? DECISIONS.length : DECISIONS.filter((d) => d.dept === x).length;
          return (
            <button
              key={x}
              onClick={() => setF(x)}
              aria-pressed={f === x}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                f === x ? "border-accent bg-accent text-ink" : "border-line bg-pine/60 text-mist hover:text-fog"
              }`}
            >
              {x} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((d, i) => (
          <li
            key={d.text}
            className="card group relative animate-[msg-in_.45s_ease-out_both] overflow-hidden p-5 transition hover:-translate-y-1 hover:border-accent/40"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-accent-soft to-accent/30" />
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-mint">{d.date}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  d.dept === "Industries" ? "bg-mint/10 text-mint" : "bg-accent/10 text-accent"
                }`}
              >
                {d.dept === "Industries" ? "Industries" : "Marathi"}
              </span>
            </div>
            <p className="mt-3 font-medium leading-snug text-fog">{d.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
