export default function TopShell() {
  return (
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(14% 4%, 86% 4%, 94% 32%, 78% 46%, 22% 46%, 6% 32%)",
      }}
    >
      <ShellFace />
    </div>
  );
}

function ShellFace() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full">
      <path
        d="M300 40 C390 90 480 90 560 110 C545 240 480 320 300 420 C120 320 55 240 40 110 C120 90 210 90 300 40Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="2"
      />
      <path
        d="M300 78 C375 115 455 118 520 132 C506 235 450 300 300 386 C150 300 94 235 80 132 C145 118 225 115 300 78Z"
        fill="rgba(16,185,129,0.06)"
        stroke="rgba(16,185,129,0.22)"
        strokeWidth="2"
      />
    </svg>
  );
}
