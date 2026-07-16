import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const badges = [
  {
    type: "image" as const,
    src: "https://www.theeroticreview.com/images/reviewed_seal.gif",
    name: "The Erotic Review",
    href: "https://www.theeroticreview.com/reviews/alyssa-may-7028500103-418478",
  },
  {
    type: "image" as const,
    src: "https://preferred411.com/a/preferredSeal-p.png",
    name: "Preferred411.com",
    href: "https://preferred411.com/admirer/register?ref=P464877",
  },
  {
    type: "icon" as const,
    name: "X",
    href: "https://x.com/alyssamayvip",
  },
];

export function TrustBadges({
  exclude = [],
  className = "mt-10",
  align = "center",
  size = "default",
  delay = 200,
}: {
  exclude?: string[];
  className?: string;
  align?: "center" | "start";
  size?: "default" | "sm";
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const visibleBadges = badges.filter((b) => !exclude.includes(b.name));
  const imgSize = size === "sm" ? "h-12 w-12 md:h-16 md:w-16" : "h-16 w-16 md:h-24 md:w-24";
  const iconSize = size === "sm" ? "h-9 w-9 md:h-12 md:w-12" : "h-14 w-14 md:h-20 md:w-20";
  return (
    <div ref={ref} className={className}>
      <div className={`flex flex-nowrap items-center gap-4 sm:gap-6 ${align === "start" ? "justify-start" : "justify-center"}`}>
        {visibleBadges.map((b, i) => (
          <div
            key={b.name}
            className={cn(
              "transition-all duration-500 ease-out hover:scale-110 hover:duration-300",
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{ transitionDelay: `${delay + i * 150}ms` }}
          >
            <a href={b.href} target="_blank" rel="noopener noreferrer">
              {b.type === "icon" ? (
                <div className={`${iconSize} flex items-center justify-center rounded-full bg-black text-sand-soft`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[45%] w-[45%]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              ) : (
                <img
                  src={b.src}
                  alt={b.name}
                  loading="lazy"
                  width={112}
                  height={112}
                  className={`${imgSize} object-contain`}
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
