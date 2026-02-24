"use client";
// components/StatsBanner.tsx

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { STATS } from "@/app/lib/siteData";

export default function StatsBanner() {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative bg-crimson overflow-hidden py-14">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
          }}
        />
      </div>

      <div ref={ref} className="reveal-up relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-up delay-${i + 1} stat-item`}
            >
              <div className="stat-value font-display text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="font-body text-white/75 text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
