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
  const rafRef = useRef<number | null>(null);
  const [p, setP] = useState(0);

  // сцена длится ~ 260vh
  const SCENE_VH = 260;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scenePx = (SCENE_VH / 100) * window.innerHeight;
      const maxTravel = Math.max(1, scenePx - window.innerHeight);

      const traveled = clamp(-rect.top, 0, maxTravel);
      setP(traveled / maxTravel);

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // фазы:
  // 0..0.28 — header на месте
  // 0.28..0.42 — header уходит
  // 0.42..0.72 — split раскрытие
  // 0.72..1.00 — converge: потоки к ядру
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
  const headerY = -140 * phases.headerOutT;

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
              transition: "opacity 0.06s linear, transform 0.06s linear",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.hero.pill}
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-white">{t.hero.h1a}</span>{" "}
              <span className="text-emerald-300">{t.hero.h1b}</span>
            </h1>

            <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              {t.hero.p}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`/${locale}#features`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-medium text-black hover:bg-emerald-300"
              >
                {t.hero.primary}
              </a>
              <a
                href={`/${locale}#architecture`}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {t.hero.secondary}
              </a>
            </div>

            <div className="mt-10 text-xs text-white/50">
              {t.hero.hint}
            </div>
          </div>
        </div>

        {/* blend down */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  );
}
