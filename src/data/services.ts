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
    title: "Quảng cáo theo mục tiêu",
    group: "core",
    summary: "DST hỗ trợ quảng cáo Facebook, Google và YouTube theo mục tiêu đã thống nhất.",
    items: ["Facebook", "Google", "YouTube"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok / TikTok Shop",
    group: "core",
    summary:
      "DST hỗ trợ xây kênh, gian hàng TikTok Shop và quảng cáo TikTok theo nhu cầu.",
    items: ["Xây kênh TikTok", "Xây gian hàng TikTok Shop", "Quảng cáo TikTok"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 14, confidence: "high" },
  },
  {
    title: "Thiết kế logo và ấn phẩm",
    group: "core",
    summary:
      "DST hỗ trợ logo, trang giới thiệu, profile công ty và ấn phẩm truyền thông — theo phạm vi được tư vấn.",
    items: ["Website / trang giới thiệu", "Logo", "Ấn phẩm in ấn", "Hồ sơ năng lực"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" },
  },
  {
    title: "Booking và kết nối truyền thông",
    group: "core",
    summary:
      "DST tư vấn booking và kết nối đối tác theo từng nhu cầu triển khai.",
    items: ["Dịch vụ Booking", "Kết nối đối tác"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 32, confidence: "medium" },
  },
  {
    title: "Nội dung fanpage có kế hoạch",
    group: "core",
    summary:
      "DST hỗ trợ lịch bài, thông điệp và nội dung fanpage theo kế hoạch đã chốt.",
    items: ["Bài viết", "Kế hoạch nội dung", "Nội dung fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Sản xuất hình ảnh và video",
    group: "core",
    summary:
      "DST hỗ trợ sản xuất ảnh, video và tư liệu cho sản phẩm, không gian hoặc sự kiện — theo phạm vi được tư vấn.",
    items: ["Sản xuất hình ảnh", "Video", "Nội dung"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 34, confidence: "medium" },
  },
  {
    title: "Sản xuất video ngắn và recap",
    group: "core",
    summary:
      "DST hỗ trợ video ngắn, recap và tư liệu dùng cho TikTok, Reels, fanpage hoặc website.",
    items: ["Quay video", "Dựng video", "Chụp ảnh sản phẩm/dịch vụ", "TVC"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    title: "Branding dễ dùng",
    group: "core",
    summary:
      "DST hỗ trợ logo, nhận diện và hình ảnh thương hiệu — theo phạm vi được tư vấn.",
    items: ["Thiết kế logo", "Bộ nhận diện", "Hình ảnh thương hiệu"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 36, confidence: "medium" },
  },
  {
    title: "Truyền thông cho nhà hàng / khách sạn",
    group: "core",
    summary:
      "DST tư vấn hình ảnh, nội dung, website và truyền thông cho nhà hàng, khách sạn, du thuyền và mô hình dịch vụ.",
    items: ["Nhà hàng", "Khách sạn", "Du thuyền"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 38, confidence: "medium" },
  },
  {
    title: "Đội marketing thuê ngoài",
    group: "core",
    summary:
      "DST hỗ trợ tư vấn, quản trị kênh, nội dung, media và quảng cáo theo tháng — theo phạm vi được tư vấn.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" },
  },
];

export const barclubServices: Service[] = [
  {
    title: "Quản trị fanpage Bar/Club có lịch sự kiện",
    group: "barclub",
    summary:
      "DST hỗ trợ lịch bài, nội dung, poster và video theo từng đêm diễn — fanpage luôn có gì để đăng.",
    items: ["Kế hoạch bài viết", "Bài viết", "Thiết kế", "Poster", "Video/Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" },
  },
  {
    title: "Poster, line-up và recap sự kiện",
    group: "barclub",
    summary:
      "Line-up, poster, video giới thiệu, recap và nội dung nhắc lịch — khách biết event gì, khi nào.",
    items: ["Poster chương trình", "Hình ảnh chương trình", "Video recap", "Video nhắc chương trình"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
  {
    title: "Quảng cáo online cho nightlife",
    group: "barclub",
    summary:
      "DST hỗ trợ quảng cáo Facebook, TikTok, Google và Zalo theo mục tiêu đã trao đổi.",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
];

export const hospitalityServices: Service[] = [
  {
    title: "Quản trị fanpage nhà hàng / khách sạn",
    group: "hospitality",
    summary:
      "DST hỗ trợ lịch đăng, bài viết, hình ảnh và poster — fanpage không bị bỏ trống quá lâu.",
    items: ["Bài viết", "Thiết kế", "Poster theo chương trình", "Ảnh bài và avatar chủ đề"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Video ngắn cho món ăn, không gian và dịch vụ",
    group: "hospitality",
    summary:
      "Kịch bản, quay và dựng video ngắn — món ăn, không gian và dịch vụ dễ gây chú ý hơn trên social.",
    items: ["Kịch bản", "Quay video", "Dựng video ngắn", "Nội dung đăng fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Thiết kế đồ họa",
    group: "hospitality",
    summary:
      "Poster, ảnh bìa, avatar, menu và hình ảnh chương trình — thông tin rõ, dễ nhìn.",
    items: ["Poster", "Ảnh bìa/avatar", "Menu", "Hình ảnh chương trình"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    title: "Website và nội dung SEO",
    group: "hospitality",
    summary: "Website, trang giới thiệu và bài viết SEO — nơi khách xem thông tin và liên hệ dễ hơn.",
    items: ["Website cơ bản", "Bài viết chuẩn SEO web"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
];
