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
          className="object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-black/15 sm:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent sm:from-ink sm:via-ink/60 sm:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[560px] sm:px-6 sm:py-20 lg:min-h-[520px] lg:px-8 lg:py-32">
        <div className="max-w-[520px]">
          <p data-prob-eyebrow className="mb-3 text-[10px] uppercase tracking-wideish text-gold sm:text-[11px]">
            The Problem
          </p>

          <h2 data-prob-title className="font-display text-3xl font-bold uppercase leading-tight text-cream sm:text-4xl md:text-5xl">
            You&apos;ve built an income,
            <br />
            <span className="text-gold">but not freedom.</span>
          </h2>
          <div data-heading-line className="mt-3 h-[1px] w-12 origin-left bg-gold" style={{ transform: "scaleX(0)" }} />

          {/* Pain points with left accent line */}
          <div className="relative mt-6 sm:mt-8">
            {/* Gold vertical line that grows downward */}
            <span
              data-prob-line
              className="pointer-events-none absolute -left-4 top-0 h-full w-[2px] bg-gradient-to-b from-gold via-gold/40 to-transparent origin-top"
              style={{ transform: "scaleY(0)" }}
            />

            <ul className="max-w-md space-y-3 sm:space-y-4">
              {PAIN_POINTS.map((point) => (
                <li
                  data-prob-point
                  key={point}
                  className="flex items-center gap-3 text-xs text-cream/90 sm:text-sm"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating tags */}
        <div
          data-float-tag
          className="pointer-events-none absolute right-[28%] top-[38%] hidden border border-line bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-wideish text-cream lg:block"
          style={{ opacity: 0 }}
        >
          High Income
        </div>

        <div
          data-float-tag
          className="pointer-events-none absolute bottom-[26%] right-[8%] hidden border border-gold bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-wideish text-gold lg:block"
          style={{ opacity: 0 }}
        >
          Freedom
        </div>
      </div>
    </section>
  );
}
