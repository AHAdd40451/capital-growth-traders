"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

// Duplicate rows for seamless infinite marquee
const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...[...TESTIMONIALS].reverse(), ...[...TESTIMONIALS].reverse()];

function Card({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <figure className="group flex min-w-[290px] select-none overflow-hidden border border-gold/20 bg-[#0d1214] transition-colors duration-300 hover:border-gold/50 sm:min-w-[360px]">
      <div className="relative h-[158px] w-[130px] shrink-0 overflow-hidden sm:h-[178px] sm:w-[165px]">
        <Image
          src={t.img}
          alt={t.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="165px"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="flex flex-1 flex-col justify-center px-5 py-4">
        <blockquote className="text-[13px] leading-relaxed text-cream/85 sm:text-[14px]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[12px]">
          <span className="block text-cream/60">{t.name}, {t.role}</span>
          <span className="mt-1 block font-semibold text-gold">{t.range}</span>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden border-y border-line bg-[#080c0d] py-14">
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-4 pb-10 sm:px-6 lg:px-10">
        <h2 data-testi-title className="text-center font-display text-[26px] font-bold uppercase tracking-[0.08em] text-cream sm:text-[30px] md:text-[34px]">
          Real People. Real Results.
        </h2>
        <div
          data-heading-line
          className="mx-auto mt-3 h-[1px] w-16 origin-left bg-gold"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Row 1 — scrolls left */}
      <div data-marquee-row className="relative flex overflow-hidden">
        <div className="animate-scroll-x flex gap-5 py-1">
          {ROW1.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div data-marquee-row className="relative mt-5 flex overflow-hidden">
        <div className="animate-scroll-x-reverse flex gap-5 py-1">
          {ROW2.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
