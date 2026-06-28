import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { barclubServices, coreServices, hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const servicesHero = {
  eyebrow: "DST Group Services",
  title: "Từ website đến quảng cáo, mọi điểm chạm thương hiệu được triển khai đồng bộ hơn",
  subtitle:
    "DST Group kết hợp website, fanpage, video ngắn, poster, thiết kế và quảng cáo đa nền tảng để thương hiệu không phải làm việc với quá nhiều bên rời rạc.",
  video: "/assets/videos/services-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/service-collage-showcase.webp",
  source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta,
};

const findCore = (title: string) => coreServices.find((service) => service.title === title);
const findHospitality = (title: string) => hospitalityServices.find((service) => service.title === title);
const findPricing = (item: string) => pricing.find((price) => price.item === item);

const websiteService = findHospitality("Website và nội dung SEO");
const contentService = findCore("Nội dung social có kế hoạch");
const mediaService = findCore("Media / video ngắn / recap");
const designService = findCore("Thiết kế nhận diện và ấn phẩm");
const brandingService = findCore("Branding dễ ứng dụng");
const adsService = findCore("Quảng cáo đa kênh có mục tiêu");
const marketingService = findCore("Đội marketing thuê ngoài");

export const servicesOverview = [
  {
    title: "Một đầu mối cho nhiều nhu cầu",
    description: "Website, fanpage, content, media, thiết kế và ads được kết nối trong cùng một kế hoạch để khách dễ quản lý hơn.",
  },
  {
    title: "Dịch vụ bám theo nhu cầu thật",
    description: "Các nhóm dịch vụ được tổng hợp từ hồ sơ năng lực, báo giá Bar/Club và báo giá nhà hàng, khách sạn.",
  },
  {
    title: "Phù hợp thương hiệu dịch vụ địa phương",
    description: "DST có dự án và chất liệu thật trong nightlife, F&B, cafe, khách sạn, trung tâm sự kiện và nhà hàng.",
  },
];

export const serviceGroups = [
  {
    title: "Website & SEO",
    summary: "Tạo nơi khách có thể xem thông tin, hiểu dịch vụ và liên hệ dễ hơn thông qua website, landing page và bài SEO.",
    items: ["Website giới thiệu", "Landing page", "Bài viết chuẩn SEO", "Tối ưu giao diện và trải nghiệm người dùng"],
    source: websiteService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Social Content & Fanpage",
    summary: "Xây lịch đăng, thông điệp và bài viết để fanpage giữ được nhịp xuất hiện, không bị bỏ trống hoặc đăng rời rạc.",
    items: ["Quản trị fanpage", "Lên kế hoạch nội dung", "Bài đăng truyền thông", "Nội dung theo campaign/event"],
    source: contentService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Media & Video",
    summary: "Sản xuất ảnh, video ngắn, recap và tư liệu thật để thương hiệu có chất liệu dùng trên fanpage, TikTok, website và ads.",
    items: ["Video TikTok/Reels", "Video recap sự kiện", "Video giới thiệu thương hiệu", "Chụp/quay sản phẩm, món ăn, không gian"],
    source: mediaService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Design & Branding",
    summary: "Thiết kế poster, menu, banner và ấn phẩm để mỗi chiến dịch có hình ảnh đồng bộ, dễ nhận diện và dễ triển khai.",
    items: ["Poster", "Menu", "Banner", "Ấn phẩm truyền thông", "Nhận diện hình ảnh"],
    source: designService?.source ?? brandingService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta),
  },
  {
    title: "Ads & Marketing",
    summary: "Triển khai quảng cáo trên các kênh phù hợp với nội dung, hình ảnh và mục tiêu đã được xác định trước.",
    items: ["Facebook Ads", "TikTok Ads", "Google / YouTube", "Zalo theo nhu cầu", "Tối ưu chiến dịch"],
    source: adsService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Kết hợp nội dung, media, thiết kế và quảng cáo theo tháng để doanh nghiệp có một đội triển khai đều nhịp hơn.",
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
    description: "Fanpage, line-up, poster, video recap và ads cho thương hiệu cần tạo nhịp truyền thông quanh từng sự kiện.",
    href: "/bar-club",
    image: "/assets/bar-club/valley-beach-club.webp",
    tags: ["Nightlife", "Event", "ADS"],
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Website, hình ảnh, social content, video ngắn và ads giúp thương hiệu hospitality tạo cảm giác tin cậy hơn.",
    href: "/nha-hang-khach-san",
    image: "/assets/hospitality/birds-nest-cafe.webp",
    tags: ["Hospitality", "F&B", "Website"],
  },
  {
    title: "Doanh nghiệp / Thương hiệu tổng hợp",
    description: "Một hệ sinh thái website, content, media, thiết kế và ads cho thương hiệu muốn triển khai đồng bộ hơn.",
    href: "#service-groups",
    image: "/assets/showcase/service-collage-showcase.webp",
    tags: ["Website", "Media", "Marketing"],
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Tiếp nhận nhu cầu",
    description: "Làm rõ ngành, tình trạng fanpage/website hiện tại, ngân sách và mục tiêu truyền thông ưu tiên.",
  },
  {
    step: "02",
    title: "Phân tích mục tiêu & kênh triển khai",
    description: "Xác định kênh nên ưu tiên: website, fanpage, TikTok/Reels, media, thiết kế hay quảng cáo.",
  },
  {
    step: "03",
    title: "Lên concept / kế hoạch / báo giá",
    description: "Đề xuất hạng mục, nhịp nội dung, concept hình ảnh, phạm vi công việc và cách phối hợp.",
  },
  {
    step: "04",
    title: "Thiết kế, sản xuất và triển khai",
    description: "Thực hiện website, visual, video, bài viết, quảng cáo và các tài sản truyền thông đã thống nhất.",
  },
  {
    step: "05",
    title: "Theo dõi, tối ưu và bàn giao",
    description: "Theo dõi phản hồi, tối ưu nội dung/kênh triển khai và bàn giao tài sản theo phạm vi đã chốt.",
  },
];

export const featuredServiceProjects = projects.slice(0, 7).map((project) => ({
  ...project,
  tags: [project.sector, project.category === "barclub" ? "Nightlife" : project.category === "event" ? "Event" : "Hospitality"],
}));

export const whyChooseServices = [
  "Một đầu mối cho website, fanpage, content, media, thiết kế và ads.",
  "Hình ảnh chỉn chu nhưng vẫn dễ triển khai trong vận hành thực tế.",
  "Hiểu nhịp truyền thông của nhà hàng, cafe, khách sạn, bar/club và sự kiện.",
  "Tư vấn theo mục tiêu và quy mô, không ép khách dùng một công thức cố định.",
  "Có dự án và hình ảnh thật từ nhiều nhóm ngành dịch vụ để khách dễ kiểm chứng.",
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
