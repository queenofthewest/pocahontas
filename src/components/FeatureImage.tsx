const variants = {
  one: {
    desktop: "/assets/images/las-vegas/IseeSexy_OliviaC_WEB_2.webp",
    mobile: "/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jan23_WEB_27_v2.webp",
  },
  two: {
    desktop: "/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_WEB_26.webp",
    mobile: "/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_WEB_17.webp",
  },
};

export function FeatureImage({
  variant,
  caption,
  label,
  heightClass = "h-[70vh] md:h-[85vh]",
}: {
  variant: "one" | "two";
  caption: string;
  label: string;
  heightClass?: string;
}) {
  const imgs = variants[variant];

  return (
    <section className={`relative overflow-hidden ${heightClass}`}>
      <picture>
        <source media="(min-width: 768px)" srcSet={imgs.desktop} />
        <img
          src={imgs.mobile}
          alt={caption}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/15 via-transparent to-sand/20" />
    </section>
  );
}
