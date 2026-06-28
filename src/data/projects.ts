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
      "Dự án nightlife ven biển với nhu cầu truyền thông sự kiện, hình ảnh sân khấu, fanpage và quảng cáo theo tinh thần năng lượng cao.",
    services: ["Quản trị Fanpage", "Viết content", "Thiết kế hình ảnh", "Chạy ADS"],
    outcome:
      "DST Group đồng hành ở fanpage, content, thiết kế hình ảnh và ADS để thương hiệu có nhịp xuất hiện rõ hơn.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 69, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 68, confidence: "high" },
  },
  {
    name: "Cana Beer",
    sector: "Barclub / F&B",
    category: "barclub",
    summary: "Dự án F&B/nightlife với trọng tâm visual món uống, không gian giải trí, nội dung social và hình ảnh chiến dịch.",
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
    summary: "Dự án nhà hàng cần hình ảnh rõ không gian, rõ sản phẩm và dễ tạo cảm giác tin cậy trên kênh social.",
    services: ["Chụp ảnh sản phẩm", "Quay clip review", "Xây dựng & quản trị Fanpage", "Thiết kế hình ảnh"],
    image: "/assets/showcase/ho-co-tien-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Bird's Nest Cafe",
    sector: "Coffee",
    category: "hospitality",
    summary: "Dự án cafe tập trung vào nhận diện thương hiệu, fanpage, banner và truyền thông hình ảnh đa kênh.",
    services: ["Tư vấn truyền thông", "Xây dựng Fanpage", "Thiết kế logo", "Bộ nhận diện thương hiệu", "Banner", "Quảng cáo marketing online đa kênh"],
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Cabi Beach",
    sector: "Nhà hàng / sự kiện",
    category: "hospitality",
    summary: "Dự án F&B/sự kiện với visual tiệc biển, combo món ăn và hoạt động social cần hình ảnh bắt mắt, dễ nhớ.",
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
    summary: "Dự án khách sạn và trung tâm sự kiện cần hình ảnh sang trọng, phù hợp truyền thông tiệc cưới, hội nghị và dịch vụ lưu trú.",
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
      "Dự án trung tâm tiệc cưới với nhu cầu truyền thông sự kiện, quảng cáo và hình ảnh đủ rõ để thu hút sự chú ý.",
    services: ["Tư vấn truyền thông", "Chạy ADS cho sự kiện"],
    image: "/assets/showcase/diamond-palace-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
  },
  {
    name: "Nhà hàng Thiên Anh",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Dự án nhà hàng trong nhóm F&B, phù hợp tư vấn hình ảnh, nội dung và truyền thông theo nhu cầu thực tế.",
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
    summary: "Dự án nhà hàng trong hệ sinh thái dịch vụ DST, định hướng truyền thông theo mục tiêu và quy mô triển khai.",
    services: ["Tư vấn giải pháp"],
    image: "/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-31.png",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
];
