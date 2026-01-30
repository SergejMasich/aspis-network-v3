export default function ShieldLayer() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Streams background */}
      <div className="absolute inset-0 opacity-70">
        <div className="aspis-streams" />
      </div>

      {/* Soft glow behind the shield */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),rgba(0,0,0,0)_60%)] blur-2xl sm:h-[640px] sm:w-[640px]" />

      {/* Shield placeholder (SVG). Later you can swap to 3D model without changing architecture */}
      <div className="absolute left-1/2 top-[52%] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:w-[420px] lg:w-[520px]">
        <svg viewBox="0 0 520 620" className="h-auto w-full">
          {/* Outer silhouette */}
          <path
            d="M260 18
               C350 55 430 70 492 78
               C495 240 455 380 260 602
               C65 380 25 240 28 78
               C90 70 170 55 260 18Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
          />
          {/* Inner glass */}
          <path
            d="M260 58
               C338 88 410 100 458 106
               C458 248 423 368 260 548
               C97 368 62 248 62 106
               C110 100 182 88 260 58Z"
            fill="rgba(16,185,129,0.06)"
            stroke="rgba(16,185,129,0.26)"
            strokeWidth="2"
          />

          {/* Core */}
          <circle
            cx="260"
            cy="290"
            r="68"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
          />
          <circle cx="260" cy="290" r="26" fill="rgba(16,185,129,0.35)" />

          {/* Subtle lines */}
          <path
            d="M110 170 C160 210 200 220 260 220 C320 220 360 210 410 170"
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="2"
          />
          <path
            d="M135 365 C190 405 220 420 260 420 C300 420 330 405 385 365"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}
