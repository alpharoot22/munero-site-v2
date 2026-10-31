/** Authentic Munero octopus mark (geometry from public/bimi-logo.svg) in the navy/cream system. */
export function OctopusMark({ size = 30, color = "currentColor", eye = "var(--bg)" }: { size?: number; color?: string; eye?: string }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="20 18 56 66" aria-hidden="true" style={{ flex: "none" }}>
      <g fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round">
        <path d="M28 50 Q22 64 26 78" /><path d="M33 51 Q28 65 32 79" /><path d="M40 53 Q37 67 40 81" /><path d="M45 53 Q44 68 45 82" />
        <path d="M51 53 Q52 68 51 82" /><path d="M56 53 Q59 67 56 81" /><path d="M63 51 Q68 65 64 79" /><path d="M68 50 Q74 64 70 78" />
      </g>
      <circle cx="48" cy="36" r="16" fill={color} />
      <circle cx="42.5" cy="34.5" r="2.8" fill={eye} />
      <circle cx="53.5" cy="34.5" r="2.8" fill={eye} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`mn-logo ${className}`}>
      <OctopusMark />
      <span>munero</span>
    </span>
  );
}
