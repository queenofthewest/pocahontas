import { Reveal } from "@/components/Reveal";

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
}: {
  exclude?: string[];
  className?: string;
  align?: "center" | "start";
  size?: "default" | "sm";
}) {
  const visible = badges.filter((b) => !exclude.includes(b.name));
  const imgSize = size === "sm" ? "h-12 w-12 md:h-16 md:w-16" : "h-16 w-16 md:h-24 md:w-24";
  return (
    <Reveal className={className} delay={200}>
      <div className={`flex flex-nowrap items-center gap-4 sm:gap-6 ${align === "start" ? "justify-start" : "justify-center"}`}>
        {visible.map((b) => (
          <div key={b.name} className="transition-transform duration-300 hover:scale-110">
            <a href={b.href} target="_blank" rel="noopener noreferrer">
              {b.type === "icon" ? (
                <div className={`${imgSize} flex items-center justify-center rounded-full bg-terracotta text-sand-soft`}>
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
    </Reveal>
  );
}
