import type { SourceMeta } from "./sources";

/** hero: đủ nét cho layout lớn; showcase: crop PDF chất lượng cao; compact: nguồn ~1305px; pdf-slide: slide/collage PDF */
export type ProjectImageDisplay = "hero" | "showcase" | "compact" | "pdf-slide";

export type Project = {
  name: string;
  sector: string;
  category: "barclub" | "hospitality" | "event" | "other";
  summary: string;
  services: string[];
  outcome?: string;
  image: string;
  imageDisplay: ProjectImageDisplay;
  source: SourceMeta;
  imageSource: SourceMeta;
  confidenceNote?: string;
};

export const projects: Project[] = [
  {
    name: "Valley Beach Club",
    sector: "Barclub / beach club",
    category: "barclub",
    summary:
      "DST đã thực hiện fanpage, content, thiết kế hình ảnh và ads cho dự án này.",
    services: ["Quản trị Fanpage", "Viết content", "Thiết kế hình ảnh", "Chạy ads"],
    outcome:
      "DST Group bước đầu đã giúp Valley Beach Club xây dựng hình ảnh chuyên nghiệp, Fanpage với nội dung và các hình ảnh, video độc đáo, thú vị, góp phần quảng bá tên tuổi hình ảnh phủ sóng rộng rãi, tiếp cận tệp khách hàng tiềm năng tại Quảng Ninh.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    imageDisplay: "hero",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 69, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 68, confidence: "high" },
  },
  {
    name: "Cana Beer",
    sector: "Barclub / F&B",
    category: "barclub",
    summary: "Một số hình ảnh của dự án Cana Beer.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/cana-beer-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 3, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 4, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Nhà hàng Hồ Cô Tiên",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "DST đã thực hiện ảnh, clip review, fanpage và thiết kế cho dự án này.",
    services: ["Chụp ảnh sản phẩm", "Quay clip review", "Xây dựng & quản trị Fanpage", "Thiết kế hình ảnh"],
    image: "/assets/showcase/ho-co-tien-showcase.webp",
    imageDisplay: "compact",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Bird's Nest Cafe",
    sector: "Coffee",
    category: "hospitality",
    summary: "DST đã thực hiện fanpage, nhận diện, banner và quảng cáo cho dự án này.",
    services: ["Tư vấn truyền thông", "Xây dựng Fanpage", "Thiết kế logo", "Bộ nhận diện thương hiệu", "Banner", "Quảng cáo marketing online đa kênh"],
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    imageDisplay: "compact",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Cabi Beach",
    sector: "Nhà hàng / sự kiện",
    category: "hospitality",
    summary: "Một số hình ảnh của dự án Cabi Beach.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/cabi-beach-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 16, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 17, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Grand View Palace Ha Long Hotel",
    sector: "Khách sạn / trung tâm sự kiện",
    category: "event",
    summary: "Một số hình ảnh của dự án Grand View Palace Ha Long Hotel.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 19, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 20, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Diamond Palace - Hạ Long",
    sector: "Trung tâm tiệc cưới",
    category: "event",
    summary:
      "DST đã tư vấn truyền thông và chạy ads cho sự kiện của dự án này.",
    services: ["Tư vấn truyền thông", "Chạy ads cho sự kiện"],
    image: "/assets/showcase/diamond-palace-showcase.webp",
    imageDisplay: "compact",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
  },
  {
    name: "Nhà hàng Thiên Anh",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Một số hình ảnh/dự án của Nhà hàng Thiên Anh.",
    services: ["Thông tin dự án từ tài liệu DST"],
    image: "/assets/showcase/nha-hang-thien-anh-showcase.webp",
    imageDisplay: "pdf-slide",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 25, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 25, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Nhà hàng Thanh Thư",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Một số hình ảnh/dự án của Nhà hàng Thanh Thư.",
    services: ["Thông tin dự án từ tài liệu DST"],
    image: "/assets/showcase/nha-hang-thanh-thu-showcase.webp",
    imageDisplay: "pdf-slide",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "02 Homestay",
    sector: "Homestay",
    category: "hospitality",
    summary: "Dự án 02 Homestay xuất hiện trong hồ sơ DST.",
    services: ["Thông tin dự án từ tài liệu DST"],
    image: "/assets/showcase/02-homestay-showcase.webp",
    imageDisplay: "pdf-slide",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    confidenceNote:
      "Tài liệu xác nhận tên dự án; chi tiết hạng mục dịch vụ chưa nêu rõ trong PDF.",
  },
];
