import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { barclubServices, coreServices, hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const servicesHero = {
  eyebrow: "DST Group Services",
  title: "Toàn bộ giải pháp số cho thương hiệu hiện đại",
  subtitle:
    "Từ website, nội dung truyền thông, video ngắn đến quảng cáo đa nền tảng — chúng tôi giúp thương hiệu xây dựng hình ảnh chỉn chu và triển khai hiệu quả hơn trên môi trường số.",
  video: "/assets/videos/services-hero.mp4",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/service-collage-showcase.webp",
  source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta,
};

const findCore = (title: string) => coreServices.find((service) => service.title === title);
const findHospitality = (title: string) => hospitalityServices.find((service) => service.title === title);
const findPricing = (item: string) => pricing.find((price) => price.item === item);

const websiteService = findHospitality("Thiết kế & chăm sóc website");
const contentService = findCore("Content");
const mediaService = findCore("Media");
const designService = findCore("Design");
const brandingService = findCore("Branding");
const adsService = findCore("ADS");
const marketingService = findCore("Xây dựng phòng Marketing");

export const servicesOverview = [
  {
    title: "Một đầu mối triển khai",
    description: "Website, media, content và ads được kết nối trong cùng một kế hoạch để thương hiệu dễ vận hành hơn.",
  },
  {
    title: "Dữ liệu dịch vụ có nguồn",
    description: "Các nhóm dịch vụ được tổng hợp từ hồ sơ năng lực, báo giá Bar/Club và báo giá nhà hàng, khách sạn.",
  },
  {
    title: "Phù hợp nhiều ngành dịch vụ",
    description: "DST Group đã có dữ liệu dự án cho nightlife, F&B, cafe, khách sạn, trung tâm sự kiện và nhà hàng.",
  },
];

export const serviceGroups = [
  {
    title: "Website & SEO",
    summary: "Xây dựng hiện diện số rõ ràng, có landing page, website giới thiệu và bài viết chuẩn SEO.",
    items: ["Website giới thiệu", "Landing page", "Bài viết chuẩn SEO", "Tối ưu giao diện và trải nghiệm người dùng"],
    source: websiteService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Social Content & Fanpage",
    summary: "Lên kế hoạch nội dung, quản trị fanpage và triển khai bài đăng theo chiến dịch hoặc sự kiện.",
    items: ["Quản trị fanpage", "Lên kế hoạch nội dung", "Bài đăng truyền thông", "Nội dung theo campaign/event"],
    source: contentService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Media & Video",
    summary: "Sản xuất hình ảnh, video ngắn, video recap và tư liệu truyền thông cho sản phẩm, dịch vụ, sự kiện.",
    items: ["Video TikTok/Reels", "Video recap sự kiện", "Video giới thiệu thương hiệu", "Chụp/quay sản phẩm, món ăn, không gian"],
    source: mediaService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Design & Branding",
    summary: "Thiết kế poster, menu, banner, ấn phẩm truyền thông và hệ thống hình ảnh thương hiệu.",
    items: ["Poster", "Menu", "Banner", "Ấn phẩm truyền thông", "Nhận diện hình ảnh"],
    source: designService?.source ?? brandingService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta),
  },
  {
    title: "Ads & Marketing",
    summary: "Triển khai quảng cáo đa kênh, tối ưu chiến dịch theo mục tiêu tiếp cận và hiệu quả kinh doanh.",
    items: ["Facebook Ads", "TikTok Ads", "Google / YouTube", "Zalo theo nhu cầu", "Tối ưu chiến dịch"],
    source: adsService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Kết hợp nội dung, media, thiết kế và quảng cáo để tạo đội marketing thuê ngoài cho doanh nghiệp.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Tối ưu quảng cáo", "Báo cáo vận hành"],
    source: marketingService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 42, confidence: "medium" } satisfies SourceMeta),
  },
];

export const servicePricing = [
  ...pricing,
  ...barclubServices.map((service) => ({
    category: "Bar/Club",
    item: service.title,
    unit: "Theo nhu cầu",
    price: "Liên hệ tư vấn",
    note: service.summary,
    source: service.source,
  })),
].filter((item, index, list) => list.findIndex((candidate) => candidate.item === item.item) === index);

export const industryLinks = [
  {
    title: "Bar / Club / Nightlife",
    description: "Giải pháp fanpage, poster line-up, video recap và quảng cáo cho mô hình giải trí.",
    href: "/bar-club",
    image: "/assets/bar-club/valley-beach-club.webp",
    tags: ["Nightlife", "Event", "ADS"],
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Website, social content, video ngắn, thiết kế và quảng cáo cho mô hình hospitality.",
    href: "/nha-hang-khach-san",
    image: "/assets/hospitality/birds-nest-cafe.webp",
    tags: ["Hospitality", "F&B", "Website"],
  },
  {
    title: "Doanh nghiệp / Thương hiệu tổng hợp",
    description: "Một hệ sinh thái dịch vụ số cho thương hiệu cần website, media, content và ads.",
    href: "#service-groups",
    image: "/assets/showcase/service-collage-showcase.webp",
    tags: ["Website", "Media", "Marketing"],
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Tiếp nhận nhu cầu",
    description: "Làm rõ ngành, tình trạng kênh hiện tại, ngân sách và mục tiêu truyền thông.",
  },
  {
    step: "02",
    title: "Phân tích mục tiêu & kênh triển khai",
    description: "Xác định kênh nên ưu tiên: website, fanpage, TikTok/Reels, media hay quảng cáo.",
  },
  {
    step: "03",
    title: "Lên concept / kế hoạch / báo giá",
    description: "Đề xuất hạng mục triển khai, nhịp nội dung, concept hình ảnh và phạm vi công việc.",
  },
  {
    step: "04",
    title: "Thiết kế, sản xuất và triển khai",
    description: "Thực hiện website, visual, video, bài viết, quảng cáo và các tài sản truyền thông.",
  },
  {
    step: "05",
    title: "Theo dõi, tối ưu và bàn giao",
    description: "Theo dõi phản hồi, tối ưu nội dung/kênh triển khai và bàn giao tài sản theo phạm vi.",
  },
];

export const featuredServiceProjects = projects.slice(0, 7).map((project) => ({
  ...project,
  tags: [project.sector, project.category === "barclub" ? "Nightlife" : project.category === "event" ? "Event" : "Hospitality"],
}));

export const whyChooseServices = [
  "Một đầu mối cho nhiều nhu cầu: website, media, content và ads.",
  "Thiết kế hình ảnh chỉn chu, dễ ứng dụng vào chiến dịch thực tế.",
  "Hiểu ngành dịch vụ địa phương và nhịp vận hành của từng mô hình.",
  "Triển khai nhanh, dễ phối hợp và tối ưu theo mục tiêu kinh doanh.",
  "Có dữ liệu dự án từ nhiều nhóm khách hàng: nightlife, F&B, cafe, khách sạn và sự kiện.",
];

export const servicesContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  address: company.headquarters.value,
};

export const servicesAssetAudit = [
  {
    file: "/assets/videos/services-hero.mp4",
    source: "Tạo từ hero video hiện có nếu chưa có video dịch vụ riêng",
  },
  {
    file: "/assets/showcase/service-collage-showcase.webp",
    source: "Ảnh showcase đã trích xuất trong project",
  },
];
