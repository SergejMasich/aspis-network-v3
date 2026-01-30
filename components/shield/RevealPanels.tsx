export default function RevealPanels({
  splitT,
  convergeT,
}: {
  splitT: number;     // 0..1
  convergeT: number;  // 0..1
}) {
  // Появление панелей после того, как щит уже заметно раскрылся
  const show = clamp((splitT - 0.45) / 0.35);
  const soften = 1 - clamp(convergeT / 0.9);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-5"
      style={{
        opacity: show,
        transform: `translate3d(0, ${18 * (1 - show)}px, 0)`,
        transition: "opacity 120ms linear, transform 120ms linear",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel
            title="Top shell"
            text="Inbound streams are filtered and normalized at the perimeter."
            align="left"
            muted={soften}
          />
          <Panel
            title="Core"
            text="Earth-core: true signal center. Streams converge → verified insight."
            align="center"
            muted={soften}
            accent
          />
          <Panel
            title="Bottom shell"
            text="Policy and risk controls shape what reaches the core."
            align="right"
            muted={soften}
          />
        </div>
      </div>
    </div>
  );
}

function Panel({
  title,
  text,
  align,
  muted,
  accent,
}: {
  title: string;
  text: string;
  align: "left" | "center" | "right";
  muted: number; // 0..1
  accent?: boolean;
}) {
  return (
    <div
      className="glass rounded-2xl p-5"
      style={{
        opacity: 0.92 * muted + 0.08,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">
          {accent ? (
            <span className="text-emerald-300">{title}</span>
          ) : (
            title
          )}
        </div>
        <div className="text-[11px] text-white/45">{align.toUpperCase()}</div>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{text}</div>
    </div>
  );
}

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}
