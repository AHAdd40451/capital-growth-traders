"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationsInit() {
  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | undefined;

    const rafId = requestAnimationFrame(() => {
      // Pre-hide hero elements instantly to avoid flash before entrance animation
      gsap.set(
        "[data-hero-eyebrow],[data-hero-title],[data-hero-sub],[data-hero-btns],[data-hero-proof]",
        { autoAlpha: 0 }
      );

      ctx = gsap.context(() => {
        // ── Hero entrance (staggered on load) ───────────────────
        gsap.timeline({ delay: 0.35 })
          .fromTo("[data-hero-eyebrow]", { y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" })
          .fromTo("[data-hero-title]",   { y: 52 }, { autoAlpha: 1, y: 0, duration: 0.95, ease: "power3.out" }, "-=0.45")
          .fromTo("[data-hero-sub]",     { y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7,  ease: "power2.out" }, "-=0.55")
          .fromTo("[data-hero-btns]",    { y: 22 }, { autoAlpha: 1, y: 0, duration: 0.6,  ease: "power2.out" }, "-=0.42")
          .fromTo("[data-hero-proof]",   { y: 16 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.38");

        // ── Is This You ─────────────────────────────────────────
        gsap.from("[data-ity-title]", {
          scrollTrigger: { trigger: "[data-ity-title]", start: "top 86%" },
          autoAlpha: 0, y: 32, duration: 0.65, ease: "power2.out",
        });
        gsap.from("[data-ity-card]", {
          scrollTrigger: { trigger: "[data-ity-card]", start: "top 82%" },
          autoAlpha: 0, y: 44, scale: 0.88,
          duration: 0.65, stagger: 0.1, ease: "back.out(1.6)",
        });

        // ── Problem ─────────────────────────────────────────────
        gsap.from("[data-prob-eyebrow]", {
          scrollTrigger: { trigger: "[data-prob-eyebrow]", start: "top 82%" },
          autoAlpha: 0, x: -32, duration: 0.6, ease: "power2.out",
        });
        gsap.from("[data-prob-title]", {
          scrollTrigger: { trigger: "[data-prob-title]", start: "top 82%" },
          autoAlpha: 0, x: -55, duration: 0.8, ease: "power3.out", delay: 0.08,
        });
        gsap.from("[data-prob-point]", {
          scrollTrigger: { trigger: "[data-prob-point]", start: "top 80%" },
          autoAlpha: 0, x: -32, duration: 0.5, stagger: 0.11, ease: "power2.out",
        });

        // ── Framework ───────────────────────────────────────────
        gsap.from("[data-fw-header]", {
          scrollTrigger: { trigger: "[data-fw-header]", start: "top 85%" },
          autoAlpha: 0, y: 36, duration: 0.65, ease: "power2.out",
        });
        gsap.from("[data-step-card]", {
          scrollTrigger: { trigger: "[data-step-card]", start: "top 80%" },
          autoAlpha: 0, y: 72, scale: 0.92,
          duration: 0.85, stagger: 0.22, ease: "power3.out", delay: 0.12,
        });

        // ── Story ────────────────────────────────────────────────
        gsap.from("[data-story-video]", {
          scrollTrigger: { trigger: "[data-story-video]", start: "top 82%" },
          autoAlpha: 0, x: -55, scale: 0.94, duration: 0.85, ease: "power3.out",
        });
        gsap.from("[data-story-copy]", {
          scrollTrigger: { trigger: "[data-story-copy]", start: "top 82%" },
          autoAlpha: 0, y: 34, duration: 0.75, ease: "power2.out", delay: 0.12,
        });
        gsap.from("[data-stat-item]", {
          scrollTrigger: { trigger: "[data-stat-item]", start: "top 82%" },
          autoAlpha: 0, x: 32, duration: 0.55, stagger: 0.13, ease: "power2.out",
        });

        // Count-up for numeric stats
        document.querySelectorAll<HTMLElement>("[data-count-target]").forEach((el) => {
          const end    = parseFloat(el.getAttribute("data-count-target") || "0");
          const suffix = el.getAttribute("data-count-suffix") || "";
          const obj    = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate() {
              el.textContent = Math.round(obj.val).toLocaleString() + suffix;
            },
          });
        });

        // ── Testimonials ────────────────────────────────────────
        gsap.from("[data-testi-title]", {
          scrollTrigger: { trigger: "[data-testi-title]", start: "top 86%" },
          autoAlpha: 0, y: 32, duration: 0.65, ease: "power2.out",
        });
        gsap.from("[data-testi-card]", {
          scrollTrigger: { trigger: "[data-testi-card]", start: "top 82%" },
          autoAlpha: 0, y: 44, scale: 0.94,
          duration: 0.65, stagger: 0.1, ease: "power3.out",
        });

        // ── CTA ─────────────────────────────────────────────────
        gsap.from("[data-cta-copy]", {
          scrollTrigger: { trigger: "[data-cta-copy]", start: "top 84%" },
          autoAlpha: 0, x: -55, duration: 0.85, ease: "power3.out",
        });
        gsap.from("[data-cta-form]", {
          scrollTrigger: { trigger: "[data-cta-form]", start: "top 84%" },
          autoAlpha: 0, y: 34, duration: 0.75, ease: "power3.out", delay: 0.2,
        });
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return null;
}
