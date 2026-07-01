import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const g1 = "/assets/victoria-gallery1.webp";
const g2 = "/assets/victoria-gallery2.webp";
const g3 = "/assets/victoria-gallery3.webp";
const g4 = "/assets/victoria-gallery4.webp";
const g5 = "/assets/victoria-gallery5.webp";
const g6 = "/assets/victoria-gallery6.webp";

const images = [
  { src: g1, category: "Editorial", title: "Desert Light", span: "lg:row-span-2" },
  { src: g5, category: "Lifestyle", title: "Warm Afternoon", span: "" },
  { src: g3, category: "Editorial", title: "Sedona, Golden Hour", span: "" },
  { src: g2, category: "Beauty", title: "Close Portrait", span: "lg:row-span-2" },
  { src: g4, category: "Lifestyle", title: "Shadow & Sun", span: "" },
  { src: g6, category: "Editorial", title: "The Terrace", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((a) => (a === null ? a : (a + 1) % images.length)), []);
  const prev = useCallback(() => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="portfolio" className="relative overflow-visible -mb-20 bg-sand py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Enticements</p>
          <h2 className="font-display text-4xl text-espresso md:text-5xl">Gallery</h2>
          <div className="terra-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[22rem] lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.title}
              delay={(i % 4) * 80}
              className={`h-full ${img.span} ${i % 2 === 1 ? "mt-10 lg:mt-0" : ""}`}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl border border-terracotta/20 transition-all duration-300 hover:border-terracotta/60"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:aspect-auto"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-sand/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-sand text-2xl text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta hover:text-sand-soft"
            onClick={close}
          >
            ✕
          </button>

          <button
            aria-label="Previous"
            className="absolute left-4 text-4xl text-terracotta hover:text-terracotta-soft md:left-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <figure className="max-h-[85vh] text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].title}
              className="mx-auto max-h-[78vh] rounded-lg border border-terracotta/20 object-contain"
            />
          </figure>

          <button
            aria-label="Next"
            className="absolute right-4 text-4xl text-terracotta hover:text-terracotta-soft md:right-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
