// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Crusaders | LAW OFFICE LP",
  description:
    "Ogban Chima-Oduko — Barrister & Solicitor. Expert Canadian immigration law services: permanent residence, refugee claims, Federal Court challenges, work permits, and more. Trusted. Strategic. Results-Driven.",
  keywords:
    "Canadian immigration lawyer, Federal Court, refugee claims, express entry, permanent residence, work permit, PRRA, Ogban Chima-Oduko",
  openGraph: {
    title: "Ogban Law | Canadian Immigration Lawyer",
    description: "Trusted. Strategic. Results-Driven. Expert Canadian immigration legal guidance.",
    type: "website",
    url: "https://www.ogbanlaw.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
