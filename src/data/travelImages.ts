export type TravelGalleryImage = {
  src: string;
  alt?: string;
  position?: string;
};

export type TravelImageSet = {
  heroImage: string;
  heroImagePosition: string;
  coverImage: string;
  coverImagePosition: string;
  gallery: TravelGalleryImage[];
};

/** Fallback rõ nét từ ảnh gốc website Grand View Palace Hạ Long. */
export const TRAVEL_IMAGE_FALLBACK = "/assets/showcase/travel/holiday-hero.jpg";

/**
 * Ảnh nguồn gốc (độ phân giải cao) lấy từ website chính thức Grand View Palace Hạ Long.
 * Tách hero khỏi cover để tránh kéo ảnh card lên full hero gây vỡ/mờ.
 */
export const travelImageSets: Record<string, TravelImageSet> = {
  "holiday-ha-long": {
    heroImage: "/assets/showcase/travel/holiday-hero.jpg",
    heroImagePosition: "center center",
    coverImage: "/assets/showcase/travel/holiday-cover.jpg",
    coverImagePosition: "center center",
    gallery: [
      {
        src: "/assets/showcase/travel/holiday-gallery-1.jpg",
        position: "center center",
        alt: "Holiday Hạ Long — không gian nghỉ dưỡng ven hồ",
      },
      {
        src: "/assets/showcase/travel/holiday-cover.jpg",
        position: "center center",
        alt: "Holiday Hạ Long — căn hộ phù hợp gia đình",
      },
      {
        src: "/assets/showcase/travel/holiday-hero.jpg",
        position: "center center",
        alt: "Holiday Hạ Long — trung tâm lưu trú tại Hạ Long",
      },
    ],
  },
  "villa-tuan-chau": {
    heroImage: "/assets/showcase/travel/villa-tuan-chau-hero.jpg",
    heroImagePosition: "center center",
    coverImage: "/assets/showcase/travel/villa-tuan-chau-cover.jpg",
    coverImagePosition: "center center",
    gallery: [
      {
        src: "/assets/showcase/travel/villa-tuan-chau-gallery-1.jpg",
        position: "center center",
        alt: "Villa Tuần Châu — khu nghỉ dưỡng cao cấp",
      },
      {
        src: "/assets/showcase/travel/villa-tuan-chau-cover.jpg",
        position: "center center",
        alt: "Villa Tuần Châu — không gian ngoài trời",
      },
      {
        src: "/assets/showcase/travel/villa-tuan-chau-hero.jpg",
        position: "center center",
        alt: "Villa Tuần Châu — tổng quan dự án",
      },
    ],
  },
  "villa-sun-feria": {
    heroImage: "/assets/showcase/travel/villa-sun-feria-hero.jpg",
    heroImagePosition: "center center",
    coverImage: "/assets/showcase/travel/villa-sun-feria-cover.jpg",
    coverImagePosition: "center center",
    gallery: [
      {
        src: "/assets/showcase/travel/villa-sun-feria-gallery-1.jpg",
        position: "center center",
        alt: "Villa Sun Feria — không gian nghỉ dưỡng",
      },
      {
        src: "/assets/showcase/travel/villa-sun-feria-cover.jpg",
        position: "center center",
        alt: "Villa Sun Feria — khuôn viên và tiện ích",
      },
      {
        src: "/assets/showcase/travel/villa-sun-feria-hero.jpg",
        position: "center center",
        alt: "Villa Sun Feria — cảnh quan tổng thể",
      },
    ],
  },
  "villa-flc": {
    heroImage: "/assets/showcase/travel/villa-flc-hero.jpg",
    heroImagePosition: "center center",
    coverImage: "/assets/showcase/travel/villa-flc-cover.jpg",
    coverImagePosition: "center center",
    gallery: [
      {
        src: "/assets/showcase/travel/villa-flc-gallery-1.jpg",
        position: "center center",
        alt: "Villa FLC Hạ Long — không gian tiện ích",
      },
      {
        src: "/assets/showcase/travel/villa-flc-cover.jpg",
        position: "center center",
        alt: "Villa FLC Hạ Long — khu nghỉ dưỡng",
      },
      {
        src: "/assets/showcase/travel/villa-flc-hero.jpg",
        position: "center center",
        alt: "Villa FLC Hạ Long — tổng quan dự án",
      },
    ],
  },
};

export function getTravelImageSet(slug: string): TravelImageSet {
  return (
    travelImageSets[slug] ?? {
      heroImage: TRAVEL_IMAGE_FALLBACK,
      heroImagePosition: "center center",
      coverImage: TRAVEL_IMAGE_FALLBACK,
      coverImagePosition: "center center",
      gallery: [{ src: TRAVEL_IMAGE_FALLBACK, position: "center center" }],
    }
  );
}
