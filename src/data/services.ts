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
    title: "Quảng cáo đa kênh có mục tiêu",
    group: "core",
    summary: "Thiết lập Facebook, Google, YouTube và các kênh phù hợp trên nền nội dung, hình ảnh và thông điệp đã được chuẩn bị rõ.",
    items: ["Facebook", "Google", "YouTube"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok / TikTok Shop",
    group: "core",
    summary:
      "Xây kênh, vận hành gian hàng và triển khai nội dung TikTok để thương hiệu có điểm chạm bán hàng rõ hơn.",
    items: ["Xây kênh TikTok", "Xây gian hàng TikTok Shop", "TikTok Ads"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 14, confidence: "high" },
  },
  {
    title: "Thiết kế nhận diện và ấn phẩm",
    group: "core",
    summary:
      "Thiết kế logo, landing page, hồ sơ năng lực và ấn phẩm để thương hiệu xuất hiện chỉn chu ở nhiều điểm chạm.",
    items: ["Web/landing page", "Logo", "Ấn phẩm in ấn", "Hồ sơ năng lực"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" },
  },
  {
    title: "Booking và kết nối truyền thông",
    group: "core",
    summary: "Kết nối nguồn lực, đối tác và hoạt động booking theo mục tiêu truyền thông của từng chiến dịch.",
    items: ["Dịch vụ Booking", "Kết nối đối tác"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 32, confidence: "medium" },
  },
  {
    title: "Nội dung social có kế hoạch",
    group: "core",
    summary:
      "Xây dựng lịch bài, thông điệp và nội dung fanpage để kênh social không bị bỏ trống hoặc đăng rời rạc.",
    items: ["Bài viết", "Kế hoạch nội dung", "Content fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Sản xuất hình ảnh và video",
    group: "core",
    summary: "Sản xuất hình ảnh, video và tư liệu truyền thông để sản phẩm, không gian và sự kiện có chất liệu thật để kể chuyện.",
    items: ["Sản xuất hình ảnh", "Video", "Nội dung"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 34, confidence: "medium" },
  },
  {
    title: "Media / video ngắn / recap",
    group: "core",
    summary:
      "Quay, chụp, dựng video ngắn, recap và tư liệu media giúp thương hiệu có nội dung dùng được trên nhiều kênh.",
    items: ["Quay video", "Edit video", "Chụp ảnh sản phẩm/dịch vụ", "TVC"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    title: "Branding dễ ứng dụng",
    group: "core",
    summary: "Đồng bộ logo, nhận diện và ngôn ngữ hình ảnh để khách hàng nhìn thấy thương hiệu nhất quán hơn.",
    items: ["Thiết kế logo", "Bộ nhận diện", "Hình ảnh thương hiệu"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 36, confidence: "medium" },
  },
  {
    title: "Truyền thông cho Restaurant - Hotel",
    group: "core",
    summary: "Tư vấn hình ảnh, nội dung và truyền thông cho nhà hàng, khách sạn, du thuyền và mô hình dịch vụ.",
    items: ["Nhà hàng", "Khách sạn", "Du thuyền"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 38, confidence: "medium" },
  },
  {
    title: "Đội marketing thuê ngoài",
    group: "core",
    summary:
      "Kết hợp tư vấn, quản trị kênh, nội dung, media và quảng cáo để doanh nghiệp có nhịp marketing đều hơn.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" },
  },
];

export const barclubServices: Service[] = [
  {
    title: "Quản trị fanpage Bar/Club có lịch sự kiện",
    group: "barclub",
    summary:
      "Lên lịch bài, nội dung, poster và video theo từng đêm diễn để fanpage giữ nhịp trước, trong và sau sự kiện.",
    items: ["Kế hoạch bài viết", "Bài viết", "Thiết kế", "Poster", "Video/Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" },
  },
  {
    title: "Poster, line-up và recap sự kiện",
    group: "barclub",
    summary:
      "Thiết kế line-up, poster, video intro, recap và nội dung nhắc lịch để mỗi chương trình có chất liệu truyền thông riêng.",
    items: ["Poster chương trình", "Video intro line-up", "Video recap", "Video nhắc chương trình"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
  {
    title: "Quảng cáo online cho nightlife",
    group: "barclub",
    summary:
      "Triển khai quảng cáo Facebook, TikTok, Google, Zalo theo mục tiêu tiếp cận, nhận diện và thu hút sự chú ý.",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
];

export const hospitalityServices: Service[] = [
  {
    title: "Quản trị fanpage hospitality",
    group: "hospitality",
    summary:
      "Vận hành fanpage bằng bài viết, hình ảnh, poster và concept theo mùa để thương hiệu xuất hiện đều và sạch hơn.",
    items: ["Bài viết", "Thiết kế", "Poster theo concept", "Ảnh bài và avatar chủ đề"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok / Reels",
    group: "hospitality",
    summary:
      "Lên kịch bản, quay và dựng video ngắn để món ăn, không gian, dịch vụ và sự kiện dễ được khách hàng cảm nhận hơn.",
    items: ["Quay full sự kiện", "20 video TikTok/Reel", "Kịch bản", "Nội dung"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Thiết kế đồ họa cho chiến dịch",
    group: "hospitality",
    summary:
      "Thiết kế poster, ảnh bìa, avatar, menu và visual chiến dịch để từng đợt bán hàng có hình ảnh nhất quán.",
    items: ["Poster", "Ảnh bìa/avatar", "Menu", "Video intro line-up"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    title: "Website và nội dung SEO",
    group: "hospitality",
    summary: "Xây dựng website, landing page và bài viết SEO để khách có nơi xem thông tin, tin tưởng và liên hệ dễ hơn.",
    items: ["Website cơ bản", "Bài viết chuẩn SEO web"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
];
