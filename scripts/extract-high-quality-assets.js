import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createCanvas, DOMMatrix, ImageData, Path2D } from "@napi-rs/canvas";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

globalThis.DOMMatrix ||= DOMMatrix;
globalThis.ImageData ||= ImageData;
globalThis.Path2D ||= Path2D;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const pdfjsRoot = path.dirname(require.resolve("pdfjs-dist/package.json"));
const outputDir = path.join(projectRoot, "public", "assets", "showcase");
const originalRenderScale = 1.55;
const highQualityRenderScale = 5.2;
const cropScale = highQualityRenderScale / originalRenderScale;
const webpQuality = 0.98;

const pdfSources = {
  "BAO GIA.pdf": "C:/Users/Admin/Downloads/BAO GIA.pdf",
  "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf": "C:/Users/Admin/Downloads/Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
  "HSNL CTY DST.pdf": "C:/Users/Admin/Downloads/HSNL CTY DST.pdf",
};

fs.mkdirSync(outputDir, { recursive: true });

const assets = [
  {
    name: "valley-beach-club-hero.webp",
    source: "hsnl-cty-dst-page-68.png",
    crop: { x: 42, y: 472, w: 552, h: 358 },
    width: 2000,
    height: 1298,
    sourceFile: "HSNL CTY DST.pdf",
    page: 68,
    note: "Nguồn PDF trang này rộng 1305px; crop chọn phần sân khấu ít chữ nhất và upscale cho hero.",
  },
  {
    name: "cana-beer-showcase.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-04.png",
    crop: { x: 64, y: 108, w: 2848, h: 1458 },
    width: 1920,
    height: 984,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 4,
  },
  {
    name: "ho-co-tien-showcase.webp",
    source: "hsnl-cty-dst-page-70.png",
    crop: { x: 44, y: 136, w: 584, h: 480 },
    width: 1600,
    height: 1315,
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    sharpen: 0.2,
    note: "Render PDF scale 5.2x; crop giữ nguyên khung dự án Hồ Cô Tiên.",
  },
  {
    name: "birds-nest-cafe-showcase.webp",
    source: "hsnl-cty-dst-page-70.png",
    crop: { x: 676, y: 136, w: 586, h: 480 },
    width: 1600,
    height: 1315,
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    sharpen: 0.2,
    note: "Render PDF scale 5.2x; crop giữ nguyên khung Bird's Nest Cafe.",
  },
  {
    name: "cabi-beach-showcase.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-17.png",
    crop: { x: 170, y: 158, w: 2600, h: 1368 },
    width: 1920,
    height: 1010,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 17,
  },
  {
    name: "grand-view-palace-showcase.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-20.png",
    crop: { x: 410, y: 178, w: 2140, h: 1220 },
    width: 1920,
    height: 1094,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 20,
  },
  {
    name: "diamond-palace-showcase.webp",
    source: "hsnl-cty-dst-page-71.png",
    crop: { x: 34, y: 136, w: 1230, h: 690 },
    width: 1800,
    height: 1010,
    sourceFile: "HSNL CTY DST.pdf",
    page: 71,
    sharpen: 0.2,
    note: "Render PDF scale cao; crop slide Diamond Palace giữ nguyên bố cục.",
  },
  {
    name: "nha-hang-thien-anh-showcase.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-26.png",
    crop: { x: 90, y: 70, w: 2796, h: 1534 },
    width: 1920,
    height: 1054,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 26,
    note: "Portfolio DST: poster, social post và mockup fanpage Nhà hàng Thiên Anh.",
  },
  {
    name: "nha-hang-thanh-thu-showcase.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-32.png",
    crop: { x: 90, y: 70, w: 2796, h: 1534 },
    width: 1920,
    height: 1054,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 32,
    note: "Portfolio DST: poster World Cup, ảnh món và không gian Nhà hàng Thanh Thư.",
  },
  {
    name: "02-homestay-showcase.webp",
    source: "hsnl-cty-dst-page-71.png",
    crop: { x: 676, y: 136, w: 586, h: 480 },
    width: 1600,
    height: 1310,
    sourceFile: "HSNL CTY DST.pdf",
    page: 71,
    sharpen: 0.2,
    note: "Render PDF scale 5.2x; crop cột 02 Homestay giữ nguyên bố cục slide.",
  },
  {
    name: "service-collage-showcase.webp",
    source: "hsnl-cty-dst-page-08.png",
    crop: { x: 0, y: 0, w: 1305, h: 923 },
    width: 1920,
    height: 1358,
    sourceFile: "HSNL CTY DST.pdf",
    page: 8,
    note: "Nguồn PDF trang này rộng 1305px nên có upscale nhẹ.",
  },
  {
    name: "travel-diamond-palace-hero.webp",
    source: "hsnl-cty-dst-page-71.png",
    crop: { x: 40, y: 148, w: 600, h: 338 },
    width: 1600,
    height: 900,
    sourceFile: "HSNL CTY DST.pdf",
    page: 71,
    sharpen: 0.15,
    note: "Hero du lịch: ảnh thật Diamond Palace — crop sát khung ảnh, không chữ portfolio.",
  },
  {
    name: "travel-homestay-cover.webp",
    source: "hsnl-cty-dst-page-71.png",
    crop: { x: 682, y: 168, w: 574, h: 360 },
    width: 1600,
    height: 1000,
    sourceFile: "HSNL CTY DST.pdf",
    page: 71,
    sharpen: 0.15,
    note: "Hero du lịch: 02 Homestay — view vịnh, crop 16:10 sát ảnh gốc.",
  },
  {
    name: "travel-grand-view-ballroom.webp",
    source: "bao-gia-tt-su-kien-nha-hang-khach-san-page-20.png",
    crop: { x: 98, y: 208, w: 1010, h: 568 },
    width: 1600,
    height: 900,
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 20,
    note: "Gallery du lịch: ảnh sảnh Grand View Palace — chỉ phần ảnh, không mockup Facebook.",
  },
];

const manifest = [];
const pdfCache = new Map();

async function getPdf(sourceFile) {
  if (pdfCache.has(sourceFile)) return pdfCache.get(sourceFile);

  const inputPath = pdfSources[sourceFile];
  if (!inputPath || !fs.existsSync(inputPath)) {
    throw new Error(`Missing source PDF: ${sourceFile}`);
  }

  const data = new Uint8Array(fs.readFileSync(inputPath));
  const pdf = await pdfjsLib.getDocument({
    data,
    disableWorker: true,
    cMapUrl: path.join(pdfjsRoot, "cmaps") + path.sep,
    cMapPacked: true,
    standardFontDataUrl: path.join(pdfjsRoot, "standard_fonts") + path.sep,
    useSystemFonts: true,
  }).promise;

  pdfCache.set(sourceFile, pdf);
  return pdf;
}

async function renderPage(sourceFile, pageNumber) {
  const pdf = await getPdf(sourceFile);
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale: highQualityRenderScale });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: context, viewport }).promise;
  return canvas;
}

function enhanceContrast(context, width, height, amount = 1.05) {
  const image = context.getImageData(0, 0, width, height);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    for (let c = 0; c < 3; c += 1) {
      const value = data[i + c];
      data[i + c] = Math.max(0, Math.min(255, (value - 128) * amount + 128));
    }
  }
  context.putImageData(image, 0, 0);
}

function sharpenImageData(context, width, height, amount = 0.22) {
  const image = context.getImageData(0, 0, width, height);
  const src = image.data;
  const out = new Uint8ClampedArray(src);
  const kernel = [
    0, -amount, 0,
    -amount, 1 + amount * 4, -amount,
    0, -amount, 0,
  ];

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      for (let c = 0; c < 3; c += 1) {
        let value = 0;
        for (let ky = -1; ky <= 1; ky += 1) {
          for (let kx = -1; kx <= 1; kx += 1) {
            const sourceIndex = ((y + ky) * width + (x + kx)) * 4 + c;
            value += src[sourceIndex] * kernel[(ky + 1) * 3 + (kx + 1)];
          }
        }
        out[(y * width + x) * 4 + c] = Math.max(0, Math.min(255, value));
      }
    }
  }

  image.data.set(out);
  context.putImageData(image, 0, 0);
}

for (const asset of assets) {
  const pageCanvas = await renderPage(asset.sourceFile, asset.page);
  const canvas = createCanvas(asset.width, asset.height);
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(
    pageCanvas,
    Math.round(asset.crop.x * cropScale),
    Math.round(asset.crop.y * cropScale),
    Math.round(asset.crop.w * cropScale),
    Math.round(asset.crop.h * cropScale),
    0,
    0,
    asset.width,
    asset.height,
  );
  enhanceContrast(context, asset.width, asset.height, asset.contrast ?? 1.05);
  sharpenImageData(context, asset.width, asset.height, asset.sharpen ?? 0.22);

  const outputPath = path.join(outputDir, asset.name);
  fs.writeFileSync(outputPath, canvas.toBuffer("image/webp", webpQuality));
  manifest.push({
    file: `/assets/showcase/${asset.name}`,
    sourceFile: asset.sourceFile,
    page: asset.page,
    derivedFrom: `/assets/pdf-images/${asset.source}`,
    width: asset.width,
    height: asset.height,
    confidence: "high",
    note: asset.note ?? `WebP quality ${webpQuality} từ PDF render scale ${highQualityRenderScale}.`,
  });
}

fs.writeFileSync(
  path.join(outputDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8",
);

console.log(JSON.stringify({ created: manifest.length, outputDir: "public/assets/showcase" }, null, 2));
