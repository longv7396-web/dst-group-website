import { CalendarCheck, ImageIcon, MessageCircle, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { TravelProject } from "../../data/travelProjects";
import { fadeUpViewport, viewportOnce } from "../../lib/motion";

const SUPPORT_ITEMS = [
  { icon: CalendarCheck, text: "Kiểm tra lịch trống theo ngày check-in / check-out" },
  { icon: Users, text: "Gợi ý căn theo số khách và mục đích chuyến đi" },
  { icon: MessageCircle, text: "Xác nhận giá theo ngày cụ thể trước khi đặt" },
  { icon: ImageIcon, text: "Gửi ảnh thực tế và thông tin căn phù hợp" },
] as const;

type ProjectOverviewProps = {
  project: TravelProject;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="travel-overview-grid">
      <motion.div
        className="travel-overview-copy"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
        variants={fadeUpViewport}
      >
        <p className="section-eyebrow">Tổng quan</p>
        <h2 className="travel-section-title travel-section-title--left">{project.name}</h2>
        <p className="travel-section-lead travel-section-lead--left">{project.overview}</p>
        <p className="travel-overview-location">{project.location}</p>
        <div className="travel-overview-chips">
          <span>{project.type}</span>
          <span>Quỹ căn DST</span>
          <span>Tư vấn theo ngày</span>
        </div>
      </motion.div>

      <motion.aside
        className="travel-overview-support"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
        variants={fadeUpViewport}
        transition={{ delay: 0.08 }}
      >
        <p className="travel-overview-support-title">DST hỗ trợ gì?</p>
        <ul className="travel-overview-support-list">
          {SUPPORT_ITEMS.map(({ icon: Icon, text }) => (
            <li key={text}>
              <span className="travel-overview-support-icon" aria-hidden="true">
                <Icon className="h-4 w-4" />
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.aside>
    </div>
  );
}
