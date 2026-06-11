import { HardHat, Truck, Briefcase, Users, Glasses } from "lucide-react";
import { AUDIENCES } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  HardHat,
  Truck,
  Briefcase,
  Users,
  Glasses,
};

export default function IsThisYou() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="mb-12 text-center font-display text-2xl font-semibold uppercase tracking-wide text-cream transition-transform duration-300 hover:scale-105">
          Is This You?
        </h2>

        <div className="grid grid-cols-2 gap-y-10 divide-line md:grid-cols-5 md:divide-x">
          {AUDIENCES.map(({ icon, title, desc }) => {
            const Icon = ICONS[icon];

            return (
              <div
                key={title}
                className="px-4 text-center transition-transform duration-300 hover:scale-105"
              >
                <Icon
                  className="mx-auto mb-4 text-gold transition-transform duration-300 hover:scale-110"
                  size={32}
                  strokeWidth={1.5}
                />

                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}