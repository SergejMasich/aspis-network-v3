export default function Architecture() {
  return (
    <section id="architecture" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Architecture
            </h2>
            <p className="mt-3 text-white/65">
              Two-layer presentation is intentional: the shield is a persistent “system
              layer”, while the content is the “product layer”.
            </p>

            <div className="mt-8 space-y-3">
              {[
                ["Layer 1", "Shield + data streams (background system)"],
                ["Layer 2", "Hero content + navigation (foreground product)"],
                ["Below", "Sections that explain value, mechanics, and roadmap"]
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-5">
                  <div className="text-sm font-semibold">{k}</div>
                  <div className="mt-1 text-sm text-white/65">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-semibold">System diagram (placeholder)</div>
            <div className="mt-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm text-white/70">
                Providers → Normalization → Verification → Risk Engine → Unified UI
              </div>
              <div className="mt-3 text-xs text-white/55">
                This block is intentionally simple now. Later we can replace it with an
                interactive diagram or animated scroll scene.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
