import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { STEPS } from "@/lib/data";

export default function Framework() {
  return (
    <section className="bg-[#080c0d]">
      <div className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div data-fw-header>
          <p className="text-center text-[15px] font-semibold uppercase tracking-[0.3em] text-gold">
            The CGT Framework
          </p>

          <h2 className="mx-auto mt-3 max-w-[950px] text-center font-display text-[26px] font-bold uppercase leading-tight tracking-[0.07em] text-cream sm:text-[32px] md:text-[38px] lg:text-[42px]">
            3 Steps to Build Your Second Income
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1450px] overflow-visible border border-gold/25 md:grid-cols-3 lg:mt-14">
          {STEPS.map((step, i) => (
            <article
              data-step-card
              key={step.num}
              className="group relative h-[330px] overflow-visible border-b border-gold/25 bg-ink transition-transform duration-300 hover:scale-[1.02] md:h-[360px] md:border-b-0 md:border-r md:border-gold/25 last:md:border-r-0"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover opacity-100 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              </div>

              <span className="absolute left-7 top-8 z-10 font-display text-[95px] font-bold leading-none text-white/10 transition-transform duration-300 group-hover:scale-105 sm:left-9 sm:text-[115px] lg:text-[125px]">
                {step.num}
              </span>

              <div className="absolute bottom-9 left-7 z-20 max-w-[290px] transition-transform duration-300 group-hover:scale-[1.02] sm:left-9 lg:max-w-[320px]">
                <h3 className="whitespace-pre-line font-display text-[28px] font-bold uppercase leading-[1.15] tracking-[0.08em] text-white sm:text-[32px] lg:text-[34px]">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/80 lg:text-[15px]">
                  {step.desc}
                </p>
              </div>

              {i < STEPS.length - 1 && (
                <span className="absolute right-[-27px] top-1/2 z-40 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_25px_rgba(213,158,70,0.45)] transition-transform duration-300 hover:scale-110 md:flex">
                  <ArrowRight size={24} strokeWidth={2.5} />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}