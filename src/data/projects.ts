import type { SourceMeta } from "./sources";

export type Project = {
  name: string;
  sector: string;
  category: "barclub" | "hospitality" | "event" | "other";
  summary: string;
  services: string[];
  outcome?: string;
  image: string;
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
      "Không gian nightlife ven biển với hình ảnh sân khấu, sự kiện và fanpage được DST Group triển khai theo tinh thần năng lượng cao.",
    services: ["Quản trị Fanpage", "Viết content", "Thiết kế hình ảnh", "Chạy ADS"],
    outcome:
      "DST Group đồng hành trong quản trị fanpage, content, thiết kế hình ảnh và ADS để tăng độ phủ thương hiệu.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 69, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 68, confidence: "high" },
  },
  {
    name: "Cana Beer",
    sector: "Barclub / F&B",
    category: "barclub",
    summary: "Dự án thể hiện năng lực xây dựng visual F&B, nội dung social và hình ảnh không gian giải trí.",
    services: ["Social media", "Visual F&B", "Media"],
    image: "/assets/showcase/cana-beer-showcase.webp",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 3, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 4, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Nhà hàng Hồ Cô Tiên",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Hình ảnh nhà hàng được triển khai theo hướng rõ không gian, rõ sản phẩm và dễ nhận diện trên kênh social.",
    services: ["Chụp ảnh sản phẩm", "Quay clip review", "Xây dựng & quản trị Fanpage", "Thiết kế hình ảnh"],
    image: "/assets/showcase/ho-co-tien-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Bird's Nest Cafe",
    sector: "Coffee",
    category: "hospitality",
    summary: "Một dự án cafe với trọng tâm nhận diện thương hiệu, fanpage và truyền thông hình ảnh đa kênh.",
    services: ["Tư vấn truyền thông", "Xây dựng Fanpage", "Thiết kế logo", "Bộ nhận diện thương hiệu", "Banner", "Quảng cáo marketing online đa kênh"],
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Cabi Beach",
    sector: "Nhà hàng / sự kiện",
    category: "hospitality",
    summary: "Visual mùa hè, tiệc biển và hoạt động F&B được trình bày bằng ngôn ngữ rực rỡ, dễ lan truyền.",
    services: ["Social media", "Thiết kế visual", "Media"],
    image: "/assets/showcase/cabi-beach-showcase.webp",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 16, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 17, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Grand View Palace Ha Long Hotel",
    sector: "Khách sạn / trung tâm sự kiện",
    category: "event",
    summary: "Dự án khách sạn và trung tâm sự kiện với hình ảnh sang trọng, phù hợp truyền thông tiệc cưới và hội nghị.",
    services: ["Truyền thông sự kiện", "Visual khách sạn", "Media"],
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 19, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 20, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Diamond Palace - Hạ Long",
    sector: "Trung tâm tiệc cưới",
    category: "event",
    summary:
      "Truyền thông và quảng cáo cho sự kiện triển lãm tiệc cưới, tập trung vào độ phủ và sức hút hình ảnh.",
    services: ["Tư vấn truyền thông", "Chạy ADS cho sự kiện"],
    image: "/assets/showcase/diamond-palace-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
  },
  {
    name: "Nhà hàng Thiên Anh",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Dự án nhà hàng trong nhóm dịch vụ F&B, phù hợp tư vấn truyền thông theo nhu cầu triển khai thực tế.",
    services: ["Tư vấn giải pháp"],
    image: "/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-25.png",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 25, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 25, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
  {
    name: "Nhà hàng Thanh Thư",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Dự án nhà hàng trong hệ sinh thái dịch vụ DST Group, định hướng truyền thông theo từng mục tiêu kinh doanh.",
    services: ["Tư vấn giải pháp"],
    image: "/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-31.png",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
];
