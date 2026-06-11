import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { IMAGES, PAIN_POINTS } from "@/lib/data";

export default function Problem() {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-y border-line sm:min-h-[560px] lg:min-h-[520px]">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.problem}
          alt="Worker looking at an industrial skyline"
          fill
          priority
          className="object-cover object-[68%_center] transition-transform duration-700 hover:scale-105 sm:object-[62%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-black/15 sm:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent sm:from-ink sm:via-ink/60 sm:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[560px] sm:px-6 sm:py-20 lg:min-h-[520px] lg:px-8 lg:py-32">
        <div className="max-w-[520px]">
          <p className="mb-3 text-[10px] uppercase tracking-wideish text-gold transition-transform duration-300 hover:scale-105 sm:text-[11px]">
            The Problem
          </p>

          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-cream transition-transform duration-300 hover:scale-[1.02] sm:text-4xl md:text-5xl">
            You&apos;ve built an income,
            <br />
            <span className="text-gold">but not freedom.</span>
          </h2>

          <ul className="mt-6 max-w-md space-y-3 sm:mt-8 sm:space-y-4">
            {PAIN_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-xs text-cream/90 transition-transform duration-300 hover:scale-105 sm:text-sm"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-gold transition-transform duration-300 hover:scale-110"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute right-[28%] top-[38%] hidden border border-line bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-wideish text-cream lg:block">
          High Income
        </div>

        <div className="pointer-events-none absolute bottom-[26%] right-[8%] hidden border border-gold bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-wideish text-gold lg:block">
          Freedom
        </div>
      </div>
    </section>
  );
}