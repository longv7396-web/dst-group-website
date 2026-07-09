import { ArrowLeft, CalendarDays, MapPin, MessageCircle, Tag, Users } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { TravelProject } from "../../data/travelProjects";
import { TRAVEL_REFERENCE_PRICE_LABEL } from "../../data/travelProjects";
import { heroStaggerContainer, heroStaggerItem, MOTION_DURATION, MOTION_EASE } from "../../lib/motion";
import { TravelImage } from "./TravelImage";

type ProjectHeroProps = {
  project: TravelProject;
  contactHref: string;
};

export function ProjectHero({ project, contactHref }: ProjectHeroProps) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 32]);

  const priceHint = project.priceSummary[0];
  const priceLabel = priceHint?.weekday ?? priceHint?.weekend ?? priceHint?.friday ?? "Liên hệ DST để kiểm tra giá";
  const fitLabel = project.type.toLowerCase().includes("villa")
    ? "Gia đình, nhóm bạn, team building"
    : "Gia đình, cặp đôi, nhóm nhỏ, công tác";

  const stats = [
    { label: "Loại hình", value: project.type, icon: Tag },
    { label: "Khu vực", value: project.location, icon: MapPin },
    { label: "Phù hợp", value: fitLabel, icon: Users },
    { label: TRAVEL_REFERENCE_PRICE_LABEL, value: priceLabel, icon: CalendarDays },
  ] as const;

  return (
    <section ref={heroRef} className="travel-hero travel-hero--premium relative min-h-[52svh] overflow-hidden bg-[#060504] text-white sm:min-h-[56svh] lg:min-h-[58svh]">
      <div className="travel-hero-media" aria-hidden="true">
        <motion.div
          className="travel-hero-parallax"
          style={{ y: imageY }}
          initial={reduceMotion ? false : { scale: 1.02 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: MOTION_DURATION.heroImage, ease: MOTION_EASE }}
        >
          <TravelImage
            src={project.heroImage}
            alt={`Ảnh nền ${project.name}`}
            objectPosition={project.heroImagePosition ?? "center"}
            className="travel-hero-bg"
            loading="eager"
            fetchPriority="high"
            decorative
          />
        </motion.div>
      </div>
      <div className="travel-hero-overlay travel-hero-overlay--premium" aria-hidden="true" />
      <div className="travel-hero-glow" aria-hidden="true" />

      <div className="travel-hero-inner relative z-10 mx-auto grid min-h-[52svh] max-w-7xl items-end gap-8 px-4 py-20 sm:min-h-[56svh] sm:px-6 lg:min-h-[58svh] lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:pb-16 lg:pt-24">
        <motion.div
          className="travel-hero-copy"
          variants={reduceMotion ? undefined : heroStaggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          <motion.p className="section-eyebrow" variants={reduceMotion ? undefined : heroStaggerItem}>
            {project.type}
          </motion.p>
          <motion.h1 className="travel-hero-title mt-3 font-black text-white" variants={reduceMotion ? undefined : heroStaggerItem}>
            {project.heroTitle}
          </motion.h1>
          <motion.p className="travel-hero-location mt-3" variants={reduceMotion ? undefined : heroStaggerItem}>
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {project.location}
          </motion.p>
          <motion.p className="mt-4 max-w-2xl text-base leading-8 text-white/84 sm:text-lg" variants={reduceMotion ? undefined : heroStaggerItem}>
            {project.heroSubtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={reduceMotion ? undefined : heroStaggerItem}>
            <a href={contactHref} className="premium-button travel-hero-cta-primary">
              {project.ctaText}
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/projects" className="ghost-button travel-hero-cta-secondary">
              Quay lại danh sách
              <ArrowLeft className="h-4 w-4 motion-arrow" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="travel-hero-stats"
          aria-label="Thông tin nhanh dự án"
          variants={reduceMotion ? undefined : heroStaggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.article key={label} className="travel-hero-stat" variants={reduceMotion ? undefined : heroStaggerItem}>
              <p className="travel-hero-stat-label">
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {label}
              </p>
              <p className="travel-hero-stat-value">{value}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
