const CASES = [
  {
    title: "Crypto market research",
    desc: "Combine on-chain, derivatives, flows, narratives, and macro in one place."
  },
  {
    title: "Risk & execution workflows",
    desc: "Pre-trade checks, policy enforcement, and post-trade auditability."
  },
  {
    title: "Fund & treasury protection",
    desc: "Operational controls and transparent traceability across systems."
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Use cases</h2>
        <p className="mt-3 max-w-2xl text-white/65">
          This is the content foundation. Later, the scroll story can “open the shield” and
          reveal these modules visually.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {CASES.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-6">
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
