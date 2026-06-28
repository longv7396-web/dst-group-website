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

const serviceIcons = [Megaphone, Clapperboard, Image, Laptop];
const problemIcons = [Utensils, Coffee, Hotel, Zap];
const goalIcons = [Sparkles, CalendarCheck, Megaphone, BadgeCheck, Search];

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
    <div className="hospitality-reveal mx-auto mb-12 max-w-3xl text-center" data-hospitality-reveal>
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
    <section className="hospitality-hero relative min-h-[100svh] overflow-hidden bg-[#060504] text-white">
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="hospitality-hero-content max-w-4xl">
          <p className="section-eyebrow">{hospitalityHero.eyebrow}</p>
          <h1 className="hospitality-hero-title mt-5 font-black text-white">{hospitalityHero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">{hospitalityHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#hospitality-solutions" className="premium-button">
              Xem giải pháp Hospitality
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#hospitality-contact" className="ghost-button">
              Tư vấn hình ảnh thương hiệu
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Website & SEO", "Social content", "Video / Reels"].map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-black text-white/78 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="hospitality-problems" className="hospitality-section bg-[#050707] py-24 text-white lg:py-32" data-hospitality-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HospitalityHeading eyebrow="Bài toán hospitality" title="Khách thường đánh giá trải nghiệm trước khi họ đặt bàn, đặt phòng hoặc ghé thăm">
          Nếu hình ảnh rời rạc, fanpage thiếu nhịp và website chưa rõ thông tin, thương hiệu dễ mất cơ hội ngay từ điểm chạm đầu tiên.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hospitalityProblems.map((problem, index) => {
            const Icon = problemIcons[index] ?? Sparkles;
            return (
              <article key={problem.title} className="hospitality-card hospitality-problem-card" data-hospitality-reveal>
                <Icon className="h-6 w-6 text-dst-gold" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-black leading-tight text-white">{problem.title}</h3>
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
        <HospitalityHeading eyebrow="Dịch vụ dành cho Nhà hàng / Khách sạn" title="Hình ảnh, nội dung, website và ads cần kể cùng một câu chuyện">
          DST triển khai fanpage, video ngắn, thiết kế, website và quảng cáo để khách thấy thương hiệu sạch, rõ và đáng tin hơn.
        </HospitalityHeading>
        <div className="hospitality-card-grid">
          {hospitalityServiceCards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Sparkles;
            return (
              <article key={service.title} className="hospitality-card hospitality-service-card group" data-hospitality-reveal>
                <div className="hospitality-icon">
                  <Icon className="h-6 w-6" aria-hidden="true" />
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
        <HospitalityHeading eyebrow="Portfolio hospitality" title="Dự án thật từ nhà hàng, cafe, khách sạn đến trung tâm sự kiện">
          Mỗi dự án thể hiện một nhu cầu khác nhau: hình ảnh không gian, visual món ăn, fanpage, media, quảng cáo hoặc truyền thông sự kiện.
        </HospitalityHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hospitalityProjects.map((project) => (
            <article key={project.name} className="hospitality-card hospitality-project-card group" data-hospitality-reveal>
              <div className="hospitality-project-media">
                <img src={assetPath(project.image)} alt={`${project.name} - ${project.sector}`} loading="lazy" />
                <div className="hospitality-project-shade" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                  <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">{project.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-white/66">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[...project.tags, ...project.services.slice(0, 2)].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/68">
                      {tag}
                    </span>
                  ))}
                </div>
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
        <HospitalityHeading eyebrow="Giải pháp theo mục tiêu" title="Không phải thương hiệu nào cũng cần cùng một gói truyền thông">
          Có nơi cần ảnh không gian, có nơi cần video món ăn, có nơi cần website, fanpage và ads đi cùng nhau.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {hospitalityGoals.map((goal, index) => {
            const Icon = goalIcons[index] ?? BadgeCheck;
            return (
              <article key={goal.title} className="hospitality-card hospitality-goal-card" data-hospitality-reveal>
                <Icon className="h-5 w-5 text-dst-gold" aria-hidden="true" />
                <h3 className="mt-8 text-lg font-black leading-tight text-white">{goal.title}</h3>
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
        <HospitalityHeading eyebrow="Quy trình triển khai" title="Từ cảm giác thương hiệu đến nội dung có thể đăng, chạy và đo lường">
          Quy trình ngắn, dễ duyệt và phù hợp với các mô hình dịch vụ cần triển khai đều theo tháng.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hospitalityProcess.map((step) => (
            <article key={step.step} className="hospitality-card hospitality-process-card" data-hospitality-reveal>
              <span className="text-sm font-black text-dst-gold">{step.step}</span>
              <h3 className="mt-10 text-xl font-black leading-tight text-white">{step.title}</h3>
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
        <HospitalityHeading eyebrow="Gói dịch vụ" title="Chọn gói theo mục tiêu: nhận diện, đặt bàn, đặt phòng hoặc chiến dịch">
          Một số hạng mục có giá trong tài liệu, các hạng mục còn lại sẽ tư vấn theo nhu cầu thực tế và quy mô triển khai.
        </HospitalityHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hospitalityPackages.map((item) => (
            <article key={item.title} className="hospitality-card hospitality-package-card" data-hospitality-reveal>
              <p className="text-xs font-black uppercase text-dst-gold">Hospitality</p>
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
      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.48)] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
        <div>
          <p className="section-eyebrow">Liên hệ tư vấn</p>
          <h2 className="hospitality-section-title mt-4 text-white">Bạn muốn hình ảnh hospitality của mình tạo cảm giác tin cậy hơn?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Trao đổi với DST để chọn hướng website, fanpage, video, hình ảnh và quảng cáo phù hợp với mô hình của bạn.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${phoneHref}`} className="premium-button">
              Nhận tư vấn hình ảnh
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/" className="ghost-button">
              Quay về trang chủ
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <a href={`tel:${phoneHref}`} className="hospitality-contact-tile">
            <Phone className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{hospitalityContact.phone}</span>
          </a>
          <a href={`mailto:${hospitalityContact.email}`} className="hospitality-contact-tile">
            <Mail className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{hospitalityContact.email}</span>
          </a>
          <div className="hospitality-contact-tile">
            <BadgeCheck className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{hospitalityContact.website}</span>
          </div>
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
