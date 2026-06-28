import { company } from "./company";
import { projects } from "./projects";
import { barclubServices } from "./services";
import type { SourceMeta } from "./sources";

export const barClubFacebookUrl = "https://www.facebook.com/share/1EvWCZnNBi/?mibextid=wwXIfr";

export const barClubHero = {
  eyebrow: "DST Group for Bar / Club / Nightlife",
  title: "Giải pháp truyền thông cho Bar, Club & Nightlife",
  subtitle:
    "Xây dựng hình ảnh, nội dung, video và chiến dịch quảng cáo giúp thương hiệu nightlife nổi bật hơn trên nền tảng số.",
  video: "/assets/videos/bar-club-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/bar-club/valley-beach-club.webp",
  source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
};

export const barClubProblems = [
  {
    title: "Hình ảnh cần nổi bật ngay từ lần nhìn đầu",
    description: "Nightlife cần visual đủ mạnh để truyền tải năng lượng sự kiện, không gian và trải nghiệm.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "medium" } satisfies SourceMeta,
  },
  {
    title: "Nội dung social phải đều nhịp",
    description: "Fanpage, poster, bài viết và video ngắn cần được lên lịch để giữ độ phủ cho từng chương trình.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Event cần recap và nhắc lịch chuyên nghiệp",
    description: "Poster line-up, video intro, video recap và nội dung nhắc chương trình giúp chiến dịch có nhịp truyền thông rõ hơn.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quảng cáo cần đúng kênh",
    description: "Facebook, TikTok, Google và Zalo được dùng theo mục tiêu tiếp cận, tương tác và kéo khách.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubServiceCards = barclubServices.map((service) => ({
  ...service,
  note: `${service.source.sourceFile}, trang ${service.source.page}`,
}));

const barClubImageMap: Record<string, string> = {
  "Valley Beach Club": "/assets/bar-club/valley-beach-club.webp",
  "Cana Beer": "/assets/bar-club/cana-beer.webp",
};

export const barClubProjects = projects
  .filter((project) => project.category === "barclub")
  .map((project) => ({
    ...project,
    image: barClubImageMap[project.name] ?? project.image,
    tags: ["Bar / Club", "Nightlife", "Media"],
  }));

export const barClubProcess = [
  {
    step: "01",
    title: "Khảo sát thương hiệu & mục tiêu",
    description: "Xác định tệp khách, phong cách visual, lịch sự kiện và mục tiêu truyền thông cần ưu tiên.",
  },
  {
    step: "02",
    title: "Lên concept nội dung / event / campaign",
    description: "Chốt thông điệp, key visual, lịch bài và hạng mục media phù hợp từng chương trình.",
  },
  {
    step: "03",
    title: "Sản xuất hình ảnh, video, bài đăng, quảng cáo",
    description: "Triển khai poster, video intro/recap, bài viết fanpage và chiến dịch quảng cáo đa kênh.",
  },
  {
    step: "04",
    title: "Theo dõi hiệu quả và tối ưu",
    description: "Theo dõi phản hồi, tối ưu nội dung và điều chỉnh nhịp quảng cáo theo thực tế vận hành.",
  },
];

export const barClubPackages = [
  {
    title: "Gói tư vấn theo nhu cầu",
    price: "Liên hệ tư vấn",
    description:
      "Tư vấn tổ hợp fanpage, content, media và quảng cáo theo lịch sự kiện, mục tiêu truyền thông và ngân sách thực tế.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  ...barClubServiceCards.map((service) => ({
    title: service.title,
    price: "Liên hệ tư vấn",
    description: service.summary,
    source: service.source,
  })),
];

export const barClubContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  address: company.headquarters.value,
  facebook: barClubFacebookUrl,
};

export const barClubAssetAudit = [
  {
    file: "/assets/bar-club/valley-beach-club.webp",
    sourceFile: "HSNL CTY DST.pdf",
    page: 68,
    usage: "Hero poster và portfolio Valley Beach Club",
  },
  {
    file: "/assets/bar-club/cana-beer.webp",
    sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf",
    page: 4,
    usage: "Portfolio Cana Beer",
  },
];
