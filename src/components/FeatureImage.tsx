const variants = {
  one: {
    desktop: "/assets/images/NOK_1171.webp",
    mobile: "/assets/images/NOK_1171.webp",
    desktopPosition: "md:object-[50%_80%]",
  },
  two: {
    desktop: "/assets/images/2Q0A5375.webp",
    mobile: "/assets/images/NOK_1202.webp",
    desktopPosition: "",
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
          className={`absolute inset-0 h-full w-full object-cover object-top ${imgs.desktopPosition}`}
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/15 via-transparent to-sand/20" />
    </section>
  );
}
