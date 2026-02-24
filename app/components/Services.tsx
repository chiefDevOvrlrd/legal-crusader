"use client";
// components/Services.tsx

import { useEffect, useRef } from "react";
import { SERVICES } from "@/app/lib/siteData";

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".service-card-wrapper");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.index || "0");
            setTimeout(() => el.classList.add("is-visible"), idx * 100);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-navy-900 py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-body text-gold/70 text-xs tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 mb-4">
            Comprehensive Immigration Services
          </h2>
          <div className="w-16 h-0.5 bg-crimson mx-auto mb-6" />
          <p className="font-body text-white/55 max-w-2xl mx-auto text-base leading-relaxed">
            From first application to Federal Court — we handle every stage of
            your immigration journey with expertise and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className="service-card-wrapper reveal-up"
            >
              <div className="service-card h-full bg-navy-950/60 border border-white/8 rounded-xl p-7 hover:border-gold/25 transition-all duration-400 group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-crimson/15 border border-crimson/25 flex items-center justify-center text-2xl mb-5 group-hover:bg-crimson/25 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-white font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-white/55 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Items list */}
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-body text-white/65 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line — animates on hover */}
                <div className="mt-6 h-px bg-gradient-to-r from-crimson/0 via-crimson/0 to-crimson/0 group-hover:from-crimson/0 group-hover:via-crimson group-hover:to-crimson/0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Federal Court CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-crimson-dark via-crimson to-crimson-dark" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 30px)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div>
              <p className="font-body text-white/80 text-xs tracking-[0.2em] uppercase mb-1">
                ⚠️ Time-Sensitive
              </p>
              <h3 className="font-display text-2xl lg:text-3xl text-white font-semibold">
                Challenge a Refusal at the Federal Court
              </h3>
              <p className="font-body text-white/75 text-sm mt-2">
                Federal Court deadlines are strict. Take action before they
                pass — your case deserves expert guidance.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-white text-crimson font-body font-semibold text-sm px-8 py-4 rounded hover:bg-parchment transition-colors duration-300 shadow-lg shadow-black/20 whitespace-nowrap"
            >
              Act Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
