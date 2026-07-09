export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  hover: 0.22,
  reveal: 0.65,
  hero: 0.8,
  heroImage: 1.1,
} as const;

export const heroStaggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const heroStaggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.hero, ease: MOTION_EASE },
  },
};

export const fadeUpViewport = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.reveal, ease: MOTION_EASE },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-60px" as const,
};

export const staggerStep = 0.05;

export const staggerMaxDelay = 0.28;

export function getStaggerDelay(index: number): number {
  return Math.min(index * staggerStep, staggerMaxDelay);
}
