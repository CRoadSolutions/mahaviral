import { DISTRICT_SHAPES } from "./mapGeo";

// Dot size follows the deck: named districts at their actual group count,
// other districts at their division's average.

type Division = "Konkan" | "Marathwada" | "Amravati" | "Nashik" | "Pune" | "Nagpur";

const DIVISION_TOTAL: Record<Division, number> = {
  Konkan: 7927,
  Marathwada: 4828,
  Amravati: 2750,
  Nashik: 2714,
  Pune: 2465,
  Nagpur: 1796,
};

// Source names (2011 census) → current names, division, known counts, labels shown on the map.
const META: Record<string, { display?: string; div: Division; groups?: number; label?: boolean }> = {
  Mumbai: { display: "Mumbai", div: "Konkan", label: true },
  Thane: { div: "Konkan" },
  Palghar: { div: "Konkan" },
  Raigad: { div: "Konkan" },
  Ratnagiri: { div: "Konkan", groups: 730, label: true },
  Sindhudurg: { div: "Konkan" },
  Pune: { div: "Pune", label: true },
  Satara: { div: "Pune" },
  Sangli: { div: "Pune" },
  Kolhapur: { div: "Pune", groups: 722, label: true },
  Solapur: { div: "Pune" },
  Nashik: { div: "Nashik", label: true },
  Dhule: { div: "Nashik" },
  Nandurbar: { div: "Nashik" },
  Jalgaon: { div: "Nashik", groups: 879, label: true },
  Ahmednagar: { display: "Ahilyanagar", div: "Nashik" },
  Aurangabad: { display: "Chh. Sambhajinagar", div: "Marathwada", groups: 2078, label: true },
  Jalna: { div: "Marathwada" },
  Beed: { div: "Marathwada" },
  Osmanabad: { display: "Dharashiv", div: "Marathwada" },
  Latur: { div: "Marathwada" },
  Nanded: { div: "Marathwada" },
  Parbhani: { div: "Marathwada" },
  Hingoli: { div: "Marathwada" },
  Buldhana: { div: "Amravati", groups: 822 },
  Akola: { div: "Amravati" },
  Washim: { div: "Amravati" },
  Amravati: { div: "Amravati", label: true },
  Yavatmal: { div: "Amravati" },
  Wardha: { div: "Nagpur" },
  Nagpur: { div: "Nagpur", label: true },
  Bhandara: { div: "Nagpur" },
  Gondia: { div: "Nagpur" },
  Chandrapur: { div: "Nagpur" },
  Gadchiroli: { div: "Nagpur" },
};

function divisionAverage(div: Division) {
  const members = Object.values(META).filter((m) => m.div === div);
  const namedSum = members.reduce((s, m) => s + (m.groups ?? 0), 0);
  const rest = members.filter((m) => !m.groups).length;
  return rest > 0 ? Math.round((DIVISION_TOTAL[div] - namedSum) / rest) : 0;
}

export type District = {
  name: string;
  d: string;
  x: number;
  y: number;
  division: Division;
  groups: number;
  estimated: boolean;
  label: boolean;
};

export const DISTRICTS: District[] = DISTRICT_SHAPES.map((s) => {
  const m = META[s.name] ?? { div: "Konkan" as Division };
  return {
    name: m.display ?? s.name,
    d: s.d,
    x: s.cx,
    y: s.cy,
    division: m.div,
    groups: m.groups ?? divisionAverage(m.div),
    estimated: !m.groups,
    label: !!m.label,
  };
});

export const HUB = DISTRICTS.find((d) => d.name === "Mumbai")!;
