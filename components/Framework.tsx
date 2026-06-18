import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { STEPS } from "@/lib/data";

export default function Framework() {
  return (
    <section className="bg-[#080c0d] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div data-fw-header className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-[12px]">
            The CGT Framework
          </p>

          <h2 className="mx-auto mt-3 max-w-[850px] font-display text-[26px] font-bold uppercase leading-tight tracking-[0.08em] text-cream sm:text-[32px] md:text-[38px]">
            3 Steps to Build Your Second Income
          </h2>
        </div>

        <div
          data-fw-grid
          className="relative mx-auto mt-9 grid max-w-[1180px] grid-cols-1 overflow-visible border border-gold/25 md:grid-cols-3 lg:mt-10"
        >
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative border-b border-gold/25 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <article
                data-step-card
                className="group relative isolate h-[260px] overflow-hidden bg-ink sm:h-[280px] md:h-[260px] lg:h-[270px]"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                {/* Number */}
                <span className="absolute left-6 top-7 z-10 font-display text-[78px] font-bold leading-none text-white/10 sm:text-[90px] lg:text-[100px]">
                  {step.num}
                </span>

                {/* Content */}
                <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-7 sm:px-7 lg:px-8">
                  <div className="max-w-[280px]">
                    <h3 className="whitespace-pre-line font-display text-[22px] font-bold uppercase leading-[1.15] tracking-[0.08em] text-white sm:text-[25px] lg:text-[27px]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-relaxed text-white/85 sm:text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </article>

              {/* Arrow between cards */}
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-19px] top-1/2 z-50 hidden h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_18px_rgba(213,158,70,0.45)] md:flex">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}