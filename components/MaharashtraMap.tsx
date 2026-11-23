"use client";

import { useMemo, useState } from "react";
import { MAP_H, MAP_W, STATE_PATH } from "@/lib/mapGeo";
import { DISTRICTS, HUB, type District } from "@/lib/districts";
import { useInView } from "./useInView";

type Props = {
  labels?: boolean;
  interactive?: boolean;
  className?: string;
  idPrefix?: string;
};

function routePath(d: District) {
  const mx = (HUB.x + d.x) / 2;
  const my = (HUB.y + d.y) / 2;
  const dist = Math.hypot(d.x - HUB.x, d.y - HUB.y);
  // bow every route slightly "north" so arcs fan out like the deck
  const cx = mx - (d.y - HUB.y) * 0.12;
  const cy = my - dist * 0.18;
  return `M${HUB.x.toFixed(1)} ${HUB.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${d.x.toFixed(1)} ${d.y.toFixed(1)}`;
}

const radius = (g: number) => 3.5 + Math.sqrt(g) * 0.17;

export default function MaharashtraMap({ labels = false, interactive = false, className = "", idPrefix = "m" }: Props) {
  const { ref, inView } = useInView<SVGSVGElement>(0.15);
  const [active, setActive] = useState<District | null>(null);

  const order = useMemo(
    () =>
      DISTRICTS.filter((d) => d !== HUB)
        .map((d) => ({ d, dist: Math.hypot(d.x - HUB.x, d.y - HUB.y) }))
        .sort((a, b) => a.dist - b.dist)
        .map((o) => o.d),
    []
  );

  const fill = `${idPrefix}-fill`;
  const glow = `${idPrefix}-glow`;
  const route = `${idPrefix}-route`;

  return (
    <div className={`relative ${className}`}>
      <svg
        ref={ref}
        viewBox={labels ? `-115 -30 ${MAP_W + 145} ${MAP_H + 60}` : `-20 -20 ${MAP_W + 40} ${MAP_H + 40}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Map of Maharashtra showing Maha Viral's WhatsApp network radiating from Mumbai to all districts"
      >
        <defs>
          <linearGradient id={fill} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f2724" />
            <stop offset="100%" stopColor="#141917" />
          </linearGradient>
          <linearGradient id={route} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8ef0bb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34d17f" stopOpacity="0.3" />
          </linearGradient>
          <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* State silhouette with soft shadow */}
        <path d={STATE_PATH} fill="#000" opacity="0.35" transform="translate(10 14)" style={{ filter: "blur(10px)" }} />
        <path d={STATE_PATH} fill={`url(#${fill})`} stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" strokeLinejoin="round" />

        {/* District borders */}
        <g>
          {DISTRICTS.map((d) => (
            <path
              key={d.name}
              d={d.d}
              fill={active?.name === d.name ? "rgba(52,209,127,0.14)" : "transparent"}
              stroke="#ffffff"
              strokeOpacity="0.07"
              strokeWidth="1"
              strokeLinejoin="round"
              className="transition-[fill] duration-300"
              onMouseEnter={interactive ? () => setActive(d) : undefined}
              onMouseLeave={interactive ? () => setActive(null) : undefined}
            />
          ))}
        </g>

        {/* Routes from MMR */}
        <g fill="none" stroke={`url(#${route})`} strokeWidth="1.3" strokeLinecap="round" pointerEvents="none">
          {inView &&
            order.map((d, i) => (
              <path
                key={d.name}
                d={routePath(d)}
                pathLength={1}
                className="route"
                strokeOpacity={active && active.name !== d.name ? 0.25 : 0.85}
                strokeWidth={active?.name === d.name ? 2.6 : 1.3}
                style={{ animationDelay: `${0.2 + i * 0.045}s` }}
              />
            ))}
        </g>

        {/* District dots */}
        <g>
          {DISTRICTS.map((d, i) => {
            const r = radius(d.groups);
            const isActive = active?.name === d.name;
            return (
              <g
                key={d.name}
                tabIndex={interactive ? 0 : -1}
                role={interactive ? "button" : undefined}
                aria-label={interactive ? `${d.name}: ${d.groups.toLocaleString("en-IN")} groups` : undefined}
                onMouseEnter={interactive ? () => setActive(d) : undefined}
                onMouseLeave={interactive ? () => setActive(null) : undefined}
                onFocus={interactive ? () => setActive(d) : undefined}
                onBlur={interactive ? () => setActive(null) : undefined}
                className={interactive ? "cursor-pointer outline-none" : ""}
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity .5s ease ${0.6 + i * 0.03}s`,
                }}
              >
                <circle cx={d.x} cy={d.y} r={r * 2.4} fill="#34d17f" opacity="0.14" className="dot-glow" style={{ animationDelay: `${(i % 7) * 0.4}s` }} />
                <circle cx={d.x} cy={d.y} r={r} fill="#34d17f" filter={`url(#${glow})`} />
                <circle cx={d.x} cy={d.y} r={r * 0.45} fill="#eafff3" />
                {isActive && <circle cx={d.x} cy={d.y} r={r + 6} fill="none" stroke="#8ef0bb" strokeWidth="2" />}
                {/* larger invisible hit area */}
                {interactive && <circle cx={d.x} cy={d.y} r={Math.max(r + 8, 16)} fill="transparent" />}
              </g>
            );
          })}
        </g>

        {/* Hub */}
        <g pointerEvents="none">
          <circle cx={HUB.x} cy={HUB.y} r="6" fill="none" stroke="#ffffff" strokeWidth="2" className="ripple" />
          <circle cx={HUB.x} cy={HUB.y} r="7" fill="#ffffff" filter={`url(#${glow})`} />
        </g>

        {/* Labels */}
        {labels && (
          <g pointerEvents="none" className="font-[family-name:var(--font-display)]">
            {DISTRICTS.filter((d) => d.label).map((d) => {
              const right = d.name === "Mumbai" || d.name === "Pune" || d.name === "Ratnagiri";
              const dx = d.name === "Mumbai" ? -18 : d.name === "Ratnagiri" ? -18 : 14;
              const anchor = right ? "end" : "start";
              const dy = d.name === "Pune" ? 28 : d.name === "Mumbai" ? 30 : -14;
              return (
                <text
                  key={d.name}
                  x={d.x + (d.name === "Pune" ? 30 : dx)}
                  y={d.y + dy}
                  textAnchor={anchor}
                  fontSize="28"
                  fontWeight="600"
                  fill="#f1f4f2"
                  stroke="#0a0d0c"
                  strokeWidth="5"
                  paintOrder="stroke"
                >
                  {d.name}
                </text>
              );
            })}
          </g>
        )}
      </svg>

      {interactive && (
        <div
          aria-live="polite"
          className={`pointer-events-none absolute left-3 top-3 rounded-xl border border-line bg-ink/85 px-4 py-3 text-sm shadow-xl backdrop-blur transition-opacity duration-200 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          {active && (
            <>
              <div className="font-[family-name:var(--font-display)] font-semibold text-fog">{active.name}</div>
              <div className="mt-0.5 text-accent">
                <span className="font-semibold">{active.groups.toLocaleString("en-IN")}</span> groups
                {active.estimated && <span className="text-mist"> · division average</span>}
              </div>
              <div className="text-xs text-mist">{active.division === "Konkan"
                  ? "Konkan (incl. MMR)"
                  : active.division === "Marathwada"
                    ? "Marathwada"
                    : `${active.division} division`}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
