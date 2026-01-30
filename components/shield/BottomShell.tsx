export default function BottomShell() {
  return (
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(22% 54%, 78% 54%, 94% 68%, 86% 96%, 14% 96%, 6% 68%)",
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
        d="M300 180 C450 270 525 345 560 500 C430 560 170 560 40 500 C75 345 150 270 300 180Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="2"
      />
      <path
        d="M300 220 C420 290 485 350 510 472 C410 520 190 520 90 472 C115 350 180 290 300 220Z"
        fill="rgba(16,185,129,0.06)"
        stroke="rgba(16,185,129,0.22)"
        strokeWidth="2"
      />
    </svg>
  );
}
