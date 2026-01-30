import { copy, Locale } from "@/lib/copy";

export default function Features({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const items = [
    ["Unified research", "Multiple providers → one premium interface."],
    ["Verification", "Attribution, consistency checks, reduced noise."],
    ["Protection", "Policy-driven controls and safeguards."],
    ["Adaptivity", "Dynamic thresholds for volatility regimes."],
  ];

  return (
    <section id="features" className="section bg-black">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.sections.featuresTitle}
          </h2>
          <p className="mt-3 text-white/65">
            A clean, premium landing foundation. The story scene sits above without breaking readability.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([a, b]) => (
            <div key={a} className="glass rounded-2xl p-6">
              <div className="text-base font-semibold">{a}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
