export default function Sections() {
  return (
    <div className="bg-black text-white">
      <section id="learn" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Why ASPIS
        </h2>
        <p className="mt-4 max-w-3xl text-white/70">
          A single surface for analytics, risk signals, and capital protection.
          This block is a placeholder section to lock page architecture.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/80">Aggregation</div>
            <div className="mt-2 text-sm text-white/60">
              Multiple providers → one view.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/80">Verification</div>
            <div className="mt-2 text-sm text-white/60">
              Cross-source consistency checks.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/80">Protection</div>
            <div className="mt-2 text-sm text-white/60">
              Shield concept → adaptive policy later.
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Documentation
          </h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Placeholder section. We’ll connect real content after the scroll
            scene is stable.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            Coming soon: API providers, data schema, risk model, and roadmap.
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} ASPIS Network. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
