import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getStaggerDelay } from "../../lib/motion";

type ProjectHighlightsProps = {
  highlights: string[];
};

export function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="travel-highlight-grid travel-highlight-grid--premium">
      {highlights.map((item, index) => (
        <motion.li
          key={item}
          className="travel-highlight-item travel-highlight-item--premium"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="travel-highlight-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="travel-highlight-icon" aria-hidden="true">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="travel-highlight-text">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
