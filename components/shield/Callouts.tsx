export default function Callouts({
  splitT,
  convergeT,
}: {
  splitT: number;
  convergeT: number;
}) {
  const show = clamp((splitT - 0.38) / 0.28);
  const fade = 1 - clamp(convergeT / 0.9);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[3]"
      style={{
        opacity: show * 0.95,
        transition: "opacity 120ms linear",
      }}
    >
      <svg viewBox="0 0 600 600" className="h-full w-full">
        {/* Top callout */}
        <Callout
          x1={340}
          y1={190}
          x2={520}
          y2={160}
          label="TOP SHELL"
          hint="Inbound streams"
          accent={false}
          fade={fade}
        />

        {/* Core callout */}
        <Callout
          x1={300}
          y1={300}
          x2={520}
          y2={300}
          label="CORE"
          hint="True signal"
          accent
          fade={fade}
        />

        {/* Bottom callout */}
        <Callout
          x1={260}
          y1={420}
          x2={520}
          y2={460}
          label="BOTTOM SHELL"
          hint="Policy / risk"
          accent={false}
          fade={fade}
        />
      </svg>
    </div>
  );
}

function Callout({
  x1,
  y1,
  x2,
  y2,
  label,
  hint,
  accent,
  fade,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  hint: string;
  accent: boolean;
  fade: number; // 0..1
}) {
  const stroke = accent
    ? `rgba(16,185,129,${0.40 * fade + 0.10})`
    : `rgba(255,255,255,${0.22 * fade + 0.06})`;

  const text = accent ? `rgba(16,185,129,${0.95})` : `rgba(255,255,255,0.88)`;
  const sub = `rgba(255,255,255,${0.55 * fade + 0.15})`;

  return (
    <>
      {/* line */}
      <path
        d={`M${x1} ${y1} C${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      />
      {/* dot */}
      <circle cx={x1} cy={y1} r="3" fill={stroke} />

      {/* label block */}
      <g transform={`translate(${x2 + 10} ${y2 - 14})`}>
        <rect
          x="0"
          y="0"
          width="150"
          height="34"
          rx="10"
          fill="rgba(0,0,0,0.35)"
          stroke="rgba(255,255,255,0.10)"
        />
        <text x="12" y="14" fontSize="10" fill={text} fontFamily="ui-sans-serif">
          {label}
        </text>
        <text x="12" y="27" fontSize="10" fill={sub} fontFamily="ui-sans-serif">
          {hint}
        </text>
      </g>
    </>
  );
}

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}
