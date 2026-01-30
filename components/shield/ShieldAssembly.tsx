import PlanetCore from "./PlanetCore";
import TopShell from "./TopShell";
import BottomShell from "./BottomShell";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ShieldAssembly({
  splitT,
  convergeT,
}: {
  splitT: number;      // 0..1 (shield opens)
  convergeT: number;   // 0..1 (streams converge to core)
}) {
  // parts move away on split
  const topY = lerp(0, -170, splitT);
  const botY = lerp(0, 190, splitT);
  const spread = lerp(0, 60, splitT);

  // once opened, streams shift direction towards core
  const shellToCore = convergeT;

  // overall scale slightly increases for “full-screen feel”
  const scale = lerp(1.0, 1.08, splitT);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* global background streams */}
      <div className="absolute inset-0 opacity-80">
        <div className="aspis-streams absolute inset-0" />
      </div>

      {/* center stage */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative"
          style={{
            width: "min(78vw, 640px)",
            height: "min(78vw, 640px)",
            transform: `scale(${scale})`,
            transition: "transform 0.06s linear",
          }}
        >
          {/* incoming streams to shells */}
          <Streams mode={shellToCore < 0.1 ? "toShells" : "toCore"} intensity={shellToCore} />

          {/* top shell */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(${spread}px, ${topY}px, 0)`,
              transition: "transform 0.06s linear",
            }}
          >
            <TopShell />
          </div>

          {/* bottom shell */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(${-spread}px, ${botY}px, 0)`,
              transition: "transform 0.06s linear",
            }}
          >
            <BottomShell />
          </div>

          {/* planet core (always centered) */}
          <div className="absolute inset-0 grid place-items-center">
            <PlanetCore convergeT={convergeT} />
          </div>

          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.62)_70%,rgba(0,0,0,0.92)_100%)]" />
        </div>
      </div>
    </div>
  );
}

function Streams({ mode, intensity }: { mode: "toShells" | "toCore"; intensity: number }) {
  // visual trick: same lines, but swap opacity between two groups
  const toShellsOpacity = mode === "toShells" ? 0.55 : Math.max(0, 0.55 - intensity * 0.55);
  const toCoreOpacity = mode === "toCore" ? 0.55 + intensity * 0.35 : 0;

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          opacity: toShellsOpacity,
          transition: "opacity 0.12s linear",
        }}
      >
        <StreamLines variant="outer" />
      </div>

      <div
        className="absolute inset-0"
        style={{
          opacity: toCoreOpacity,
          transition: "opacity 0.12s linear",
        }}
      >
        <StreamLines variant="inner" />
      </div>
    </>
  );
}

function StreamLines({ variant }: { variant: "outer" | "inner" }) {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full">
      {/* outer: lines from outside towards shells */}
      {variant === "outer" && (
        <>
          <path d="M20 160 C180 180 220 220 280 260" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
          <path d="M580 190 C420 200 380 240 320 280" stroke="rgba(255,255,255,0.10)" strokeWidth="2" fill="none" />
          <path d="M60 440 C210 410 230 380 280 340" stroke="rgba(16,185,129,0.18)" strokeWidth="2" fill="none" />
          <path d="M560 430 C420 420 390 390 330 350" stroke="rgba(16,185,129,0.14)" strokeWidth="2" fill="none" />
        </>
      )}

      {/* inner: lines from shells converging to core */}
      {variant === "inner" && (
        <>
          <path d="M200 190 C260 230 280 250 300 300" stroke="rgba(16,185,129,0.22)" strokeWidth="2" fill="none" />
          <path d="M420 210 C360 245 340 265 300 300" stroke="rgba(16,185,129,0.22)" strokeWidth="2" fill="none" />
          <path d="M240 420 C270 375 285 345 300 300" stroke="rgba(255,255,255,0.14)" strokeWidth="2" fill="none" />
          <path d="M360 420 C330 375 315 345 300 300" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
        </>
      )}
    </svg>
  );
}
