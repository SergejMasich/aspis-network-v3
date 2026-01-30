const STEPS = [
  { q: "Q1", t: "Foundation", d: "Stable UI + provider adapters + verification baseline." },
  { q: "Q2", t: "Shield opening story", d: "Scroll narrative and multi-part reveal scene." },
  { q: "Q3", t: "Risk engine", d: "Adaptive policies, alerts, and audit trails." },
  { q: "Q4", t: "Ecosystem", d: "Partner feeds, integrations, and expansion." }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Roadmap</h2>
        <p className="mt-3 max-w-2xl text-white/65">
          This is a placeholder roadmap. Replace the text anytime — structure stays.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.q} className="glass rounded-2xl p-6">
              <div className="text-xs text-white/55">{s.q}</div>
              <div className="mt-2 text-base font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-white/65">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
