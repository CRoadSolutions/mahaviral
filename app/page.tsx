import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import MaharashtraMap from "@/components/MaharashtraMap";
import CaseStudies from "@/components/CaseStudies";
import ContentBank from "@/components/ContentBank";
import Logo from "@/components/Logo";
import {
  ACCOUNTABILITY,
  COMMITMENTS,
  CONTACT,
  DIVISIONS,
  FLOW_MV,
  FLOW_MV_END,
  FLOW_TODAY,
  FLOW_TODAY_END,
  GLANCE,
  INCLUDED,
  NEXT_STEPS,
  TOP_RURAL,
  WHY,
} from "@/lib/data";

const display = "font-[family-name:var(--font-display)]";

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className={`${display} mt-3 max-w-4xl text-3xl font-bold leading-tight text-fog text-balance sm:text-4xl lg:text-5xl`}>
            {title}
          </h2>
          {lead && <p className="mt-4 max-w-2xl text-lg text-mist">{lead}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Punchline({ plain, strong }: { plain: string; strong: string }) {
  return (
    <Reveal className="mt-14 text-center text-lg text-fog sm:text-xl">
      {plain} <span className="font-semibold text-accent">{strong}</span>
    </Reveal>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M0 6h26M21 1l5 5-5 5" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d17f" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  log: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
  click: <path d="M9 9l5 12 1.8-5.2L21 14 9 9zM7.2 2.2L8 5.1M5.1 8H2.2M14 4.1l-2.1 2.1M4.1 14l2.1-2.1" />,
  reply: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  views: <path d="M3 3v18h18M7 15l4-4 3 3 6-6" />,
  audit: <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.3-4.3" />,
  people: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />,
  trust: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
  team: <path d="M12 5v14M5 12h14" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 000-7.8z" />,
  voice: <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v3" />,
  lock: <path d="M5 11h14v10H5zM8 11V7a4 4 0 018 0v4" />,
  hands: <path d="M16 11V5a2 2 0 10-4 0M12 10V4a2 2 0 10-4 0v10M8 10.5V8a2 2 0 10-4 0v6a8 8 0 0016 0v-3a2 2 0 10-4 0" />,
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-mint/25 bg-mint/10 text-mint">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {ICONS[name]}
      </svg>
    </span>
  );
}

function Window({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-ink/70 text-sm shadow-xl">
      <div className="flex gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-mist/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist/40" />
      </div>
      <div className="divide-y divide-line px-4">{children}</div>
    </div>
  );
}
const Row = ({ children, ok }: { children: ReactNode; ok?: boolean }) => (
  <div className={`py-2.5 ${ok ? "font-semibold text-mint" : "text-fog/90"}`}>{children}</div>
);

export default function Home() {
  return (
    <div id="top" className="backdrop relative min-h-screen">
      <div className="grid-lines pointer-events-none fixed inset-0" aria-hidden />
      <Navbar />

      <main className="relative">
        {/* ───────────── HERO ───────────── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
            <Reveal>
              <span className={`${display} inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-ink`}>
                Proposal · November 2026
              </span>
              <h1 className={`${display} mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-fog sm:text-6xl lg:text-7xl`}>
                Historic decisions.
                <br />
                <span className="glow-accent text-accent">Now in every village.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog/90 sm:text-xl">
                Taking the Industries and Marathi Language Departments’ public-benefit decisions to rural Maharashtra through Maha
                Viral’s WhatsApp network.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className={`${display} rounded-full bg-accent px-6 py-3 font-semibold text-ink shadow-[0_0_30px_rgb(52_209_127/0.22)] transition hover:bg-accent-soft`}
                >
                  Start the first campaign
                </a>
                <a
                  href="#network"
                  className={`${display} rounded-full border border-line bg-pine/50 px-6 py-3 font-semibold text-fog transition hover:border-accent/50`}
                >
                  See the network
                </a>
              </div>
              <div className="mt-10 border-l-2 border-accent/60 pl-4 text-sm leading-relaxed text-mist">
                Prepared for <span className="text-fog">Hon. Dr. Uday Samant</span>,
                <br />
                Minister for Industries and Marathi Language, Government of Maharashtra
                <br />
                {CONTACT.by}
              </div>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-mint/10 blur-3xl" aria-hidden />
              <MaharashtraMap idPrefix="hero" />
              <div className="absolute -bottom-2 left-2 hidden rounded-2xl border border-line bg-ink/80 px-4 py-3 backdrop-blur sm:block">
                <div className={`${display} text-2xl font-bold text-accent`}>22,480</div>
                <div className="text-xs text-mist">WhatsApp groups · 36 districts</div>
              </div>
            </Reveal>
          </div>

          {/* stat strip */}
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="card grid grid-cols-2 divide-line overflow-hidden sm:grid-cols-4 sm:divide-x">
              {[
                { v: <CountUp to={22480} />, l: "active WhatsApp groups" },
                { v: <CountUp to={1.06} decimals={2} suffix=" Cr" />, l: "people reachable" },
                { v: <CountUp to={36} />, l: "districts" },
                { v: <CountUp to={10} />, l: "campaigns a month" },
              ].map((s, i) => (
                <div key={i} className="border-line p-5 text-center max-sm:[&:nth-child(-n+2)]:border-b max-sm:odd:border-r sm:p-6">
                  <div className={`${display} text-2xl font-bold text-accent sm:text-3xl`}>{s.v}</div>
                  <div className="mt-1 text-sm text-mist">{s.l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ───────────── AT A GLANCE ───────────── */}
        <Section eyebrow="At a glance" title="The proposal on one page">
          <div className="grid gap-4 sm:grid-cols-2">
            {GLANCE.map((g, i) => (
              <Reveal key={g.title} delay={i * 80} className="card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className={`${display} flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent`}>
                    {i + 1}
                  </span>
                  <h3 className={`${display} text-lg font-semibold text-accent`}>{g.title}</h3>
                </div>
                <p className="mt-4 text-[17px] leading-relaxed text-fog/90">{g.body}</p>
              </Reveal>
            ))}
          </div>
          <Punchline plain="Historic decisions," strong="carried to every district." />
        </Section>

        {/* ───────────── THE GAP ───────────── */}
        <section id="gap" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="card relative overflow-hidden p-8 sm:p-14">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />
              <p className="eyebrow">The gap</p>
              <h2 className={`${display} mt-4 max-w-4xl text-3xl font-bold leading-tight text-fog sm:text-5xl lg:text-6xl`}>
                The decisions are historic.
                <br />
                <span className="text-accent">But the message hasn’t reached the villages yet.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-mist sm:text-xl">
                Maharashtra has led India in foreign investment three years running, yet many villages still hear that industries are
                leaving the state.
              </p>
              <p className={`${display} mt-10 inline-block rounded-xl border border-coral/40 bg-coral/10 px-5 py-3 font-semibold text-fog`}>
                A reform helps only the people who hear about it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ───────────── FLOW ───────────── */}
        <Section eyebrow="Where good content stops today" title="Content reaches followers. Villages need more.">
          <div className="space-y-10">
            <Reveal>
              <p className={`${display} text-sm font-semibold uppercase tracking-[0.18em] text-coral`}>Today</p>
              <div className="mt-4 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                {FLOW_TODAY.map((s) => (
                  <FlowStep key={s}>{s}</FlowStep>
                ))}
                <div className="flex items-center rounded-xl border border-coral/50 bg-coral/10 p-4 text-[15px] text-fog">
                  <span>
                    <span className="font-semibold text-accent">{FLOW_TODAY_END.lead}</span> {FLOW_TODAY_END.rest}
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${display} text-sm font-semibold uppercase tracking-[0.18em] text-mint`}>With Maha Viral</p>
              <div className="mt-4 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                {FLOW_MV.map((s, i) => (
                  <FlowStep key={s} green={i > 0}>
                    {s}
                  </FlowStep>
                ))}
                <div className={`${display} flex items-center rounded-xl bg-accent p-4 text-[15px] font-semibold text-ink shadow-[0_0_40px_rgb(52_209_127/0.22)]`}>
                  {FLOW_MV_END}
                </div>
              </div>
            </Reveal>
          </div>
          <Punchline plain="Same content." strong="A second road, into the village." />
        </Section>

        {/* ───────────── NETWORK ───────────── */}
        <Section
          id="network"
          eyebrow="The network"
          title="One network, from MMR to every district"
          lead="Hover or tap a district to see its group count."
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <MaharashtraMap labels interactive idPrefix="net" />
            </Reveal>
            <Reveal delay={150} className="space-y-6">
              <div className="border-t-2 border-accent/70 pt-5">
                <div className={`${display} glow-accent text-5xl font-bold text-accent sm:text-6xl`}>
                  <CountUp to={22480} />
                </div>
                <p className="mt-1 text-mist">active WhatsApp groups, mapped district-wise</p>
              </div>
              <div className="border-t-2 border-accent/70 pt-5">
                <div className={`${display} glow-accent text-5xl font-bold text-accent sm:text-6xl`}>
                  <CountUp to={1.06} decimals={2} suffix=" Cr" />
                </div>
                <p className="mt-1 text-mist">people reachable across Maharashtra and MMR</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: 36, l: "districts" },
                  { n: 165, l: "devices" },
                  { n: 24, l: "team members" },
                ].map((s) => (
                  <div key={s.l} className="border-t-2 border-accent/70 pt-4">
                    <div className={`${display} text-3xl font-bold text-accent sm:text-4xl`}>
                      <CountUp to={s.n} />
                    </div>
                    <p className="mt-1 text-sm text-mist">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Punchline plain="One post," strong="every district on the same day." />
          <p className="mt-3 text-center text-xs text-mist/70">
            Network as of 16 Nov 2026. Dot size: named districts at their actual group count; other districts at their division’s
            average.
          </p>
        </Section>

        {/* ───────────── DISTRICT STRENGTH ───────────── */}
        <Section eyebrow="District strength" title="Strongest where the message most needs to go">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <Reveal className="divide-y divide-line">
              {DIVISIONS.map((d, i) => (
                <div key={d.name} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 py-4 sm:grid-cols-[180px_70px_1fr]">
                  <span className="font-semibold text-fog">{d.name}</span>
                  <span className={`${display} text-right font-semibold text-accent sm:order-none`}>{d.groups.toLocaleString("en-IN")}</span>
                  <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                    <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-moss/60">
                      <div
                        className="bar h-full rounded-full bg-gradient-to-r from-[#1fb36a] to-mint shadow-[0_0_16px_rgb(52_209_127/0.5)]"
                        style={{ width: `${(d.pct / 35) * 100}%`, animationDelay: `${i * 90}ms` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-mist">{d.pct}%</span>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={150} className="border-t-2 border-accent/70 pt-6">
              <div className={`${display} glow-accent text-7xl font-bold text-accent sm:text-8xl`}>
                <CountUp to={71} suffix="%" />
              </div>
              <p className="mt-2 text-lg text-fog">of our groups are outside Mumbai, Thane and Pune</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-mist">Top rural districts</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {TOP_RURAL.map((t) => (
                  <li key={t.name} className="rounded-full border border-line bg-pine/60 px-3 py-1.5 text-sm text-fog">
                    {t.name} <span className="font-semibold text-accent">{t.groups.toLocaleString("en-IN")}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Punchline plain="Seven of every ten groups are" strong="beyond the big cities." />
          <p className="mt-3 text-center text-xs text-mist/70">
            Full district-wise list of 22,480 groups (35 rows; Mumbai City and Suburban combined) attached as annexure.
          </p>
        </Section>

        {/* ───────────── CASES ───────────── */}
        <Section id="cases" eyebrow="From decision to doorstep" title="Three people. Three decisions. One message each.">
          <CaseStudies />
        </Section>

        {/* ───────────── CONTENT BANK ───────────── */}
        <Section id="content" eyebrow="Content bank" title="12 decisions at the village gate">
          <ContentBank />
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-mist/70">
            Sources: DPIIT data (Outlook Business), Free Press Journal, Swarajya, The Hitavada, AIR News, Lokmat Times. Each fact is
            checked against the Department’s circular before publishing.
          </p>
        </Section>

        {/* ───────────── WHY ───────────── */}
        <Section eyebrow="Why Maha Viral" title="Why WhatsApp, and why a neutral voice">
          <div className="grid gap-4 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90} className="card p-7">
                <Icon name={(["people", "trust", "hands"] as const)[i]} />
                <h3 className={`${display} mt-5 text-xl font-semibold text-fog`}>{w.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{w.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <p className={`${display} text-3xl font-bold text-fog sm:text-4xl`}>
              Content is king. <span className="glow-accent text-accent">Distribution is queen.</span>
            </p>
            <p className="mt-3 text-lg text-mist">We don’t replace your team. We carry its work further.</p>
          </Reveal>
        </Section>

        {/* ───────────── HOW IT WORKS ───────────── */}
        <Section id="how" eyebrow="How it works" title="Three steps. One desk. Every district.">
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal>
              <StepHead n={1} title="You approve" />
              <p className="mt-3 text-mist">
                Content, links or reels from your team or PR agency, adapted into a Marathi “did you know?” format.
              </p>
              <Window>
                <Row>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />
                  carousel_midc_v2.png
                </Row>
                <Row>3 cards · Marathi</Row>
                <Row ok>✓ Approved by your office</Row>
              </Window>
            </Reveal>
            <Reveal delay={100}>
              <StepHead n={2} title="We schedule" />
              <p className="mt-3 text-mist">
                Our automation app posts from 165 devices, district by district, at the right time of day.
              </p>
              <Window>
                <Row>Ratnagiri · 730 groups · 10:30</Row>
                <Row>Chh. Sambhajinagar · 2,078 · 11:00</Row>
                <Row>Kolhapur · 722 groups · 11:30</Row>
                <Row ok>✓ 165 devices, automatic</Row>
              </Window>
            </Reveal>
            <Reveal delay={200}>
              <StepHead n={3} title="We report" />
              <p className="mt-3 text-mist">A district-wise impact report every month, with a review meeting.</p>
              <Window>
                <Row>Delivery log · by group</Row>
                <Row>Clicks · by district</Row>
                <Row>
                  Replies · “<span className="font-[family-name:var(--font-marathi)]">माहिती</span>”
                </Row>
                <Row ok>✓ Monthly review</Row>
              </Window>
            </Reveal>
          </div>
          <Punchline plain="Nothing is posted by hand, and" strong="nothing goes out without your approval." />
          <p className="mt-3 text-center text-xs text-mist/70">
            Screens shown as an illustration. The real software is shown live in the meeting.
          </p>
        </Section>

        {/* ───────────── ACCOUNTABILITY ───────────── */}
        <Section eyebrow="Accountability" title="WhatsApp has no dashboard. We built one.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACCOUNTABILITY.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 70}
                className={`card p-6 ${i === 4 ? "border-accent/40 sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <Icon name={(["log", "click", "reply", "views", "audit"] as const)[i]} />
                <h3 className={`${display} mt-4 text-lg font-semibold ${i === 4 ? "text-accent" : "text-fog"}`}>{a.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{a.body}</p>
              </Reveal>
            ))}
          </div>
          <Punchline plain="Five ways to check our work," strong="without taking our word for it." />
        </Section>

        {/* ───────────── PROVEN ───────────── */}
        <Section id="proof" eyebrow="Proven" title="Measured, not promised">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr]">
            <Reveal className="card p-8">
              <p className="eyebrow">Government awareness · MPCB</p>
              <div className={`${display} glow-accent mt-4 text-5xl font-bold leading-none text-accent sm:text-7xl`}>2,000–3,000</div>
              <p className="mt-5 text-lg leading-relaxed text-fog/90">
                new organic followers on the MPCB Instagram, after environment-friendly awareness posts went through our network,
                Sep–Oct 2026.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-6">
              <div className="border-t-2 border-accent/70 pt-5">
                <div className={`${display} text-5xl font-bold text-accent`}>
                  <CountUp to={10} suffix=" yrs" />
                </div>
                <p className="mt-1 text-mist">of mass outreach and data management across Maharashtra</p>
              </div>
              <div className="border-t-2 border-accent/70 pt-5">
                <div className={`${display} text-5xl font-bold text-accent`}>
                  <CountUp to={165} />
                </div>
                <p className="mt-1 text-mist">devices on our own automation app</p>
              </div>
            </Reveal>
            <Reveal delay={200} className="card p-8">
              <Icon name="audit" />
              <p className="eyebrow mt-5">See it yourself</p>
              <p className="mt-3 text-lg leading-relaxed text-fog/90">
                Name any district in the meeting. We open the live phones and show the posts in those groups.
              </p>
            </Reveal>
          </div>
          <Punchline
            plain="Also: Marathi film promotion, paying brand clients, and"
            strong="FMCG and real-estate campaigns in progress."
          />
        </Section>

        {/* ───────────── COMMITMENTS ───────────── */}
        <Section eyebrow="How we work" title="Four commitments">
          <div className="grid gap-4 sm:grid-cols-2">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="card flex gap-5 p-7">
                <Icon name={(["heart", "voice", "lock", "hands"] as const)[i]} />
                <div>
                  <h3 className={`${display} text-xl font-semibold text-fog`}>{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Punchline plain="The decisions speak." strong="We make sure they are heard." />
        </Section>

        {/* ───────────── INVESTMENT ───────────── */}
        <Section id="investment" eyebrow="Investment" title="One simple monthly retainer">
          <Reveal className="card relative grid overflow-hidden lg:grid-cols-2">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" aria-hidden />
            <div className="relative flex flex-col justify-center p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-mist">Monthly retainer</p>
              <div className={`${display} glow-accent mt-3 text-6xl font-bold text-accent sm:text-7xl`}>₹1,00,000</div>
              <p className={`${display} mt-3 text-xl font-semibold text-fog`}>per month · 10 campaigns</p>
              <a
                href="#contact"
                className={`${display} mt-8 inline-flex w-fit rounded-full bg-accent px-6 py-3 font-semibold text-ink shadow-[0_0_30px_rgb(52_209_127/0.22)] transition hover:bg-accent-soft`}
              >
                Choose your first five decisions
              </a>
            </div>
            <div className="relative border-t border-line bg-ink/30 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <p className="eyebrow">Included</p>
              <ul className="mt-5 space-y-4">
                {INCLUDED.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[17px] text-fog">
                    <span className="mt-0.5">
                      <Check />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Punchline plain="10 decisions a month," strong="in every district." />
        </Section>

        {/* ───────────── NEXT STEPS / CONTACT ───────────── */}
        <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <p className="eyebrow">Next steps</p>
              <h2 className={`${display} mt-3 text-3xl font-bold leading-tight text-fog sm:text-5xl`}>
                From your desk to <span className="text-accent">every village</span>
              </h2>
              <ol className="mt-10 space-y-6">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s} className="flex gap-5">
                    <span className={`${display} flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-ink`}>
                      {i + 1}
                    </span>
                    <p className="pt-1.5 text-lg text-fog">{s}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={150} className="card relative overflow-hidden p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/15 blur-3xl" aria-hidden />
              <Logo size="lg" />
              <p className="mt-8 text-sm uppercase tracking-wider text-mist">Contact</p>
              <p className={`${display} mt-2 text-2xl font-semibold text-fog`}>{CONTACT.name}</p>
              <a href={`tel:${CONTACT.tel}`} className={`${display} mt-1 block text-2xl font-semibold text-accent hover:underline`}>
                {CONTACT.phone}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${CONTACT.tel.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display} inline-flex items-center gap-2 rounded-full bg-[#1f8f57] px-5 py-3 font-semibold text-white transition hover:bg-[#25a866]`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.7-1.2 2.2 2.2 0 00.2-1.2c-.1-.1-.3-.2-.5-.3z" />
                  </svg>
                  WhatsApp us
                </a>
                <a
                  href={`tel:${CONTACT.tel}`}
                  className={`${display} rounded-full border border-line px-5 py-3 font-semibold text-fog transition hover:border-accent/50`}
                >
                  Call
                </a>
              </div>
              <p className="mt-8 text-sm text-mist">{CONTACT.by}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <Logo />
          <p className={`${display} text-lg font-semibold text-fog`}>
            Historic decisions. <span className="text-accent">Now in every village.</span>
          </p>
          <p className="text-sm text-mist">© 2026 C Road Solutions · Maha Viral</p>
        </div>
      </footer>
    </div>
  );
}

function FlowStep({ children, green }: { children: ReactNode; green?: boolean }) {
  return (
    <>
      <div
        className={`flex items-center rounded-xl border p-4 text-[15px] ${
          green ? "border-mint/40 bg-mint/10 text-fog" : "border-line bg-pine/60 text-fog/90"
        }`}
      >
        {children}
      </div>
      <div className="flex items-center justify-center text-accent max-md:rotate-90 max-md:py-0.5">
        <Arrow />
      </div>
    </>
  );
}

function StepHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`${display} flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-ink shadow-[0_0_24px_rgb(52_209_127/0.22)]`}
      >
        {n}
      </span>
      <h3 className={`${display} text-2xl font-semibold text-fog`}>{title}</h3>
    </div>
  );
}
