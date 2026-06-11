"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: dir * 460,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-y border-line bg-[#080c0d]">
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-10">
        <h2 data-testi-title className="text-center font-display text-[26px] font-bold uppercase tracking-[0.08em] text-cream sm:text-[30px] md:text-[34px]">
          Real People. Real Results.
        </h2>

        <div className="relative mt-10">
          {/* Left Button */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-black/50 text-cream transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold lg:flex"
          >
            <ChevronLeft size={30} strokeWidth={2} />
          </button>

          {/* Cards */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <figure
                data-testi-card
                key={t.name}
                className="group flex min-w-[300px] overflow-hidden rounded-md border border-gold/25 bg-[#0b1112] shadow-[0_0_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02] sm:min-w-[360px] md:min-w-[420px]"
              >
                {/* Image */}
                <div className="relative h-[165px] w-[145px] shrink-0 overflow-hidden sm:h-[185px] sm:w-[185px]">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Text */}
                <div className="flex min-h-[165px] flex-1 flex-col justify-center px-5 py-4 transition-transform duration-300 group-hover:scale-[1.02] sm:min-h-[185px] sm:px-6">
                  <blockquote className="text-[14px] leading-relaxed text-cream/90 sm:text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-5 text-[12px] leading-relaxed sm:text-[13px]">
                    <span className="block text-cream/75">
                      {t.name}, {t.role}
                    </span>

                    <span className="mt-2 block font-semibold text-gold">
                      {t.range}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* Right Button */}
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-black/50 text-cream transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold lg:flex"
          >
            <ChevronRight size={30} strokeWidth={2} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-4">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-3 w-3 rounded-full transition-transform duration-300 hover:scale-125 ${
                dot === 0 ? "bg-gold" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}