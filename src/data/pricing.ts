import type { SourceMeta } from "./sources";

export type PricingItem = {
  category: string;
  item: string;
  unit: string;
  price: string;
  note: string;
  source: SourceMeta;
};

export const pricing: PricingItem[] = [
  {
    category: "Quản trị truyền thông",
    item: "Fanpage & social content",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Lịch nội dung, bài viết, thiết kế, poster, ảnh chủ đề và video/reel theo nhu cầu vận hành.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế & nội dung",
    item: "Video ngắn / TikTok / Reels",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Quay dựng, kịch bản, nội dung và video ngắn để phát triển kênh social.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế đồ họa",
    item: "Poster, menu, video intro, recap",
    unit: "Hạng mục",
    price: "Liên hệ tư vấn",
    note: "Các hạng mục thiết kế được thiết kế linh hoạt theo nhu cầu triển khai thực tế.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Facebook / TikTok / Google / Zalo",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note: "Phí dịch vụ quảng cáo được tính theo tỷ lệ triển khai chiến dịch.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    category: "Website & SEO",
    item: "Website cơ bản, bài viết chuẩn SEO web",
    unit: "Gói / bài",
    price: "Liên hệ tư vấn",
    note: "Website cơ bản và nội dung chuẩn SEO được tư vấn theo mục tiêu hiện diện số.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" },
  },
  {
    category: "Đội marketing thuê ngoài",
    item: "Gói 10.000.000 VNĐ",
    unit: "Gói",
    price: "10.000.000 VNĐ",
    note: "Gói triển khai các hạng mục marketing nền tảng cho doanh nghiệp.",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    category: "Đội marketing thuê ngoài",
    item: "Gói 20.000.000 VNĐ",
    unit: "Gói",
    price: "20.000.000 VNĐ",
    note: "Gói triển khai mở rộng với thêm hạng mục media, quảng cáo và tối ưu vận hành.",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
];
