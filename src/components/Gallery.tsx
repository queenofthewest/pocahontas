import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const IMG = "/assets/images";

const images = [
  { src: `${IMG}/NOK_1331.webp`, title: "Alyssa I" },
  { src: `${IMG}/NOK_1477.webp`, title: "Alyssa II" },
  { src: `${IMG}/NOK_1651.webp`, title: "Alyssa III" },
  { src: `${IMG}/NOK_1507.webp`, title: "Alyssa IV" },
  { src: `${IMG}/NOK_1627.webp`, title: "Alyssa V" },
  { src: `${IMG}/NOK_1171.webp`, title: "Alyssa VI" },
  { src: `${IMG}/NOK_1202.webp`, title: "Alyssa VII" },
  { src: `${IMG}/2Q0A5270.webp`, title: "Alyssa VIII" },
  { src: `${IMG}/2Q0A5919.webp`, title: "Alyssa IX" },
  { src: `${IMG}/20A2607.webp`, title: "Alyssa X" },
  { src: `${IMG}/20A2608.webp`, title: "Alyssa XI" },
  { src: `${IMG}/13A2929.webp`, title: "Alyssa XII" },
  { src: `${IMG}/13A2931.webp`, title: "Alyssa XIII" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)),
    [images.length]
  );

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
    <section id="portfolio" className="relative -mb-20 bg-sand py-24 md:py-32">
      {/* Section header */}
      <Reveal className="mb-10 text-center">
        <h2 className="font-display text-4xl text-espresso md:text-5xl">Gallery</h2>
        <div className="terra-divider mx-auto mt-6 w-32" />
      </Reveal>

      {/* Staggered 2-col grid on mobile (uniform 2:3 crop), masonry columns from md up */}
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:block md:columns-3 lg:columns-4">
          {images.map((img, i) => (
            <div
              key={img.title}
              className={`break-inside-avoid md:mb-3 ${i % 2 === 1 ? "mt-8 md:mt-0" : ""}`}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-lg border border-terracotta/15 transition-all duration-300 hover:border-terracotta/50"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="aspect-[2/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-sand/96 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-sand text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-sand-soft"
            onClick={close}
          >
            ✕
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-white text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-white md:left-10"
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
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-white text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-white md:right-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
