import { motion, useReducedMotion } from "framer-motion";
import { getStaggerDelay } from "../../lib/motion";

type ProjectAmenitiesProps = {
  amenities: string[];
};

export function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="travel-amenity-grid">
      {amenities.map((item, index) => (
        <motion.li
          key={item}
          className="travel-amenity-chip"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.42, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="travel-amenity-dot" aria-hidden="true" />
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
