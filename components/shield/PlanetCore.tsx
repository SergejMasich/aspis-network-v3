function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function PlanetCore({ convergeT }: { convergeT: number }) {
  const glow = lerp(0.25, 0.85, convergeT);
  const coreDot = lerp(0.55, 1.0, convergeT);

  return (
    <div
      className="relative rounded-full"
      style={{
        width: "clamp(120px, 18vw, 190px)",
        height: "clamp(120px, 18vw, 190px)",
        boxShadow: `0 0 48px rgba(16,185,129,${glow})`,
        border: "1px solid rgba(255,255,255,0.18)",
        background:
          "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.22), rgba(16,185,129,0.12) 40%, rgba(0,0,0,0.55) 75%)",
        overflow: "hidden",
      }}
    >
      {/* moving “earth texture” */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.55,
          backgroundImage:
            "radial-gradient(circle at 20% 40%, rgba(16,185,129,0.22), rgba(0,0,0,0) 55%)," +
            "radial-gradient(circle at 65% 55%, rgba(255,255,255,0.14), rgba(0,0,0,0) 58%)," +
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 10px, rgba(0,0,0,0) 18px)",
          backgroundSize: "520px 520px",
          animation: "planetDrift 16s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* orbiting dots */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "140%",
          height: "140%",
          transform: "translate(-50%, -50%)",
          animation: "orbitSpin 18s linear infinite",
          opacity: 0.45,
        }}
      >
        <div className="absolute left-[8%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[72%] top-[18%] h-1 w-1 rounded-full bg-emerald-300/80" />
        <div className="absolute left-[80%] top-[68%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[18%] top-[76%] h-1 w-1 rounded-full bg-emerald-300/70" />
      </div>

      {/* true core point */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `${18 * coreDot}px`,
          height: `${18 * coreDot}px`,
          background: "rgba(16,185,129,0.95)",
          boxShadow: `0 0 28px rgba(16,185,129,${lerp(0.35, 0.95, convergeT)})`,
        }}
      />
    </div>
  );
}
