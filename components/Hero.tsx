import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";
import ParticleField from "@/components/ParticleField";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div data-hero-bg className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="City skyline at dusk"
          fill
          priority
          className="object-cover object-[75%_center] opacity-100 lg:object-right"
        />
        <div className="absolute inset-0 bg-ink/35 lg:bg-gradient-to-r lg:from-ink/80 lg:via-ink/35 lg:to-transparent" />
      </div>

      {/* Three.js particle constellation */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-36">
        <p data-hero-eyebrow className="mb-3 text-[10px] uppercase tracking-wideish text-gold sm:mb-4 sm:text-[11px]">
          Welcome to CGT
        </p>

        <h1 data-hero-title className="font-display text-4xl font-bold uppercase leading-[1.05] text-cream sm:text-5xl md:text-6xl">
          Build a <span className="text-gold">Second Income.</span>
          <br />
          Create Freedom
        </h1>

        <p data-hero-sub className="mt-4 max-w-md text-xs leading-relaxed sm:mt-5 sm:text-sm">
          Practical trading education for everyday Australians who want more options for
          themselves and their families.
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
    </section>
  );
}
