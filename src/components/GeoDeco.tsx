type GeoVariant = "rays" | "diamond" | "lines" | "corner";

export function GeoDeco({
  variant,
  className = "",
}: {
  variant: GeoVariant;
  className?: string;
}) {
  if (variant === "rays") {
    return (
      <svg
        viewBox="0 0 400 400"
        className={`pointer-events-none h-[500px] w-[500px] select-none ${className}`}
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i * 20 * Math.PI) / 180;
          const x2 = 400 + Math.cos(angle) * 600;
          const y2 = 0 + Math.sin(angle) * 600;
          return (
            <line
              key={i}
              x1="400"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="oklch(0.63 0.14 38)"
              strokeWidth="0.75"
            />
          );
        })}
      </svg>
    );
  }

  if (variant === "diamond") {
    return (
      <svg viewBox="0 0 12 12" className={`h-3 w-3 ${className}`} aria-hidden="true">
        <polygon points="6,0 12,6 6,12 0,6" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "lines") {
    return (
      <svg viewBox="0 0 120 4" className={`pointer-events-none w-32 select-none ${className}`} aria-hidden="true">
        <line x1="0" y1="1" x2="48" y2="1" stroke="currentColor" strokeWidth="0.75" />
        <polygon points="60,0 66,2 60,4 54,2" fill="currentColor" />
        <line x1="72" y1="1" x2="120" y2="1" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    );
  }

  if (variant === "corner") {
    return (
      <svg viewBox="0 0 60 60" className={`pointer-events-none h-16 w-16 select-none ${className}`} aria-hidden="true">
        <line x1="0" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="0.75" />
        <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    );
  }

  return null;
}
