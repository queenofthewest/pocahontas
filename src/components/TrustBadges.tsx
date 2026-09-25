import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const badges = [
  {
    src: "https://www.theeroticreview.com/images/reviewed_seal.gif",
    name: "The Erotic Review",
    href: "https://www.theeroticreview.com/reviews/alyssa-may-7028500103-418478",
  },
  {
    src: "https://preferred411.com/a/preferredSeal-p.png",
    name: "Preferred411.com",
    href: "https://preferred411.com/admirer/register?ref=P464877",
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
  size?: "default" | "sm" | "footer";
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const visibleBadges = badges.filter((b) => !exclude.includes(b.name));
  const imgSize =
    size === "sm"
      ? "h-12 w-12 md:h-16 md:w-16"
      : size === "footer"
        ? "h-20 w-20 md:h-14 md:w-14"
        : "h-20 w-20 md:h-24 md:w-24";
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
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                width={112}
                height={112}
                className={`${imgSize} object-contain`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
