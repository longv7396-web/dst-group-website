import { CalendarDays, MapPin, Sparkles, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { TravelProject } from "../../data/travelProjects";
import { TRAVEL_REFERENCE_PRICE_LABEL } from "../../data/travelProjects";
import { getStaggerDelay } from "../../lib/motion";

type ProjectQuickInfoProps = {
  project: TravelProject;
};

const CARD_META = [
  { key: "type", label: "Loại hình", icon: Tag },
  { key: "location", label: "Khu vực", icon: MapPin },
  { key: "fit", label: "Phù hợp", icon: Sparkles },
  { key: "price", label: TRAVEL_REFERENCE_PRICE_LABEL, icon: CalendarDays },
] as const;

export function ProjectQuickInfo({ project }: ProjectQuickInfoProps) {
  const reduceMotion = useReducedMotion();
  const priceHint = project.priceSummary[0];
  const priceLabel = priceHint?.weekday ?? priceHint?.weekend ?? priceHint?.friday ?? "Liên hệ DST để kiểm tra giá";
  const fitLabel = project.type.toLowerCase().includes("villa")
    ? "Gia đình, nhóm bạn, team building"
    : "Gia đình, cặp đôi, nhóm nhỏ, công tác";

  const values: Record<(typeof CARD_META)[number]["key"], string> = {
    type: project.type,
    location: project.location,
    fit: fitLabel,
    price: priceLabel,
  };

  return (
    <section className="travel-quick-info travel-quick-info--premium" aria-label="Thông tin nhanh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="travel-quick-info-grid">
          {CARD_META.map(({ key, label, icon: Icon }, index) => (
            <motion.article
              key={key}
              className={`travel-info-card travel-info-card--glass${key === "price" ? " travel-info-card--accent" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="travel-info-icon" aria-hidden="true">
                <Icon className="h-4 w-4" />
              </span>
              <p className="travel-info-label">{label}</p>
              <p className="travel-info-value">{values[key]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
