import { copy, Locale } from "@/lib/copy";

export default function UseCases({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const items = [
    ["Crypto research", "On-chain + derivatives + narratives in one place."],
    ["Risk workflows", "Pre-trade checks and post-trade audit trail."],
    ["Treasury defense", "Operational safeguards for capital."],
  ];

  return (
    <section id="use-cases" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.sections.useCasesTitle}</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map(([a, b]) => (
            <div key={a} className="glass rounded-2xl p-6">
              <div className="text-base font-semibold">{a}</div>
              <div className="mt-2 text-sm text-white/65">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
