export type Confidence = "high" | "medium" | "low";

export type SourceMeta = {
  sourceFile: string;
  page: number;
  confidence: Confidence;
};

export const sourceLabel = (source: SourceMeta) =>
  `${source.sourceFile}, trang ${source.page}`;

export const pdfSources = [
  {
    sourceFile: "BAO GIA.pdf",
    pageCount: 28,
    extractedTextPath: "work/pdf-text/bao-gia-page-*.txt",
    renderedAssetPath: "public/assets/pdf-images/bao-gia-page-*.png",
  },
  {
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    pageCount: 38,
    extractedTextPath:
      "work/pdf-text/bao-gia-tt-su-kien-nha-hang-khach-san-page-*.txt",
    renderedAssetPath:
      "public/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-*.png",
  },
  {
    sourceFile: "HSNL CTY DST.pdf",
    pageCount: 76,
    extractedTextPath: "work/pdf-text/hsnl-cty-dst-page-*.txt",
    renderedAssetPath: "public/assets/pdf-images/hsnl-cty-dst-page-*.png",
  },
] as const;

export const assetSources = [
  {
    file: "/assets/case-studies/cana-beer-01.jpg",
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 4,
    confidence: "high",
  },
  {
    file: "/assets/case-studies/ho-co-tien-01.jpg",
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    confidence: "high",
  },
  {
    file: "/assets/case-studies/birds-nest-cafe-01.jpg",
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    confidence: "high",
  },
  {
    file: "/assets/case-studies/cabi-beach-01.jpg",
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 17,
    confidence: "high",
  },
  {
    file: "/assets/case-studies/grand-view-palace-01.jpg",
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 20,
    confidence: "high",
  },
  {
    file: "/assets/case-studies/valley-beach-club-01.jpg",
    sourceFile: "HSNL CTY DST.pdf",
    page: 68,
    confidence: "high",
  },
] satisfies Array<SourceMeta & { file: string }>;
