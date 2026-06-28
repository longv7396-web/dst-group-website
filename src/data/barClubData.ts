import { company } from "./company";
import { projects } from "./projects";
import { barclubServices } from "./services";
import type { SourceMeta } from "./sources";

export const barClubFacebookUrl = "https://www.facebook.com/share/1EvWCZnNBi/?mibextid=wwXIfr";

export const barClubHero = {
  eyebrow: "DST Group for Bar / Club / Nightlife",
  title: "Để mỗi đêm diễn không chỉ đông khách, mà còn trở thành nội dung đáng nhớ",
  subtitle:
    "DST Group giúp Bar, Club và Nightlife xây dựng line-up, poster, video recap, social content và quảng cáo đa kênh để thương hiệu nổi bật trước, trong và sau sự kiện.",
  video: "/assets/videos/bar-club-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/bar-club/valley-beach-club.webp",
  source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
};

export const barClubProblems = [
  {
    title: "Event dễ trôi nếu thiếu truyền thông trước giờ diễn",
    description: "Một đêm nhạc không chỉ cần sân khấu tốt. Khách cần thấy line-up, visual và thông điệp đủ sớm để nhớ và muốn đến.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "medium" } satisfies SourceMeta,
  },
  {
    title: "Fanpage không thể chỉ đăng khi sắp có chương trình",
    description: "Nội dung đều nhịp giúp thương hiệu giữ sự chú ý, thay vì chỉ xuất hiện rời rạc trước từng sự kiện.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Recap là tài sản truyền thông sau mỗi đêm diễn",
    description: "Video intro, recap và nội dung sau sự kiện giúp cảm xúc của đêm diễn tiếp tục sống trên fanpage, TikTok và quảng cáo.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Ads cần đi cùng thông điệp và hình ảnh",
    description: "Quảng cáo chỉ hiệu quả hơn khi có nội dung, visual và mục tiêu rõ cho từng kênh Facebook, TikTok, Google hoặc Zalo.",
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
    title: "Chốt lịch sự kiện và mục tiêu truyền thông",
    description: "Xác định nhóm khách, phong cách nightlife, lịch line-up và kênh cần ưu tiên trước mỗi chiến dịch.",
  },
  {
    step: "02",
    title: "Lên concept visual và nhịp nội dung",
    description: "Chốt thông điệp, key visual, lịch bài, poster, intro và các điểm chạm cần xuất hiện.",
  },
  {
    step: "03",
    title: "Sản xuất poster, recap, bài đăng và ads",
    description: "Triển khai nội dung fanpage, video ngắn, recap và quảng cáo đa kênh theo lịch sự kiện.",
  },
  {
    step: "04",
    title: "Theo dõi phản hồi và tối ưu nhịp chạy",
    description: "Quan sát tương tác, điều chỉnh thông điệp và nhịp quảng cáo theo thực tế từng chương trình.",
  },
];

export const barClubPackages = [
  {
    title: "Gói tư vấn theo nhu cầu",
    price: "Liên hệ tư vấn",
    description:
      "Tư vấn tổ hợp fanpage, content, line-up, recap, media và quảng cáo theo lịch sự kiện, mục tiêu truyền thông và ngân sách thực tế.",
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
