import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { barclubServices, coreServices, hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const servicesHero = {
  eyebrow: "Dịch vụ DST Group",
  title: "Website, fanpage, hình ảnh và quảng cáo — một đầu mối cho thương hiệu dịch vụ",
  subtitle:
    "Bạn không cần hiểu hết thuật ngữ marketing. Chỉ cần nói rõ bạn đang cần gì — DST sẽ tư vấn website, fanpage, video, thiết kế và quảng cáo theo nhu cầu thực tế.",
  video: "/assets/videos/services-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/service-collage-showcase.webp",
  source: { sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta,
};

const findCore = (title: string) => coreServices.find((service) => service.title === title);
const findHospitality = (title: string) => hospitalityServices.find((service) => service.title === title);
const findPricing = (item: string) => pricing.find((price) => price.item === item);

const websiteService = findHospitality("Website và nội dung SEO");
const contentService = findCore("Nội dung fanpage có kế hoạch");
const mediaService = findCore("Sản xuất video ngắn và recap");
const designService = findCore("Thiết kế logo và ấn phẩm");
const brandingService = findCore("Branding dễ dùng");
const adsService = findCore("Quảng cáo theo mục tiêu");
const marketingService = findCore("Đội marketing thuê ngoài");

export const servicesOverview = [
  {
    title: "Một đầu mối dễ làm việc",
    description: "Bạn nói nhu cầu — DST tư vấn website, fanpage, nội dung, hình ảnh, video hoặc quảng cáo. Không cần tự phối hợp nhiều bên.",
  },
  {
    title: "Tư vấn theo tình trạng hiện tại",
    description: "Mỗi khách có kênh, ngân sách và mục tiêu khác nhau. DST sẽ trao đổi trực tiếp trước khi đề xuất hạng mục.",
  },
  {
    title: "Có hồ sơ dự án thật",
    description: "Một số hình ảnh và dự án DST đã triển khai — bạn có thể xem trước khi quyết định trao đổi thêm.",
  },
];

export const serviceGroups = [
  {
    title: "Website / SEO",
    summary: "Nơi khách xem thông tin, hình ảnh, dịch vụ và liên hệ — thay vì chỉ dựa vào fanpage.",
    items: ["Website giới thiệu", "Trang giới thiệu", "Bài viết chuẩn SEO", "Giao diện dễ dùng"],
    source: websiteService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Fanpage và nội dung",
    summary: "Giữ fanpage xuất hiện đều đặn — lịch đăng, bài viết và hình ảnh theo kế hoạch đã chốt.",
    items: ["Quản trị fanpage có kế hoạch", "Lên lịch đăng", "Bài đăng truyền thông", "Nội dung theo chương trình"],
    source: contentService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Hình ảnh và video",
    summary: "Ảnh và video ngắn từ thực tế — món ăn, không gian, sự kiện dễ gây chú ý hơn trên social.",
    items: ["Video ngắn", "Video recap sự kiện", "Video giới thiệu", "Chụp/quay sản phẩm, món ăn, không gian"],
    source: mediaService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Thiết kế và nhận diện",
    summary: "Poster, menu, banner và nhận diện — giúp dịch vụ và chương trình dễ nhìn, dễ hiểu hơn.",
    items: ["Poster", "Menu", "Banner", "Ấn phẩm truyền thông", "Nhận diện hình ảnh"],
    source: designService?.source ?? brandingService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta),
  },
  {
    title: "Quảng cáo và marketing",
    summary: "Quảng cáo Facebook, TikTok, Google, YouTube hoặc Zalo — theo mục tiêu đã trao đổi, không chạy mù.",
    items: ["Quảng cáo Facebook", "Quảng cáo TikTok", "Google / YouTube", "Zalo theo nhu cầu", "Theo dõi chiến dịch"],
    source: adsService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Nội dung, hình ảnh, video, thiết kế và quảng cáo theo tháng — khi bạn cần duy trì đều, không chỉ làm một lần.",
    items: ["Tư vấn triển khai", "Quản trị kênh online", "Theo dõi quảng cáo", "Theo dõi triển khai"],
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
    description: "Poster, fanpage, video recap và ads — truyền thông đúng nhịp trước, trong và sau mỗi đêm diễn.",
    href: "/bar-club",
    image: "/assets/bar-club/valley-beach-club.webp",
    tags: ["Nightlife", "Event", "Ads"],
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Hình ảnh món ăn, không gian, website và social — giúp khách cảm nhận sự chỉn chu trước khi đặt bàn hoặc liên hệ.",
    href: "/nha-hang-khach-san",
    image: "/assets/hospitality/birds-nest-cafe.webp",
    tags: ["Nhà hàng", "Cafe", "Website"],
  },
  {
    title: "Doanh nghiệp / Dịch vụ tổng hợp",
    description: "Website, nội dung, hình ảnh, video, thiết kế và quảng cáo — một đầu mối theo nhu cầu hiện tại.",
    href: "#service-groups",
    image: "/assets/showcase/service-collage-showcase.webp",
    tags: ["Website", "Media", "Marketing"],
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Nghe bạn nói về nhu cầu",
    description: "Làm rõ ngành, kênh đang có, ngân sách dự kiến và phần cần ưu tiên trước.",
  },
  {
    step: "02",
    title: "Chọn kênh và hạng mục",
    description: "Website, fanpage, TikTok, video, thiết kế hay quảng cáo — bắt đầu từ đâu phù hợp nhất với bạn.",
  },
  {
    step: "03",
    title: "Đề xuất kế hoạch và báo giá",
    description: "Hạng mục, lịch triển khai, phạm vi công việc và cách phối hợp — trao đổi rõ trước khi làm.",
  },
  {
    step: "04",
    title: "Thiết kế, sản xuất và triển khai",
    description: "Website, hình ảnh, video, bài viết hoặc quảng cáo theo phạm vi đã thống nhất.",
  },
  {
    step: "05",
    title: "Theo dõi và bàn giao",
    description: "Cập nhật theo phản hồi và bàn giao tài sản theo phạm vi đã chốt.",
  },
];

export const featuredServiceProjects = projects.slice(0, 7).map((project) => ({
  ...project,
  tags: [project.sector, project.category === "barclub" ? "Bar/Club" : project.category === "event" ? "Sự kiện" : "Dịch vụ"],
}));

export const whyChooseServices = [
  "DST nghe nhu cầu trước, rồi mới tư vấn hạng mục — không ép gói.",
  "Có hình ảnh và dự án tham khảo để bạn xem trước khi quyết định.",
  "Có thể phối hợp website, fanpage, hình ảnh, video, thiết kế và quảng cáo trong cùng kế hoạch.",
  "Cách làm trao đổi theo ngân sách và quy mô thực tế của bạn.",
  "Chi phí tư vấn theo phạm vi triển khai — không có con số ẩn.",
];

export const servicesContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  websiteUrl: company.websiteUrl.value,
  facebook: company.fanpage.value,
  zalo: company.zalo.value,
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
