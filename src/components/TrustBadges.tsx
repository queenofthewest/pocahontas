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
      <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-6">
        {badges.map((b) => (
          <div key={b.name} className="transition-transform duration-300 hover:scale-110">
            <img
              src={b.src}
              alt={b.name}
              loading="lazy"
              width={112}
              height={112}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
