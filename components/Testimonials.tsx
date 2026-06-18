"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

function Card({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <figure className="group flex overflow-hidden border border-gold/20 bg-[#0d1214] transition-all duration-300 hover:border-gold/50">
      <div className="relative h-[180px] w-[150px] shrink-0 overflow-hidden sm:h-[200px] sm:w-[170px]">
        <Image
          src={t.img}
          alt={t.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="170px"
        />

        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="flex flex-1 flex-col justify-center px-5 py-5">
        <blockquote className="text-[14px] leading-relaxed text-cream/85">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <figcaption className="mt-5 text-[12px]">
          <span className="block text-cream/60">
            {t.name}, {t.role}
          </span>

          <span className="mt-1 block font-semibold text-gold">
            {t.range}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden border-y border-line bg-[#080c0d] py-16">
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-4 pb-12 sm:px-6 lg:px-10">
        <h2
          data-testi-title
          className="text-center font-display text-[26px] font-bold uppercase tracking-[0.08em] text-cream sm:text-[30px] md:text-[34px] lg:text-[38px]"
        >
          Real People. Real Results.
        </h2>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-10">
        {TESTIMONIALS.map((t) => (
          <Card key={`${t.name}-${t.role}`} t={t} />
        ))}
      </div>
    </section>
  );
}