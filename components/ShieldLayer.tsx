type ShieldLayerProps = {
  // Future-proof: later we can re-enable scroll control safely
  progress?: number; // 0..1
};

export default function ShieldLayer({ progress }: ShieldLayerProps) {
  // progress is not used yet (keeps build stable, no scroll logic for now)
  void progress;

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Background data streams */}
      <div className="absolute inset-0 opacity-80">
        <div className="aspis-streams absolute inset-0" />
      </div>

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl sm:h-[720px] sm:w-[720px]" />

      {/* Shield */}
      <div className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 sm:w-[420px] md:w-[520px]">
        <svg viewBox="0 0 400 520" className="h-auto w-full">
          {/* Outer stroke */}
          <path
            d="M200 18
               C260 58 320 70 372 78
               C382 220 355 354 200 502
               C45 354 18 220 28 78
               C80 70 140 58 200 18Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
          />

          {/* Inner glass */}
          <path
            d="M200 50
               C252 84 306 94 352 102
               C358 230 338 340 200 468
               C62 340 42 230 48 102
               C94 94 148 84 200 50Z"
            fill="rgba(16,185,129,0.07)"
            stroke="rgba(16,185,129,0.25)"
            strokeWidth="2"
          />

          {/* Core */}
          <circle cx="200" cy="255" r="62" fill="rgba(255,255,255,0.06)" />
          <circle cx="200" cy="255" r="22" fill="rgba(16,185,129,0.35)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}
