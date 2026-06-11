"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const tween = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      transformOrigin: "left center",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-[2px]">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gold"
        style={{ boxShadow: "0 0 12px 1px rgba(215,169,78,0.85)" }}
      />
    </div>
  );
}
