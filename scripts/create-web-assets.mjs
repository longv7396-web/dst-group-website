import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "@napi-rs/canvas";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const pdfImageDir = path.join(projectRoot, "public", "assets", "pdf-images");
const outputDir = path.join(projectRoot, "public", "assets", "case-studies");
fs.mkdirSync(outputDir, { recursive: true });

const jobs = [
  {
    name: "cana-beer-01.jpg",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-04.png",
    crop: null,
    width: 1400,
    height: 788,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 4,
  },
  {
    name: "ho-co-tien-01.jpg",
    source: "hsnl-cty-dst-page-70.png",
    crop: { x: 40, y: 136, w: 590, h: 480 },
    width: 1200,
    height: 800,
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
  },
  {
    name: "birds-nest-cafe-01.jpg",
    source: "hsnl-cty-dst-page-70.png",
    crop: { x: 676, y: 136, w: 588, h: 480 },
    width: 1200,
    height: 800,
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
  },
  {
    name: "cabi-beach-01.jpg",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-17.png",
    crop: null,
    width: 1400,
    height: 788,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 17,
  },
  {
    name: "grand-view-palace-01.jpg",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-20.png",
    crop: null,
    width: 1400,
    height: 788,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 20,
  },
  {
    name: "valley-beach-club-01.jpg",
    source: "hsnl-cty-dst-page-68.png",
    crop: { x: 42, y: 472, w: 552, h: 358 },
    width: 1200,
    height: 780,
    sourceFile: "HSNL CTY DST.pdf",
    page: 68,
  },
  {
    name: "valley-beach-club-02.jpg",
    source: "hsnl-cty-dst-page-68.png",
    crop: { x: 644, y: 164, w: 616, h: 287 },
    width: 1400,
    height: 650,
    sourceFile: "HSNL CTY DST.pdf",
    page: 68,
  },
  {
    name: "client-grid-01.jpg",
    source: "hsnl-cty-dst-page-72.png",
    crop: null,
    width: 1400,
    height: 991,
    sourceFile: "HSNL CTY DST.pdf",
    page: 72,
  },
  {
    name: "services-overview-01.jpg",
    source: "hsnl-cty-dst-page-08.png",
    crop: null,
    width: 1200,
    height: 849,
    sourceFile: "HSNL CTY DST.pdf",
    page: 8,
  },
];

function coverRect(sourceWidth, sourceHeight, targetWidth, targetHeight) {
  const scale = Math.max(targetWidth / sourceWidth, targetHeight / sourceHeight);
  const width = targetWidth / scale;
  const height = targetHeight / scale;
  return {
    x: (sourceWidth - width) / 2,
    y: (sourceHeight - height) / 2,
    w: width,
    h: height,
  };
}

const manifest = [];

for (const job of jobs) {
  const img = await loadImage(path.join(pdfImageDir, job.source));
  const crop = job.crop ?? coverRect(img.width, img.height, job.width, job.height);
  const canvas = createCanvas(job.width, job.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, job.width, job.height);
  const outPath = path.join(outputDir, job.name);
  fs.writeFileSync(outPath, canvas.toBuffer("image/jpeg", 0.84));
  manifest.push({
    file: `/assets/case-studies/${job.name}`,
    sourceFile: job.sourceFile,
    page: job.page,
    derivedFrom: `/assets/pdf-images/${job.source}`,
    confidence: "high",
  });
}

fs.writeFileSync(
  path.join(outputDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);

console.log(JSON.stringify({ created: manifest.length, outputDir: "public/assets/case-studies" }, null, 2));
