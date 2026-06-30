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
    <Reveal className="mt-14" delay={200}>
      <p className="mb-5 text-center text-[0.58rem] uppercase tracking-[0.4em] text-terracotta/50">
        Verified
      </p>
      <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8">
        {badges.map((b) => (
          <div key={b.name} className="group flex flex-col items-center">
            <div className="badge-ring flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:h-18 sm:w-18 md:h-20 md:w-20">
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                width={80}
                height={80}
                className="h-[85%] w-[85%] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
