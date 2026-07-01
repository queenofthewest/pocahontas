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
  heightClass = "h-[40vh] md:h-[55vh]",
}: {
  variant: "one" | "two";
  caption: string;
  label: string;
  heightClass?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sand py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[1.5rem] border border-terracotta/20">
            <img
              src={images[variant]}
              alt={caption}
              loading="lazy"
              width={1536}
              height={864}
              className={`w-full object-cover ${heightClass}`}
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
