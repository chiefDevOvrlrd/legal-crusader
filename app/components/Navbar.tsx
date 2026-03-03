"use client";
// components/Navbar.tsx

import { useState, useEffect } from "react";
import Image from "next/image"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(44, 38, 71, 0.84)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-[rgba(54,50,73,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="legal crusaders logo"
                fill
                className="absolute"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-xl text-white tracking-wide">
                Legal<span className="text-crimson italic p-1">Crusaders</span>
              </span>
              <span className="text-gold/70 text-[10px] font-body tracking-[0.2em] uppercase">
                Immigration Counsel
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, -1).map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`font-body text-sm tracking-wide transition-all duration-300 relative py-1 ${
                      activeSection === id
                        ? "text-gold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {activeSection === id && (
                      <span className="absolute bottom-0 left-0 w-full h-px bg-gold" />
                    )}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-crimson bg-crimson text-white font-body text-sm px-5 py-2.5 rounded font-medium tracking-wide"
              >
                Book Consultation
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-xl border-t border-gold/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-body text-white/80 hover:text-gold py-2 transition-colors duration-200 text-base border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}