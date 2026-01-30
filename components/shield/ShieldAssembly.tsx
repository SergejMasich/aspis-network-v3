import PlanetCore from "./PlanetCore";
import TopShell from "./TopShell";
import BottomShell from "./BottomShell";
import RevealPanels from "./RevealPanels";
import Callouts from "./Callouts";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ShieldAssembly({
  splitT,
  convergeT,
}: {
  splitT: number;
  convergeT: number;
}) {
  const topY = lerp(0, -170, splitT);
  const botY = lerp(0, 190, splitT);
  const spread = lerp(0, 60, splitT);

  // subtle cinematic scale
  const scale = lerp(1.0, 1.14, splitT);

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
            width: "min(82vw, 700px)",
            height: "min(82vw, 700px)",
            transform: `scale(${scale})`,
            transition: "transform 0.06s linear",
          }}
        >
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

          {/* planet core */}
          <div className="absolute inset-0 grid place-items-center">
            <PlanetCore convergeT={convergeT} />
          </div>

          {/* callouts */}
          <Callouts splitT={splitT} convergeT={convergeT} />

          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.62)_70%,rgba(0,0,0,0.92)_100%)]" />
        </div>
      </div>

      {/* Panels */}
      <RevealPanels splitT={splitT} convergeT={convergeT} />
    </div>
  );
}
