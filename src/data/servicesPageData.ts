import { company } from "./company";
import { pricing } from "./pricing";
import { projects } from "./projects";
import { barclubServices, coreServices, hospitalityServices } from "./services";
import type { SourceMeta } from "./sources";

export const servicesHero = {
  eyebrow: "Dịch vụ DST Group",
  title: "Website, fanpage, hình ảnh và quảng cáo — hệ sinh thái truyền thông hợp nhất cho doanh nghiệp",
  subtitle:
    "Bạn không cần mất thời gian làm việc với nhiều đơn vị lẻ tẻ. DST Group cung cấp giải pháp truyền thông trọn gói từ Website, Fanpage, Media, Thiết kế nhận diện đến Quảng cáo hiệu suất cao — chuẩn hóa theo nhu cầu và định vị thương hiệu của bạn.",
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
    title: "Đầu mối truyền thông hợp nhất",
    description: "Một đơn vị duy nhất xử lý trọn gói từ website, fanpage, hình ảnh, video đến quảng cáo. Bạn không cần mất thời gian làm việc hay phối hợp với nhiều bên rời rạc.",
  },
  {
    title: "Giải pháp thiết kế riêng theo định vị",
    description: "Phân tích thực trạng & thiết kế giải pháp riêng. Mỗi thương hiệu có mục tiêu và ngân sách khác nhau, DST đề xuất danh mục triển khai tối ưu nhất cho riêng bạn.",
  },
  {
    title: "Năng lực thực chứng minh bạch",
    description: "Hệ thống năng lực thực chứng với hàng loạt dự án F&B, Nightlife và Doanh nghiệp đã được triển khai thành công, giúp bạn hoàn toàn an tâm khi lựa chọn.",
  },
];

export const serviceGroups = [
  {
    title: "Website / SEO",
    summary: "Xây dựng nền tảng thương hiệu uy tín, chuẩn SEO, giúp khách hàng dễ dàng tìm kiếm thông tin và liên hệ trực tuyến.",
    items: ["Website giới thiệu", "Trang giới thiệu", "Bài viết chuẩn SEO", "Giao diện dễ dùng"],
    source: websiteService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 37, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Fanpage và nội dung",
    summary: "Duy trì hình ảnh chuyên nghiệp trên mạng xã hội với kế hoạch nội dung sắc bén, visual cuốn hút và lịch đăng đều đặn.",
    items: ["Quản trị fanpage có kế hoạch", "Lên lịch đăng", "Bài đăng truyền thông", "Nội dung theo chương trình"],
    source: contentService?.source ?? ({ sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Hình ảnh và video",
    summary: "Sản xuất hình ảnh chất lượng cao và video short-form (Reels/TikTok) bắt mắt, làm nổi bật không gian, sản phẩm và dịch vụ.",
    items: ["Video ngắn", "Video recap sự kiện", "Video giới thiệu", "Chụp/quay sản phẩm, món ăn, không gian"],
    source: mediaService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 10, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Thiết kế và nhận diện",
    summary: "Quy chuẩn thiết kế nhận diện, poster, menu và catalogue sang trọng, giúp truyền tải giá trị thương hiệu một cách mạnh mẽ.",
    items: ["Poster", "Menu", "Banner", "Ấn phẩm truyền thông", "Nhận diện hình ảnh"],
    source: designService?.source ?? brandingService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta),
  },
  {
    title: "Quảng cáo và marketing",
    summary: "Thiết lập và vận hành các chiến dịch quảng cáo đa kênh Facebook, TikTok, Google, YouTube nhắm trúng tệp khách hàng tiềm năng.",
    items: ["Quảng cáo Facebook", "Quảng cáo TikTok", "Google / YouTube", "Zalo theo nhu cầu", "Theo dõi chiến dịch"],
    source: adsService?.source ?? ({ sourceFile: "HSNL CTY DST.pdf", page: 12, confidence: "high" } satisfies SourceMeta),
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Đồng hành quản trị toàn diện phòng Marketing thuê ngoài: tối ưu chi phí, duy trì sự hiện diện liên tục và thúc đẩy tăng trưởng doanh số.",
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
    description: "Giải pháp truyền thông trọn gói trước, trong và sau sự kiện: sản xuất visual line-up, quay video recap bùng nổ và chạy quảng cáo nhắm trúng tệp nightlife.",
    href: "/bar-club",
    image: "/assets/bar-club/valley-beach-club.webp",
    tags: ["Nightlife", "Event", "Ads"],
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Xây dựng hình ảnh thương hiệu đẳng cấp cho ngành F&B & Hospitality: quay chụp không gian/món ăn, thiết kế menu, chăm sóc Fanpage và chạy ads thúc đẩy đặt bàn.",
    href: "/nha-hang-khach-san",
    image: "/assets/hospitality/birds-nest-cafe.webp",
    tags: ["Nhà hàng", "Cafe", "Website"],
  },
  {
    title: "Doanh nghiệp / Dịch vụ tổng hợp",
    description: "Hệ sinh thái dịch vụ Marketing toàn diện cho doanh nghiệp: thiết kế logo, bộ nhận diện, sản xuất TVC/hồ sơ năng lực và quản trị chiến dịch quảng cáo đa kênh.",
    href: "#service-groups",
    image: "/assets/showcase/service-collage-showcase.webp",
    tags: ["Website", "Media", "Marketing"],
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Tiếp nhận thông tin & mục tiêu kinh doanh",
    description: "Phân tích ngành hàng, các kênh truyền thông hiện có, ngân sách dự kiến và những điểm nóng cần ưu tiên xử lý.",
  },
  {
    step: "02",
    title: "Xây dựng chiến lược & lựa chọn kênh",
    description: "Đề xuất lộ trình triển khai tối ưu trên Website, Fanpage, TikTok, Video hay Quảng cáo — đảm bảo đúng điểm chạm khách hàng.",
  },
  {
    step: "03",
    title: "Hoàn thiện kế hoạch & chi phí minh bạch",
    description: "Gửi bản đề xuất chi tiết về hạng mục, lịch trình và KPI — rõ ràng mọi quyền lợi trước khi tiến hành.",
  },
  {
    step: "04",
    title: "Sản xuất nội dung & thực thi chiến dịch",
    description: "Đội ngũ chuyên môn triển khai thiết kế visual, quay dựng video, viết bài chuẩn SEO và tối ưu quảng cáo theo kế hoạch.",
  },
  {
    step: "05",
    title: "Báo cáo hiệu quả & đồng hành tối ưu",
    description: "Liên tục theo dõi chỉ số, tinh chỉnh theo phản hồi thực tế và bàn giao trọn vẹn tài sản số cho doanh nghiệp.",
  },
];

export const featuredServiceProjects = projects.slice(0, 7).map((project) => ({
  ...project,
  tags: [project.sector, project.category === "barclub" ? "Bar/Club" : project.category === "event" ? "Sự kiện" : "Dịch vụ"],
}));

export const whyChooseServices = [
  "Phân tích kỹ lưỡng mục tiêu trước khi đề xuất giải pháp — tuyệt đối không ép gói.",
  "Năng lực thực chứng rõ ràng với hồ sơ dự án thực tế đa ngành hàng.",
  "Hệ sinh thái dịch vụ toàn diện: quy tụ Website, Fanpage, Media, Thiết kế và Quảng cáo dưới một đầu mối duy nhất.",
  "Giải pháp linh hoạt, được thiết kế tối ưu hóa theo quy mô và ngân sách thực tế của doanh nghiệp.",
  "Báo giá minh bạch, rõ ràng theo phạm vi triển khai — cam kết không phát sinh chi phí ẩn.",
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
