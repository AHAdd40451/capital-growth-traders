import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background */}
      <div data-hero-bg className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="City skyline at dusk"
          fill
          priority
          className="object-cover object-[70%_center] opacity-100 lg:object-center"
        />

        <div className="absolute inset-0 bg-ink/45 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/45 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div>
          <p
            data-hero-eyebrow
            className="mb-3 text-[10px] uppercase tracking-wideish text-gold sm:mb-4 sm:text-[11px]"
          >
            Welcome to CGT
          </p>

          <h1
            data-hero-title
            className="font-display text-4xl font-bold uppercase leading-[1.05] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build a <span className="text-gold">Second Income.</span>
            <br />
            Create Freedom
          </h1>

          <p
            data-hero-sub
            className="mt-4 max-w-md text-xs leading-relaxed text-cream/75 sm:mt-5 sm:text-sm"
          >
            Practical trading education for everyday Australians who want more
            options for themselves and their families.
          </p>

          <div data-hero-btns className="mt-6 sm:mt-8">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-wideish text-ink transition-all duration-300 hover:scale-105 hover:bg-goldDim"
            >
              Start Free Training <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}