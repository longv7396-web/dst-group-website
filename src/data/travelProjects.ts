import { generatedTravelUnits } from "./travelUnits.generated";
import { getTravelImageSet, type TravelGalleryImage } from "./travelImages";

export type TravelUnitSample = {
  code: string;
  unitType?: string;
  bedrooms?: number;
  features?: string[];
  weekdayPrice?: string;
  weekendPrice?: string;
  fridayPrice?: string;
  saturdayPrice?: string;
  sundayPrice?: string;
  elevator?: boolean;
  notes?: string;
};

export type TravelPriceRow = {
  label: string;
  weekday?: string;
  weekend?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  note?: string;
};

export type TravelUnitTypeGroup = {
  name: string;
  description: string;
};

export type { TravelGalleryImage } from "./travelImages";

export type TravelProject = {
  id: string;
  slug: string;
  name: string;
  type: string;
  location: string;
  shortDescription: string;
  overview: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImagePosition: string;
  coverImage: string;
  coverImagePosition: string;
  gallery: TravelGalleryImage[];
  highlights: string[];
  amenities: string[];
  unitTypeGroups?: TravelUnitTypeGroup[];
  priceSummary: TravelPriceRow[];
  unitSamples: TravelUnitSample[];
  bedroomFilter?: boolean;
  sheetUrl?: string;
  showSheetLink?: boolean;
  dataSource?: string;
  ctaText: string;
  contactNote: string;
  processSteps: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const TRAVEL_PRICE_DISCLAIMER =
  "Website chỉ hiển thị giá tiêu biểu. Bảng giá đầy đủ theo từng mã căn chỉ cung cấp qua cộng tác viên DST.";

export const TRAVEL_PRICE_SECTION_LEAD =
  "Bảng dưới đây chỉ là giá tiêu biểu để tham khảo nhanh. Để xem đầy đủ giá theo ngày và từng mã căn, vui lòng liên hệ cộng tác viên DST.";

export const TRAVEL_PROCESS_STEPS = [
  "Gửi ngày đi, ngày về và số lượng khách",
  "DST kiểm tra quỹ căn còn trống",
  "Tư vấn căn phù hợp ngân sách và nhu cầu của bạn",
  "Xác nhận thông tin và giá trước khi đặt",
] as const;

export const TRAVEL_REFERENCE_PRICE_LABEL = "Giá tham khảo";

type GeneratedSheet = {
  unitSamples: TravelUnitSample[];
  priceSummary: TravelPriceRow[];
  unitTypeGroups?: TravelUnitTypeGroup[];
  amenities: string[];
  highlights: string[];
  dataSource: string;
  unitCount: number;
};

const travelUnitsBySlug = generatedTravelUnits as Record<string, GeneratedSheet>;

const projectMeta: Array<
  Omit<
    TravelProject,
    | "highlights"
    | "amenities"
    | "unitTypeGroups"
    | "priceSummary"
    | "unitSamples"
    | "dataSource"
    | "heroImage"
    | "heroImagePosition"
    | "coverImage"
    | "coverImagePosition"
    | "gallery"
  > & {
    bedroomFilter?: boolean;
    highlights: string[];
    amenities: string[];
    unitTypeGroups?: TravelUnitTypeGroup[];
  }
> = [
  {
    id: "holiday-ha-long",
    slug: "holiday-ha-long",
    name: "Holiday Hạ Long",
    type: "Căn hộ nghỉ dưỡng",
    location: "Hạ Long, Quảng Ninh",
    shortDescription:
      "Studio và căn 2 ngủ tại Hạ Long — DST hỗ trợ check lịch, gợi ý căn phù hợp và báo giá theo ngày lưu trú.",
    overview:
      "Holiday Hạ Long phù hợp gia đình, cặp đôi, nhóm bạn hoặc khách công tác ngắn ngày. DST quản lý quỹ căn và giúp bạn lọc loại căn, số giường và mức giá trước khi đặt. Giá trên trang chỉ mang tính tham khảo — vui lòng xác nhận với DST theo ngày check-in/check-out.",
    heroTitle: "Căn hộ Holiday Hạ Long — chọn căn theo ngày",
    heroSubtitle:
      "Quỹ căn hộ tại Hạ Long với studio và căn 2 ngủ. Nhắn DST ngày lưu trú và số khách để nhận lịch trống, ảnh thực tế và giá cập nhật.",
    seoTitle: "Căn hộ Holiday Hạ Long | DST Group — Check lịch & giá tham khảo",
    seoDescription:
      "Căn hộ nghỉ dưỡng Holiday Hạ Long: studio view phố, view biển, căn 2 ngủ. DST hỗ trợ check lịch trống và báo giá theo ngày. Liên hệ tư vấn.",
    highlights: [
      "40 mã căn trong quỹ — DST check lịch theo ngày bạn chọn",
      "Nhiều lựa chọn: studio view phố, view biển, view bể bơi, căn 2 ngủ",
      "Giá ngày thường và cuối tuần khác nhau — DST báo đúng theo mã căn",
      "Phù hợp gia đình, cặp đôi, nhóm nhỏ và khách công tác tại Hạ Long",
    ],
    amenities: [
      "Studio view phố — thuận tiện di chuyển trong khu",
      "Studio view biển & view bể bơi — tùy từng mã căn",
      "Căn 2 ngủ view biển — phù hợp gia đình hoặc nhóm 3–4 người",
      "Tiện ích cụ thể từng căn — liên hệ DST để nhận chi tiết",
    ],
    unitTypeGroups: [
      {
        name: "2 Ngủ View biển",
        description: "Căn 2 phòng ngủ hướng biển — phù hợp gia đình hoặc nhóm nhỏ. Liên hệ DST để check mã còn trống.",
      },
      {
        name: "Studio View phố",
        description: "Studio view phố — gọn, dễ di chuyển. DST gửi ảnh và giá theo ngày bạn chọn.",
      },
      {
        name: "Studio View biển & bể bơi",
        description: "Studio view biển hoặc view bể bơi — tùy mã căn. Liên hệ DST để được tư vấn căn phù hợp.",
      },
    ],
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/16n3Vlf8JBju7F6IUZ5hDG3FXobzWoAHdwaSMt8fo90o/edit",
    showSheetLink: false,
    ctaText: "Nhắn Zalo check lịch",
    contactNote:
      "Giá trên website là giá tham khảo. Nhắn DST ngày check-in/check-out và số khách để nhận lịch trống và báo giá chính xác.",
    processSteps: [...TRAVEL_PROCESS_STEPS],
  },
  {
    id: "villa-tuan-chau",
    slug: "villa-tuan-chau",
    name: "Villa Tuần Châu",
    type: "Villa nghỉ dưỡng",
    location: "Tuần Châu, Hạ Long, Quảng Ninh",
    shortDescription:
      "7 villa tiêu biểu tại Tuần Châu — view biển, sân vườn, bàn bi-a tùy căn. DST tư vấn theo số khách và ngày lưu trú.",
    overview:
      "Villa Tuần Châu dành cho gia đình đông người, nhóm bạn hoặc doanh nghiệp tổ chức nghỉ dưỡng, team building. Mỗi villa có diện tích và tiện ích khác nhau — DST gợi ý căn phù hợp nhóm và ngân sách sau khi biết ngày đi và số khách.",
    heroTitle: "Villa Tuần Châu — villa riêng cho nhóm & doanh nghiệp",
    heroSubtitle:
      "Kingly, The Princess, Tahaghi, Santorini và các villa view biển tại Tuần Châu. DST gửi ảnh, lịch trống và giá theo ngày bạn chọn.",
    seoTitle: "Villa Tuần Châu Hạ Long | DST Group — Tư vấn đặt villa",
    seoDescription:
      "Villa Tuần Châu Hạ Long: Kingly, Princess, Tahaghi, Santorini. DST check lịch trống, gửi ảnh và báo giá theo ngày. Phù hợp nhóm và gia đình.",
    highlights: [
      "7 villa trong quỹ DST tại Tuần Châu — nhiều phong cách và diện tích",
      "View biển, panorama, sân vườn rộng — tiện ích tùy từng villa",
      "Phù hợp nhóm đông, gia đình và đoàn doanh nghiệp",
      "Một số căn cuối tuần bán cặp — DST xác nhận giá trước khi chốt",
    ],
    amenities: [
      "View biển & panorama — tùy từng villa",
      "Sân vườn rộng — diện tích từng căn khác nhau",
      "Bàn bi-a — có tại một số villa",
      "Sân bóng rổ, xe đạp — liên hệ DST để kiểm tra theo căn",
    ],
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/1-l6n2b_15o7W_hGA4x6Yafjh-y-MDkV0_vJ69O215Jk/edit",
    showSheetLink: false,
    ctaText: "Nhắn Zalo check lịch",
    contactNote:
      "Giá tham khảo theo quỹ căn DST — một số villa cuối tuần bán cặp hoặc có mức giá đặc biệt. Liên hệ để được báo giá đúng ngày.",
    processSteps: [...TRAVEL_PROCESS_STEPS],
  },
  {
    id: "villa-sun-feria",
    slug: "villa-sun-feria",
    name: "Villa Sun Feria",
    type: "Villa nghỉ dưỡng",
    location: "Sun Feria, Hạ Long, Quảng Ninh",
    shortDescription:
      "Hơn 40 mã villa Sun Feria — lọc theo số phòng ngủ, DST gửi ảnh và báo giá theo ngày lưu trú.",
    overview:
      "Villa Sun Feria phù hợp nhóm bạn, gia đình đông người hoặc team building cần không gian riêng. DST lọc villa theo số phòng ngủ, tiện ích ưu tiên và ngày lưu trú — bạn nhận đề xuất cụ thể kèm giá tham khảo trước khi quyết định.",
    heroTitle: "Villa Sun Feria Hạ Long — nhiều lựa chọn cho nhóm lớn",
    heroSubtitle:
      "Hơn 40 mã villa với nhiều số phòng ngủ. DST lọc căn trống, gửi ảnh và báo giá theo ngày check-in/check-out.",
    seoTitle: "Villa Sun Feria Hạ Long | DST Group — Tư vấn villa theo nhóm",
    seoDescription:
      "Villa Sun Feria Hạ Long: hơn 40 mã căn, bể bơi riêng, karaoke tùy villa. DST lọc theo số PN và check lịch theo ngày. Liên hệ tư vấn.",
    highlights: [
      "43 mã villa — nhiều lựa chọn theo số phòng ngủ",
      "Bể bơi riêng, karaoke, bàn bi-a tại một số căn",
      "Một số villa có thang máy — hỏi DST khi đặt cho người lớn tuổi",
      "Giá cuối tuần có thể bán cặp — DST báo rõ trước khi chốt",
    ],
    amenities: [
      "Bể bơi riêng hoặc gần bãi biển — tùy căn",
      "Karaoke & bàn bi-a — một số villa có sẵn",
      "View biển — theo từng mã căn",
      "Nội thất và tiện ích khác — DST gửi chi tiết khi tư vấn",
    ],
    bedroomFilter: true,
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/1t8NbFrPOQCwUbZoZXzPZG1vn3Lg0zMEBcApCLC2PtZk/edit",
    showSheetLink: false,
    ctaText: "Nhắn Zalo check lịch",
    contactNote:
      "Giá T6/T7/CN và cuối tuần bán cặp có thể khác ngày thường. Liên hệ DST với số khách và ngày cụ thể để nhận báo giá chuẩn.",
    processSteps: [...TRAVEL_PROCESS_STEPS],
  },
  {
    id: "villa-flc",
    slug: "villa-flc",
    name: "Villa FLC",
    type: "Villa nghỉ dưỡng",
    location: "FLC Hạ Long, Quảng Ninh",
    shortDescription:
      "36 mã villa FLC Hạ Long — view vịnh, golf, karaoke tùy căn. DST check lịch và báo giá theo ngày lưu trú.",
    overview:
      "Villa FLC nằm trong quần thể nghỉ dưỡng FLC Hạ Long, phù hợp gia đình, nhóm bạn và doanh nghiệp cần không gian riêng gần vịnh. DST đề xuất căn phù hợp sau khi nhận ngày lưu trú, số khách và tiện ích mong muốn.",
    heroTitle: "Villa FLC Hạ Long — nghỉ dưỡng view vịnh & golf",
    heroSubtitle:
      "36 mã villa trong quần thể FLC. DST check lịch trống và báo giá theo ngày — karaoke, sân vườn, view vịnh tùy từng căn.",
    seoTitle: "Villa FLC Hạ Long | DST Group — Check lịch & giá tham khảo",
    seoDescription:
      "Villa FLC Hạ Long: view vịnh, golf, karaoke, sân vườn tùy căn. DST kiểm tra lịch trống và báo giá theo ngày. Liên hệ tư vấn đặt villa.",
    highlights: [
      "36 mã villa FLC — nhiều lựa chọn số phòng ngủ",
      "View vịnh, view golf, sân vườn — tiện ích tùy từng căn",
      "Karaoke, bi-a có tại một số villa",
      "Giá T6/T7/CN cập nhật riêng — một số căn cuối tuần bán cặp",
    ],
    amenities: [
      "View vịnh & view golf — tùy từng villa",
      "Phòng karaoke — có tại một số căn",
      "Bàn bi-a / bi lắc — liên hệ DST để xác nhận theo căn",
      "Sân vườn rộng — diện tích từng villa khác nhau",
    ],
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/17vMB4D28yKHaEfJ9-3lC3gVSogWPWyTlvXLJ4uJoP2I/edit",
    showSheetLink: false,
    ctaText: "Nhắn Zalo check lịch",
    contactNote:
      "Giá villa FLC thay đổi theo mùa, ngày lễ và chính sách bán cặp cuối tuần. Liên hệ DST để nhận báo giá mới nhất.",
    processSteps: [...TRAVEL_PROCESS_STEPS],
  },
];

function mergeProject(meta: (typeof projectMeta)[number]): TravelProject {
  const sheet = travelUnitsBySlug[meta.slug];
  if (!sheet) {
    throw new Error(`Missing generated travel data for slug: ${meta.slug}`);
  }

  const images = getTravelImageSet(meta.slug);

  return {
    ...meta,
    heroImage: images.heroImage,
    heroImagePosition: images.heroImagePosition,
    coverImage: images.coverImage,
    coverImagePosition: images.coverImagePosition,
    gallery: images.gallery,
    highlights: meta.highlights,
    amenities: meta.amenities,
    unitTypeGroups: meta.unitTypeGroups ?? sheet.unitTypeGroups,
    priceSummary: sheet.priceSummary,
    unitSamples: sheet.unitSamples,
    dataSource: sheet.dataSource,
  };
}

export const travelProjects: TravelProject[] = projectMeta.map(mergeProject);

export function getTravelProjectBySlug(slug: string): TravelProject | undefined {
  return travelProjects.find((project) => project.slug === slug);
}

export const travelProjectSlugs = travelProjects.map((project) => project.slug);
