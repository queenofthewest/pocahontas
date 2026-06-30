import { Reveal } from "@/components/Reveal";
import { GeoDeco } from "@/components/GeoDeco";

const stats = [
  { label: "Height", value: "5'8\" / 173 cm" },
  { label: "Hair", value: "Dark Brunette" },
  { label: "Eyes", value: "Deep Brown" },
  { label: "Measurements", value: "34 — 25 — 36" },
  { label: "Shoe / Dress", value: "US 8 / US 4" },
  { label: "Languages", value: "English, Spanish" },
  { label: "Base", value: "Scottsdale, AZ" },
  { label: "Availability", value: "Nationwide Travel" },
];

export function Profile() {
  return (
    <section id="profile" className="relative overflow-hidden bg-adobe py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <Reveal className="mb-16">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">The Details</p>
          <h2 className="font-display text-4xl font-light text-sand md:text-5xl">Statistics</h2>
          <div className="mt-6">
            <GeoDeco variant="lines" className="text-terracotta/50" />
          </div>
        </Reveal>

        {/* Horizontal list style — different from Lexi's square grid */}
        <div className="divide-y divide-terracotta/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <div className="flex items-center justify-between py-5 group">
                <div className="flex items-center gap-6">
                  <span className="w-5 text-right font-display text-sm text-terracotta/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sand/40 group-hover:text-terracotta/70 transition-colors">
                    {s.label}
                  </p>
                </div>
                <p className="font-display text-lg font-light text-sand/80">{s.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
