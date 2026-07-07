import type { SourceMeta } from "./sources";

export type PricingItem = {
  category: string;
  item: string;
  unit: string;
  price: string;
  note: string;
  source: SourceMeta;
  details?: string[];
  displayDetails?: string[];
  quantity?: string;
  fee?: string;
  confidenceNote?: string;
  noteInternal?: string;
};

const hospitalityQuoteSource = "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf" as const;

export const pricing: PricingItem[] = [
  {
    category: "Quản trị truyền thông",
    item: "Quản trị Facebook (gói fanpage)",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note:
      "Kế hoạch bài viết theo tháng; bài viết, thiết kế, poster concept tháng, ảnh bài + avatar chủ đề, thiết kế in ấn, đăng ảnh/reel hằng ngày, video khuyến mãi và recap (theo tư liệu khách cung cấp). Số lượng tùy gói khách chọn.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí quay, dựng kênh TikTok",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Quay full sự kiện trong tháng (4 buổi); 20 video xây kênh TikTok/Reel.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí kịch bản, nội dung TikTok",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Kịch bản và nội dung cho kênh TikTok theo hạng mục trong báo giá.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí thuê flycamera FPV",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Quay đèn ngoài trời theo hạng mục trong báo giá.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "high" },
  },
  {
    category: "Thiết kế đồ họa",
    item: "Poster chương trình lẻ / tổng theo tháng",
    unit: "Poster",
    price: "Liên hệ tư vấn",
    note: "Poster chương trình lẻ hoặc poster tổng theo tháng; concept 1 ảnh bìa + 1 avatar chủ đề theo tháng.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "high" },
  },
  {
    category: "Thiết kế đồ họa",
    item: "Video intro line-up, menu, recap, nhắc chương trình",
    unit: "Hạng mục",
    price: "Liên hệ tư vấn",
    note: "Video intro line-up 30s/4K, thiết kế menu, video recap và video nhắc chương trình (theo tư liệu có sẵn).",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Facebook / TikTok / Google / Zalo",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note:
      "Facebook: tương tác, tin nhắn, view, lead, remarketing. Google: tìm kiếm, YouTube, GDN, Shopping. TikTok hỗ trợ xây kênh. Phí 15% đã bao gồm VAT và phí thanh toán theo tài liệu.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "high" },
  },
  {
    category: "Website / SEO",
    item: "Website cơ bản",
    unit: "Gói",
    price: "Liên hệ tư vấn",
    note: "Gói website cơ bản theo hạng mục trong báo giá.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "high" },
  },
  {
    category: "Website / SEO",
    item: "Bài viết chuẩn SEO web",
    unit: "Bài",
    price: "Liên hệ tư vấn",
    note: "Bài viết chuẩn SEO web theo hạng mục trong báo giá.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "high" },
  },
  {
    category: "Đội marketing thuê ngoài",
    item: "Gói 10.000.000 VNĐ",
    unit: "Gói",
    price: "10.000.000 VNĐ",
    note:
      "Gồm thiết kế logo, ấn phẩm in ấn, hồ sơ năng lực, edit/quay video, content + thiết kế quảng cáo, TVC giới thiệu doanh nghiệp, chụp ảnh sản phẩm/dịch vụ cơ bản.",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
  {
    category: "Đội marketing thuê ngoài",
    item: "Gói 20.000.000 VNĐ",
    unit: "Gói",
    price: "20.000.000 VNĐ",
    note:
      "Gồm tư vấn triển khai marketing bổ sung, TVC nâng cao (có kịch bản, MC), quảng cáo Facebook/Google/Zalo, chụp ảnh sự kiện thường niên, tối ưu quảng cáo, quản trị 15 bài/tháng và tư vấn thay đổi chương trình.",
    source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" },
  },
];
