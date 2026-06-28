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
    title: "Quảng cáo theo mục tiêu rõ ràng",
    group: "core",
    summary: "Thiết lập quảng cáo theo từng mục tiêu như tăng nhận diện, kéo tương tác, giới thiệu event, sản phẩm hoặc dịch vụ.",
    items: ["Facebook", "Google", "YouTube"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok / TikTok Shop",
    group: "core",
    summary:
      "Xây kênh, vận hành gian hàng và triển khai nội dung TikTok để thương hiệu có thêm điểm chạm giới thiệu sản phẩm và dịch vụ.",
    items: ["Xây kênh TikTok", "Xây gian hàng TikTok Shop", "TikTok Ads"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 14, confidence: "high" },
  },
  {
    title: "Thiết kế nhận diện và ấn phẩm",
    group: "core",
    summary:
      "Thiết kế logo, landing page, hồ sơ năng lực và ấn phẩm để thương hiệu xuất hiện nhất quán hơn ở nhiều điểm chạm.",
    items: ["Web/landing page", "Logo", "Ấn phẩm in ấn", "Hồ sơ năng lực"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" },
  },
  {
    title: "Booking và kết nối truyền thông",
    group: "core",
    summary: "Kết nối nguồn lực, đối tác và hoạt động booking để chiến dịch có thêm chất liệu và kênh triển khai phù hợp.",
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
    summary: "Sản xuất hình ảnh, video và tư liệu truyền thông để sản phẩm, không gian và sự kiện có chất liệu thật dùng trên nhiều kênh.",
    items: ["Sản xuất hình ảnh", "Video", "Nội dung"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 34, confidence: "medium" },
  },
  {
    title: "Sản xuất video ngắn và recap",
    group: "core",
    summary:
      "Sản xuất video ngắn, recap và tư liệu media phù hợp với TikTok, Reels, fanpage, website và các chiến dịch social.",
    items: ["Quay video", "Edit video", "Chụp ảnh sản phẩm/dịch vụ", "TVC"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    title: "Branding dễ ứng dụng",
    group: "core",
    summary: "Đồng bộ logo, nhận diện và ngôn ngữ hình ảnh để khách hàng nhìn thấy thương hiệu nhất quán hơn trên fanpage, website và ấn phẩm.",
    items: ["Thiết kế logo", "Bộ nhận diện", "Hình ảnh thương hiệu"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 36, confidence: "medium" },
  },
  {
    title: "Truyền thông cho Restaurant - Hotel",
    group: "core",
    summary: "Tư vấn hình ảnh, nội dung, website và truyền thông cho nhà hàng, khách sạn, du thuyền và mô hình dịch vụ.",
    items: ["Nhà hàng", "Khách sạn", "Du thuyền"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 38, confidence: "medium" },
  },
  {
    title: "Đội marketing thuê ngoài",
    group: "core",
    summary:
      "Kết hợp tư vấn, quản trị kênh, nội dung, media và quảng cáo để doanh nghiệp có nhịp marketing đều hơn mà không phải chia việc cho nhiều bên.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" },
  },
];

export const barclubServices: Service[] = [
  {
    title: "Quản trị fanpage Bar/Club có lịch sự kiện",
    group: "barclub",
    summary:
      "Xây lịch bài, nội dung, poster và video theo từng đêm diễn để fanpage giữ nhịp trước, trong và sau sự kiện.",
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
      "Triển khai quảng cáo Facebook, TikTok, Google, Zalo theo mục tiêu tiếp cận, nhận diện hoặc nhắc lịch chương trình.",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
];

export const hospitalityServices: Service[] = [
  {
    title: "Quản trị fanpage hospitality có kế hoạch",
    group: "hospitality",
    summary:
      "Xây lịch đăng, bài viết, hình ảnh, poster và concept theo mùa để fanpage xuất hiện đều, sạch và đáng tin hơn.",
    items: ["Bài viết", "Thiết kế", "Poster theo concept", "Ảnh bài và avatar chủ đề"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Video ngắn cho món ăn, không gian và dịch vụ",
    group: "hospitality",
    summary:
      "Lên kịch bản, quay và dựng video ngắn để khách cảm nhận món ăn, không gian, phòng nghỉ hoặc dịch vụ trước khi liên hệ.",
    items: ["Quay full sự kiện", "20 video TikTok/Reel", "Kịch bản", "Nội dung"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Thiết kế đồ họa cho chiến dịch",
    group: "hospitality",
    summary:
      "Thiết kế poster, ảnh bìa, avatar, menu và visual chiến dịch để từng chương trình có hình ảnh nhất quán và dễ nhận diện.",
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
