"use client";

import { useEffect, useState } from "react";
import { copy, Locale } from "@/lib/copy";

export default function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const base = `/${locale}`;
  const [open, setOpen] = useState(false);

  // Close menu on route hash change (basic UX for anchor nav)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const links = [
    { href: `${base}#features`, label: t.nav.features },
    { href: `${base}#architecture`, label: t.nav.architecture },
    { href: `${base}#use-cases`, label: t.nav.useCases },
    { href: `${base}#roadmap`, label: t.nav.roadmap },
    { href: `${base}#faq`, label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href={base} className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="text-xs tracking-widest text-white/80">A</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">ASPIS</div>
            <div className="text-xs text-white/50">Network</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language */}
          <a
            className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10"
            href={locale === "en" ? "/ru" : "/en"}
            aria-label="Switch language"
          >
            {locale === "en" ? "RU" : "EN"}
          </a>

          {/* Desktop CTA */}
          <a
            className="hidden rounded-xl bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 md:inline-flex"
            href={`${base}#features`}
          >
            {t.nav.cta}
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden rounded-xl bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/85 backdrop-blur">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`${base}#features`}
                className="rounded-xl bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
