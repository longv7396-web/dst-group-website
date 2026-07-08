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
  title: "Đưa không gian & ẩm thực của bạn chạm đúng khách hàng tiềm năng",
  subtitle:
    "Một không gian kiến trúc độc đáo hay thực đơn xuất sắc cần được truyền tải bằng hình ảnh và video chỉn chu. DST cung cấp giải pháp truyền thông toàn diện từ quay chụp, xây dựng fanpage, website đến tối ưu quảng cáo chuyên sâu cho F&B và Hospitality.",
  video: "/assets/videos/hospitality-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/birds-nest-cafe-showcase.webp",
  source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
};

export const hospitalityProblems = [
  {
    title: "Khách hàng quyết định bằng trực quan",
    description: "Khách hàng lướt qua hàng loạt lựa chọn mỗi ngày. Nếu hình ảnh món ăn, không gian hay phòng nghỉ thiếu sự đầu tư và sắc nét, họ sẽ dễ dàng rời đi mà không để lại tương tác.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Fanpage thiếu nhịp sống và sự đồng bộ",
    description: "Việc đăng bài ngắt quãng, thiếu quy chuẩn hình ảnh hay nội dung nghèo nàn khiến thương hiệu giảm đi sự uy tín và chuyên nghiệp trong mắt thực khách.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Chưa khai thác sức mạnh của Video Short-form",
    description: "Những thước phim Reels hay TikTok chân thực về không gian ẩm thực, trải nghiệm dịch vụ có sức lan tỏa và khả năng kích thích tương tác gấp nhiều lần ảnh tĩnh truyền thống.",
    source: { sourceFile: "Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf", page: 36, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Sự phân mảnh thông tin giữa Website và Social",
    description: "Khi thông tin ưu đãi, menu hay hình ảnh giữa Fanpage, Website và bài Quảng cáo không đồng nhất, khách hàng sẽ do dự và mất thời gian khi quyết định đặt bàn.",
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
    title: "Hình ảnh nhận diện sang trọng & đồng bộ",
    description: "Quy chuẩn visual từ hình ảnh món ăn, kiến trúc không gian đến thiết kế menu, giúp thương hiệu thể hiện rõ đẳng cấp và phong cách riêng biệt trên mọi kênh truyền thông.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Thông tin minh bạch, kích thích đặt bàn",
    description: "Hệ thống Website, Fanpage và Quảng cáo được xây dựng nội dung rõ ràng, chuyên nghiệp — thúc đẩy khách hàng đưa ra quyết định đặt bàn và trải nghiệm dịch vụ nhanh chóng.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Fanpage duy trì sức hút đều đặn",
    description: "Kế hoạch nội dung được lên lịch chỉn chu với visual bài bản, giữ cho kênh truyền thông của bạn luôn năng động và xuất hiện đều đặn trong tâm trí thực khách.",
    source: { sourceFile: hospitalityQuoteSource, page: 36, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Lan tỏa thực đơn mới & ưu đãi hấp dẫn",
    description: "Các chiến dịch giới thiệu món mới, chương trình ưu đãi hay sự kiện đặc biệt được truyền tải bằng Video teaser, Poster thiết kế nổi bật và chiến lược phân phối tới đúng đối tượng.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    title: "Đồng nhất thông điệp trên toàn bộ hệ sinh thái",
    description: "Mọi tư liệu từ menu, hình ảnh tại quán đến chiến dịch quảng cáo online đều được thiết kế chung một ngôn ngữ thương hiệu, tạo nên trải nghiệm liền mạch cho khách hàng.",
    source: { sourceFile: hospitalityQuoteSource, page: 37, confidence: "low" } satisfies SourceMeta,
    confidenceNote: hospitalityWorkflowNote,
  },
];

export const hospitalityProcess = [
  {
    step: "01",
    title: "Nghiên cứu mô hình & định vị thương hiệu",
    description: "DST phân tích sâu về thực đơn, không gian kiến trúc, tệp khách hàng mục tiêu và các kênh truyền thông hiện tại để xác định lợi thế cạnh tranh cần làm nổi bật.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "02",
    title: "Thiết kế giải pháp & kế hoạch truyền thông",
    description: "Đề xuất danh mục triển khai tối ưu (quay chụp media, xây dựng Fanpage, video short-form, chạy ads) phù hợp nhất với mục tiêu kinh doanh và ngân sách thực tế.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "03",
    title: "Sản xuất nội dung & triển khai chiến dịch",
    description: "Đội ngũ chuyên gia tiến hành quay dựng video chất lượng cao, thiết kế visual sang trọng và viết nội dung chuẩn văn phong ẩm thực / dịch vụ lưu trú.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
  {
    step: "04",
    title: "Báo cáo hiệu quả & đồng hành tối ưu",
    description: "Liên tục theo dõi các chỉ số quảng cáo, lắng nghe phản hồi thị trường và tinh chỉnh nội dung chiến dịch nhằm đảm bảo tỷ lệ chuyển đổi đặt bàn/đặt phòng cao nhất.",
    source: hospitalityWorkflowSource,
    confidenceNote: hospitalityWorkflowNote,
  },
];

const hospitalityPricingSources = pricing.filter((item) =>
  ["Quản trị truyền thông", "Thiết kế & nội dung", "Thiết kế đồ họa", "Quảng cáo online", "Website / SEO"].includes(item.category),
);

export const hospitalityPackages = [
  {
    title: "Tư vấn thiết kế gói theo nhu cầu",
    price: "Liên hệ nhận báo giá",
    description:
      "Giải pháp truyền thông được thiết kế linh hoạt dựa trên quy mô doanh nghiệp, số lượng hạng mục và mục tiêu cụ thể của từng giai đoạn.",
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
