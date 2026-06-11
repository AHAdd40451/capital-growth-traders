"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/lib/data";

const PERKS = [
  "100% Free Training",
  "No Experience Needed",
  "Learn At Your Own Pace",
  "Practical & Easy To Follow",
];

export default function CtaForm() {
  const [form, setForm] = useState({ firstName: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // TODO: wire to your backend / CRM endpoint
    console.log(form);
    setSent(true);
  };

  const input =
    "w-full border border-line bg-card/80 px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-gold focus:outline-none transition-transform duration-300 focus:scale-[1.02]";

  return (
    <section id="cta" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.ctaDevice}
          alt="Trading charts on a laptop"
          fill
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/15 sm:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-transparent sm:from-ink sm:via-ink/60 sm:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:px-8">
        {/* Copy + perks */}
        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-cream md:text-4xl">
            Ready to build your <span className="text-gold">second income?</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Take the first step. Join our free training and see how thousands of Australians
            are building more options with trading.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PERKS.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-xs text-cream/90 transition-transform duration-300 hover:scale-105"
              >
                <CheckCircle2 size={14} className="shrink-0 text-gold" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Lead form */}
        <div className="space-y-4">
          {sent ? (
            <p className="border border-gold bg-card/80 p-6 text-center text-sm text-gold transition-transform duration-300 hover:scale-[1.02]">
              You&apos;re in. Check your inbox for the free training.
            </p>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className={input}
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />

                <input
                  className={input}
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <input
                className={input}
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <button
                onClick={handleSubmit}
                className="flex w-full items-center justify-center gap-2 bg-gold px-6 py-3.5 text-[14px] font-semibold uppercase tracking-wideish text-ink transition-all duration-300 hover:scale-105 hover:bg-goldDim"
              >
                Start Free Training <ArrowRight size={14} />
              </button>
            </>
          )}
        </div>

        {/* Empty right space for background image */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}