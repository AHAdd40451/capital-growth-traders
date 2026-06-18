import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

const STATS = [
  { value: "10,000+", label: "Community Members", countTarget: "10000", countSuffix: "+" },
  { value: "5+",      label: "Years Trading",      countTarget: "5",     countSuffix: "+" },
  { value: "1000's",  label: "Of Lives Changed",   countTarget: null,    countSuffix: "" },
  { value: "1 Mission", label: "To Help You Build Options", countTarget: null, countSuffix: "" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden border-y border-line">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.story}
          alt="Shane telling his story"
          fill
          className="object-cover object-[25%_center] sm:object-left"
        />
        <div className="absolute inset-0 bg-black/20 sm:bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/45 to-ink/90" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1450px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.5fr_1.2fr_0.7fr] lg:px-8">

        {/* Video thumb with 4-side border-draw */}
        <div data-story-video className="group relative h-64 w-full sm:h-80 lg:h-[320px]">
          {/* Border draw — 4 spans, initially collapsed */}
          <span data-border-top    className="pointer-events-none absolute left-0  top-0     z-20 h-[1px] w-full  bg-gold" style={{ transform: "scaleX(0)", transformOrigin: "left center" }} />
          <span data-border-right  className="pointer-events-none absolute right-0 top-0     z-20 h-full  w-[1px] bg-gold" style={{ transform: "scaleY(0)", transformOrigin: "center top" }} />
          <span data-border-bottom className="pointer-events-none absolute right-0 bottom-0  z-20 h-[1px] w-full  bg-gold" style={{ transform: "scaleX(0)", transformOrigin: "right center" }} />
          <span data-border-left   className="pointer-events-none absolute left-0  bottom-0  z-20 h-full  w-[1px] bg-gold" style={{ transform: "scaleY(0)", transformOrigin: "center bottom" }} />

          <button
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ink/60 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-ink"
            aria-label="Play Shane's story"
          >
            <Play size={22} fill="currentColor" />
          </button>
        </div>

        {/* Copy */}
        <div data-story-copy>
          <p className="text-[11px] uppercase tracking-wideish text-gold">
            Shane&apos;s Story
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-cream md:text-4xl">
            From FIFO to Freedom
          </h2>
          <div data-heading-line className="mt-2 h-[1px] w-12 origin-left bg-gold" style={{ transform: "scaleX(0)" }} />

          <p className="mt-5 text-sm leading-relaxed text-cream/85">
            I came from housing commission, worked 100+ hour weeks FIFO, broke my back and
            missed too much of life that I can&apos;t get back.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-cream/85">
            Trading gave me another option. Now I help everyday Australians do the same.
          </p>

          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-[11px] uppercase tracking-wideish text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink"
          >
            Watch My Full Story <ArrowRight size={14} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 self-center sm:grid-cols-4 lg:grid-cols-1">
          {STATS.map((stat) => (
            <div data-stat-item key={stat.label} className="transition-transform duration-300 hover:scale-105">
              <p
                className="font-display text-2xl font-bold text-gold"
                {...(stat.countTarget
                  ? { "data-count-target": stat.countTarget, "data-count-suffix": stat.countSuffix }
                  : {})}
              >
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-cream/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
