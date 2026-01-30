const ITEMS = [
  {
    title: "Unified research workspace",
    desc: "Aggregate market intelligence into one interface: signals, fundamentals, narratives."
  },
  {
    title: "Transparent verification",
    desc: "Every feed can be validated and attributed, reducing noise and manipulation risk."
  },
  {
    title: "Secure routing layer",
    desc: "Policy-based routing of data and capital flows: permissions, limits, and controls."
  },
  {
    title: "Adaptive risk engine",
    desc: "Context-aware thresholds that adjust to volatility and regime shifts."
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Core features
          </h2>
          <p className="mt-3 text-white/65">
            A clean foundation. Later we can add the scroll narrative and the shield opening
            scene without reworking the layout.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-5">
              <div className="text-base font-semibold">{it.title}</div>
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
