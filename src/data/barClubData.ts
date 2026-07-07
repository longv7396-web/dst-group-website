import { company } from "./company";
import { projects } from "./projects";
import type { PricingItem } from "./pricing";
import type { SourceMeta } from "./sources";

const barClubQuoteSource = "BAO GIA.pdf" as const;
const barClubWorkflowNote =
  "Nội dung diễn giải quy trình từ hạng mục PDF, không phải trích nguyên văn.";
const barClubWorkflowSource = {
  sourceFile: barClubQuoteSource,
  page: 26,
  confidence: "low",
} satisfies SourceMeta;

export const barClubFacebookUrl = company.fanpage.value;

export const barClubHero = {
  eyebrow: "DST Group for Bar / Club / Nightlife",
  title: "Truyền thông đúng nhịp cho Bar / Club",
  subtitle:
    "Một đêm sự kiện không chỉ cần âm thanh và ánh sáng. Khách cần nhìn thấy nó đủ sớm, đủ rõ và đủ cuốn để muốn tham gia. DST hỗ trợ poster, fanpage, content, video và quảng cáo theo từng event.",
  chips: ["Fanpage", "Content", "Poster", "Video", "Ads", "Booking/Zalo"],
  video: "/assets/videos/bar-club-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/valley-beach-club-hero.webp",
  source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
};

export const barClubProblems = [
  {
    title: "Khách chưa kịp biết event đã diễn ra",
    description: "Line-up có rồi, nhưng bài đăng, story và nội dung nhắc lịch ra muộn — khách lướt qua mà không ghi nhớ.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "medium" } satisfies SourceMeta,
  },
  {
    title: "Poster chưa đủ thu hút để click vào",
    description: "Thiếu thông tin rõ về lịch, line-up hoặc ưu đãi — khách khó quyết định có đến hay không.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Đêm diễn hay nhưng social chưa khai thác",
    description: "Crowd, DJ, backstage và không khí thực tế — nếu không được ghi lại, bạn mất chất liệu dùng cho tuần sau.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Sau event, tư liệu bị để ngỏ",
    description: "Recap và album có thể dùng lại cho fanpage, ads hoặc event kế tiếp — nếu được sắp xếp đúng cách.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubEventJourney = [
  {
    phase: "BEFORE EVENT",
    label: "Trước sự kiện",
    title: "Chuẩn bị nội dung trước ngày diễn",
    deliverables: ["Key visual / poster", "Line-up post", "Teaser reel", "Story countdown", "Ads content", "Booking/Zalo CTA"],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    phase: "DURING EVENT",
    label: "Trong sự kiện",
    title: "Ghi lại khoảnh khắc trong đêm diễn",
    deliverables: ["Story real-time", "Short video capture", "Crowd moment", "DJ/artist highlight", "Behind-the-scenes", "Social update"],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    phase: "AFTER EVENT",
    label: "Sau sự kiện",
    title: "Dùng lại tư liệu sau event",
    deliverables: ["Recap video", "Photo album", "Reels/TikTok cutdown", "Thank-you post", "Next event teaser", "Remarketing content"],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubSevenDayTimeline = [
  {
    marker: "T-7",
    title: "Trao đổi line-up, concept và thông điệp chính",
    description: "Xác định nội dung chính, lịch đăng và thông tin cần xuất hiện trên fanpage trước khi khách bắt đầu hỏi.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-5",
    title: "Hoàn thiện key visual/poster và bài công bố event",
    description: "Có poster và visual đủ rõ để fanpage, story và kênh booking bắt đầu nhắc lịch — khách biết event sắp diễn ra.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-3",
    title: "Đẩy teaser reel, story countdown và nội dung nhắc lịch",
    description: "Nhắc lại lịch event bằng teaser, story countdown — giữ nhịp trước đêm diễn.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-1",
    title: "Tăng CTA booking/inbox/Zalo",
    description: "Đưa lời kêu gọi rõ hơn về inbox, Zalo hoặc điểm nhận booking — khách biết cách tham gia.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "Event night",
    title: "Ghi hình story, crowd moment, artist/DJ highlight",
    description: "Thu crowd moment, highlight DJ/artist — chất liệu thật để dùng ngay sau đêm diễn.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T+1",
    title: "Ra recap, album hoặc short video",
    description: "Giữ nhịp sau event bằng recap, album hoặc short video — khách vẫn nhớ đêm vừa qua.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T+3",
    title: "Cắt nội dung hậu event cho các bài đăng tiếp theo",
    description: "Dùng lại recap, ảnh và video ngắn theo nhu cầu triển khai.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubDeliverablesSource = {
  source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
  confidenceNote: barClubWorkflowNote,
} as const;

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
    title: "Poster và line-up event",
    tag: "Visual",
    summary: "Poster, line-up và banner rõ ràng — khách nhìn là biết event gì, khi nào, ở đâu.",
    items: ["Poster", "Line-up", "Story", "Banner"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quản trị fanpage và content",
    tag: "Social",
    summary: "Lịch bài, bài viết, story và reels đều đặn — fanpage không bị bỏ trống giữa các đêm diễn.",
    items: ["Content plan", "Fanpage post", "Story", "Reels"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Video recap và tư liệu event",
    tag: "Media",
    summary: "Quay, dựng recap và tư liệu ngắn — giữ lại không khí đêm diễn để dùng tiếp trên social.",
    items: ["Recap", "Crowd moment", "Artist highlight", "Short video"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quảng cáo và CTA booking",
    tag: "Booking",
    summary: "Nội dung ads và CTA về inbox, Zalo hoặc booking — khách biết cách tham gia event.",
    items: ["Ads content", "Inbox CTA", "Zalo CTA", "Remarketing"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Nội dung duy trì hằng tháng",
    tag: "Monthly",
    summary: "Duy trì nhịp social mỗi tháng — phù hợp bar/club có lịch sự kiện đều và cần fanpage sống động.",
    items: ["Lịch đăng", "Template", "Short video", "Nhịp social"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Website / Landing Page Event",
    tag: "Online hub",
    summary: "Trang giới thiệu event, dịch vụ và liên hệ — một điểm đến rõ cho khách muốn tìm hiểu thêm.",
    items: ["Landing page", "Event info", "Contact CTA", "Thông tin liên hệ"],
    source: { sourceFile: "HSNL CTY DST.pdf", page: 26, confidence: "medium" } satisfies SourceMeta,
  },
];

export const barClubProjects = projects
  .filter((project) => project.category === "barclub")
  .map((project) => ({
    ...project,
    tags: ["Bar / Club", "Nguồn PDF", "Tư vấn theo nhu cầu"],
    handled:
      project.name === "Valley Beach Club"
        ? ["Quản trị Fanpage", "Viết content", "Thiết kế hình ảnh", "Chạy ads"]
        : ["Tên và hình ảnh có trong tài liệu DST"],
    outputs:
      project.name === "Valley Beach Club"
        ? [
            "Quản trị Fanpage, content, thiết kế hình ảnh và ads",
            project.outcome ?? "Trao đổi kết quả triển khai theo nhu cầu tương tự",
          ]
        : ["Hình ảnh/dự án tham khảo", "DST sẽ trao đổi thêm để tư vấn hạng mục phù hợp"],
  }));

export const barClubProcess = [
  {
    step: "01",
    title: "Nghe bạn nói về lịch event",
    description: "DST xem line-up, kênh đang dùng và phần nào cần ưu tiên trước — poster, fanpage hay ads.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "02",
    title: "Chọn hạng mục phù hợp",
    description: "Hai bên trao đổi poster, bài đăng, video, ads hoặc landing page — theo ngân sách và thời gian còn lại.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "03",
    title: "Triển khai nội dung đã chốt",
    description: "DST làm bài viết, thiết kế, video hoặc ads theo phạm vi hai bên đã thống nhất.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "04",
    title: "Trao đổi và điều chỉnh",
    description: "DST cập nhật theo phản hồi thực tế trong quá trình triển khai — không làm xong rồi biến mất.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubPackages = [
  {
    title: "Hạng mục truyền thông cho event",
    label: "Gợi ý",
    audience: "Quán có line-up hoặc sự kiện cần truyền thông nhanh, đúng nhịp",
    includes: ["Poster / key visual", "Teaser content", "Social post", "Story countdown", "Ads content cơ bản"],
    cta: "Tư vấn theo event",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Nội dung duy trì hằng tháng",
    label: "Gợi ý",
    audience: "Bar/club cần fanpage sống động giữa các đêm diễn",
    includes: ["Content plan", "Bài viết fanpage", "Reels/TikTok ngắn", "Poster/story template", "Lịch đăng nội dung"],
    cta: "Tư vấn theo tháng",
    featured: true,
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Hướng triển khai cho Bar/Club",
    label: "Gợi ý",
    audience: "Địa điểm muốn phối hợp event, content, video và ads trong cùng kế hoạch",
    includes: ["Visual event", "Quay/chụp recap", "Social content", "Ads campaign", "Trao đổi kết quả triển khai"],
    cta: "Tư vấn theo phạm vi",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubFaqs = [
  {
    question: "DST có nhận truyền thông cho một event riêng lẻ không?",
    answer:
      "Có. Nếu quán chỉ cần poster, bài nhắc lịch, ads hoặc recap cho một đêm — DST sẽ tư vấn theo phạm vi event đó.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "low" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Nên bắt đầu truyền thông trước event bao lâu?",
    answer:
      "Càng sớm càng tốt. Trao đổi sớm giúp kịp chuẩn bị poster, bài công bố, nội dung nhắc lịch và CTA booking trước ngày diễn.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "DST có hỗ trợ quay/chụp recap không?",
    answer:
      "Có. DST có thể ghi crowd moment, highlight DJ/artist và dựng recap video hoặc album sau sự kiện — theo nhu cầu từng đêm.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Có hỗ trợ ads kéo inbox/booking không?",
    answer:
      "Có. DST hỗ trợ nội dung ads theo thông điệp event và điều hướng về inbox, Zalo hoặc điểm booking quán đang dùng.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Có gói nội dung theo tháng cho bar/club không?",
    answer:
      "Có. DST tư vấn nội dung fanpage, story và visual theo tháng — phù hợp venue có lịch diễn đều và cần giữ nhịp social.",
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Nếu quán chưa có hình ảnh tốt thì DST có hỗ trợ concept không?",
    answer:
      "DST có thể định hướng concept visual và cách khai thác chất liệu hiện có trước — rồi mới bàn thêm sản xuất nếu cần.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

const barClubPricingNoAmountNote =
  "Tài liệu báo giá không ghi số tiền cụ thể cho hạng mục này; giá theo gói và phạm vi khách chọn.";

export const barClubPricing: PricingItem[] = [
  {
    category: "Quản trị truyền thông",
    item: "Quản trị Facebook (gói fanpage)",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Gói quản trị nội dung fanpage theo tháng; số lượng bài viết và thiết kế tùy gói khách chọn.",
    details: [
      "Kế hoạch bài viết theo từng tháng (combo 3 tháng: kế hoạch marketing xuyên suốt 3 tháng)",
      "Bài viết và thiết kế",
      "Poster tổng theo concept tháng",
      "Ảnh bài + avatar chủ đề theo tháng",
      "Thiết kế in ấn",
      "Đăng trả ảnh hằng ngày",
      "Đăng video reel hàng ngày",
      "Video quảng cáo chương trình khuyến mãi",
      "Video intro giới thiệu, recap sự kiện (theo tư liệu khách cung cấp)",
    ],
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí quay, dựng kênh TikTok",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Chi phí xây dựng kênh TikTok theo tháng.",
    quantity: "Quay full sự kiện trong tháng (4 buổi); 20 video xây kênh TikTok/Reel",
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí kịch bản, nội dung TikTok",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Kịch bản và nội dung cho kênh TikTok theo hạng mục trong báo giá.",
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế & nội dung",
    item: "Chi phí thuê flycamera FPV",
    unit: "Tháng",
    price: "Liên hệ tư vấn",
    note: "Quay đèn ngoài trời theo hạng mục trong báo giá.",
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế đồ họa",
    item: "Poster chương trình lẻ / tổng theo tháng",
    unit: "Poster",
    price: "Liên hệ tư vấn",
    note: "Thiết kế poster chương trình lẻ hoặc poster tổng theo tháng.",
    details: [
      "Thiết kế poster chương trình lẻ",
      "Thiết kế poster chương trình tổng theo tháng",
      "Concept 1 ảnh bìa + 1 avatar chủ đề theo tháng",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế đồ họa",
    item: "Video intro line-up, menu, recap, nhắc chương trình",
    unit: "Hạng mục",
    price: "Liên hệ tư vấn",
    note: "Video và ấn phẩm theo tư liệu có sẵn của khách hàng.",
    details: [
      "Video intro line-up: 30s quảng cáo sự kiện, video 4K",
      "Thiết kế menu (ấn phẩm)",
      "Video recap chương trình (tư liệu có sẵn)",
      "Video nhắc chương trình (tư liệu có sẵn)",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Quảng cáo online",
    item: "Quảng cáo Facebook / TikTok",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note: "Quảng cáo online trên Facebook các sự kiện; quảng cáo TikTok hỗ trợ xây kênh.",
    details: [
      "Facebook: tương tác, tin nhắn, view, lead, remarketing",
      "TikTok: hỗ trợ xây kênh",
    ],
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Quảng cáo Google",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note: "Quảng cáo Google theo chiến dịch.",
    details: ["Tìm kiếm", "YouTube", "GDN", "Shopping"],
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Quảng cáo Zalo",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note:
      "Bị TikTok hạn chế quảng cáo dịch vụ bar, cần đổi kênh để chạy quảng cáo (theo ghi chú trong tài liệu).",
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Website / SEO",
    item: "Website cơ bản",
    unit: "Gói",
    price: "Liên hệ tư vấn",
    note: "Gói website cơ bản theo hạng mục trong báo giá.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Website / SEO",
    item: "Bài viết chuẩn SEO web",
    unit: "Bài",
    price: "Liên hệ tư vấn",
    note: "Bài viết chuẩn SEO web theo hạng mục trong báo giá.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
];

export const barClubContact = {
  phone: company.phone.value,
  email: company.email.value,
  website: company.website.value,
  websiteUrl: company.websiteUrl.value,
  address: company.quotationAddress.value,
  headquarters: company.headquarters.value,
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
