import type { SourceMeta } from "./sources";

export type Service = {
  title: string;
  group: "core" | "barclub" | "hospitality";
  summary: string;
  items: string[];
  source: SourceMeta;
};

export const coreServices: Service[] = [
  {
    title: "ADS",
    group: "core",
    summary: "Triển khai quảng cáo đa kênh để tăng nhận diện, tương tác và hiệu quả tiếp cận.",
    items: ["Facebook", "Google", "YouTube"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" },
  },
  {
    title: "TikTok Shop Partner",
    group: "core",
    summary:
      "Đồng hành cùng doanh nghiệp xây kênh, vận hành gian hàng và phát triển bán hàng trên TikTok Shop.",
    items: ["Xây kênh TikTok", "Xây gian hàng TikTok Shop", "TikTok Ads"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 14, confidence: "high" },
  },
  {
    title: "Design",
    group: "core",
    summary:
      "Thiết kế hệ thống nhận diện, landing page và ấn phẩm truyền thông đồng bộ cho thương hiệu.",
    items: ["Web/landing page", "Logo", "Ấn phẩm in ấn", "Hồ sơ năng lực"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" },
  },
  {
    title: "Booking",
    group: "core",
    summary: "Kết nối nguồn lực truyền thông, đối tác và hoạt động booking theo mục tiêu chiến dịch.",
    items: ["Dịch vụ Booking", "Kết nối đối tác"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 32, confidence: "medium" },
  },
  {
    title: "Content",
    group: "core",
    summary:
      "Xây dựng nội dung cho fanpage, chiến dịch và kênh social với lịch triển khai rõ ràng.",
    items: ["Bài viết", "Kế hoạch nội dung", "Content fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Studio",
    group: "core",
    summary: "Không gian sản xuất hình ảnh, video và nội dung phục vụ chiến dịch truyền thông.",
    items: ["Sản xuất hình ảnh", "Video", "Nội dung"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 34, confidence: "medium" },
  },
  {
    title: "Media",
    group: "core",
    summary:
      "Sản xuất video, hình ảnh, TVC và tư liệu truyền thông cho sản phẩm, dịch vụ, sự kiện.",
    items: ["Quay video", "Edit video", "Chụp ảnh sản phẩm/dịch vụ", "TVC"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    title: "Branding",
    group: "core",
    summary: "Xây dựng hình ảnh thương hiệu nhất quán từ logo, nhận diện đến biểu đạt thị giác.",
    items: ["Thiết kế logo", "Bộ nhận diện", "Hình ảnh thương hiệu"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 36, confidence: "medium" },
  },
  {
    title: "Setup Restaurant - Hotel",
    group: "core",
    summary: "Tư vấn setup và phát triển hình ảnh cho nhà hàng, khách sạn và mô hình dịch vụ.",
    items: ["Nhà hàng", "Khách sạn", "Du thuyền"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 38, confidence: "medium" },
  },
  {
    title: "Xây dựng phòng Marketing",
    group: "core",
    summary:
      "Thiết kế đội marketing thuê ngoài với kế hoạch, nội dung, quảng cáo và báo cáo vận hành.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" },
  },
];

export const barclubServices: Service[] = [
  {
    title: "Quản trị fanpage Barclub",
    group: "barclub",
    summary:
      "Quản trị fanpage với lịch nội dung, thiết kế hình ảnh và nhịp truyền thông theo tháng.",
    items: ["Kế hoạch bài viết", "Bài viết", "Thiết kế", "Poster", "Video/Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" },
  },
  {
    title: "Poster, Line-up, Recap",
    group: "barclub",
    summary:
      "Thiết kế visual sự kiện, line-up, recap và nội dung nhắc lịch theo tinh thần nightlife.",
    items: ["Poster chương trình", "Video intro line-up", "Video recap", "Video nhắc chương trình"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
  {
    title: "Quảng cáo online",
    group: "barclub",
    summary:
      "Tối ưu chiến dịch quảng cáo theo từng kênh phù hợp với lĩnh vực giải trí và dịch vụ.",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
];

export const hospitalityServices: Service[] = [
  {
    title: "Quản trị Facebook",
    group: "hospitality",
    summary:
      "Vận hành fanpage cho nhà hàng, khách sạn, trung tâm sự kiện và coffee bằng nội dung đều nhịp.",
    items: ["Bài viết", "Thiết kế", "Poster theo concept", "Ảnh bài và avatar chủ đề"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok/Reels",
    group: "hospitality",
    summary:
      "Xây dựng video ngắn, kịch bản và lịch đăng để tăng sức hút trên TikTok/Reels.",
    items: ["Quay full sự kiện", "20 video TikTok/Reel", "Kịch bản", "Nội dung"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Thiết kế đồ họa",
    group: "hospitality",
    summary:
      "Thiết kế poster, concept ảnh bìa, avatar, menu và visual chiến dịch cho từng mùa bán hàng.",
    items: ["Poster", "Ảnh bìa/avatar", "Menu", "Video intro line-up"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    title: "Thiết kế & chăm sóc website",
    group: "hospitality",
    summary: "Xây dựng website cơ bản và nội dung SEO phục vụ hiện diện số của thương hiệu.",
    items: ["Website cơ bản", "Bài viết chuẩn SEO web"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
];
