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

const sourcePdfs = [
  {
    sourceFile: "BAO GIA.pdf",
    inputPath: "C:/Users/Admin/Downloads/BAO GIA.pdf",
    slug: "bao-gia",
  },
  {
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    inputPath: "C:/Users/Admin/Downloads/Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    slug: "bao-gia-tt-su-kien-nha-hang-khach-san",
  },
  {
    sourceFile: "HSNL CTY DST.pdf",
    inputPath: "C:/Users/Admin/Downloads/HSNL CTY DST.pdf",
    slug: "hsnl-cty-dst",
  },
];

const textDir = path.join(projectRoot, "work", "pdf-text");
const imageDir = path.join(projectRoot, "public", "assets", "pdf-images");
fs.mkdirSync(textDir, { recursive: true });
fs.mkdirSync(imageDir, { recursive: true });

const assetManifest = [];

function cleanText(text) {
  return text
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function itemTextContent(items) {
  const rows = new Map();

  for (const item of items) {
    if (!("str" in item) || !item.str.trim()) continue;
    const y = Math.round(item.transform[5]);
    if (!rows.has(y)) rows.set(y, []);
    rows.get(y).push({ x: item.transform[4], str: item.str });
  }

  return [...rows.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([, rowItems]) =>
      rowItems
        .sort((a, b) => a.x - b.x)
        .map((item) => item.str)
        .join(" ")
    )
    .join("\n");
}

async function extractPdf({ sourceFile, inputPath, slug }) {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing source PDF: ${inputPath}`);
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

  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const text = cleanText(itemTextContent(textContent.items));
    const pageSlug = `${slug}-page-${String(pageNumber).padStart(2, "0")}`;
    const textPath = path.join(textDir, `${pageSlug}.txt`);
    fs.writeFileSync(textPath, text, "utf8");

    const viewport = page.getViewport({ scale: 1.55 });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    const imageFile = `${pageSlug}.png`;
    const imagePath = path.join(imageDir, imageFile);
    fs.writeFileSync(imagePath, canvas.toBuffer("image/png"));

    const pageRecord = {
      sourceFile,
      page: pageNumber,
      textFile: path.relative(projectRoot, textPath).replace(/\\/g, "/"),
      imageFile: `/assets/pdf-images/${imageFile}`,
      confidence: text ? "high" : "medium",
    };

    pages.push(pageRecord);
    assetManifest.push({
      ...pageRecord,
      kind: "rendered-pdf-page",
    });
  }

  return {
    sourceFile,
    pageCount: pdf.numPages,
    pages,
  };
}

const extraction = [];

for (const source of sourcePdfs) {
  extraction.push(await extractPdf(source));
}

fs.writeFileSync(
  path.join(textDir, "extraction-summary.json"),
  JSON.stringify({ extraction, assets: assetManifest }, null, 2),
  "utf8"
);

console.log(
  JSON.stringify(
    {
      pdfs: extraction.map(({ sourceFile, pageCount }) => ({ sourceFile, pageCount })),
      renderedImages: assetManifest.length,
      textDir: path.relative(projectRoot, textDir).replace(/\\/g, "/"),
      imageDir: path.relative(projectRoot, imageDir).replace(/\\/g, "/"),
    },
    null,
    2
  )
);
