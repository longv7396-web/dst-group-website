import type { CSSProperties } from "react";

export type MotionIconName =
  | "ads"
  | "social"
  | "video"
  | "design"
  | "website"
  | "analytics"
  | "booking"
  | "branding"
  | "hospitality"
  | "content"
  | "studio"
  | "process"
  | "process-consult"
  | "process-plan"
  | "process-launch"
  | "process-report"
  | "target"
  | "report"
  | "media"
  | "contact";

type MotionIconProps = {
  name: MotionIconName;
  className?: string;
  size?: number | string;
  title?: string;
  variant?: "gold" | "cyan" | "warm";
};

const lineProps = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2.2,
};

function sizeStyle(size?: number | string) {
  if (!size) return undefined;
  return { "--motion-icon-size": typeof size === "number" ? `${size}px` : size } as CSSProperties;
}

function glyph(name: MotionIconName) {
  switch (name) {
    case "ads":
      return (
        <>
          <path className="motion-gold" d="M15 31h8l16-9v20l-16-9h-8z" {...lineProps} />
          <path className="motion-cyan motion-wave" d="M43 24c3 2 5 5 5 8s-2 6-5 8" {...lineProps} />
          <path className="motion-cyan motion-wave motion-wave-delay" d="M48 19c5 3 8 8 8 13s-3 10-8 13" {...lineProps} />
          <path className="motion-gold motion-bob" d="M22 34l4 11" {...lineProps} />
        </>
      );
    case "social":
    case "content":
      return (
        <>
          <rect className="motion-gold" x="20" y="12" width="24" height="40" rx="6" {...lineProps} />
          <path className="motion-cyan motion-rise" d="M27 22h10M27 29h8M27 36h12" {...lineProps} />
          <circle className="motion-cyan motion-pulse-fill" cx="45" cy="18" r="5" />
          <path className="motion-gold" d="M30 46h4" {...lineProps} />
        </>
      );
    case "video":
    case "media":
    case "studio":
      return (
        <>
          <rect className="motion-gold motion-frame" x="12" y="18" width="32" height="28" rx="5" {...lineProps} />
          <path className="motion-cyan" d="M44 27l9-5v20l-9-5z" {...lineProps} />
          <path className="motion-gold motion-play" d="M26 27l10 6-10 6z" />
          <path className="motion-cyan motion-spark" d="M16 12v4M14 14h4" {...lineProps} />
        </>
      );
    case "design":
      return (
        <>
          <path className="motion-gold motion-pen" d="M18 45l5-14 19-19 9 9-19 19z" {...lineProps} />
          <path className="motion-cyan" d="M38 16l9 9" {...lineProps} />
          <circle className="motion-gold" cx="21" cy="22" r="5" {...lineProps} />
          <path className="motion-cyan motion-spark" d="M49 42v5M46.5 44.5h5" {...lineProps} />
        </>
      );
    case "website":
      return (
        <>
          <rect className="motion-gold" x="10" y="15" width="44" height="34" rx="6" {...lineProps} />
          <path className="motion-gold" d="M10 25h44M18 20h.2M24 20h.2" {...lineProps} />
          <path className="motion-cyan motion-cursor" d="M28 32l12 7-6 2 4 7-4 2-4-7-5 4z" {...lineProps} />
        </>
      );
    case "analytics":
    case "report":
    case "process-report":
      return (
        <>
          <path className="motion-gold" d="M14 48V16M14 48h40" {...lineProps} />
          <path className="motion-cyan motion-chart" d="M20 40l8-9 8 5 12-17" {...lineProps} />
          <circle className="motion-gold motion-pulse-fill" cx="48" cy="19" r="4" />
          <path className="motion-gold" d="M22 45v-5M31 45V31M40 45v-9" {...lineProps} />
        </>
      );
    case "booking":
      return (
        <>
          <rect className="motion-gold" x="13" y="17" width="38" height="34" rx="6" {...lineProps} />
          <path className="motion-gold" d="M13 27h38M23 13v8M41 13v8" {...lineProps} />
          <path className="motion-cyan motion-check" d="M24 40l5 5 12-14" {...lineProps} />
        </>
      );
    case "branding":
      return (
        <>
          <path className="motion-gold motion-badge" d="M32 11l6 12 13 2-9.5 9 2.5 13-12-6.5L20 47l2.5-13-9.5-9 13-2z" {...lineProps} />
          <circle className="motion-cyan motion-pulse" cx="32" cy="32" r="10" {...lineProps} />
        </>
      );
    case "hospitality":
      return (
        <>
          <path className="motion-gold" d="M17 43h30M21 39h22c0-9-5-15-11-15s-11 6-11 15z" {...lineProps} />
          <path className="motion-cyan motion-steam" d="M27 20c-2-3 2-5 0-8M36 20c-2-3 2-5 0-8" {...lineProps} />
          <path className="motion-gold" d="M32 21v-3" {...lineProps} />
          <path className="motion-cyan motion-spark" d="M48 24v5M45.5 26.5h5" {...lineProps} />
        </>
      );
    case "target":
    case "process":
    case "process-consult":
    case "process-plan":
    case "process-launch":
      return (
        <>
          <circle className="motion-gold" cx="32" cy="32" r="20" {...lineProps} />
          <circle className="motion-cyan motion-pulse" cx="32" cy="32" r="11" {...lineProps} />
          <path className="motion-gold motion-target" d="M32 32l13-13M45 19h-8M45 19v8" {...lineProps} />
        </>
      );
    case "contact":
      return (
        <>
          <path className="motion-gold" d="M15 21h34v24H15z" {...lineProps} />
          <path className="motion-cyan motion-check" d="M16 22l16 13 16-13" {...lineProps} />
          <path className="motion-gold motion-wave" d="M47 14c4 2 6 5 6 9" {...lineProps} />
        </>
      );
    default:
      return null;
  }
}

export function MotionIcon({ name, className, size, title, variant = "warm" }: MotionIconProps) {
  const label = title ?? name;

  return (
    <span className={["motion-svg-icon", `motion-svg-icon-${variant}`, className].filter(Boolean).join(" ")} style={sizeStyle(size)}>
      <svg viewBox="0 0 64 64" role="img" aria-label={label}>
        <title>{label}</title>
        <defs>
          <radialGradient id={`motionGlow-${name}-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.24" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="motion-halo" cx="32" cy="32" r="27" fill={`url(#motionGlow-${name}-${variant})`} />
        {glyph(name)}
      </svg>
    </span>
  );
}
