import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const hospitalityHero = {
  eyebrow: "DST Group for Hospitality",
  title: "Đưa trải nghiệm nhà hàng, cafe và khách sạn lên một hình ảnh xứng tầm hơn",
  subtitle:
    "DST Group xây dựng website, hình ảnh, video, nội dung social và quảng cáo giúp thương hiệu hospitality trở nên chỉn chu, dễ nhớ và dễ được khách hàng lựa chọn hơn.",
  video: "/assets/videos/hospitality-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/hospitality/birds-nest-cafe.webp",
  source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
};

export const hospitalityProblems = [
  {
    title: "Khách cảm nhận thương hiệu trước khi bước vào cửa",
    description: "Ảnh món ăn, không gian, phòng nghỉ và dịch vụ trên fanpage/website quyết định cảm giác tin cậy ban đầu.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Fanpage thiếu kế hoạch khiến thương hiệu dễ bị quên",
    description: "Bài viết, poster, ảnh bìa và avatar theo concept giúp thương hiệu xuất hiện đều và nhất quán hơn.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Video ngắn giúp khách thấy trải nghiệm thật hơn",
    description: "TikTok/Reels, kịch bản và video ngắn giúp món ăn, không gian, sự kiện và dịch vụ được cảm nhận nhanh hơn.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Website và ads cần cùng một thông điệp",
    description: "Website, bài SEO và quảng cáo đa kênh hiệu quả hơn khi cùng dẫn khách đến một hình ảnh thương hiệu rõ ràng.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta,
  },
];

export const hospitalityServiceCards = hospitalityServices.map((service) => ({
  ...service,
  note: `${service.source.sourceFile}, trang ${service.source.page}`,
}));

const hospitalityImageMap: Record<string, string> = {
  "Nhà hàng Hồ Cô Tiên": "/assets/hospitality/nha-hang-ho-co-tien.webp",
  "Bird's Nest Cafe": "/assets/hospitality/birds-nest-cafe.webp",
  "Cabi Beach": "/assets/hospitality/cabi-beach.webp",
  "Grand View Palace Ha Long Hotel": "/assets/hospitality/grand-view-palace.webp",
  "Diamond Palace - Hạ Long": "/assets/hospitality/diamond-palace.webp",
  "Nhà hàng Thiên Anh": "/assets/hospitality/nha-hang-thien-anh.png",
  "Nhà hàng Thanh Thư": "/assets/hospitality/nha-hang-thanh-thu.png",
};

export const hospitalityProjects = projects
  .filter((project) => project.category === "hospitality" || project.category === "event")
  .map((project) => ({
    ...project,
    image: hospitalityImageMap[project.name] ?? project.image,
    tags: [
      project.sector.includes("Coffee") ? "Cafe" : project.sector.includes("Khách sạn") ? "Khách sạn" : "Hospitality",
      project.category === "event" ? "Sự kiện" : "Nhà hàng",
      "Media",
    ],
  }));

export const hospitalityGoals = [
  {
    title: "Khách nhớ thương hiệu rõ hơn",
    description: "Đồng bộ hình ảnh, nội dung và visual để khách dễ nhận ra bạn giữa nhiều lựa chọn cùng ngành.",
  },
  {
    title: "Hỗ trợ hành trình đặt bàn / đặt phòng",
    description: "Kết hợp website, social content và quảng cáo để khách có đủ thông tin trước khi liên hệ.",
  },
  {
    title: "Fanpage có nhịp nội dung ổn định",
    description: "Duy trì bài viết, thiết kế và video ngắn để kênh social không bị bỏ trống.",
  },
  {
    title: "Ra mắt món mới, ưu đãi hoặc sự kiện rõ ràng hơn",
    description: "Tạo poster, video intro, nội dung nhắc lịch và visual theo từng giai đoạn truyền thông.",
  },
  {
    title: "Hình ảnh thương hiệu sạch và tin cậy hơn",
    description: "Đồng bộ ảnh không gian, ảnh dịch vụ, banner, menu và nội dung quảng cáo.",
  },
];

export const hospitalityProcess = [
  {
    step: "01",
    title: "Khảo sát mô hình và mục tiêu ưu tiên",
    description: "Xác định nhóm khách, dịch vụ chủ lực, điểm mạnh không gian và mục tiêu truyền thông cần tập trung.",
  },
  {
    step: "02",
    title: "Chốt concept hình ảnh và lịch nội dung",
    description: "Xác định mood ảnh, thông điệp, lịch bài, hạng mục media và kênh quảng cáo phù hợp.",
  },
  {
    step: "03",
    title: "Sản xuất nội dung, media, website và ads",
    description: "Triển khai bài viết, poster, video ngắn, website và quảng cáo theo kế hoạch đã duyệt.",
  },
  {
    step: "04",
    title: "Theo dõi phản hồi và tối ưu",
    description: "Điều chỉnh nội dung, visual và kênh triển khai theo phản hồi thực tế của từng giai đoạn.",
  },
];

const hospitalityPricingSources = pricing.filter((item) =>
  ["Quản trị truyền thông", "Thiết kế & nội dung", "Thiết kế đồ họa", "Quảng cáo online", "Website & SEO"].includes(item.category),
);

export const hospitalityPackages = [
  {
    title: "Gói tư vấn theo nhu cầu",
    price: "Liên hệ tư vấn",
    description:
      "Đề xuất tổ hợp website, fanpage, hình ảnh, video và quảng cáo theo quy mô, mục tiêu và khả năng vận hành của từng thương hiệu.",
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
  address: company.headquarters.value,
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
