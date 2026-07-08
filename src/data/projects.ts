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
      "Dự án tiêu biểu do DST Group triển khai đồng bộ từ quản trị Fanpage, sản xuất Content, thiết kế nhận diện đến chạy quảng cáo nhắm chọn đối tượng.",
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
    summary: "Hồ sơ hình ảnh và ấn phẩm truyền thông tiêu biểu cho mô hình Beer / Nightlife.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/cana-beer-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 3, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 4, confidence: "high" },
    confidenceNote: "Đăng ký tư vấn để nhận giải pháp truyền thông thiết kế riêng cho mô hình của bạn.",
  },
  {
    name: "Nhà hàng Hồ Cô Tiên",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Triển khai trọn gói quay chụp review không gian, sản xuất hình ảnh món ăn và xây dựng thương hiệu trên Fanpage.",
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
    summary: "Xây dựng bộ nhận diện thương hiệu, thiết kế banner chuyên nghiệp và triển khai chiến dịch quảng cáo đa kênh.",
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
    summary: "Hồ sơ truyền thông & tổ chức sự kiện thực tế tại không gian bãi biển.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/cabi-beach-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 16, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 17, confidence: "high" },
    confidenceNote: "Đăng ký tư vấn để nhận giải pháp truyền thông thiết kế riêng cho mô hình của bạn.",
  },
  {
    name: "Grand View Palace Ha Long Hotel",
    sector: "Khách sạn / trung tâm sự kiện",
    category: "event",
    summary: "Hồ sơ truyền thông cho khách sạn và trung tâm sự kiện quy mô lớn tại Hạ Long.",
    services: ["Hình ảnh/dự án tham khảo"],
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 19, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 20, confidence: "high" },
    confidenceNote: "Đăng ký tư vấn để nhận giải pháp truyền thông thiết kế riêng cho mô hình của bạn.",
  },
  {
    name: "Diamond Palace - Hạ Long",
    sector: "Trung tâm tiệc cưới",
    category: "event",
    summary:
      "Tư vấn chiến lược truyền thông sự kiện tiệc cưới và tối ưu chiến dịch quảng cáo thu hút khách hàng tiềm năng.",
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
    summary: "Thiết kế bộ poster chương trình, sáng tạo nội dung social và quy chuẩn giao diện Fanpage chuyên nghiệp.",
    services: ["Poster chương trình", "Nội dung social", "Thiết kế fanpage"],
    image: "/assets/showcase/nha-hang-thien-anh-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 25, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 26, confidence: "high" },
    confidenceNote: "Giải pháp truyền thông thiết kế riêng cho mô hình nhà hàng & F&B.",
  },
  {
    name: "Nhà hàng Thanh Thư",
    sector: "Nhà hàng",
    category: "hospitality",
    summary: "Sản xuất hình ảnh món ăn, không gian nhà hàng cùng bộ poster khuyến mãi và nội dung tương tác trên mạng xã hội.",
    services: ["Poster chương trình", "Nội dung social", "Ảnh món và không gian"],
    image: "/assets/showcase/nha-hang-thanh-thu-showcase.webp",
    imageDisplay: "showcase",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 31, confidence: "high" },
    imageSource: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 32, confidence: "high" },
    confidenceNote: "Giải pháp truyền thông thiết kế riêng cho mô hình nhà hàng & F&B.",
  },
  {
    name: "02 Homestay",
    sector: "Homestay",
    category: "hospitality",
    summary: "Dự án truyền thông hình ảnh cho mô hình lưu trú Homestay tiêu biểu do DST Group triển khai.",
    services: ["Quy chuẩn nhận diện Homestay", "Truyền thông hình ảnh không gian", "Sáng tạo nội dung Social"],
    image: "/assets/showcase/02-homestay-showcase.webp",
    imageDisplay: "pdf-slide",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    imageSource: { sourceFile: "HSNL CTY DST.pdf", page: 71, confidence: "high" },
    confidenceNote:
      "Chi tiết dịch vụ được tối ưu riêng theo quy mô và đối tượng khách lưu trú của từng Homestay.",
  },
];
