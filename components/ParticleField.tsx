"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 100);
    camera.position.set(0, 0, 5);

    // ── Particles ────────────────────────────────────────────
    const N = 220;
    const pPos = new Float32Array(N * 3);
    const pVel = Array.from({ length: N }, () => ({
      x: (Math.random() - 0.5) * 0.003,
      y: (Math.random() - 0.5) * 0.002,
    }));

    for (let i = 0; i < N; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 18;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xd7a94e,
      size: 0.048,
      transparent: true,
      opacity: 0.72,
      sizeAttenuation: true,
    });
    const pointsMesh = new THREE.Points(pGeo, pMat);
    scene.add(pointsMesh);

    // ── Connecting lines ─────────────────────────────────────
    const CONNS = 50;
    const connPairs: [number, number][] = Array.from({ length: CONNS }, () => [
      Math.floor(Math.random() * N),
      Math.floor(Math.random() * N),
    ]);

    const lPos = new Float32Array(CONNS * 6);
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(lPos, 3));
    const lMat = new THREE.LineBasicMaterial({
      color: 0xd7a94e,
      transparent: true,
      opacity: 0.13,
    });
    const linesMesh = new THREE.LineSegments(lGeo, lMat);
    scene.add(linesMesh);

    // ── Input tracking ────────────────────────────────────────
    let mx = 0, my = 0, scrollY = 0;

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // ── Render loop ───────────────────────────────────────────
    let raf: number;
    let t = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.003;

      for (let i = 0; i < N; i++) {
        pPos[i * 3]     += pVel[i].x + Math.sin(t + i * 0.5) * 0.0006;
        pPos[i * 3 + 1] += pVel[i].y + Math.cos(t + i * 0.4) * 0.0004;

        if (pPos[i * 3] >  9) pPos[i * 3] = -9;
        if (pPos[i * 3] < -9) pPos[i * 3] =  9;
        if (pPos[i * 3 + 1] >  5.5) pPos[i * 3 + 1] = -5.5;
        if (pPos[i * 3 + 1] < -5.5) pPos[i * 3 + 1] =  5.5;
      }
      pGeo.attributes.position.needsUpdate = true;

      for (let i = 0; i < CONNS; i++) {
        const [a, b] = connPairs[i];
        lPos[i * 6]     = pPos[a * 3];     lPos[i * 6 + 1] = pPos[a * 3 + 1]; lPos[i * 6 + 2] = pPos[a * 3 + 2];
        lPos[i * 6 + 3] = pPos[b * 3];     lPos[i * 6 + 4] = pPos[b * 3 + 1]; lPos[i * 6 + 5] = pPos[b * 3 + 2];
      }
      lGeo.attributes.position.needsUpdate = true;

      // Smooth camera parallax
      const targetX =  mx * 0.35;
      const targetY = -my * 0.2 - (scrollY / window.innerHeight) * 1.8;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      pGeo.dispose(); pMat.dispose();
      lGeo.dispose(); lMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none absolute inset-0 z-[1]" />;
}
