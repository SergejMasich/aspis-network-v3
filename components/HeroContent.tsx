const NAV = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" }
];

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-5">
      {/* Top nav */}
      <header className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center">
            <span className="text-[12px] tracking-widest text-white/80">A</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">ASPIS</div>
            <div className="text-xs text-white/50">Network</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            Contact
          </a>
          <a
            href="#cta"
            className="rounded-xl bg-aspis-mint/90 px-4 py-2 text-sm font-semibold text-black hover:bg-aspis-mint transition"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Center content */}
      <div className="flex flex-1 items-center">
        <div className="w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-aspis-mint" />
            An Immutable Shield for Your Capital
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="text-white">ASPIS</span>{" "}
            <span className="text-aspis-mint">Network</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            A unified security layer for capital and data: secure routing, transparent
            verification, adaptive risk controls — designed for modern markets.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-2xl bg-aspis-mint/90 px-5 py-3 text-sm font-semibold text-black hover:bg-aspis-mint transition"
            >
              Explore features
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-5 py-3 text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              View architecture
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Secure", v: "Policy-driven controls" },
              { k: "Transparent", v: "Verifiable flows" },
              { k: "Adaptive", v: "Dynamic risk engine" },
              { k: "Unified", v: "One research hub" }
            ].map((it) => (
              <div key={it.k} className="glass rounded-2xl p-4">
                <div className="text-sm font-semibold">{it.k}</div>
                <div className="mt-1 text-xs text-white/60">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
