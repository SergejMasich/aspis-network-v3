export default function HeroContent() {
  return (
    <div className="mx-auto flex h-[100svh] min-h-[640px] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Immutable Shield for Capital
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          ASPIS Network
        </h1>

        <p className="mt-4 text-balance text-base leading-relaxed text-white/70 sm:text-lg">
          Secure. Transparent. Adaptive. A layered defense for on-chain capital,
          built for analytics-driven decisions.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#learn"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-medium text-black transition hover:bg-emerald-300"
          >
            Learn more
          </a>

          <a
            href="#docs"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Open docs
          </a>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
            <div className="text-xs text-white/60">Layered Security</div>
            <div className="mt-1 text-sm text-white/90">Shield-based model</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
            <div className="text-xs text-white/60">Data Streams</div>
            <div className="mt-1 text-sm text-white/90">Unified analytics</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
            <div className="text-xs text-white/60">Adaptive</div>
            <div className="mt-1 text-sm text-white/90">Risk-aware routing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
