import { copy, Locale } from "@/lib/copy";

export default function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const base = `/${locale}`;

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

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href={`${base}#features`}>{t.nav.features}</a>
          <a className="hover:text-white" href={`${base}#architecture`}>{t.nav.architecture}</a>
          <a className="hover:text-white" href={`${base}#use-cases`}>{t.nav.useCases}</a>
          <a className="hover:text-white" href={`${base}#roadmap`}>{t.nav.roadmap}</a>
          <a className="hover:text-white" href={`${base}#faq`}>{t.nav.faq}</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* language switch */}
          <a
            className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10"
            href={locale === "en" ? "/ru" : "/en"}
          >
            {locale === "en" ? "RU" : "EN"}
          </a>

          <a
            className="rounded-xl bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
            href={`${base}#features`}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
