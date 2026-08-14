const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "public", "assets", "images", "new images");
const OUT_DIR = path.join(__dirname, "..", "public", "assets", "images");

// [source filename in "new images", output filename, max dimension]
const MAP = [
  // Hero
  ["_DSC0816-edit-2-hero desktop.jpg", "hero-desktop.webp", 2400],
  ["_DSC9804-11 copy-2-2 - hero mobile.jpg", "hero-mobile.webp", 1600],

  // Feature variant one (Editorial)
  ["_DSC0545-edit-3-feature desktop.jpg", "feature-one-desktop.webp", 2400],
  ["_DSC0549-24 copy-crop-2 - feature mobile.jpg", "feature-one-mobile.webp", 1600],

  // Feature - extra, placed elsewhere on the page
  ["_DSC0556-25 copy-2-crop-2-2 - feature desktop.jpg", "feature-two-desktop.webp", 2400],
  ["_DSC9637-edit-crop2 - feature mobile.jpg", "feature-two-mobile.webp", 1600],

  ["_DSC9782-9 - feature desktop.jpg", "feature-three-desktop.webp", 2400],
  ["_DSC9752-edit - feature mobile.jpg", "feature-three-mobile.webp", 1600],

  // Footer / last feature (variant two)
  ["_DSC0850-30-crop - footer desktop.jpg", "feature-footer-desktop.webp", 2400],
  ["_DSC9786-edit-2 - footer mobile.jpg", "feature-footer-mobile.webp", 1600],

  // Gallery
  ["_DSC0053-edit.jpg", "gallery-01.webp", 2000],
  ["_DSC0061-edit.jpg", "gallery-02.webp", 2000],
  ["_DSC0408-20 copy-2-2.jpg", "gallery-03.webp", 2000],
  ["_DSC0504-21 copy-2-crop-2.jpg", "gallery-04.webp", 2000],
  ["_DSC0685-26-2.jpg", "gallery-05.webp", 2000],
  ["_DSC0816-edit-2-crop.jpg", "gallery-06.webp", 2000],
  ["_DSC0995-32-2-crop.jpg", "gallery-07.webp", 2000],
  ["_DSC9623-1 copy-2-crop.jpg", "gallery-08.webp", 2000],
  ["_DSC9655-3-2.jpg", "gallery-09.webp", 2000],
  ["_DSC9744-edit-2-2.jpg", "gallery-10.webp", 2000],
  ["_DSC9757-7 copy-2-crop.jpg", "gallery-11.webp", 2000],
  ["_DSC9762-8 copy.jpg", "gallery-12.webp", 2000],
  ["_DSC9782-9 copy-2-2.jpg", "gallery-13.webp", 2000],
  ["_DSC9791-38 copy-2.jpg", "gallery-14.webp", 2000],
  ["_DSC9832-13 copy-2.jpg", "gallery-15.webp", 2000],
];

async function run() {
  for (const [srcName, outName, maxDim] of MAP) {
    const srcPath = path.join(SRC_DIR, srcName);
    const outPath = path.join(OUT_DIR, outName);
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Missing source file: ${srcName}`);
    }
    const image = sharp(srcPath).rotate();
    const meta = await image.metadata();
    const resize =
      meta.width >= meta.height
        ? { width: Math.min(meta.width, maxDim) }
        : { height: Math.min(meta.height, maxDim) };
    await image.resize(resize).webp({ quality: 82 }).toFile(outPath);
    console.log(`${srcName} -> ${outName}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
