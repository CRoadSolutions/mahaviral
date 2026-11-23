export default function Phone({
  district,
  lines,
  className = "",
}: {
  district: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[260px] rounded-[2.4rem] border-[3px] border-[#2b322f] bg-[#101412] p-2.5 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7),0_0_60px_-10px_rgb(52_209_127/0.25)] ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[5px] top-24 h-10 w-[3px] rounded-l bg-[#2b322f]" />
      <span className="absolute -right-[5px] top-32 h-16 w-[3px] rounded-r bg-[#2b322f]" />

      <div className="overflow-hidden rounded-[1.9rem] bg-[#121716]">
        {/* status / notch */}
        <div className="relative flex h-7 items-center justify-between px-5 text-[10px] text-mist">
          <span>10:30</span>
          <span className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-black/70" />
          <span className="flex items-center gap-1">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor" aria-hidden>
              <rect x="0" y="6" width="2" height="3" rx=".5" />
              <rect x="3.3" y="4" width="2" height="5" rx=".5" />
              <rect x="6.6" y="2" width="2" height="7" rx=".5" />
              <rect x="9.9" y="0" width="2" height="9" rx=".5" />
            </svg>
          </span>
        </div>

        {/* chat header */}
        <div className="flex items-center gap-2.5 border-b border-line px-4 pb-3 pt-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-moss text-xs font-semibold text-mint">
            {district.replace("Chh. ", "").slice(0, 1)}
          </span>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-semibold text-fog">Village group · {district}</div>
            <div className="text-[10px] text-mist">Family · village · local news</div>
          </div>
        </div>

        {/* chat body */}
        <div className="flex min-h-[318px] flex-col gap-3 bg-[radial-gradient(circle_at_30%_20%,rgb(52_209_127/0.06),transparent_60%)] px-3 py-4">
          <div className="animate-[msg-in_.5s_ease-out_both] max-w-[94%] rounded-2xl rounded-tl-sm border-l-4 border-accent bg-[#f4f7f5] p-3.5 text-ink shadow-lg">
            <div className="font-[family-name:var(--font-marathi)] text-[13px] font-semibold text-[#15834c]">
              तुम्हाला माहित आहे का?
            </div>
            <div className="mt-1.5 font-[family-name:var(--font-marathi)] text-[22px] font-bold leading-[1.25]">
              {lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-3 border-t border-ink/15 pt-2 font-[family-name:var(--font-marathi)] text-[12px] opacity-75">
              जनहितार्थ माहिती · Maha Viral
            </div>
          </div>
          <div className="flex items-center gap-1 pl-1 text-[11px] italic text-mist">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 5l6 6-6 6M21 11H9a6 6 0 00-6 6v2" />
            </svg>
            Forwarded many times
          </div>
          <div
            className="ml-auto animate-[msg-in_.5s_ease-out_.7s_both] rounded-2xl rounded-br-sm bg-[#1f8f57] px-4 py-2 font-[family-name:var(--font-marathi)] text-[15px] font-semibold text-white shadow-md"
          >
            माहिती
            <span className="ml-2 align-middle text-[9px] font-normal text-white/70">10:42 ✓✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
