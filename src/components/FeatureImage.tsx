import { Reveal } from "@/components/Reveal";

const feature1 = "/assets/victoria-feature1.webp";
const feature2 = "/assets/victoria-feature2.webp";

const images = {
  one: feature1,
  two: feature2,
};

export function FeatureImage({
  variant,
  caption,
  label,
  heightClass = "h-[35vh] md:h-[50vh]",
}: {
  variant: "one" | "two";
  caption: string;
  label: string;
  heightClass?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-adobe-deep py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal>
          <figure className="relative overflow-hidden border border-terracotta/20">
            <img
              src={images[variant]}
              alt={caption}
              loading="lazy"
              width={1536}
              height={864}
              className={`w-full object-cover ${heightClass}`}
              style={{ filter: "saturate(1.1) brightness(0.85)" }}
            />
            {/* Label overlay — bottom left, minimal */}
            <div className="absolute bottom-4 left-5">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-terracotta/80">{label}</p>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
