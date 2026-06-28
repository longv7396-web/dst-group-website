import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const hospitalityHero = {
  eyebrow: "DST Group for Hospitality",
  title: "Giải pháp truyền thông cho Nhà hàng, Cafe & Khách sạn",
  subtitle:
    "Xây dựng website, hình ảnh, nội dung và chiến dịch quảng cáo giúp thương hiệu hospitality nổi bật hơn trên nền tảng số.",
  video: "/assets/videos/hospitality-hero.mp4",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/hospitality/birds-nest-cafe.webp",
  source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
};

export const hospitalityProblems = [
  {
    title: "Hình ảnh món ăn và không gian cần chỉn chu",
    description: "Nhà hàng, cafe và khách sạn cần hình ảnh rõ không gian, rõ sản phẩm và đúng cảm giác thương hiệu.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Nội dung social phải đều nhịp",
    description: "Fanpage cần bài viết, thiết kế, poster theo concept, ảnh bài và avatar chủ đề để duy trì nhận diện.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Video ngắn giúp khách hiểu dịch vụ nhanh hơn",
    description: "TikTok/Reels, kịch bản và video ngắn hỗ trợ giới thiệu không gian, món ăn, sự kiện và dịch vụ.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Website và quảng cáo cần đi cùng kế hoạch",
    description: "Website cơ bản, bài viết chuẩn SEO và quảng cáo đa kênh giúp thương hiệu có nền tảng tiếp cận rõ hơn.",
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
    title: "Tăng nhận diện thương hiệu",
    description: "Định hình hình ảnh, nội dung và visual để khách dễ nhớ thương hiệu hơn.",
  },
  {
    title: "Tăng khách đặt bàn / đặt phòng",
    description: "Kết hợp website, social content và quảng cáo để hỗ trợ hành trình liên hệ.",
  },
  {
    title: "Tăng tương tác fanpage",
    description: "Duy trì bài viết, thiết kế và video ngắn theo lịch nội dung đều nhịp.",
  },
  {
    title: "Ra mắt món mới / sự kiện / ưu đãi",
    description: "Tạo poster, video intro, nội dung nhắc lịch và visual chiến dịch theo từng giai đoạn.",
  },
  {
    title: "Xây dựng hình ảnh chuyên nghiệp",
    description: "Đồng bộ nhận diện từ ảnh không gian, ảnh dịch vụ, banner đến nội dung quảng cáo.",
  },
];

export const hospitalityProcess = [
  {
    step: "01",
    title: "Khảo sát thương hiệu & mục tiêu kinh doanh",
    description: "Xác định mô hình, nhóm khách, dịch vụ chủ lực và mục tiêu truyền thông cần ưu tiên.",
  },
  {
    step: "02",
    title: "Lên concept hình ảnh / nội dung / chiến dịch",
    description: "Chốt mood hình ảnh, thông điệp, lịch bài và hạng mục media phù hợp.",
  },
  {
    step: "03",
    title: "Thiết kế, sản xuất media và triển khai quảng cáo",
    description: "Triển khai bài viết, poster, video ngắn, website và quảng cáo theo kế hoạch.",
  },
  {
    step: "04",
    title: "Theo dõi hiệu quả và tối ưu",
    description: "Theo dõi phản hồi, điều chỉnh nội dung và tối ưu kênh triển khai theo thực tế.",
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
      "Giải pháp được đề xuất theo mục tiêu, quy mô thương hiệu và các kênh cần triển khai.",
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
