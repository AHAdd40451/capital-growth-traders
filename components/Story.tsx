import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

const STATS = [
  {
    value: "5,000+",
    label: "Community Members",
    countTarget: "5000",
    countSuffix: "+",
  },
  {
    value: "10+",
    label: "Years Trading",
    countTarget: "10",
    countSuffix: "+",
  },
  {
    value: "1000's",
    label: "Of Lives Changed",
    countTarget: null,
    countSuffix: "",
  },
  {
    value: "1 Mission",
    label: "To Help You Build Options",
    countTarget: null,
    countSuffix: "",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden border-y border-line">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.story}
          alt="Shane telling his story"
          fill
          className="object-cover object-left"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/55 to-ink/95" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1450px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_1fr_0.65fr] lg:px-8 lg:py-24">
        {/* Empty space so face stays clear */}
        <div className="hidden lg:block" />

        {/* Copy */}
        <div data-story-copy className="self-center">
          <p className="text-[11px] uppercase tracking-wideish text-gold">
            Shane&apos;s Story
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-cream md:text-4xl lg:text-5xl">
            From FIFO to Freedom
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-cream/85 md:text-base">
            I came from housing commission, worked 100+ hour weeks FIFO, broke
            my back and missed too much of life that I can&apos;t get back.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-cream/85 md:text-base">
            Trading gave me another option. Now I help everyday Australians do
            the same.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 border border-gold px-6 py-3 text-[11px] uppercase tracking-wideish text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink"
          >
            Watch My Full Story <ArrowRight size={14} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 self-center sm:grid-cols-4 lg:grid-cols-1 lg:gap-8">
          {STATS.map((stat) => (
            <div
              data-stat-item
              key={stat.label}
              className="transition-transform duration-300 hover:scale-105"
            >
              <p
                className="font-display text-2xl font-bold leading-none text-gold md:text-3xl"
                {...(stat.countTarget
                  ? {
                      "data-count-target": stat.countTarget,
                      "data-count-suffix": stat.countSuffix,
                    }
                  : {})}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-wide text-cream/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}