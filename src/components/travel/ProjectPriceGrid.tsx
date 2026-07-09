import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { TravelPriceRow, TravelProject } from "../../data/travelProjects";
import { getStaggerDelay } from "../../lib/motion";

type ProjectPriceGridProps = {
  project: TravelProject;
  contactHref: string;
};

function bedroomBadge(label: string, project: TravelProject): string | null {
  const pnMatch = label.match(/(\d+)\s*PN/i);
  if (pnMatch) return `${pnMatch[1]} PN`;

  const matched = project.unitSamples.find(
    (unit) => unit.unitType?.toLowerCase() === label.toLowerCase() && unit.bedrooms,
  );
  if (matched?.bedrooms) return `${matched.bedrooms} PN`;

  return null;
}

function primaryPrice(row: TravelPriceRow): string | null {
  return row.weekday ?? row.friday ?? row.weekend ?? row.saturday ?? row.sunday ?? null;
}

function representativeRows(rows: TravelPriceRow[]): TravelPriceRow[] {
  return rows.slice(0, 3);
}

function PriceCard({
  row,
  contactHref,
  project,
  index,
}: {
  row: TravelPriceRow;
  contactHref: string;
  project: TravelProject;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const badge = bedroomBadge(row.label, project);
  const mainPrice = primaryPrice(row);

  return (
    <motion.article
      className="travel-price-card travel-price-card--premium"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="travel-price-card-top">
        <h3>{row.label}</h3>
        {badge ? <span className="travel-price-bedroom-badge">{badge}</span> : null}
      </div>

      <p className="travel-price-main">{mainPrice ?? "Liên hệ cộng tác viên để nhận giá cụ thể"}</p>

      <p className="travel-price-note">
        Mức giá tiêu biểu để tham khảo nhanh. Bảng giá đầy đủ theo ngày và từng mã căn chỉ cung cấp qua cộng tác viên DST.
      </p>

      <a href={contactHref} className="travel-price-card-cta">
        Liên hệ cộng tác viên
        <ArrowRight className="h-3.5 w-3.5 motion-arrow" aria-hidden="true" />
      </a>
    </motion.article>
  );
}

export function ProjectPriceGrid({ project, contactHref }: ProjectPriceGridProps) {
  const rows = representativeRows(project.priceSummary);

  return (
    <div className="travel-price-grid travel-price-grid--premium">
      {rows.map((row, index) => (
        <PriceCard key={row.label} row={row} contactHref={contactHref} project={project} index={index} />
      ))}
    </div>
  );
}
