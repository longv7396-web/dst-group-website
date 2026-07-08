import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clapperboard,
  Coffee,
  Home,
  Hotel,
  Image,
  Laptop,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Utensils,
  Zap,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedLottie } from "../components/AnimatedLottie";
import { MotionIcon } from "../components/MotionIcon";
import { ProjectMedia } from "../components/ProjectMedia";
import { animations } from "../data/animationMap";
import {
  hospitalityGoalVisuals,
  hospitalityPackageVisuals,
  hospitalityProblemVisuals,
  hospitalityProcessVisuals,
  hospitalityServiceVisuals,
  pickVisual,
} from "../data/visualMap";
import {
  hospitalityContact,
  hospitalityGoals,
  hospitalityHero,
  hospitalityPackages,
  hospitalityProblems,
  hospitalityProcess,
  hospitalityProjects,
  hospitalityServiceCards,
} from "../data/hospitalityData";
import { assetPath } from "../lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

function useHospitalityMotion() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(root.querySelectorAll<HTMLElement>("[data-hospitality-reveal]"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".hospitality-section");
      const reveals = gsap.utils.toArray<HTMLElement>(".hospitality-reveal");
      const cards = gsap.utils.toArray<HTMLElement>(".hospitality-card");

      gsap.set(sections, { autoAlpha: 0, y: 48, scale: 0.975 });
      gsap.set(reveals, { autoAlpha: 0, y: 26 });
      gsap.set(cards, { autoAlpha: 0, y: 38, scale: 0.975 });

      ScrollTrigger.batch(sections, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      ScrollTrigger.batch(reveals, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        batchMax: 4,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      gsap.to(".hospitality-hero-content", {
        y: -62,
        autoAlpha: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hospitality-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".hospitality-video", {
        scale: 1.06,
        yPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".hospitality-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, root);

    return () => {
      ctx.revert();
      root.classList.remove("motion-ready");
    };
  }, []);

  return rootRef;
}

function HospitalityHeader() {
  const nav = [
    ["Bài toán", "#hospitality-problems"],
    ["Dịch vụ", "#hospitality-solutions"],
    ["Dự án", "#hospitality-projects"],
    ["Mục tiêu", "#hospitality-goals"],
    ["Liên hệ", "#hospitality-contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060606]/74 text-white shadow-[0_18px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-fit items-center gap-3" aria-label="DST Group homepage">
          <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-8 w-auto" />
        </Link>
        <div className="ml-auto hidden items-center gap-1 text-sm font-semibold text-white/70 lg:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <Link
          to="/"
          className="ml-auto hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/70 transition hover:border-dst-gold/45 hover:text-dst-gold lg:inline-flex"
        >
          Trang chủ
        </Link>
        <a
          href="#hospitality-contact"
          className="rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink"
        >
          Tư vấn
        </a>
      </nav>
    </header>
  );
}

function HospitalityHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="hospitality-reveal mx-auto mb-7 max-w-3xl text-center" data-hospitality-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="hospitality-section-title mt-3 text-white">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-white/68">{children}</p> : null}
    </div>
  );
}

function HospitalityHero() {
  const [videoSrc, setVideoSrc] = useState(hospitalityHero.video);
  const isUsingFallback = videoSrc === hospitalityHero.fallbackVideo;

  return (
    <section className="hospitality-hero relative min-h-[78svh] overflow-hidden bg-[#060504] text-white">
      <video
        className="hospitality-video"
        src={assetPath(videoSrc)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath(hospitalityHero.poster)}
        onError={() => {
          if (!isUsingFallback) {
            setVideoSrc(hospitalityHero.fallbackVideo);
          }
        }}
        aria-hidden="true"
      />
      <div className="hospitality-hero-fallback" aria-hidden="true" />
      <div className="hospitality-overlay" aria-hidden="true" />
      <div className="hospitality-warm-glow" aria-hidden="true" />
      <div className="hospitality-bottom-gradient" aria-hidden="true" />

      <div className="subpage-hero-shell relative z-10 mx-auto grid min-h-[78svh] max-w-7xl items-center gap-8 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.55fr] lg:px-8">
        <div className="hospitality-hero-content max-w-4xl">
          <p className="section-eyebrow">{hospitalityHero.eyebrow}</p>
          <h1 className="hospitality-hero-title mt-5 font-black text-white">{hospitalityHero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">{hospitalityHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#hospitality-solutions" className="premium-button">
              Xem hạng mục dịch vụ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#hospitality-contact" className="ghost-button">
              Nhận tư vấn truyền thông
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Website / SEO", "Nội dung fanpage", "Video ngắn"].map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-black text-white/78 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
        <AnimatedLottie
          src={animations.hero.hotel}
          className="subpage-hero-lottie hidden lg:block"
          ariaLabel="Đặt lịch nhà hàng khách sạn"
          autoplay
          loop
          playWhenVisible={false}
          fallback={<MotionIcon name="hospitality" size="8rem" title="Nhà hàng khách sạn" />}
        />
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="hospitality-problems" className="hospitality-section bg-[#050707] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Bài toán thường gặp" title="Khách thường xem hình ảnh trước khi liên hệ">
          Khách có thể lướt qua rất nhanh nếu hình ảnh chưa đủ rõ, bài viết chưa hấp dẫn hoặc thông tin liên hệ khó tìm.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hospitalityProblems.map((problem, index) => {
            const iconName = pickVisual(hospitalityProblemVisuals, index, "hospitality");
            return (
              <article key={problem.title} className="hospitality-card hospitality-problem-card" data-hospitality-reveal>
                <span className="motion-icon-badge hospitality-motion-icon">
                  <MotionIcon name={iconName} variant="warm" title={problem.title} />
                </span>
                <h3 className="mt-6 text-xl font-black leading-tight text-white">{problem.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{problem.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="hospitality-solutions" className="hospitality-section bg-[#080706] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Dịch vụ dành cho Nhà hàng / Khách sạn" title="Hạng mục DST có thể triển khai">
          Fanpage, video ngắn, thiết kế, website và quảng cáo — tư vấn theo từng mô hình nhà hàng, cafe, khách sạn hoặc homestay.
        </HospitalityHeading>
        <div className="hospitality-card-grid">
          {hospitalityServiceCards.map((service, index) => {
            const iconName = pickVisual(hospitalityServiceVisuals, index, "hospitality");
            return (
              <article key={service.title} className="hospitality-card hospitality-service-card group" data-hospitality-reveal>
                <div className="hospitality-icon">
                  <MotionIcon
                    name={iconName}
                    size="clamp(4.3rem, 5.4vw, 5.55rem)"
                    variant="warm"
                    title={service.title}
                  />
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{service.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-white/68">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="hospitality-projects" className="hospitality-section bg-[#050707] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Dự án đã thực hiện" title="Một số hình ảnh/dự án DST đã triển khai">
          Dự án nào có hạng mục rõ sẽ ghi đúng theo tài liệu. Dự án thiếu chi tiết sẽ ghi trung tính.
        </HospitalityHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hospitalityProjects.map((project) => (
            <article key={project.name} className={`hospitality-card hospitality-project-card group hospitality-project-card--${project.imageDisplay}`} data-hospitality-reveal>
              <div className="hospitality-project-media">
                <ProjectMedia
                  image={project.image}
                  alt={`Ảnh dự án ${project.name}`}
                  display={project.imageDisplay}
                  variant={project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? "stacked" : "overlay"}
                  className={project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? "" : "absolute inset-0"}
                />
                {project.imageDisplay !== "pdf-slide" && project.imageDisplay !== "compact" ? (
                  <>
                    <div className="hospitality-project-shade" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-white">{project.name}</h3>
                    </div>
                  </>
                ) : null}
              </div>
              {project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? (
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">{project.name}</h3>
                </div>
              ) : null}
              <div className="p-5">
                <p className="text-sm leading-7 text-white/66">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[...project.tags, ...project.services.slice(0, 2)].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/68">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#hospitality-contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-dst-gold transition hover:text-dst-cyan">
                  Xem hướng triển khai
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section id="hospitality-goals" className="hospitality-section bg-[#080706] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Tư vấn theo nhu cầu" title="Mỗi mô hình cần hạng mục khác nhau">
          Nhà hàng cần ảnh món. Khách sạn cần phòng nghỉ thuyết phục. Homestay cần không gian ấm. DST tư vấn theo tình trạng thực tế.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {hospitalityGoals.map((goal, index) => {
            const iconName = pickVisual(hospitalityGoalVisuals, index, "hospitality");
            return (
              <article key={goal.title} className="hospitality-card hospitality-goal-card" data-hospitality-reveal>
                <span className="motion-icon-badge hospitality-motion-icon">
                  <MotionIcon name={iconName} variant="warm" title={goal.title} />
                </span>
                <h3 className="mt-6 text-lg font-black leading-tight text-white">{goal.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{goal.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="hospitality-process" className="hospitality-section bg-[#050707] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Quy trình triển khai" title="Lộ trình hợp tác minh bạch & bài bản">
          DST nghiên cứu sâu mô hình, thống nhất danh mục và triển khai chuẩn xác theo mục tiêu tăng trưởng của quán.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hospitalityProcess.map((step, index) => (
            <article key={step.step} className="hospitality-card hospitality-process-card" data-hospitality-reveal>
              <span className="motion-icon-badge hospitality-motion-icon">
                {(() => {
                  const iconName = pickVisual(hospitalityProcessVisuals, index, "process");
                  return <MotionIcon name={iconName} variant="warm" title={step.title} />;
                })()}
              </span>
              <span className="mt-5 block text-sm font-black text-dst-gold">{step.step}</span>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="hospitality-section bg-[#080706] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Chi phí và hạng mục" title="Báo giá theo phạm vi triển khai">
          Bảng giá quy chuẩn minh bạch theo tài liệu. Các gói linh hoạt sẽ được tư vấn và thiết kế tối ưu theo quy mô thực tế của doanh nghiệp.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hospitalityPackages.map((item, index) => (
            <article key={item.title} className="hospitality-card hospitality-package-card" data-hospitality-reveal>
              <span className="motion-icon-badge hospitality-motion-icon">
                {(() => {
                  const iconName = pickVisual(hospitalityPackageVisuals, index, "hospitality");
                  return <MotionIcon name={iconName} variant="warm" title={item.title} />;
                })()}
              </span>
              <p className="text-xs font-black uppercase text-dst-gold">Nhà hàng / Cafe / Khách sạn</p>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">{item.title}</h3>
              <p className="mt-5 text-2xl font-black text-white">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalContactSection() {
  const phoneHref = hospitalityContact.phone.replace(/\s/g, "");

  return (
    <section id="hospitality-contact" className="hospitality-section relative overflow-hidden bg-[#050707] px-4 py-24 text-white sm:px-6 lg:px-8" data-hospitality-reveal>
      <div className="hospitality-cta-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-6 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.48)] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:gap-8 lg:p-10">
        <div>
          <p className="section-eyebrow">Đăng ký tư vấn</p>
          <h2 className="hospitality-section-title mt-4 text-white">Sẵn sàng bứt phá doanh thu cho nhà hàng, cafe hay khách sạn của bạn?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Đội ngũ chuyên gia DST Group sẵn sàng lắng nghe mục tiêu, phân tích mô hình và đề xuất giải pháp truyền thông tối ưu nhất cho bạn.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${phoneHref}`} className="premium-button">
              Nhận tư vấn phù hợp
              <MotionIcon name="contact" size="1.45rem" variant="warm" title="Liên hệ" />
            </a>
            <Link to="/" className="ghost-button">
              Quay về trang chủ
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <a href={`tel:${phoneHref}`} className="hospitality-contact-tile">
            <MotionIcon name="contact" size="1.65rem" variant="warm" title="Điện thoại" />
            <span>{hospitalityContact.phone}</span>
          </a>
          <a href={`mailto:${hospitalityContact.email}`} className="hospitality-contact-tile">
            <MotionIcon name="social" size="1.65rem" variant="warm" title="Email" />
            <span>{hospitalityContact.email}</span>
          </a>
          <a href={hospitalityContact.facebook} target="_blank" rel="noopener noreferrer" className="hospitality-contact-tile">
            <MotionIcon name="social" size="1.65rem" variant="warm" title="Fanpage" />
            <span>Fanpage DST Group</span>
          </a>
          <a href={hospitalityContact.zalo} target="_blank" rel="noopener noreferrer" className="hospitality-contact-tile">
            <MotionIcon name="booking" size="1.65rem" variant="warm" title="Zalo/Hotline" />
            <span>Zalo/Hotline</span>
          </a>
          <a href={hospitalityContact.websiteUrl} target="_blank" rel="noopener noreferrer" className="hospitality-contact-tile">
            <MotionIcon name="website" size="1.65rem" variant="warm" title="Website" />
            <span>{hospitalityContact.website}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HospitalityPage() {
  const rootRef = useHospitalityMotion();

  return (
    <div ref={rootRef} className="hospitality-page bg-[#050707] text-white">
      <HospitalityHeader />
      <main>
        <HospitalityHero />
        <ProblemsSection />
        <ServicesSection />
        <PortfolioSection />
        <GoalsSection />
        <ProcessSection />
        <PackagesSection />
        <FinalContactSection />
      </main>
      <footer className="border-t border-white/10 bg-[#050707] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-8 w-auto" />
            <span className="font-black">Nhà hàng / Cafe / Khách sạn</span>
          </Link>
          <div className="flex flex-wrap gap-4">
            <a href="#hospitality-solutions" className="hover:text-dst-gold">Dịch vụ</a>
            <a href="#hospitality-projects" className="hover:text-dst-gold">Dự án</a>
            <Link to="/bar-club" className="hover:text-dst-gold">Bar/Club</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
