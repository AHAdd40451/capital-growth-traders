import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image, right-weighted like the design */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="City skyline at dusk"
          fill
          priority
          className="object-cover object-[75%_center] opacity-100 transition-transform duration-700 hover:scale-105 lg:object-right"
        />

        {/* Mobile: flat overlay / lg+: side gradient */}
        <div className="absolute inset-0 bg-ink/35 lg:bg-gradient-to-r lg:from-ink/80 lg:via-ink/35 lg:to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-36">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-wideish text-gold transition-transform duration-300 hover:scale-105 sm:mb-4 sm:text-[11px]">
            Welcome to CGT
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-cream transition-transform duration-300 hover:scale-[1.02] sm:text-5xl md:text-6xl">
            Build a <span className="text-gold">Second Income.</span>
            <br />
            Create Freedom
          </h1>

          <p className="mt-4 max-w-md text-xs leading-relaxed transition-transform duration-300 hover:scale-[1.02] sm:mt-5 sm:text-sm">
            Practical trading education for everyday Australians who want more options for
            themselves and their families.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#cta"
              className="flex items-center justify-center gap-2 bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-wideish text-ink transition-all duration-300 hover:scale-105 hover:bg-goldDim sm:justify-start"
            >
              Start Free Training <ArrowRight size={14} />
            </a>

            <a
              href="#story"
              className="flex items-center justify-center gap-2 border border-line px-6 py-3 text-[11px] uppercase tracking-wideish text-cream transition-all duration-300 hover:scale-105 hover:border-gold hover:text-gold sm:justify-start"
            >
              Watch Shane&apos;s Story <Play size={14} />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] sm:mt-10 sm:gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="h-8 w-8 rounded-full border-2 border-ink bg-card transition-transform duration-300 hover:scale-110 sm:h-9 sm:w-9"
                  aria-hidden
                />
              ))}
            </div>

            <div>
              <div className="flex gap-0.5 text-gold">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={12} fill="currentColor" />
                ))}
              </div>

              <p className="mt-1 text-[11px] sm:text-xs">
                10,000+ Australians building their second income
              </p>
            </div>
          </div>
        </div>

        {/* Right column: floating play badge */}
        <div className="relative hidden lg:block">
          <a
            href="#story"
            className="absolute bottom-12 right-8 flex items-center gap-4 text-cream transition-transform duration-300 hover:scale-105"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 transition-transform duration-300 hover:scale-110">
              <Play size={20} className="text-gold" fill="currentColor" />
            </span>

            <span className="text-[11px] uppercase tracking-wideish">
              Watch
              <br />
              Shane&apos;s Story
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}