import { company } from "./company";
import { projects } from "./projects";
import type { SourceMeta } from "./sources";

export const barClubFacebookUrl = company.fanpage.value;

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

export const barClubSevenDayTimeline = [
  {
    marker: "T-7",
    title: "Chốt line-up, concept và thông điệp chính",
    description: "Xác định mood đêm diễn, nhóm khách cần chạm tới và điểm nhấn cần xuất hiện trên social.",
  },
  {
    marker: "T-5",
    title: "Hoàn thiện key visual/poster và bài công bố event",
    description: "Có visual đủ rõ để fanpage, story và kênh booking bắt đầu nhắc lịch.",
  },
  {
    marker: "T-3",
    title: "Đẩy teaser reel, story countdown và nội dung nhắc lịch",
    description: "Tạo thêm lý do để khách nhớ event và cân nhắc đi cùng nhóm bạn.",
  },
  {
    marker: "T-1",
    title: "Tăng CTA booking/inbox/Zalo",
    description: "Đưa lời kêu gọi hành động rõ hơn về inbox, Zalo hoặc điểm nhận booking.",
  },
  {
    marker: "Event night",
    title: "Ghi hình story, crowd moment, artist/DJ highlight",
    description: "Thu chất liệu thật trong đêm diễn để social có cảm xúc và bằng chứng không khí.",
  },
  {
    marker: "T+1",
    title: "Ra recap nhanh, album hoặc short video",
    description: "Giữ nhịp sau event bằng nội dung dễ chia sẻ và dễ gợi nhớ.",
  },
  {
    marker: "T+3",
    title: "Cắt nội dung hậu event để kéo sự kiện tiếp theo",
    description: "Biến recap thành chất liệu social, retargeting và teaser cho line-up mới.",
  },
];

export const barClubDeliverables = [
  "Key visual / poster",
  "Line-up post",
  "Story countdown",
  "Teaser reel",
  "Fanpage content",
  "Ads content",
  "Recap video",
  "Photo album",
  "Short video cutdown",
  "Booking/Zalo CTA",
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

export const barClubFaqs = [
  {
    question: "DST có nhận truyền thông cho một event riêng lẻ không?",
    answer: "Có. DST có thể tư vấn gói theo từng event nếu quán cần poster, nội dung nhắc lịch, teaser, ads hoặc recap cho một đêm diễn cụ thể.",
  },
  {
    question: "Nên bắt đầu truyền thông trước event bao lâu?",
    answer: "Nên bắt đầu càng sớm càng tốt, thường tối thiểu khoảng một tuần để có thời gian chốt visual, công bố line-up, nhắc lịch và đẩy CTA booking.",
  },
  {
    question: "DST có hỗ trợ quay/chụp recap không?",
    answer: "Có thể hỗ trợ theo nhu cầu từng event, từ ghi lại crowd moment, artist/DJ highlight đến tạo recap video hoặc album sau sự kiện.",
  },
  {
    question: "Có hỗ trợ ads kéo inbox/booking không?",
    answer: "Có. Nội dung ads có thể được xây theo thông điệp event và điều hướng về inbox, Zalo hoặc điểm booking mà quán đang dùng.",
  },
  {
    question: "Có gói nội dung theo tháng cho bar/club không?",
    answer: "Có. Với venue có lịch diễn đều, DST có thể đề xuất gói nội dung tháng để duy trì fanpage, story, visual và nhịp social ổn định hơn.",
  },
  {
    question: "Nếu quán chưa có hình ảnh tốt thì DST có hỗ trợ concept không?",
    answer: "Có. DST có thể hỗ trợ định hướng concept visual, mood nội dung và cách khai thác chất liệu hiện có trước khi sản xuất thêm.",
  },
];

export const barClubContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  websiteUrl: company.websiteUrl.value,
  address: company.headquarters.value,
  facebook: barClubFacebookUrl,
  zalo: company.zalo.value,
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
