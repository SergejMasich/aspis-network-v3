import { copy, Locale } from "@/lib/copy";

export default function Roadmap({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const steps = [
    ["Phase 1", "Stable UI + provider adapters"],
    ["Phase 2", "Shield opening story + modules reveal"],
    ["Phase 3", "Risk engine + alerts + auditability"],
    ["Phase 4", "Ecosystem integrations"],
  ];

  return (
    <section id="roadmap" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.sections.roadmapTitle}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([a, b]) => (
            <div key={a} className="glass rounded-2xl p-6">
              <div className="text-xs text-white/55">{a}</div>
              <div className="mt-2 text-sm text-white/75">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
