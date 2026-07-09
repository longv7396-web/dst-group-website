import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { TravelProject } from "../../data/travelProjects";
import { fadeUpViewport, getStaggerDelay, viewportOnce } from "../../lib/motion";
import { TravelImage } from "./TravelImage";

type ProjectCardProps = {
  project: TravelProject;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const eager = index < 2;
  const highlights = project.highlights.slice(0, 3);

  const card = (
    <Link
      to={`/projects/${project.slug}`}
      className="travel-project-card group motion-card-hover"
      aria-label={`Xem chi tiết ${project.name}`}
    >
      <div className="travel-project-card-media">
        <div className="travel-project-card-media-inner motion-image-zoom">
          <TravelImage
            src={project.coverImage}
            alt={`Ảnh bìa ${project.name}`}
            objectPosition={project.coverImagePosition ?? "center"}
            className="travel-project-card-image"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
        <span className="travel-project-card-badge">{project.type}</span>
        <div className="travel-project-card-shade motion-card-shade" aria-hidden="true" />
        <span className="travel-project-card-cta">
          Xem chi tiết
          <ArrowRight className="h-4 w-4 motion-arrow" aria-hidden="true" />
        </span>
      </div>
      <div className="travel-project-card-body">
        <h3 className="travel-project-card-title">{project.name}</h3>
        <p className="travel-project-card-location">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {project.location}
        </p>
        <p className="travel-project-card-desc">{project.shortDescription}</p>
        {highlights.length > 0 ? (
          <ul className="travel-project-card-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );

  if (reduceMotion) return card;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpViewport}
      transition={{ delay: getStaggerDelay(index) }}
    >
      {card}
    </motion.div>
  );
}
