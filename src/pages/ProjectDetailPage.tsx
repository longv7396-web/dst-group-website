import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectAmenities } from "../components/travel/ProjectAmenities";
import { ProjectBreadcrumb } from "../components/travel/ProjectBreadcrumb";
import { MotionReveal } from "../components/common/MotionReveal";
import { ProjectCTA } from "../components/travel/ProjectCTA";
import { ProjectDetailNav } from "../components/travel/ProjectDetailNav";
import { ProjectHero } from "../components/travel/ProjectHero";
import { ProjectHighlights } from "../components/travel/ProjectHighlights";
import { ProjectOverview } from "../components/travel/ProjectOverview";
import { ProjectPriceGrid } from "../components/travel/ProjectPriceGrid";
import { ProjectQuickInfo } from "../components/travel/ProjectQuickInfo";
import { ProjectUnitTable } from "../components/travel/ProjectUnitTable";
import { TravelGallery } from "../components/travel/TravelGallery";
import { company } from "../data/company";
import { getTravelProjectBySlug, TRAVEL_PRICE_SECTION_LEAD, TRAVEL_REFERENCE_PRICE_LABEL } from "../data/travelProjects";
import { assetPath } from "../lib/assetPath";
import { getStaggerDelay } from "../lib/motion";
import { usePageSeo } from "../lib/seo";

function TravelNotFound() {
  return (
    <div className="travel-page flex min-h-screen flex-col items-center justify-center bg-[#050707] px-4 text-center text-white">
      <p className="section-eyebrow">404</p>
      <h1 className="mt-4 text-3xl font-black">Không tìm thấy dự án</h1>
      <p className="mt-4 max-w-md text-white/68">Đường dẫn không tồn tại hoặc dự án đã được cập nhật.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/projects" className="premium-button">
          Xem danh sách dự án du lịch
        </Link>
        <Link to="/" className="ghost-button">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}

function TravelDetailHeader() {
  return (
    <header className="dst-site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-fit items-center gap-3" aria-label="DST Group homepage">
          <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-7 w-auto sm:h-9" />
        </Link>
        <Link
          to="/projects"
          className="dst-detail-nav-link ml-auto hidden rounded-full border border-white/15 px-3 py-2 text-sm font-bold text-white/70 transition hover:border-dst-gold/45 hover:text-dst-gold sm:inline-flex sm:px-4"
        >
          Tất cả dự án
        </Link>
        <a
          href="#travel-contact"
          className="rounded-full border border-dst-gold/50 px-3 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink sm:px-4"
        >
          Liên hệ
        </a>
      </nav>
    </header>
  );
}

const DETAIL_FAQ_ITEMS = [
  {
    q: "Vì sao giá trên web chỉ là giá tiêu biểu?",
    a: "Giá thay đổi theo ngày, số khách và mã căn còn trống. Cộng tác viên DST sẽ gửi mức giá đúng theo lịch bạn cần.",
  },
  {
    q: "Bao lâu nhận được báo giá chi tiết?",
    a: "Thông thường 5-15 phút trong giờ làm việc sau khi bạn gửi ngày đi, số khách và loại căn mong muốn.",
  },
  {
    q: "Có gửi thêm ảnh thực tế từng căn không?",
    a: "Có. Sau khi chốt nhu cầu, cộng tác viên DST gửi ảnh thực tế, tiện ích và tình trạng trống của các mã phù hợp.",
  },
] as const;

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getTravelProjectBySlug(slug) : undefined;
  const reduceMotion = useReducedMotion();
  usePageSeo({
    title: project?.seoTitle ?? "Dự án du lịch DST",
    description:
      project?.seoDescription ??
      "Trang chi tiết sản phẩm du lịch DST: tổng quan dự án, điểm nổi bật, giá tham khảo và tư vấn lịch trống theo ngày.",
    canonical: project ? `${company.websiteUrl.value}/#/projects/${project.slug}` : `${company.websiteUrl.value}/#/projects`,
    ogTitle: project?.seoTitle ?? `${project?.name ?? "Dự án du lịch"} | DST Group`,
    ogDescription: project?.seoDescription ?? project?.shortDescription,
    ogImage: project?.heroImage ?? "/assets/showcase/travel/holiday-hero.jpg",
  });

  useEffect(() => {
    if (!project) return;

    const faqSchemaNode = document.createElement("script");
    faqSchemaNode.type = "application/ld+json";
    faqSchemaNode.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: DETAIL_FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
    document.head.appendChild(faqSchemaNode);

    return () => {
      if (faqSchemaNode.parentNode) faqSchemaNode.parentNode.removeChild(faqSchemaNode);
    };
  }, [project]);

  if (!project) {
    return <TravelNotFound />;
  }

  const contactHref = company.zalo.value;
  const sheetHref = project.showSheetLink ? project.sheetUrl : undefined;

  return (
    <div className="travel-page travel-page--detail bg-[#050707] text-white">
      <div className="travel-detail-orb travel-detail-orb--gold" aria-hidden="true" />
      <div className="travel-detail-orb travel-detail-orb--cyan" aria-hidden="true" />

      <TravelDetailHeader />

      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <ProjectBreadcrumb projectName={project.name} />
          <Link to="/projects" className="travel-back-link mt-4">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Quay lại danh sách dự án
          </Link>
        </div>

        <ProjectHero project={project} contactHref={contactHref} sheetHref={sheetHref} />

        <ProjectDetailNav />

        <ProjectQuickInfo project={project} />

        <section className="travel-section travel-detail-section" id="travel-overview">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProjectOverview project={project} />
          </div>
        </section>

        <section className="travel-section travel-section-muted travel-detail-section" id="travel-highlights">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading">
              <p className="section-eyebrow">Điểm nổi bật</p>
              <h2 className="travel-section-title">Vì sao chọn {project.name}?</h2>
              <p className="travel-section-lead">{project.shortDescription}</p>
            </MotionReveal>
            <ProjectHighlights highlights={project.highlights} />
          </div>
        </section>

        {project.unitTypeGroups?.length ? (
          <section className="travel-section travel-detail-section" id="travel-unit-types">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <MotionReveal className="travel-section-heading">
                <p className="section-eyebrow">Loại căn</p>
                <h2 className="travel-section-title">Các loại căn tiêu biểu</h2>
              </MotionReveal>
              <div className="travel-type-grid">
                {project.unitTypeGroups.map((group, index) => (
                  <motion.article
                    key={group.name}
                    className="travel-type-card travel-type-card--premium motion-card-hover"
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="travel-section travel-section-muted travel-detail-section" id="travel-pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading travel-section-heading--spaced">
              <p className="section-eyebrow">{TRAVEL_REFERENCE_PRICE_LABEL}</p>
              <h2 className="travel-section-title">Bảng giá tham khảo</h2>
              <p className="travel-section-lead">{TRAVEL_PRICE_SECTION_LEAD}</p>
            </MotionReveal>
            <ProjectPriceGrid project={project} contactHref={contactHref} />
          </div>
        </section>

        <section className="travel-section travel-detail-section" id="travel-units">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading">
              <p className="section-eyebrow">Căn tiêu biểu</p>
              <h2 className="travel-section-title">Mã căn tiêu biểu</h2>
              <p className="travel-section-lead">
                Chỉ hiển thị vài mã đại diện để bạn xem nhanh. Liên hệ cộng tác viên DST để nhận danh sách đầy đủ.
              </p>
            </MotionReveal>
            <ProjectUnitTable project={project} />
          </div>
        </section>

        <section className="travel-section travel-section-muted travel-detail-section" id="travel-amenities">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading">
              <p className="section-eyebrow">Tiện ích</p>
              <h2 className="travel-section-title">Tiện ích theo từng căn</h2>
              <p className="travel-section-lead">Tiện ích có thể khác nhau tùy mã căn — liên hệ DST để được gửi thông tin chi tiết.</p>
            </MotionReveal>
            <ProjectAmenities amenities={project.amenities} />
          </div>
        </section>

        {project.gallery.length > 1 ? (
          <section className="travel-section travel-detail-section" id="travel-gallery">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <MotionReveal className="travel-section-heading">
                <p className="section-eyebrow">Hình ảnh</p>
                <h2 className="travel-section-title">Không gian tham khảo</h2>
              </MotionReveal>
              <TravelGallery images={project.gallery} projectName={project.name} />
            </div>
          </section>
        ) : null}

        <section className="travel-section travel-section-muted travel-detail-section" id="travel-process">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading">
              <p className="section-eyebrow">Quy trình</p>
              <h2 className="travel-section-title">Quy trình tư vấn / đặt phòng</h2>
            </MotionReveal>
            <ol className="travel-process-list travel-process-list--premium">
              {project.processSteps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: getStaggerDelay(index), ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className="travel-section travel-detail-section" id="travel-faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal className="travel-section-heading">
              <p className="section-eyebrow">FAQ nhanh</p>
              <h2 className="travel-section-title">Câu hỏi thường gặp trước khi đặt</h2>
            </MotionReveal>
            <div className="travel-faq-grid">
              {DETAIL_FAQ_ITEMS.map((item) => (
                <article key={item.q} className="travel-faq-card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectCTA contactHref={contactHref} contactNote={project.contactNote} />
      </div>

      <div className="mobile-sticky-cta sm:hidden">
        <a href={contactHref} className="premium-button">
          Liên hệ cộng tác viên
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={`tel:${company.phone.value.replace(/\s/g, "")}`} className="ghost-button">
          Gọi nhanh
          <Phone className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
