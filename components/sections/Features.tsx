import { copy, Locale } from "@/lib/copy";

export default function Features({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const items = [
    { title: "Unified research", desc: "Multiple providers → one premium interface." },
    { title: "Verification", desc: "Attribution, consistency checks, reduced noise." },
    { title: "Protection", desc: "Policy-driven controls and safeguards." },
    { title: "Adaptivity", desc: "Dynamic thresholds for volatility regimes." },
  ];

  return (
    <section id="features" className="section bg-black">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.sections.featuresTitle}
            </h2>
            <p className="mt-3 text-white/65">
              Premium structure first. Animation and 3D can be added without rewriting the page.
            </p>
          </div>

          <div className="glass rounded-2xl px-4 py-3 text-xs text-white/65">
            Built for mobile & desktop
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="glass group rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold">{it.title}</div>
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70 opacity-70 group-hover:opacity-100" />
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">
                {it.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
