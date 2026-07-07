import type { MotionIconName } from "../components/MotionIcon";

/** MotionIcon mapping for Bar/Club service cards (6 distinct visuals). */
export const barClubServiceVisuals = [
  "poster",
  "content",
  "video",
  "ads",
  "calendar",
  "website",
] as const satisfies readonly MotionIconName[];

/** MotionIcon mapping for hospitality service cards. */
export const hospitalityServiceVisuals = [
  "content",
  "video",
  "design",
  "website",
] as const satisfies readonly MotionIconName[];

/** MotionIcon mapping for services page groups. */
export const serviceGroupVisuals = [
  "website",
  "content",
  "media",
  "design",
  "ads",
  "calendar",
] as const satisfies readonly MotionIconName[];

export const barClubProblemVisuals = ["calendar", "poster", "media", "studio"] as const satisfies readonly MotionIconName[];

export const barClubJourneyVisuals = ["poster", "studio", "video"] as const satisfies readonly MotionIconName[];

export const barClubTimelineVisuals = [
  "process-consult",
  "poster",
  "video",
  "inbox",
  "studio",
  "media",
  "process-report",
] as const satisfies readonly MotionIconName[];

export const barClubDeliverableVisuals = [
  "poster",
  "content",
  "calendar",
  "video",
  "content",
  "ads",
  "video",
  "media",
  "studio",
  "inbox",
] as const satisfies readonly MotionIconName[];

export const barClubPackageVisuals = ["ads", "calendar", "studio"] as const satisfies readonly MotionIconName[];

export const barClubPricingVisuals = ["content", "video", "poster", "ads", "website"] as const satisfies readonly MotionIconName[];

export const hospitalityProblemVisuals = ["hospitality", "content", "video", "website"] as const satisfies readonly MotionIconName[];

export const hospitalityGoalVisuals = ["branding", "inbox", "calendar", "poster", "design"] as const satisfies readonly MotionIconName[];

export const hospitalityProcessVisuals = ["process-consult", "process-plan", "process-launch", "process-report"] as const satisfies readonly MotionIconName[];

export const hospitalityPackageVisuals = [
  "process-consult",
  "content",
  "video",
  "calendar",
  "poster",
  "design",
  "ads",
  "website",
  "inbox",
  "analytics",
] as const satisfies readonly MotionIconName[];

export const servicesOverviewVisuals = ["branding", "target", "media"] as const satisfies readonly MotionIconName[];

export const servicesProcessVisuals = [
  "process-consult",
  "target",
  "process-plan",
  "process-launch",
  "process-report",
] as const satisfies readonly MotionIconName[];

export const servicesWhyVisuals = ["branding", "target", "website", "design", "analytics"] as const satisfies readonly MotionIconName[];

export const homeFeaturedServiceVisuals = [
  "website",
  "content",
  "video",
  "design",
  "ads",
  "calendar",
] as const satisfies readonly MotionIconName[];

export const homeProcessVisuals = [
  "process-consult",
  "process-plan",
  "process-launch",
  "process-report",
] as const satisfies readonly MotionIconName[];

export const homeWhyVisuals = ["branding", "hospitality", "website", "target"] as const satisfies readonly MotionIconName[];

export const homePricingVisuals = [
  "ads",
  "video",
  "design",
  "analytics",
  "website",
  "branding",
  "calendar",
] as const satisfies readonly MotionIconName[];

const pricingCategoryIconMap: Record<string, MotionIconName> = {
  "Quản trị truyền thông": "content",
  "Thiết kế & nội dung": "video",
  "Thiết kế đồ họa": "design",
  "Quảng cáo online": "ads",
  "Website / SEO": "website",
  "Bar/Club": "studio",
};

export function getPricingCategoryIcon(category: string, index: number): MotionIconName {
  return pricingCategoryIconMap[category] ?? homePricingVisuals[index % homePricingVisuals.length] ?? "branding";
}

export function pickVisual<T extends readonly MotionIconName[]>(visuals: T, index: number, fallback: MotionIconName = "branding"): MotionIconName {
  return visuals[index] ?? fallback;
}
