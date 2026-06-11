"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-8 px-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <span className="font-display text-2xl font-bold tracking-wide text-gold">
            CGT
          </span>
          <span className="hidden border-l border-line pl-3 text-[8px] uppercase leading-[1.5] tracking-wideish text-muted sm:block">
            Creative
            <br />
            Genius
            <br />
            Trading
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 xl:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`whitespace-nowrap text-[11px] uppercase tracking-[0.12em] transition-all duration-300 hover:scale-105 hover:text-gold ${
                i === 0
                  ? "border-b-2 border-gold pb-1 text-cream"
                  : "text-cream/70"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href="#cta"
            className="hidden items-center gap-2 border border-gold px-4 py-2 text-[11px] uppercase tracking-wideish text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink md:flex"
          >
            Start Free Training <ArrowRight size={14} />
          </a>

          <button
            className="text-cream transition-transform duration-300 hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <nav className="bg-ink/95 px-4 py-4 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm uppercase tracking-wideish text-muted transition-all duration-300 hover:scale-[1.02] hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}