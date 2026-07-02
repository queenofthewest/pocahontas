import sharp from "sharp";

const files = [
  "public/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_5.jpg",
  "public/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jan23_WEB_27.jpg",
];

for (const src of files) {
  const dest = src.replace(/\.jpg$/, ".webp");
  await sharp(src).webp({ quality: 85 }).toFile(dest);
  console.log(`✓ ${dest}`);
}
