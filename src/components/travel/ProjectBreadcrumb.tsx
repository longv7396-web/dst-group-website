import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { MOTION_DURATION, MOTION_EASE } from "../../lib/motion";

type ProjectBreadcrumbProps = {
  projectName: string;
};

export function ProjectBreadcrumb({ projectName }: ProjectBreadcrumbProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="travel-breadcrumb"
      aria-label="Breadcrumb"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION.reveal, ease: MOTION_EASE }}
    >
      <Link to="/">Trang chủ</Link>
      <ChevronRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      <Link to="/projects">Dự án du lịch</Link>
      <ChevronRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      <span aria-current="page">{projectName}</span>
    </motion.nav>
  );
}
