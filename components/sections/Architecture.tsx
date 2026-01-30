import { copy, Locale } from "@/lib/copy";

export default function Architecture({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="architecture" className="section bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.sections.architectureTitle}
            </h2>
            <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
              Two-layer hero is intentional: system layer (shield + streams) and product layer (content).
              Later we swap the shield layer to 3D without rewriting the layout.
            </p>

            <div className="mt-8 space-y-3">
              {[
                ["Layer 1", "Shield + streams (system layer)"],
                ["Layer 2", "Content + CTA (product layer)"],
                ["Narrative", "Open → converge to the core (true signal)"],
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
                After opening: streams flow from shells into the planet-core — the “true signal” center.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
