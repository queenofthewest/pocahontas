import { Reveal } from "@/components/Reveal";

const stats = [
  { label: "Height", value: "5'8\" / 173 cm" },
  { label: "Hair", value: "Warm Brunette" },
  { label: "Eyes", value: "Hazel" },
  { label: "Measurements", value: "34 — 26 — 36" },
  { label: "Shoe / Dress", value: "US 8 / US 6" },
  { label: "Languages", value: "English, Spanish" },
  { label: "Base", value: "Scottsdale, AZ" },
  { label: "Availability", value: "Nationwide Travel" },
];

export function Profile() {
  return (
    <section id="profile" className="relative overflow-visible bg-sand-deep pt-8 py-24 md:pt-40 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">The Details</p>
          <h2 className="font-display text-4xl text-espresso md:text-5xl">Statistics</h2>
          <div className="terra-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-terracotta/20 bg-sand/60 p-6 text-center transition-all duration-300 hover:border-terracotta/60 hover:bg-sand">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-terracotta/70">{s.label}</p>
                <p className="mt-3 font-display text-xl text-espresso md:text-2xl">{s.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
