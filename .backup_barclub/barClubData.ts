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
  eyebrow: "Truyền thông chuyên biệt cho Bar / Club / Event",
  title: "Biến mỗi đêm diễn thành nội dung kéo khách quay lại",
  subtitle:
    "DST hỗ trợ bar, club và lounge chuẩn bị visual trước event, ghi lại khoảnh khắc trong đêm diễn và tái sử dụng tư liệu thành video, album, reels và quảng cáo sau sự kiện.",
  chips: ["Visual trước event", "Quay/chụp real-time", "Video recap", "Reels & TikTok", "Ads kéo booking"],
  video: "/assets/videos/bar-club-hero.mp4?v=final-20260628",
  fallbackVideo: "/assets/videos/hero.mp4",
  poster: "/assets/showcase/valley-beach-club-hero.webp",
  source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
};

export const barClubProblems = [
  {
    title: "Thông báo muộn — Khách lướt qua, quên lịch",
    description: "Line-up chốt sát giờ, bài đăng và story nhắc lịch ra muộn khiến khách hàng không kịp sắp xếp lịch đặt bàn.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "medium" } satisfies SourceMeta,
  },
  {
    title: "Visual nhạt nhòa — Khó tạo cảm giác muốn đến",
    description: "Poster thiếu vibe đêm diễn, thông tin line-up và ưu đãi không rõ ràng khiến khách hàng do dự khi chốt booking.",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Đêm diễn cực sung — Nhưng không ai ghi lại",
    description: "Khoảnh khắc crowd cháy hết mình, DJ highlight và không khí thực tế bị bỏ lỡ, làm mất chất liệu thu hút khách mới.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Phí hoài tư liệu — Fanpage trống trải sau đêm diễn",
    description: "Hàng trăm clip, ảnh thô không được dựng thành recap, reels hay album, khiến fanpage tụt tương tác và thiếu tài liệu chạy ads.",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubEventJourney = [
  {
    phase: "BEFORE EVENT",
    label: "Trước sự kiện",
    title: "Làm nóng sự kiện — Kéo khách chốt booking sớm",
    deliverables: [
      "Visual & Poster mang đúng vibe đêm diễn",
      "Bài công bố Line-up & Teaser reel cuốn hút",
      "Story countdown giữ nhiệt mỗi ngày",
      "Nội dung Ads nhắm trúng tệp khách đi đêm",
      "Tối ưu CTA điều hướng booking Zalo / Inbox",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    phase: "DURING EVENT",
    label: "Trong sự kiện",
    title: "Bắt trọn khoảnh khắc cháy — Ghi lại không khí thật",
    deliverables: [
      "Cập nhật Story real-time nóng hổi tại sự kiện",
      "Quay video short-form bắt khoảnh khắc đám đông",
      "Ghi hình DJ, Artist & điểm nhấn âm nhạc thăng hoa",
      "Góc quay Behind-the-scenes chân thực, cảm xúc",
      "Giữ cho social media luôn sống động suốt đêm diễn",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    phase: "AFTER EVENT",
    label: "Sau sự kiện",
    title: "Biến 1 đêm diễn thành nội dung bán hàng nhiều ngày",
    deliverables: [
      "Video Recap chất lượng cao dựng theo nhịp nhạc",
      "Album ảnh sắc nét, chọn góc đẹp nhất cho khách",
      "Cắt nhỏ Reels / TikTok duy trì tương tác cả tuần",
      "Bài đăng Thank-you kết nối và tri ân khách tham dự",
      "Nội dung Remarketing kéo khách quay lại lần sau",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubSevenDayTimeline = [
  {
    marker: "T-7",
    title: "Thống nhất Line-up, Concept & Thông điệp",
    description: "Chốt hướng đi, màu sắc chủ đạo và lịch đăng bài, đảm bảo mọi thông tin sẵn sàng trước khi khách khởi động.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-5",
    title: "Công bố Key Visual & Poster sự kiện",
    description: "Tung visual chất lượng cao lên fanpage và các kênh booking để định hình vibe và thu hút sự chú ý sớm.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-3",
    title: "Đẩy mạnh Teaser Reel & Story Countdown",
    description: "Nhắc lịch liên tục bằng video teaser ngắn và countdown đếm ngược, giữ nhiệt và kích thích sự háo hức.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T-1",
    title: "Tối ưu CTA — Thúc đẩy chốt bàn sát giờ",
    description: "Đăng bài tập trung vào quyền lợi, ưu đãi và lời kêu gọi đặt bàn rõ ràng qua Inbox hoặc Zalo.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "Event night",
    title: "Bắt khoảnh khắc thực tế trong đêm diễn",
    description: "Ekip trực tiếp quay chụp crowd moment, highlight DJ/Artist, lấy chất liệu nóng hổi cho story real-time.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T+1",
    title: "Tung Album ảnh đẹp & Video Recap nóng",
    description: "Khách hàng tìm ảnh, share bài ngay sau đêm diễn — giúp lan tỏa hình ảnh quán tự nhiên và mạnh mẽ nhất.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    marker: "T+3",
    title: "Cắt nhỏ Reels/TikTok — Duy trì tương tác",
    description: "Tái sử dụng tư liệu thành các clip short-form, tiếp tục chạy remarketing và tạo bước đệm cho event tuần sau.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubDeliverablesSource = {
  source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
  confidenceNote: barClubWorkflowNote,
} as const;

export const barClubDeliverables = [
  "Key Visual & Poster chính",
  "Bài công bố Line-up & Artist",
  "Video Teaser & Story Countdown",
  "Bài viết Fanpage trước & sau event",
  "Video Recap High-light sự kiện",
  "Album ảnh sắc nét trả cho khách",
  "Clip ngắn TikTok & Reels cutdown",
  "Nội dung & hình ảnh chạy Ads",
  "Thiết kế Menu & Ấn phẩm tại quán",
  "Tối ưu nút CTA Zalo / Hotline booking",
];

export const barClubServiceCards = [
  {
    title: "Poster & Line-up sự kiện",
    tag: "Visual",
    summary: "Thiết kế poster, banner và hình ảnh giới thiệu line-up sắc nét — giúp khách nhìn là cảm nhận được ngay độ nóng và vibe của sự kiện.",
    items: ["Key Visual", "Poster Line-up", "Story Banner", "Teaser"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quản trị Fanpage & Content",
    tag: "Social",
    summary: "Xây dựng nhịp đăng bài đều đặn với ngôn từ cuốn hút — giữ cho fanpage luôn sống động, chuyên nghiệp và không bị bỏ trống giữa các tuần.",
    items: ["Content Plan", "Bài viết sự kiện", "Story tương tác", "Copywriting"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quay chụp Recap & Media",
    tag: "Media",
    summary: "Ghi lại trọn vẹn sự bùng nổ của âm thanh, ánh sáng và cảm xúc đám đông — biến một đêm diễn thành kho tư liệu bán hàng giá trị.",
    items: ["Video Recap", "Photo Album", "Crowd Moment", "DJ Highlight"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Quảng cáo & Tối ưu Booking",
    tag: "Booking",
    summary: "Chạy quảng cáo nhắm trúng tệp khách yêu thích nightlife, điều hướng hành động trực tiếp về Inbox, Zalo hoặc Hotline đặt bàn.",
    items: ["Ads Facebook/TikTok", "Tối ưu Inbox", "Zalo CTA", "Remarketing"],
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Nội dung duy trì hằng tháng",
    tag: "Monthly",
    summary: "Gói đồng hành toàn diện giúp duy trì tương tác và xây dựng thương hiệu đường dài cho các venue có lịch hoạt động thường xuyên.",
    items: ["Lịch đăng tháng", "Reels / TikTok", "Concept hình ảnh", "Báo cáo chi tiết"],
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Landing Page cho Event lớn",
    tag: "Online hub",
    summary: "Xây dựng trang web giới thiệu sự kiện đặc biệt, festival hoặc kỷ niệm quán — tạo điểm nhấn chuyên nghiệp và thu thập lead hiệu quả.",
    items: ["Landing Page", "Thông tin Line-up", "Form Booking", "Tích hợp Ads"],
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
            project.outcome ?? "Giải pháp thiết kế riêng cho các mô hình Nightlife và F&B tương tự",
          ]
        : ["Hình ảnh/dự án tham khảo", "Linh hoạt tùy biến hạng mục theo quy mô & mục tiêu kinh doanh"],
  }));

export const barClubProcess = [
  {
    step: "01",
    title: "Nghiên cứu lịch Event & Vibe quán",
    description: "DST xem line-up, phong cách âm nhạc và kênh truyền thông hiện tại để xác định điểm nóng cần ưu tiên.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "02",
    title: "Đề xuất hạng mục & Lịch trình",
    description: "Thiết kế gói giải pháp linh hoạt (poster, bài đăng, video recap, ads) tối ưu chi phí và bùng nổ hiệu ứng truyền thông.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "03",
    title: "Triển khai thần tốc & Chuẩn chất",
    description: "Đội ngũ sản xuất bài viết, visual, media bám sát thông điệp event và đúng chất Nightlife.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    step: "04",
    title: "Đồng hành & Tối ưu thực tế",
    description: "Cập nhật nội dung theo phản hồi và nhịp bán bàn thực tế — hỗ trợ tận tâm trước, trong và sau sự kiện.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

export const barClubPackages = [
  {
    title: "Truyền thông cho 1 Event riêng lẻ",
    label: "THEO SỰ KIỆN",
    audience: "Quán sắp có guest DJ, ca sĩ hoặc sự kiện đặc biệt cần bùng nổ nhận diện nhanh",
    includes: ["Thiết kế Key Visual & Poster chương trình", "Video Teaser & Story countdown đếm ngược", "Bài viết công bố & cập nhật Fanpage", "Quay dựng Recap video sau sự kiện", "Hỗ trợ nội dung & tư vấn chạy Ads cơ bản"],
    cta: "Đăng ký gói Event",
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Đồng hành truyền thông hằng tháng",
    label: "PHỔ BIẾN NHẤT",
    audience: "Bar, Club, Lounge muốn fanpage luôn sống động, hình ảnh chỉn chu và đều đặn mỗi ngày",
    includes: ["Xây dựng kế hoạch nội dung chi tiết theo tháng", "Thiết kế trọn gói poster, banner, story đều đặn", "Quay & dựng 20 video ngắn xây kênh Reels/TikTok", "Quay hình các đêm sự kiện trong tháng (đến 4 buổi)", "Báo cáo, tối ưu hiệu quả và hỗ trợ quảng cáo"],
    cta: "Đăng ký gói Tháng",
    featured: true,
    source: { sourceFile: "BAO GIA.pdf", page: 26, confidence: "high" } satisfies SourceMeta,
  },
  {
    title: "Giải pháp tổng thể & Quảng cáo",
    label: "TOÀN DIỆN",
    audience: "Địa điểm cần phối hợp mạnh mẽ giữa sản xuất content, quay dựng và chạy ads tối ưu lead",
    includes: ["Quy trình khép kín: Trước - Trong - Sau sự kiện", "Sản xuất media chất lượng cao (FPV, quay 4K)", "Chiến dịch quảng cáo Facebook, Google, Zalo", "Tối ưu phễu chuyển đổi về Inbox / Zalo booking", "Đội ngũ theo sát nhịp hoạt động thực tế của quán"],
    cta: "Nhận báo giá tối ưu",
    source: { sourceFile: "BAO GIA.pdf", page: 27, confidence: "high" } satisfies SourceMeta,
  },
];

export const barClubFaqs = [
  {
    question: "DST có nhận truyền thông cho một event riêng lẻ không?",
    answer:
      "Có. Dù bạn chỉ cần thiết kế poster, chạy ads, viết bài nhắc lịch hay quay recap cho duy nhất một đêm diễn, DST luôn sẵn sàng tư vấn gói giải pháp nhanh gọn theo đúng phạm vi sự kiện.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "low" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Nên bắt đầu truyền thông trước event bao lâu?",
    answer:
      "Thời điểm lý tưởng là từ 7 đến 10 ngày trước sự kiện. Việc chuẩn bị sớm giúp có đủ thời gian thiết kế visual, đăng bài làm nóng và chạy quảng cáo kéo booking trước khi khách hàng chốt lịch cuối tuần.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "DST có hỗ trợ quay/chụp recap không?",
    answer:
      "Có. Đội ngũ quay chụp của DST trực tiếp có mặt tại sự kiện để bắt trọn crowd moment, DJ highlight và không khí thực tế, sau đó dựng thành video recap chất lượng cao để bạn đăng tải ngay ngày hôm sau.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Có hỗ trợ ads kéo inbox/booking không?",
    answer:
      "Có. Chúng tôi thiết lập chiến dịch quảng cáo tối ưu chuyển đổi, nhắm trúng đối tượng hay đi đêm và điều hướng khách nhắn tin trực tiếp vào Fanpage, Zalo hoặc Hotline đặt bàn của quán.",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Có gói nội dung theo tháng cho bar/club không?",
    answer:
      "Có. Gói đồng hành hàng tháng bao gồm lên lịch content, thiết kế poster đều đặn, quay dựng Reels/TikTok và chăm sóc fanpage, giúp quán duy trì sức hút ngay cả giữa các tuần sự kiện.",
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "medium" } satisfies SourceMeta,
    confidenceNote: barClubWorkflowNote,
  },
  {
    question: "Nếu quán chưa có hình ảnh tốt thì DST có hỗ trợ concept không?",
    answer:
      "Chắc chắn. DST sẽ định hướng concept visual, hướng dẫn tận dụng các tư liệu sẵn có hoặc bố trí ekip đến tận nơi quay chụp bổ sung để xây dựng kho hình ảnh chuyên nghiệp cho quán.",
    source: barClubWorkflowSource,
    confidenceNote: barClubWorkflowNote,
  },
];

const barClubPricingNoAmountNote =
  "Tài liệu báo giá không ghi số tiền cụ thể cho hạng mục này; giá theo gói và phạm vi khách chọn.";

export const barClubPricing: PricingItem[] = [
  {
    category: "Quản trị truyền thông",
    item: "Quản trị Facebook / Fanpage",
    unit: "Tháng",
    price: "Báo giá theo phạm vi",
    note: "Gói chăm sóc toàn diện Fanpage; tần suất bài viết và thiết kế điều chỉnh theo lịch event của quán.",
    displayDetails: [
      "Lên kế hoạch nội dung chiến lược theo tháng",
      "Viết bài, thiết kế poster và hình ảnh chỉn chu",
      "Đăng bài, Reels và content khuyến mãi đều đặn",
      "Dựng video intro, recap theo tư liệu thực tế",
    ],
    details: [
      "Kế hoạch bài viết theo từng tháng (combo 3 tháng: kế hoạch marketing xuyên suốt 3 tháng)",
      "Bài viết và thiết kế poster, hình ảnh",
      "Poster tổng theo concept tháng",
      "Ảnh bài + avatar chủ đề theo tháng",
      "Thiết kế in ấn tại quán",
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
    item: "Quay dựng TikTok / Reel",
    unit: "Tháng",
    price: "Báo giá theo phạm vi",
    note: "Gói xây dựng và duy trì kênh short-form (Reels / TikTok) bám sát nhịp vui chơi về đêm.",
    quantity: "Quay full sự kiện trong tháng (4 buổi); 20 video xây kênh TikTok/Reel",
    displayDetails: [
      "Quay hình trực tiếp tại 4 buổi sự kiện trong tháng",
      "Dựng 20 video ngắn short-form trend TikTok/Reels",
      "Tối ưu hình ảnh, âm thanh mang chuẩn vibe Nightlife",
    ],
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế & nội dung",
    item: "Kịch bản và nội dung TikTok",
    unit: "Tháng",
    price: "Báo giá theo phạm vi",
    note: "Xây dựng kịch bản sắc bén, cuốn hút cho kênh short-form của quán.",
    displayDetails: [
      "Xây dựng ý tưởng video phù hợp phong cách quán",
      "Kịch bản ngắn gọn, giải trí, dễ quay dựng",
      "Bám sát lịch sự kiện và chương trình khuyến mãi",
    ],
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế & nội dung",
    item: "Flycamera / FPV",
    unit: "Tháng",
    price: "Báo giá theo phạm vi",
    note: "Góc quay bay lượn độc đáo, làm nổi bật không gian và quy mô sự kiện.",
    displayDetails: [
      "Góc quay trên cao và FPV xuyên không gian ấn tượng",
      "Thổi bùng độ hoành tráng cho không gian quán",
      "Phù hợp các sự kiện lớn, festival hoặc tiệc ngoài trời",
    ],
    source: { sourceFile: barClubQuoteSource, page: 26, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Thiết kế đồ họa",
    item: "Poster chương trình",
    unit: "Poster",
    price: "Báo giá theo phạm vi",
    note: "Thiết kế visual ấn tượng cho event lẻ hoặc gói concept xuyên suốt hàng tháng.",
    displayDetails: [
      "Thiết kế poster sự kiện lẻ với visual cực cuốn",
      "Gói poster tổng theo concept hàng tháng",
      "Đồng bộ ảnh bìa, avatar và banner các kênh",
    ],
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
    item: "Video intro, menu, recap",
    unit: "Hạng mục",
    price: "Báo giá theo phạm vi",
    note: "Sản xuất video và ấn phẩm media chất lượng cao theo tư liệu thực tế.",
    displayDetails: [
      "Video intro Line-up 30s chất lượng cao (4K)",
      "Dựng video recap bùng nổ từ tư liệu có sẵn",
      "Thiết kế Menu và ấn phẩm hiển thị tại bàn",
    ],
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
    note: "Quảng cáo online trên Facebook & TikTok, tối ưu chuyển đổi đặt bàn.",
    displayDetails: [
      "Chạy ads tương tác, tin nhắn và remarketing event",
      "Tối ưu chi phí trên mỗi lượt inbox đặt bàn",
      "Minh bạch ngân sách theo từng chiến dịch",
    ],
    details: [
      "Facebook: tương tác, tin nhắn, view, lead, remarketing",
      "TikTok: hỗ trợ xây kênh",
    ],
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    noteInternal:
      "15% đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công (theo tài liệu).",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Quảng cáo Google",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note: "Tăng tiếp cận khách hàng có nhu cầu tìm kiếm địa điểm vui chơi.",
    displayDetails: [
      "Quảng cáo tìm kiếm từ khóa địa điểm vui chơi",
      "Mở rộng tiếp cận qua YouTube và Google Display",
      "Nhắm đúng tệp khách đang tìm kiếm bar/club",
    ],
    details: ["Tìm kiếm", "YouTube", "GDN", "Shopping"],
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    noteInternal:
      "15% đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công (theo tài liệu).",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Quảng cáo online",
    item: "Quảng cáo Zalo",
    unit: "Chiến dịch",
    price: "Phí dịch vụ 15%",
    note: "Giải pháp tiếp cận bổ sung, không lo rào cản chính sách quảng cáo.",
    displayDetails: [
      "Kênh tiếp cận bổ sung an toàn, hiệu quả cao",
      "Khắc phục hạn chế chính sách quảng cáo của TikTok",
      "Điều hướng trực tiếp về Zalo OA của quán",
    ],
    fee: "15% (đã bao gồm 5% VAT FB/GG/TikTok, 1% thanh toán thẻ quốc tế, còn lại 4% tiền công)",
    noteInternal:
      "Bị TikTok hạn chế quảng cáo dịch vụ bar, cần đổi kênh để chạy quảng cáo (theo ghi chú trong tài liệu).",
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
  },
  {
    category: "Website / SEO",
    item: "Website cơ bản",
    unit: "Gói",
    price: "Báo giá theo phạm vi",
    note: "Xây dựng Landing Page chuyên biệt cho sự kiện hoặc thương hiệu quán.",
    displayDetails: [
      "Trang Landing Page giới thiệu sự kiện / menu",
      "Giao diện dark mode hiện đại, chuẩn Nightlife",
      "Tối ưu tốc độ tải và tích hợp nút chốt bàn nhanh",
    ],
    source: { sourceFile: barClubQuoteSource, page: 27, confidence: "high" },
    confidenceNote: barClubPricingNoAmountNote,
  },
  {
    category: "Website / SEO",
    item: "Bài viết chuẩn SEO web",
    unit: "Bài",
    price: "Báo giá theo phạm vi",
    note: "Bài viết tối ưu công cụ tìm kiếm, tăng nhận diện thương hiệu bền vững.",
    displayDetails: [
      "Bài viết tối ưu tìm kiếm trên Google",
      "Nội dung thu hút khách tìm địa điểm vui chơi",
      "Tăng độ uy tín và nhận diện thương hiệu bền vững",
    ],
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
