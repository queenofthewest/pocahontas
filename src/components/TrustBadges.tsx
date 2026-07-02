import { Reveal } from "@/components/Reveal";

const terBadge = "/assets/ter-badge.webp";
const p411Badge = "/assets/p411-badge.webp";
const trystBadge = "/assets/tryst-badge.webp";

const badges = [
  { src: terBadge, name: "The Erotic Review" },
  { src: p411Badge, name: "Preferred 411" },
  { src: trystBadge, name: "Tryst" },
];

export function TrustBadges() {
  return (
    <Reveal className="mt-10" delay={200}>
      <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-5 md:justify-start md:gap-4">
        {badges.map((b) => (
          <div key={b.name} className="transition-transform duration-300 hover:scale-110">
            <img
              src={b.src}
              alt={b.name}
              loading="lazy"
              width={80}
              height={80}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
