"use client";

import { ArrowRight, Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import Image from "next/image";
import { FOOTER_COLS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-12 px-4 py-16 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.5fr] lg:px-8">
        {/* Brand */}
        <div>
          <a href="#" className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src="/PNG.png"
              alt="Capital Growth Traders"
              width={160}
              height={160}
              className="h-16 w-auto"
            />
          </a>

          <p className="mt-5 max-w-[24ch] text-xs leading-relaxed">
            Helping everyday Australians build a second income and create more freedom.
          </p>

          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-5 text-[11px] uppercase tracking-wideish text-cream">
              {col.heading}
            </h3>

            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block text-xs transition-all duration-300 hover:scale-105 hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-[11px] uppercase tracking-wideish text-cream">
            Join the CGT Movement
          </h3>

          <p className="mb-4 text-xs leading-relaxed">
            Get tips, strategies and updates delivered to your inbox.
          </p>

          <div className="flex">
            <input
              className="w-full border border-line bg-card px-4 py-2.5 text-xs text-cream placeholder:text-muted transition-transform duration-300 focus:scale-[1.02] focus:border-gold focus:outline-none"
              placeholder="Your email address"
            />

            <button
              className="shrink-0 border border-l-0 border-line px-4 text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink"
              aria-label="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-[10px] text-muted">
        © {new Date().getFullYear()} Creative Genius Trading. All Rights Reserved.
      </div>
    </footer>
  );
}