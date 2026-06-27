"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

const hiddenLinks = ["Free Training", "Programs"];

const getNavHref = (link: string) => {
  if (link === "Home") return "/";
  if (link === "Blog") return "/blog";

  return `/#${link.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const filteredNavLinks = NAV_LINKS.filter(
    (link) => !hiddenLinks.includes(link)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (link: string) => {
    if (link === "Home") return pathname === "/";
    if (link === "Blog") return pathname.startsWith("/blog");

    return false;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-8 px-4 lg:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <span className="font-display text-2xl font-bold tracking-wide text-gold">
            CGT
          </span>

          <span className="hidden border-l border-line pl-3 text-[8px] uppercase leading-[1.5] tracking-wideish text-muted sm:block">
            Creative
            <br />
            Genius
            <br />
            Trading
          </span>
        </a>

        <nav className="hidden items-center gap-9 xl:flex">
          {filteredNavLinks.map((link) => {
            const active = isActiveLink(link);

            return (
              <a
                key={link}
                href={getNavHref(link)}
                className={`whitespace-nowrap text-[11px] uppercase tracking-[0.12em] transition-all duration-300 hover:scale-105 hover:text-gold ${
                  active
                    ? "border-b-2 border-gold pb-1 text-cream"
                    : "text-cream/70"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href="/#cta"
            className="hidden items-center gap-2 border border-gold px-4 py-2 text-[11px] uppercase tracking-wideish text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink md:flex"
          >
            SIGNUP TO JOIN FREE COMMUNITY <ArrowRight size={14} />
          </a>

          <button
            className="text-cream transition-transform duration-300 hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-ink/95 px-4 py-4 backdrop-blur-md">
          {filteredNavLinks.map((link) => (
            <a
              key={link}
              href={getNavHref(link)}
              className="block py-2 text-sm uppercase tracking-wideish text-muted transition-all duration-300 hover:scale-[1.02] hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}