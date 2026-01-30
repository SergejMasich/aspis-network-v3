"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { copy, Locale } from "@/lib/copy";
import ShieldAssembly from "@/components/shield/ShieldAssembly";

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

export default function ScrollHeroScene({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [p, setP] = useState(0);

  const SCENE_VH = 260;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scenePx = (SCENE_VH / 100) * window.innerHeight;
      const maxTravel = Math.max(1, scenePx - window.innerHeight);
      const traveled = clamp(-rect.top, 0, maxTravel);
      setP(traveled / maxTravel);
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  const phases = useMemo(() => {
    const headerHoldEnd = 0.28;
    const headerOutEnd = 0.42;
    const splitEnd = 0.72;

    const headerOutT = clamp((p - headerHoldEnd) / (headerOutEnd - headerHoldEnd));
    const splitT = clamp((p - headerOutEnd) / (splitEnd - headerOutEnd));
    const convergeT = clamp((p - splitEnd) / (1 - splitEnd));

    return { headerOutT, splitT, convergeT };
  }, [p]);

  const headerOpacity = 1 - phases.headerOutT;
  const headerY = -160 * phases.headerOutT;

  return (
    <section ref={sectionRef} style={{ height: `${SCENE_VH}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Layer 1: shield system */}
        <ShieldAssembly splitT={phases.splitT} convergeT={phases.convergeT} />

        {/* Layer 2: hero content */}
        <div className="relative z-10 h-full">
          <div
            className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center"
            style={{
              opacity: headerOpacity,
              transform: `translate3d(0, ${headerY}px, 0)`,
              transition: "opacity 0.08s linear, transform 0.08s linear",
            }}
          >
            <div className="kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.hero.pill}
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-white">{t.hero.h1a}</span>{" "}
              <span className="text-emerald-300">{t.hero.h1b}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              {t.hero.p}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`/${locale}#features`} className="btn-primary">
                {t.hero.primary}
              </a>
              <a href={`/${locale}#architecture`} className="btn-secondary">
                {t.hero.secondary}
              </a>
            </div>

            <div className="mt-10 text-xs text-white/50">
              {t.hero.hint}
            </div>
          </div>
        </div>

        {/* blend down */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  );
}
