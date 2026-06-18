import type { ElementType } from "react";
import { HardHat, Truck, Briefcase, Users, Glasses } from "lucide-react";
import { AUDIENCES } from "@/lib/data";

const ICONS: Record<string, ElementType> = {
  HardHat,
  Truck,
  Briefcase,
  Users,
  Glasses,
};

export default function IsThisYou() {
  return (
    <section className="relative border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          data-ity-title
          className="mb-10 text-center font-display text-2xl font-semibold uppercase tracking-wide text-cream sm:mb-12"
        >
          Is This You?
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-line">
          {AUDIENCES.map(({ icon, title, desc }) => {
            const Icon = ICONS[icon] || Users;

            return (
              <div
                data-ity-card
                key={title}
                className="group rounded-sm border border-line/60 bg-ink/20 px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-5 lg:py-2"
              >
                <Icon
                  className="mx-auto mb-4 text-gold transition-transform duration-300 group-hover:scale-110"
                  size={34}
                  strokeWidth={1.5}
                />

                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
                  {title}
                </h3>

                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-relaxed text-cream/65">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}