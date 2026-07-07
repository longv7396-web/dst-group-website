import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

const hospitalityQuoteSource = "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf" as const;
const hospitalityWorkflowNote =
  "Nội dung diễn giải quy trình từ hạng mục PDF, không phải trích nguyên văn.";
const hospitalityWorkflowSource = {
  sourceFile: hospitalityQuoteSource,
  page: 36,
  confidence: "low",
} satisfies SourceMeta;

export const hospitalityHero = {
  eyebrow: "Truyền thông cho Nhà hàng / Cafe / Khách sạn",
  title: "Khi không gian đẹp mà khách chưa thấy đủ rõ",
  subtitle:
    "Không gian tốt, món ngon hay phòng nghỉ chỉ phát huy giá trị khi khách nhìn thấy chúng rõ ràng và đủ thuyết phục. DST hỗ trợ fanpage, video, thiết kế, website và quảng cáo theo từng mô hình.",
  video: "/assets/videos/hospitality-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/birds-nest-cafe-showcase.webp",
  source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
};

export const hospitalityProblems = [
  {
    title: "Khách quyết định bằng mắt trước",
    description: "Họ lướt qua rất nhanh. Ảnh món, không gian hoặc phòng nghỉ chưa đủ rõ — họ chuyển sang chỗ khác mà chưa nhắn tin.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Fanpage im lìm quá lâu",
    description: "Không có lịch đăng, bài viết hay visual nhất quán — khách khó cảm nhận quán còn hoạt động và đáng tin.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Thiếu video ngắn để gây chú ý",
    description: "Một đoạn Reels hoặc TikTok ngắn có thể giúp món ăn, không gian hoặc sự kiện dễ được chia sẻ hơn ảnh tĩnh.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Website và ads nói hai ngôn ngữ khác nhau",
    description: "Thông tin lệch nhau giữa fanpage, website và quảng cáo — khách khó tin và chần chừ liên hệ.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta,
  },
];

export const hospitalityServiceCards = hospitalityServices.map((service) => ({
  ...service,
  note: `${service.source.sourceFile}, trang ${service.source.page}`,
}));

export const hospitalityProjects = projects
  .filter((project) => project.category === "hospitality" || project.category === "event")
  .map((project) => ({
    ...project,
    tags: [
      project.sector.includes("Coffee") ? "Cafe" : project.sector.includes("Khách sạn") ? "Khách sạn" : "Dịch vụ",
      project.category === "event" ? "Sự kiện" : "Nhà hàng",
      "Media",
    ],
  }));

export const hospitalityGoals = [
  {
    title: "Hình ảnh dễ nhận ra hơn",
    description: "Ảnh món, không gian và visual thiết kế theo cùng một hướng — khách nhìn là biết đây là thương hiệu của bạn.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Khách hiểu dịch vụ trước khi gọi",
    description: "Website, fanpage và quảng cáo cung cấp đủ thông tin — khách tự tin hơn khi đặt bàn, đặt phòng hoặc nhắn tin.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Fanpage có nhịp, không bị bỏ trống",
    description: "Bài viết, thiết kế và video ngắn theo lịch đăng đã trao đổi — quán vẫn xuất hiện đều với khách.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Món mới, ưu đãi và sự kiện được nhìn thấy",
    description: "Poster, video giới thiệu và nội dung nhắc lịch theo từng chương trình — khách biết có gì mới.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Menu, banner và ads nói cùng một giọng",
    description: "Ảnh không gian, dịch vụ, menu và ads được chuẩn bị cùng hướng — thông tin nhất quán, dễ hiểu.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
];

export const hospitalityProcess = [
  {
    step: "01",
    title: "Nghe bạn nói về mô hình",
    description: "DST xem nhóm khách, dịch vụ chủ lực, kênh đang dùng và phần nào cần ưu tiên trước.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "02",
    title: "Chọn hạng mục phù hợp",
    description: "Hai bên trao đổi ảnh, bài viết, video, website hoặc ads — theo tình trạng và ngân sách thực tế.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "03",
    title: "Triển khai nội dung đã duyệt",
    description: "DST làm bài viết, poster, video ngắn, website hoặc quảng cáo theo phạm vi đã thống nhất.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "04",
    title: "Trao đổi và điều chỉnh",
    description: "DST cập nhật theo phản hồi trong quá trình triển khai — giữ đúng nhịp với vận hành quán.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
];

const hospitalityPricingSources = pricing.filter((item) =>
  ["Quản trị truyền thông", "Thiết kế & nội dung", "Thiết kế đồ họa", "Quảng cáo online", "Website / SEO"].includes(item.category),
);

export const hospitalityPackages = [
  {
    title: "Tư vấn theo nhu cầu",
    price: "Liên hệ tư vấn",
    description:
      "Chi phí được tư vấn theo quy mô, số lượng hạng mục và thời điểm triển khai.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  ...hospitalityPricingSources.map((item) => ({
    title: item.item,
    price: item.price,
    description: item.note,
    source: item.source,
  })),
];

export const hospitalityContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  websiteUrl: company.websiteUrl.value,
  facebook: company.fanpage.value,
  zalo: company.zalo.value,
  address: company.quotationAddress.value,
  headquarters: company.headquarters.value,
};

export const hospitalityAssetAudit = [
  {
    file: "/assets/hospitality/birds-nest-cafe.webp",
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    usage: "Hero poster và portfolio Bird's Nest Cafe",
  },
  {
    file: "/assets/hospitality/nha-hang-ho-co-tien.webp",
    sourceFile: "HSNL CTY DST.pdf",
    page: 70,
    usage: "Portfolio Nhà hàng Hồ Cô Tiên",
  },
  {
    file: "/assets/hospitality/grand-view-palace.webp",
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 20,
    usage: "Portfolio Grand View Palace",
  },
];
