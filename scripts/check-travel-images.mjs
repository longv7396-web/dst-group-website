import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadImage } from "@napi-rs/canvas";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const MIN_WIDTH = {
  hero: 1600,
  cover: 800,
  gallery: 1000,
};

const imageRoles = [
  { role: "hero", src: "public/assets/showcase/travel/holiday-hero.jpg" },
  { role: "cover", src: "public/assets/showcase/travel/holiday-cover.jpg" },
  { role: "gallery", src: "public/assets/showcase/travel/holiday-gallery-1.jpg" },
  { role: "hero", src: "public/assets/showcase/travel/villa-tuan-chau-hero.jpg" },
  { role: "cover", src: "public/assets/showcase/travel/villa-tuan-chau-cover.jpg" },
  { role: "gallery", src: "public/assets/showcase/travel/villa-tuan-chau-gallery-1.jpg" },
  { role: "hero", src: "public/assets/showcase/travel/villa-sun-feria-hero.jpg" },
  { role: "cover", src: "public/assets/showcase/travel/villa-sun-feria-cover.jpg" },
  { role: "gallery", src: "public/assets/showcase/travel/villa-sun-feria-gallery-1.jpg" },
  { role: "hero", src: "public/assets/showcase/travel/villa-flc-hero.jpg" },
  { role: "cover", src: "public/assets/showcase/travel/villa-flc-cover.jpg" },
  { role: "gallery", src: "public/assets/showcase/travel/villa-flc-gallery-1.jpg" },
];

function kb(size) {
  return `${Math.round(size / 1024)}KB`;
}

async function readImageMetadata(relativePath) {
  const absolutePath = path.resolve(projectRoot, relativePath);
  const [file, image] = await Promise.all([stat(absolutePath), loadImage(absolutePath)]);

  return {
    width: image.width,
    height: image.height,
    size: file.size,
  };
}

const rows = [];
const failures = [];

for (const item of imageRoles) {
  const meta = await readImageMetadata(item.src);
  const minWidth = MIN_WIDTH[item.role];
  const passed = meta.width >= minWidth;

  rows.push({
    ...item,
    ...meta,
    passed,
    minWidth,
  });

  if (!passed) {
    failures.push(`${item.src} is ${meta.width}px (min ${minWidth}px for ${item.role})`);
  }
}

console.log("Travel image quality audit");
for (const row of rows) {
  const status = row.passed ? "PASS" : "FAIL";
  console.log(
    `[${status}] ${row.role.toUpperCase().padEnd(7)} ${row.width}x${row.height} ${kb(row.size).padStart(7)}  ${row.src}`,
  );
}

if (failures.length > 0) {
  console.error("\nImage quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nAll travel images satisfy minimum width requirements.");
