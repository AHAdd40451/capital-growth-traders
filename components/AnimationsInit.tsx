"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationsInit() {
  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | undefined;

    const rafId = requestAnimationFrame(() => {
      // Pre-hide hero elements to eliminate any load flash
      gsap.set(
        "[data-hero-eyebrow],[data-hero-title],[data-hero-sub],[data-hero-btns]",
        { autoAlpha: 0 }
      );

      ctx = gsap.context(() => {

        // ── Hero: staggered entrance ─────────────────────────────
        gsap.timeline({ delay: 0.35 })
          .fromTo("[data-hero-eyebrow]", { y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7,  ease: "power3.out" })
          .fromTo("[data-hero-title]",   { y: 52 }, { autoAlpha: 1, y: 0, duration: 0.95, ease: "power3.out" }, "-=0.45")
          .fromTo("[data-hero-sub]",     { y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7,  ease: "power2.out" }, "-=0.55")
          .fromTo("[data-hero-btns]",    { y: 22 }, { autoAlpha: 1, y: 0, duration: 0.6,  ease: "power2.out" }, "-=0.42");

        // ── Gold underlines draw left-to-right ────────────────────
        // Each [data-heading-line] is already scale-x-0 via inline style
        gsap.to("[data-heading-line]", {
          scaleX: 1,
          duration: 0.85,
          ease: "power3.inOut",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-heading-line]",
            start: "top 88%",
          },
        });

        // ── Is This You: clip-path left→right wipe ───────────────
        gsap.from("[data-ity-title]", {
          scrollTrigger: { trigger: "[data-ity-title]", start: "top 86%" },
          autoAlpha: 0, y: 28, duration: 0.65, ease: "power2.out",
        });
        gsap.fromTo("[data-ity-card]",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.85,
            stagger: 0.11,
            ease: "power3.inOut",
            scrollTrigger: { trigger: "[data-ity-card]", start: "top 82%" },
          }
        );

        // ── Problem: layered entries ──────────────────────────────
        gsap.from("[data-prob-eyebrow]", {
          scrollTrigger: { trigger: "[data-prob-eyebrow]", start: "top 82%" },
          autoAlpha: 0, x: -32, duration: 0.6, ease: "power2.out",
        });
        gsap.from("[data-prob-title]", {
          scrollTrigger: { trigger: "[data-prob-title]", start: "top 82%" },
          autoAlpha: 0, x: -52, duration: 0.8, ease: "power3.out", delay: 0.08,
        });
        // Pain points stagger with gold line growing alongside
        const probPointTrigger = { trigger: "[data-prob-point]", start: "top 80%" };
        gsap.from("[data-prob-point]", {
          scrollTrigger: probPointTrigger,
          autoAlpha: 0, x: -28, duration: 0.5, stagger: 0.11, ease: "power2.out",
        });
        gsap.to("[data-prob-line]", {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: probPointTrigger,
        });
        // Floating tags drift in with bounce
        gsap.fromTo("[data-float-tag]",
          { autoAlpha: 0, y: 18, scale: 0.88 },
          {
            autoAlpha: 1, y: 0, scale: 1,
            duration: 0.75,
            stagger: 0.3,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: "[data-float-tag]", start: "top 75%" },
          }
        );

        // ── Framework: clip-path left→right per card ─────────────
        gsap.from("[data-fw-header]", {
          scrollTrigger: { trigger: "[data-fw-header]", start: "top 86%" },
          autoAlpha: 0, y: 32, duration: 0.65, ease: "power2.out",
        });
        gsap.fromTo("[data-step-card]",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.1,
            stagger: 0.28,
            ease: "expo.inOut",
            scrollTrigger: { trigger: "[data-fw-grid]", start: "top 72%" },
          }
        );

        // ── Story: entrance + 4-side border draw ──────────────────
        gsap.from("[data-story-copy]", {
          scrollTrigger: { trigger: "[data-story-copy]", start: "top 82%" },
          autoAlpha: 0, y: 34, duration: 0.75, ease: "power2.out", delay: 0.1,
        });
        gsap.from("[data-stat-item]", {
          scrollTrigger: { trigger: "[data-stat-item]", start: "top 82%" },
          autoAlpha: 0, x: 30, duration: 0.55, stagger: 0.13, ease: "power2.out",
        });
        // Video: slide in, then border draws around it
        gsap.timeline({
          scrollTrigger: { trigger: "[data-story-video]", start: "top 82%" },
        })
          .fromTo("[data-story-video]",
            { autoAlpha: 0, x: -50, scale: 0.95 },
            { autoAlpha: 1, x: 0, scale: 1, duration: 0.85, ease: "power3.out" }
          )
          .to("[data-border-top]",    { scaleX: 1, duration: 0.38, ease: "power2.inOut" }, "-=0.15")
          .to("[data-border-right]",  { scaleY: 1, duration: 0.32, ease: "power2.inOut" }, "-=0.04")
          .to("[data-border-bottom]", { scaleX: 1, duration: 0.32, ease: "power2.inOut" }, "-=0.04")
          .to("[data-border-left]",   { scaleY: 1, duration: 0.28, ease: "power2.inOut" }, "-=0.04");

        // Count-up stats
        document.querySelectorAll<HTMLElement>("[data-count-target]").forEach((el) => {
          const end    = parseFloat(el.getAttribute("data-count-target") || "0");
          const suffix = el.getAttribute("data-count-suffix") || "";
          const obj    = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
            onUpdate() { el.textContent = Math.round(obj.val).toLocaleString() + suffix; },
          });
        });

        // ── Testimonials: section fade, marquee rows slide up ────
        gsap.from("[data-testi-title]", {
          scrollTrigger: { trigger: "[data-testi-title]", start: "top 86%" },
          autoAlpha: 0, y: 28, duration: 0.65, ease: "power2.out",
        });
        gsap.from("[data-marquee-row]", {
          scrollTrigger: { trigger: "[data-marquee-row]", start: "top 86%" },
          autoAlpha: 0, y: 48,
          duration: 0.75, stagger: 0.22, ease: "power3.out",
        });

        // ── CTA: copy slides in + form rises with border draw ────
        gsap.from("[data-cta-copy]", {
          scrollTrigger: { trigger: "[data-cta-copy]", start: "top 84%" },
          autoAlpha: 0, x: -52, duration: 0.85, ease: "power3.out",
        });
        gsap.timeline({
          scrollTrigger: { trigger: "[data-cta-form]", start: "top 84%" },
        })
          .fromTo("[data-cta-form]",
            { autoAlpha: 0, y: 34 },
            { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out" }
          )
          .to("[data-cta-border-top]",    { scaleX: 1, duration: 0.42, ease: "power2.inOut" }, "-=0.1")
          .to("[data-cta-border-right]",  { scaleY: 1, duration: 0.34, ease: "power2.inOut" }, "-=0.04")
          .to("[data-cta-border-bottom]", { scaleX: 1, duration: 0.34, ease: "power2.inOut" }, "-=0.04")
          .to("[data-cta-border-left]",   { scaleY: 1, duration: 0.28, ease: "power2.inOut" }, "-=0.04");

      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return null;
}
