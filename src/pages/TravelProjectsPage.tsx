import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/travel/ProjectCard";
import { company } from "../data/company";
import { travelProjects } from "../data/travelProjects";
import { heroStaggerContainer, heroStaggerItem, MOTION_EASE } from "../lib/motion";
import { assetPath } from "../lib/assetPath";
import { MotionReveal } from "../components/common/MotionReveal";

export default function TravelProjectsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="travel-page travel-page--list bg-[#050707] text-white">
      <div className="travel-detail-orb travel-detail-orb--gold" aria-hidden="true" />
      <header className="dst-site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-fit items-center gap-3" aria-label="DST Group homepage">
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-7 w-auto sm:h-9" />
          </Link>
          <Link
            to="/"
            className="ml-auto rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/70 transition hover:border-dst-gold/45 hover:text-dst-gold"
          >
            Trang chủ
          </Link>
          <a
            href="#travel-list-contact"
            className="rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink"
          >
            Tư vấn
          </a>
        </nav>
      </header>

      <section className="travel-list-hero relative overflow-hidden pt-24">
        <div className="travel-list-hero-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link to="/" className="travel-back-link">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Về trang chủ
          </Link>
          <motion.div
            variants={reduceMotion ? undefined : heroStaggerContainer}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
          >
            <motion.p className="section-eyebrow mt-8" variants={reduceMotion ? undefined : heroStaggerItem}>
              Sản phẩm du lịch
            </motion.p>
            <motion.h1 className="travel-list-title mt-4 font-black text-white" variants={reduceMotion ? undefined : heroStaggerItem}>
              Căn hộ & villa nghỉ dưỡng Hạ Long
            </motion.h1>
            <motion.p className="mt-5 max-w-3xl text-lg leading-8 text-white/72" variants={reduceMotion ? undefined : heroStaggerItem}>
              DST check lịch trống nhanh, gợi ý căn phù hợp nhóm của bạn và báo giá theo ngày lưu trú. Giá và tình trạng phòng có thể thay đổi — vui lòng liên hệ để xác nhận trước khi đặt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="travel-section motion-section pb-24" id="travel-list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="travel-project-grid">
            {travelProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MotionReveal as="section" className="travel-section travel-section-muted pb-24" delay={0.05}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8" id="travel-list-contact">
          <p className="section-eyebrow">Liên hệ</p>
          <h2 className="mt-3 text-3xl font-black text-white">Cần tư vấn nhanh?</h2>
          <p className="mt-4 text-base leading-8 text-white/68">
            Gửi ngày lưu trú, số khách và nhóm sản phẩm bạn quan tâm — DST sẽ phản hồi lịch trống và giá cập nhật.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={company.zalo.value} target="_blank" rel="noreferrer" className="premium-button">
              Nhắn Zalo DST
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={`tel:${company.phone.value.replace(/\s/g, "")}`} className="ghost-button">
              Gọi {company.phone.value}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </MotionReveal>

      <div className="mobile-sticky-cta sm:hidden">
        <a href={company.zalo.value} target="_blank" rel="noreferrer" className="premium-button">
          Liên hệ cộng tác viên
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={`tel:${company.phone.value.replace(/\s/g, "")}`} className="ghost-button">
          Gọi nhanh
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
