import { Reveal } from "@/components/Reveal";

const terBadge = "/assets/ter-badge.webp";
const p411Badge = "/assets/p411-badge.webp";
const trystBadge = "/assets/tryst-badge.webp";
const euBadge = "/assets/eu-badge.webp";

const badges = [
  { src: terBadge, name: "The Erotic Review", note: "Highly Rated" },
  { src: p411Badge, name: "Preferred 411", note: "Member" },
  { src: trystBadge, name: "Tryst", note: "Featured" },
  { src: euBadge, name: "EU", note: "Featured" },
];

export function TrustBadges() {
  return (
    <Reveal className="mt-12" delay={200}>
      <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-7 md:gap-10">
        {badges.map((b) => (
          <div key={b.name} className="transition-transform duration-300 hover:scale-110">
            <img
              src={b.src}
              alt={b.name}
              loading="lazy"
              width={80}
              height={80}
              className="h-12 w-12 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
