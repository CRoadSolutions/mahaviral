"use client";

import { useState } from "react";
import { CASES } from "@/lib/data";
import Phone from "./Phone";

export default function CaseStudies() {
  const [idx, setIdx] = useState(0);
  const c = CASES[idx];

  const steps = [
    { title: `Posted to ${c.groups} groups in ${c.district}`, body: "Our app posts from neutral numbers, district by district." },
    { title: "Forwarded and kept as status", body: "Family and village groups carry it further on their own." },
    { title: "A reply: “माहिती”", body: "Every reply to our number is a person who read it." },
    { title: "Counted in your report", body: `Clicks from ${c.district}’s own link, in the monthly report.` },
  ];

  return (
    <div>
      {/* Tabs */}
      <div role="tablist" aria-label="Case studies" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {CASES.map((cs, i) => (
          <button
            key={cs.id}
            role="tab"
            id={`case-tab-${cs.id}`}
            aria-selected={i === idx}
            aria-controls="case-panel"
            onClick={() => setIdx(i)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
              i === idx
                ? "border-accent bg-accent text-ink"
                : "border-line bg-pine/60 text-mist hover:border-accent/50 hover:text-fog"
            }`}
          >
            <span className="mr-1.5 font-[family-name:var(--font-display)] font-semibold opacity-70">{cs.id}</span>
            {cs.tab}
          </button>
        ))}
      </div>

      <div id="case-panel" role="tabpanel" aria-labelledby={`case-tab-${c.id}`} key={c.id} className="mt-8">
        <p className="eyebrow">{c.kicker}</p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-fog sm:text-3xl">{c.title}</h3>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* Case file */}
          <div className="card animate-[msg-in_.5s_ease-out_both] border-accent/25 p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Case file</span>
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-mist">{c.id}</span>
            </div>
            <p className="mt-4 text-[17px] leading-relaxed text-fog">{c.story}</p>
            <p className="mt-2 text-sm text-mist">A typical situation, not a named person.</p>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              The question
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug text-accent">{c.question}</p>
            <div className="mt-6 inline-flex -rotate-2 items-center gap-2 rounded-lg border-2 border-mint px-4 py-1.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-mint shadow-[0_0_24px_rgb(52_209_127/0.35)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
              Live in 36 districts
            </div>
          </div>

          {/* Phone */}
          <Phone district={c.district} lines={c.marathi} className="float" />

          {/* Steps */}
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="flex animate-[msg-in_.5s_ease-out_both] gap-4"
                style={{ animationDelay: `${150 + i * 120}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-[family-name:var(--font-display)] font-bold text-ink shadow-[0_0_20px_rgb(52_209_127/0.22)]">
                  {i + 1}
                </span>
                <div>
                  <div className="font-[family-name:var(--font-display)] font-semibold text-fog">{s.title}</div>
                  <div className="mt-0.5 text-[15px] text-mist">{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-10 text-center text-lg text-fog">
          {c.tagline.plain} <span className="font-semibold text-accent">{c.tagline.strong}</span>
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-xs leading-relaxed text-mist/80">{c.note}</p>
      </div>
    </div>
  );
}
