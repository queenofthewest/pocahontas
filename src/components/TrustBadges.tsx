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
      <p className="mb-5 text-center text-[0.6rem] uppercase tracking-[0.35em] text-terracotta/60">
        My Verifications
      </p>
      <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-6 md:gap-8">
        {badges.map((b) => (
          <div key={b.name} className="group flex flex-col items-center">
            <div className="badge-ring flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                width={96}
                height={96}
                className="h-[88%] w-[88%] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
