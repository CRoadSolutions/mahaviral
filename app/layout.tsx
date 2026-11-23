import type { Metadata } from "next";
import { Poppins, Hind, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maha Viral — Historic decisions. Now in every village.",
  description:
    "Taking the Industries and Marathi Language Departments’ public-benefit decisions to rural Maharashtra through Maha Viral’s WhatsApp network of 22,480 groups across 36 districts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${hind.variable} ${devanagari.variable}`}>
      <body>{children}</body>
    </html>
  );
}
