export const brokenAnimations = [
  "/assets/animations/barclub/barclub-event.lottie",
  "/assets/animations/stats/stat-finance-growth.lottie",
] as const;

type BrokenAnimation = (typeof brokenAnimations)[number];

export function isBrokenAnimation(src?: string): src is BrokenAnimation {
  return Boolean(src && brokenAnimations.includes(src as BrokenAnimation));
}
