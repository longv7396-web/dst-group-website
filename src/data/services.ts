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
    summary: "Thiết lập và tối ưu chiến dịch quảng cáo Facebook, Google, YouTube nhắm trúng đối tượng khách hàng tiềm năng, tối ưu hóa chi phí trên mỗi chuyển đổi.",
    items: ["Facebook", "Google", "YouTube"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" },
  },
  {
    title: "Xây kênh TikTok / TikTok Shop",
    group: "core",
    summary:
      "Giải pháp toàn diện từ xây dựng ý tưởng, sản xuất video short-form, quản trị kênh đến thiết lập và vận hành gian hàng TikTok Shop đạt doanh số bứt phá.",
    items: ["Xây kênh TikTok", "Xây gian hàng TikTok Shop", "Quảng cáo TikTok"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 14, confidence: "high" },
  },
  {
    title: "Thiết kế logo và ấn phẩm",
    group: "core",
    summary:
      "Quy chuẩn nhận diện thương hiệu chuyên nghiệp với thiết kế logo, hồ sơ năng lực (profile), catalogue và bộ ấn phẩm in ấn đẳng cấp cho doanh nghiệp.",
    items: ["Website / trang giới thiệu", "Logo", "Ấn phẩm in ấn", "Hồ sơ năng lực"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" },
  },
  {
    title: "Booking và kết nối truyền thông",
    group: "core",
    summary:
      "Tư vấn và điều phối booking KOL/KOC, báo chí, truyền hình cùng mạng lưới đối tác truyền thông uy tín, giúp thương hiệu lan tỏa mạnh mẽ và đúng mục tiêu.",
    items: ["Dịch vụ Booking", "Kết nối đối tác"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 32, confidence: "medium" },
  },
  {
    title: "Nội dung fanpage có kế hoạch",
    group: "core",
    summary:
      "Xây dựng chiến lược nội dung sắc bén, lịch đăng bài đều đặn với visual cuốn hút, giúp Fanpage luôn sôi động và gia tăng uy tín trong mắt khách hàng.",
    items: ["Bài viết", "Kế hoạch nội dung", "Nội dung fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Sản xuất hình ảnh và video",
    group: "core",
    summary:
      "Sản xuất hình ảnh và video chất lượng cao cho sản phẩm, không gian kiến trúc và sự kiện, làm nổi bật giá trị cốt lõi và đẳng cấp của thương hiệu.",
    items: ["Sản xuất hình ảnh", "Video", "Nội dung"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 34, confidence: "medium" },
  },
  {
    title: "Sản xuất video ngắn và recap",
    group: "core",
    summary:
      "Quay và dựng video short-form (Reels/TikTok), TVC giới thiệu và video recap sự kiện bùng nổ, tối ưu độ thảo luận và tính viral trên mạng xã hội.",
    items: ["Quay video", "Dựng video", "Chụp ảnh sản phẩm/dịch vụ", "TVC"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    title: "Branding dễ dùng",
    group: "core",
    summary:
      "Định hình phong cách thương hiệu rõ ràng, dễ ứng dụng trên mọi điểm chạm thực tế từ online đến offline, giúp khách hàng ghi nhớ ngay từ ánh nhìn đầu tiên.",
    items: ["Thiết kế logo", "Bộ nhận diện", "Hình ảnh thương hiệu"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 36, confidence: "medium" },
  },
  {
    title: "Truyền thông cho nhà hàng / khách sạn",
    group: "core",
    summary:
      "Giải pháp marketing trọn gói cho ngành F&B và Hospitality: sản xuất hình ảnh món ăn, không gian, xây dựng website và quảng cáo thúc đẩy đặt bàn/đặt phòng.",
    items: ["Nhà hàng", "Khách sạn", "Du thuyền"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 38, confidence: "medium" },
  },
  {
    title: "Đội marketing thuê ngoài",
    group: "core",
    summary:
      "Sở hữu trọn vẹn một phòng Marketing chuyên nghiệp với chi phí tối ưu: quản trị kênh, sản xuất media, thiết kế visual và chạy quảng cáo báo cáo định kỳ.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" },
  },
];

export const barclubServices: Service[] = [
  {
    title: "Quản trị fanpage Bar/Club có lịch sự kiện",
    group: "barclub",
    summary:
      "Xây dựng nhịp bài đăng, sản xuất poster và video teaser đều đặn theo từng sự kiện, giữ cho Fanpage luôn bùng nổ và thu hút lượng booking ổn định.",
    items: ["Kế hoạch bài viết", "Bài viết", "Thiết kế", "Poster", "Video/Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" },
  },
  {
    title: "Poster, line-up và recap sự kiện",
    group: "barclub",
    summary:
      "Thiết kế visual sắc nét công bố Line-up, video countdown nhắc lịch và recap hightlight sự kiện cực cháy — khách hàng nhìn là cảm nhận ngay sức nóng.",
    items: ["Poster chương trình", "Hình ảnh chương trình", "Video recap", "Video nhắc chương trình"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
  {
    title: "Quảng cáo online cho nightlife",
    group: "barclub",
    summary:
      "Thiết lập và tối ưu chiến dịch quảng cáo Facebook, TikTok, Google và Zalo nhắm trúng khách hàng đam mê Nightlife, tối ưu chi phí cho mỗi lượt chốt bàn.",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" },
  },
];

export const hospitalityServices: Service[] = [
  {
    title: "Quản trị fanpage nhà hàng / khách sạn",
    group: "hospitality",
    summary:
      "Duy trì Fanpage chuyên nghiệp với lịch đăng bài đều đặn, hình ảnh món ăn/không gian chỉn chu và poster khuyến mãi theo từng giai đoạn.",
    items: ["Bài viết", "Thiết kế", "Poster theo chương trình", "Ảnh bài và avatar chủ đề"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Video ngắn cho món ăn, không gian và dịch vụ",
    group: "hospitality",
    summary:
      "Sáng tạo kịch bản, quay và dựng video short-form (Reels/TikTok) kích thích vị giác và thị giác, giúp thương hiệu dễ dàng lan tỏa tự nhiên trên mạng xã hội.",
    items: ["Kịch bản", "Quay video", "Dựng video ngắn", "Nội dung đăng fanpage"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    title: "Thiết kế đồ họa",
    group: "hospitality",
    summary:
      "Thiết kế poster, menu, table standee và bộ nhận diện hình ảnh sang trọng, giúp dịch vụ và ưu đãi của bạn truyền tải rõ ràng và ấn tượng.",
    items: ["Poster", "Ảnh bìa/avatar", "Menu", "Hình ảnh chương trình"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    title: "Website và nội dung SEO",
    group: "hospitality",
    summary: "Xây dựng website giao diện hiện đại và bài viết chuẩn SEO, tạo điểm đến uy tín để khách hàng tham khảo thông tin và liên hệ đặt bàn/đặt phòng nhanh chóng.",
    items: ["Website cơ bản", "Bài viết chuẩn SEO web"],
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
];
