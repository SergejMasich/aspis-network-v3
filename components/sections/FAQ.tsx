const FAQS = [
  {
    q: "Is this optimized for mobile, tablet, and desktop?",
    a: "Yes. The layout uses responsive Tailwind breakpoints and scales naturally across devices."
  },
  {
    q: "Where is the 3D shield / animation?",
    a: "Not included in this stable baseline. The architecture is prepared so you can drop it into the ShieldLayer later."
  },
  {
    q: "Will scroll narrative require rework?",
    a: "No. The Hero is already split into two layers so we can animate Layer 1 while keeping Layer 2 readable."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {FAQS.map((it) => (
            <div key={it.q} className="glass rounded-2xl p-6">
              <div className="text-base font-semibold">{it.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">
                {it.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
