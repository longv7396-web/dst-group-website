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
      "Dự án nightlife với nhu cầu xây dựng hình ảnh, nội dung sự kiện và nhận diện trên các điểm chạm truyền thông số.",
    services: ["Quản trị Fanpage", "Viết content", "Thiết kế hình ảnh", "Chạy ads"],
    outcome:
      "DST Group đồng hành ở fanpage, content, thiết kế hình ảnh và ads để thương hiệu có nhịp xuất hiện rõ hơn.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 69, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 68, confidence: "high" },
  },
  {
    name: "Cana Beer",
    sector: "Barclub / F&B",
    category: "barclub",
    summary: "Dự án F&B/nightlife cần visual món uống, không gian giải trí và nội dung social có chất riêng.",
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
    summary: "Dự án nhà hàng cần hình ảnh rõ không gian, rõ sản phẩm và tạo cảm giác tin cậy hơn trên kênh social.",
    services: ["Chụp ảnh sản phẩm", "Quay clip review", "Xây dựng & quản trị Fanpage", "Thiết kế hình ảnh"],
    image: "/assets/showcase/ho-co-tien-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Bird's Nest Cafe",
    sector: "Coffee",
    category: "hospitality",
    summary: "Dự án cafe/hospitality cần hình ảnh chỉn chu hơn trên fanpage, nội dung và các ấn phẩm truyền thông.",
    services: ["Tư vấn truyền thông", "Xây dựng Fanpage", "Thiết kế logo", "Bộ nhận diện thương hiệu", "Banner", "Quảng cáo marketing online đa kênh"],
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 70, confidence: "high" },
  },
  {
    name: "Cabi Beach",
    sector: "Nhà hàng / sự kiện",
    category: "hospitality",
    summary: "Dự án F&B/sự kiện cần visual tiệc biển, combo món ăn và nội dung social đủ rõ để khách dễ cảm nhận.",
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
    summary: "Dự án khách sạn/trung tâm sự kiện cần thể hiện không gian, dịch vụ và hình ảnh thương hiệu một cách chuyên nghiệp.",
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
      "Dự án hospitality/sự kiện với nhu cầu thể hiện không gian, dịch vụ và hình ảnh thương hiệu một cách chuyên nghiệp.",
    services: ["Tư vấn truyền thông", "Chạy ads cho sự kiện"],
    image: "/assets/showcase/diamond-palace-showcase.webp",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
  },
  {
    name: "Nhà hàng Thiên Anh",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Dự án nhà hàng trong nhóm F&B, phù hợp triển khai hình ảnh, nội dung và truyền thông theo nhu cầu thực tế.",
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
    summary: "Dự án nhà hàng trong hệ sinh thái dịch vụ DST, cần định hướng truyền thông theo mục tiêu và quy mô triển khai.",
    services: ["Tư vấn giải pháp"],
    image: "/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-31.png",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    confidenceNote: "Liên hệ DST Group để được tư vấn hạng mục phù hợp.",
  },
];
