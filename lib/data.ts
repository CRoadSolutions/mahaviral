// All copy comes from "Maha Viral × Industries & Marathi Language Dept — Proposal (English).pdf"

export const NAV = [
  { id: "gap", label: "The gap" },
  { id: "network", label: "Network" },
  { id: "cases", label: "Cases" },
  { id: "content", label: "Content bank" },
  { id: "how", label: "How it works" },
  { id: "proof", label: "Proof" },
  { id: "investment", label: "Investment" },
];

export const CONTACT = {
  name: "Team MahaViral",
  phone: "+91 98922 09783",
  tel: "+919892209783",
  by: "By- C Road Solutions and Team – Mahaviral",
};

export const GLANCE = [
  {
    title: "The gap",
    body: "The decisions are historic, but the message hasn’t reached the villages yet. Content stops at Facebook, Instagram and official pages.",
  },
  {
    title: "What we do",
    body: "We take your existing content to 22,480 WhatsApp groups across all 36 districts, as neutral, informative “तुम्हाला माहित आहे का?” posts.",
  },
  {
    title: "What you get",
    body: "10 campaigns a month and a district-wise impact report: delivery logs, clicks by district, replies and a live audit.",
  },
  {
    title: "Scope",
    body: "10 campaigns per month. Public-benefit content only.",
  },
];

export const FLOW_TODAY = [
  "Decision taken",
  "Content created by the PR team",
  "Posted on Facebook, Instagram, official pages",
];
export const FLOW_TODAY_END = { lead: "Stops here:", rest: "seen mostly by existing followers" };

export const FLOW_MV = [
  "Same content",
  "WhatsApp groups and broadcast lists in every district",
  "People forward it, post it as status, share in family groups",
];
export const FLOW_MV_END = "Reaches people who never follow official pages";

export const DIVISIONS = [
  { name: "Konkan (incl. MMR)", groups: 7927, pct: 35 },
  { name: "Marathwada", groups: 4828, pct: 21 },
  { name: "Amravati division", groups: 2750, pct: 12 },
  { name: "Nashik division", groups: 2714, pct: 12 },
  { name: "Pune division", groups: 2465, pct: 11 },
  { name: "Nagpur division", groups: 1796, pct: 8 },
];

export const TOP_RURAL = [
  { name: "Chh. Sambhajinagar", groups: 2078 },
  { name: "Jalgaon", groups: 879 },
  { name: "Buldhana", groups: 822 },
  { name: "Ratnagiri", groups: 730 },
  { name: "Kolhapur", groups: 722 },
];

export type CaseStudy = {
  id: string;
  tab: string;
  kicker: string;
  title: string;
  story: string;
  question: string;
  district: string;
  groups: string;
  marathi: string[];
  tagline: { plain: string; strong: string };
  note: string;
};

export const CASES: CaseStudy[] = [
  {
    id: "01",
    tab: "New industrial area",
    kicker: "Case 1 · New industrial area",
    title: "The job he is leaving home for",
    story:
      "Sagar, an ITI graduate from Mandangad taluka in Ratnagiri district, is getting ready to move to Mumbai to look for factory work.",
    question:
      "Does he know a new industrial area is coming up in Mandangad, its first phase expanded to 150 acres?",
    district: "Ratnagiri",
    groups: "730",
    marathi: ["मंडणगडमध्ये येत आहे नवे", "औद्योगिक क्षेत्र!"],
    tagline: { plain: "A project near home,", strong: "told to the people it is for." },
    note: "Decision: Mandangad industrial area, phase 1 expanded from 100 to 150 acres, Jul 2026. Ratnagiri: 730 groups. Sample copy, checked against the official circular before use.",
  },
  {
    id: "02",
    tab: "Investment",
    kicker: "Case 2 · Investment",
    title: "The rumour she keeps hearing",
    story:
      "Priya, an engineering student in Chh. Sambhajinagar, keeps hearing on WhatsApp that industries are leaving Maharashtra.",
    question: "Does she know Maharashtra is No. 1 in India for foreign investment, three years running?",
    district: "Chh. Sambhajinagar",
    groups: "2,078",
    marathi: ["परकीय गुंतवणुकीत", "महाराष्ट्र नंबर १!"],
    tagline: { plain: "A rumour answered with a fact,", strong: "in the same groups." },
    note: "Fact: Maharashtra the top FDI recipient, $18.41 bn in 2025-26 (DPIIT), third year running. Chh. Sambhajinagar: 2,078 groups.",
  },
  {
    id: "03",
    tab: "Marathi language",
    kicker: "Case 3 · Marathi language",
    title: "Proud of Marathi, but what changed?",
    story:
      "Anand teaches Marathi at a school in Kolhapur district. He was proud when Marathi got classical status, but his students ask what it actually changed.",
    question:
      "Does he know every district is getting a District Language Officer, and Marathi has a global centre in London?",
    district: "Kolhapur",
    groups: "722",
    marathi: ["मराठीला मिळाला अभिजात", "भाषेचा दर्जा!"],
    tagline: { plain: "Pride travels furthest:", strong: "families forward it on their own." },
    note: "Decisions: classical status for Marathi, notification Jan 2025; London centre and District Language Officers announced Jul 2026. Kolhapur: 722 groups. Sample copy, checked against the official circular before use.",
  },
];

export type Decision = { date: string; text: string; dept: "Industries" | "Marathi Language" };

export const DECISIONS: Decision[] = [
  { date: "Jun 2026", text: "No. 1 in India for FDI, third year running: $18.41 bn in 2025-26", dept: "Industries" },
  { date: "Jan 2026", text: "Davos 2026: MoUs worth about ₹30 lakh crore, up to 40 lakh jobs", dept: "Industries" },
  { date: "Dec 2025", text: "Industries, Investment & Services Policy 2025: ₹70.5 lakh crore, 50 lakh jobs target", dept: "Industries" },
  { date: "Jul 2026", text: "MIDC borrowing limit raised from ₹75 crore to ₹6,000 crore for new industrial areas", dept: "Industries" },
  { date: "Jul 2026", text: "Mandangad (Ratnagiri) industrial area phase 1 expanded from 100 to 150 acres", dept: "Industries" },
  { date: "Aug 2026", text: "₹44.85 crore infrastructure upgrade for Washim MIDC", dept: "Industries" },
  { date: "Jul 2026", text: "39 idle MIDC plots in Nagpur division reclaimed for new entrepreneurs", dept: "Industries" },
  { date: "Sep 2025", text: "5,000 additional acres for industry around Chh. Sambhajinagar", dept: "Industries" },
  { date: "Jan 2025", text: "Abhijat Bhasha (classical language) status for Marathi: notification handed to the State", dept: "Marathi Language" },
  { date: "Jul 2026", text: "Chhatrapati Shivaji Maharaj Global Marathi Centre in London; 75 international Marathi forums", dept: "Marathi Language" },
  { date: "Jul 2026", text: "A District Language Officer in every district; 8 regional Marathi development centres", dept: "Marathi Language" },
  { date: "Feb 2026", text: "Marathi Language Department budget raised from ₹65 crore to ₹265 crore", dept: "Marathi Language" },
];

export const WHY = [
  {
    title: "Where people are",
    body: "In villages, news travels through WhatsApp groups: family, village, community and local-news groups. Most of these people never open an official page.",
  },
  {
    title: "A format people trust",
    body: "A neutral “तुम्हाला माहित आहे का?” post that explains a benefit is read and forwarded. A party-branded post is often scrolled past.",
  },
  {
    title: "Adds to your team",
    body: "The party’s social media team, DGIPR and your PR agency keep creating. We distribute what they create, to people their channels don’t reach.",
  },
];

export const ACCOUNTABILITY = [
  {
    title: "Delivery log",
    body: "Which device posted to which group, in which district, at what time: exported from our own software for every campaign.",
  },
  {
    title: "Clicks by district",
    body: "Each district gets its own short link and QR code, so you see clicks from Ratnagiri, Jalgaon or Washim separately.",
  },
  {
    title: "Replies",
    body: "Every post ends with “माहिती लिहून पाठवा”. Each reply to our number is a person who read it.",
  },
  {
    title: "Before / after views",
    body: "Views on your existing reels before and after our share date: extra reach you can see on your own Insights.",
  },
  {
    title: "Live audit",
    body: "Name any district. We open the live phones in front of you and show the posts in those groups.",
  },
];

export const COMMITMENTS = [
  {
    title: "Public benefit only",
    body: "We carry decisions and schemes that help people, not personal PR, speeches or daily reels. The image builds itself.",
  },
  {
    title: "A neutral voice",
    body: "Informative posts in plain Marathi, with no party branding, so they are read and forwarded as useful news.",
  },
  {
    title: "Separate and confidential",
    body: "Dedicated sender numbers, devices and data for this work. Confidentiality committed in writing.",
  },
  {
    title: "Alongside your team",
    body: "Your PR agency keeps the content and the pages. We only add distribution, so their work reaches further.",
  },
];

export const INCLUDED = [
  "Marathi adaptation of your content",
  "District-wise links, QR codes and reply number",
  "Distribution across all 36 districts",
  "Monthly district-wise impact report and review",
  "Content created from scratch: on request",
];

export const NEXT_STEPS = [
  "Choose the first five decisions to take to the villages.",
  "Share content or links and name one point of contact.",
  "Campaign 1 goes live within 1 day of approval.",
  "First district-wise impact report after 30 days.",
];
