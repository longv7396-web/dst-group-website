import { company } from "./company";
import { projects } from "./projects";
import type { SourceMeta } from "./sources";

export const barClubFacebookUrl = "https://www.facebook.com/share/1EvWCZnNBi/?mibextid=wwXIfr";

export const barClubHero = {
  eyebrow: "DST Group for Bar / Club / Nightlife",
  title: "Biến mỗi đêm diễn thành một chiến dịch truyền thông đáng nhớ",
  subtitle:
    "DST hỗ trợ bar, club và nightlife venue xây dựng hình ảnh sự kiện, sản xuất nội dung, thiết kế visual, chạy ads và tạo chất liệu social trước - trong - sau mỗi đêm diễn.",
  chips: ["Event Content", "Recap Video", "Line-up Visual", "Social Ads", "Booking Support", "Nightlife Media"],
  video: "/assets/videos/bar-club-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/bar-club/valley-beach-club.webp",
  source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
};

export const barClubProblems = [
  {
    title: "Event có nhưng truyền thông chưa đủ sớm",
    description: "Line-up đã có, nhưng bài đăng, story và nội dung nhắc lịch ra muộn khiến khách chưa kịp ghi nhớ.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "medium" } satisfies SourceMeta,
  },
  {
    title: "Visual line-up/poster chưa tạo cảm giác muốn đi",
    description: "Poster thiếu đồng bộ hoặc chưa rõ mood sự kiện làm chương trình khó nổi bật giữa nhiều lựa chọn nightlife.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Nội dung trong đêm diễn chưa được khai thác tốt",
    description: "Khoảnh khắc crowd, DJ/artist, backstage và không khí thực tế cần được ghi lại để dùng tiếp trên social.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Recap sau event chưa kéo khách quay lại",
    description: "Sau một đêm diễn, recap và cutdown có thể trở thành chất liệu social cho event kế tiếp, retargeting và booking/inbox.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubEventJourney = [
  {
    phase: "BEFORE EVENT",
    label: "Trước sự kiện",
    title: "Tạo lý do để khách chú ý và đặt lịch",
    deliverables: ["Key visual / poster", "Line-up post", "Teaser reel", "Story countdown", "Ads content", "Booking/Zalo CTA"],
  },
  {
    phase: "DURING EVENT",
    label: "Trong sự kiện",
    title: "Ghi lại không khí thật của đêm diễn",
    deliverables: ["Story real-time", "Short video capture", "Crowd moment", "DJ/artist highlight", "Behind-the-scenes", "Social update"],
  },
  {
    phase: "AFTER EVENT",
    label: "Sau sự kiện",
    title: "Biến cảm xúc thành chất liệu social mới",
    deliverables: ["Recap video", "Photo album", "Reels/TikTok cutdown", "Thank-you post", "Next event teaser", "Retargeting content"],
  },
];

export const barClubServiceCards = [
  {
    title: "Event Visual & Line-up Design",
    tag: "Visual",
    summary: "Thiết kế poster, line-up, story, banner và visual đồng bộ cho từng đêm diễn.",
    items: ["Poster", "Line-up", "Story", "Banner"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Social Content Management",
    tag: "Social",
    summary: "Lên lịch bài viết, story, reels và nội dung duy trì nhịp xuất hiện của fanpage.",
    items: ["Content plan", "Fanpage post", "Story", "Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Recap Video & Nightlife Media",
    tag: "Media",
    summary: "Ghi lại không khí, khoảnh khắc crowd, DJ/artist và tạo recap video sau sự kiện.",
    items: ["Recap", "Crowd moment", "Artist highlight", "Short video"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Ads & Booking Campaign",
    tag: "Booking",
    summary: "Xây nội dung quảng cáo theo thông điệp event, điều hướng khách về inbox, Zalo hoặc booking.",
    items: ["Ads content", "Inbox CTA", "Zalo CTA", "Retargeting"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Monthly Nightlife Content Pack",
    tag: "Monthly",
    summary: "Duy trì nội dung theo tháng cho bar/club có lịch sự kiện đều.",
    items: ["Lịch đăng", "Template", "Short video", "Nhịp social"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Website / Landing Page Event",
    tag: "Online hub",
    summary: "Tạo landing page hoặc điểm chạm online để giới thiệu không gian, event, dịch vụ và thông tin liên hệ.",
    items: ["Landing page", "Event info", "Contact CTA", "Tracking"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta,
  },
];

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
    handled:
      project.name === "Valley Beach Club"
        ? ["Hình ảnh truyền thông", "Nội dung social", "Visual event", "Ads theo mục tiêu"]
        : ["Hình ảnh truyền thông", "Nội dung social", "Visual F&B/nightlife"],
    outputs:
      project.name === "Valley Beach Club"
        ? ["Bộ hình ảnh", "Nội dung đăng tải", "Chất liệu truyền thông cho fanpage và ads"]
        : ["Bộ hình ảnh", "Nội dung đăng tải", "Chất liệu truyền thông cho social"],
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
    description: "Triển khai nội dung fanpage, video ngắn, recap và ads theo mục tiêu của từng sự kiện.",
  },
  {
    step: "04",
    title: "Theo dõi phản hồi và tối ưu nhịp chạy",
    description: "Quan sát tương tác, điều chỉnh thông điệp và nhịp quảng cáo theo thực tế từng chương trình.",
  },
];

export const barClubPackages = [
  {
    title: "Event Launch Pack",
    label: "Gợi ý",
    audience: "Quán có sự kiện/line-up cần truyền thông nhanh",
    includes: ["Poster / key visual", "Teaser content", "Social post", "Story countdown", "Ads content cơ bản"],
    cta: "Phù hợp cho một event",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Monthly Content Pack",
    label: "Gợi ý",
    audience: "Bar/club cần duy trì fanpage đều mỗi tháng",
    includes: ["Content plan", "Bài viết fanpage", "Reels/TikTok ngắn", "Poster/story template", "Lịch đăng nội dung"],
    cta: "Phù hợp duy trì hình ảnh",
    featured: true,
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Full Nightlife Media Pack",
    label: "Gợi ý",
    audience: "Địa điểm cần triển khai đồng bộ event, content, video và ads",
    includes: ["Visual event", "Quay/chụp recap", "Social content", "Ads campaign", "Report/tối ưu cơ bản"],
    cta: "Phù hợp triển khai trọn gói",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  address: company.headquarters.value,
  facebook: barClubFacebookUrl,
  zaloPlaceholder: "Cần bổ sung link Zalo",
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
