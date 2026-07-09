import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpViewport, getStaggerDelay, staggerStep, viewportOnce } from "../../lib/motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "li" | "section";
};

export function MotionReveal({ children, className = "", delay = 0, as = "div" }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={`motion-fade-up ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpViewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function MotionSection({ children, className = "", id }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={`motion-section ${className}`.trim()}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`motion-section ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

export { staggerStep, getStaggerDelay };
