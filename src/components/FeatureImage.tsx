const variants = {
  featureOne: {
    desktop: "/assets/images/feature-one-desktop.webp",
    mobile: "/assets/images/feature-one-mobile.webp",
    desktopPosition: "md:object-center",
  },
  featureTwo: {
    desktop: "/assets/images/feature-two-desktop.webp",
    mobile: "/assets/images/feature-two-mobile.webp",
    desktopPosition: "md:object-center",
  },
  featureThree: {
    desktop: "/assets/images/gallery-13.webp",
    mobile: "/assets/images/feature-three-mobile.webp",
    desktopPosition: "md:object-center md:scale-125",
  },
  footer: {
    desktop: "/assets/images/feature-footer-desktop.webp",
    mobile: "/assets/images/feature-footer-mobile.webp",
    desktopPosition: "md:object-center",
  },
};

export function FeatureImage({
  variant,
  caption,
  label,
  heightClass = "h-[70vh] md:h-[85vh]",
}: {
  variant: "featureOne" | "featureTwo" | "featureThree" | "footer";
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
          className={`absolute inset-0 h-full w-full object-cover ${variant === "footer" ? "object-[50%_58%]" : "object-top"} ${imgs.desktopPosition}`}
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/15 via-transparent to-sand/20" />
      {variant === "footer" && (
        <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-black/45" />
      )}
    </section>
  );
}
