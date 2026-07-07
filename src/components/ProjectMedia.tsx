import { assetPath } from "../lib/assetPath";
import type { ProjectImageDisplay } from "../data/projects";

type ProjectMediaProps = {
  image: string;
  alt: string;
  display: ProjectImageDisplay;
  className?: string;
  variant?: "overlay" | "stacked";
};

export function ProjectMedia({
  image,
  alt,
  display,
  className = "",
  variant = "overlay",
}: ProjectMediaProps) {
  return (
    <div
      className={[
        "project-media",
        `project-media--${display}`,
        variant === "stacked" ? "project-media--stacked" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img src={assetPath(image)} alt={alt} className="project-media-photo" loading="lazy" decoding="async" />
      <div className="project-media-shade" aria-hidden="true" />
    </div>
  );
}
