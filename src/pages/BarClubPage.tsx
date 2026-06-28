import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  Facebook,
  Home,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Target,
  Zap,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  barClubContact,
  barClubHero,
  barClubPackages,
  barClubProblems,
  barClubProcess,
  barClubProjects,
  barClubServiceCards,
} from "../data/barClubData";
import { assetPath } from "../lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = [Megaphone, Clapperboard, Zap];

function useBarClubMotion() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(root.querySelectorAll<HTMLElement>("[data-bar-reveal]"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".bar-section");
      const reveals = gsap.utils.toArray<HTMLElement>(".bar-reveal");
      const cards = gsap.utils.toArray<HTMLElement>(".bar-card");

      gsap.set(sections, { autoAlpha: 0, y: 54, scale: 0.97 });
      gsap.set(reveals, { autoAlpha: 0, y: 28 });
      gsap.set(cards, { autoAlpha: 0, y: 42, scale: 0.97 });

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
            stagger: 0.1,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      gsap.to(".barclub-hero-content", {
        y: -72,
        autoAlpha: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: ".barclub-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".barclub-video", {
        scale: 1.08,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".barclub-hero",
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

function BarClubHeader() {
  const nav = [
    ["Vấn đề", "#problems"],
    ["Dịch vụ", "#solutions"],
    ["Dự án", "#bar-projects"],
    ["Quy trình", "#bar-process"],
    ["Liên hệ", "#bar-contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050707]/72 text-white shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
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
          href="#bar-contact"
          className="rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink"
        >
          Tư vấn
        </a>
      </nav>
    </header>
  );
}

function BarSectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="bar-reveal mx-auto mb-12 max-w-3xl text-center" data-bar-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="barclub-section-title mt-3 text-white">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-white/68">{children}</p> : null}
    </div>
  );
}

function BarClubHero() {
  const [videoSrc, setVideoSrc] = useState(barClubHero.video);
  const isUsingFallback = videoSrc === barClubHero.fallbackVideo;

  return (
    <section className="barclub-hero relative min-h-[100svh] overflow-hidden bg-[#040303] text-white">
      <video
        className="barclub-video"
        src={assetPath(videoSrc)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath(barClubHero.poster)}
        onError={() => {
          if (!isUsingFallback) {
            setVideoSrc(barClubHero.fallbackVideo);
          }
        }}
        aria-hidden="true"
      />
      <div className="barclub-hero-fallback" aria-hidden="true" />
      <div className="barclub-overlay" aria-hidden="true" />
      <div className="barclub-stage-grid" aria-hidden="true" />
      <div className="barclub-bottom-gradient" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="barclub-hero-content max-w-4xl">
          <p className="section-eyebrow">{barClubHero.eyebrow}</p>
          <h1 className="barclub-hero-title mt-5 font-black text-white">{barClubHero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">{barClubHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#solutions" className="premium-button">
              Xem giải pháp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#bar-contact" className="ghost-button">
              Liên hệ tư vấn
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Fanpage", "Line-up / Recap", "ADS đa kênh"].map((item) => (
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
    <section id="problems" className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Bài toán nightlife" title="Bar/Club cần truyền thông có nhịp, có hình ảnh và có lực kéo khách">
          Mỗi chiến dịch cần một visual đủ mạnh, lịch nội dung rõ ràng và quảng cáo được triển khai đúng kênh.
        </BarSectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {barClubProblems.map((problem, index) => (
            <article key={problem.title} className="bar-card barclub-card" data-bar-reveal>
              <span className="text-sm font-black text-dst-gold">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-black leading-tight text-white">{problem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="solutions" className="bar-section bg-[#080707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Giải pháp dành cho Bar/Club" title="Các hạng mục triển khai đúng với tài liệu DST Group">
          Tập trung vào fanpage, nội dung sự kiện, poster/line-up/recap và quảng cáo online cho mô hình nightlife.
        </BarSectionHeading>
        <div className="barclub-service-grid">
          {barClubServiceCards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Target;
            return (
              <article key={service.title} className="bar-card barclub-service-card group" data-bar-reveal>
                <div className="barclub-icon">
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
    <section id="bar-projects" className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Portfolio Bar / Club" title="Dự án nightlife đã triển khai">
          Ảnh dự án được giữ trực diện, rõ không gian và hạn chế overlay để người xem thấy đúng chất liệu thương hiệu.
        </BarSectionHeading>
        <div className="grid gap-5 lg:grid-cols-2">
          {barClubProjects.map((project) => (
            <article key={project.name} className="bar-card barclub-project-card group" data-bar-reveal>
              <div className="barclub-project-media">
                <img src={assetPath(project.image)} alt={`${project.name} - ${project.sector}`} loading="lazy" />
                <div className="barclub-project-shade" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                  <h3 className="mt-2 text-3xl font-black leading-tight text-white">{project.name}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-7">
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

function ProcessSection() {
  return (
    <section id="bar-process" className="bar-section bg-[#080707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Quy trình triển khai" title="Từ concept sự kiện đến nội dung, media và quảng cáo">
          Quy trình được giữ ngắn để chủ thương hiệu dễ nắm việc, duyệt nhanh và triển khai đều nhịp.
        </BarSectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {barClubProcess.map((step) => (
            <article key={step.step} className="bar-card barclub-card" data-bar-reveal>
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
    <section className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Gói dịch vụ" title="Gói triển khai linh hoạt theo mục tiêu truyền thông">
          DST Group tư vấn hạng mục theo nhu cầu thực tế của từng bar/club, từng lịch sự kiện và từng ngân sách truyền thông.
        </BarSectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {barClubPackages.map((item) => (
            <article key={item.title} className="bar-card barclub-package-card" data-bar-reveal>
              <p className="text-xs font-black uppercase text-dst-gold">Bar / Club</p>
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
  const phoneHref = barClubContact.phone.replace(/\s/g, "");

  return (
    <section id="bar-contact" className="bar-section relative overflow-hidden bg-[#050707] px-4 py-24 text-white sm:px-6 lg:px-8" data-bar-reveal>
      <div className="barclub-cta-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.5)] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
        <div>
          <p className="section-eyebrow">Liên hệ tư vấn</p>
          <h2 className="barclub-section-title mt-4 text-white">Muốn Bar / Club của bạn nổi bật hơn trên nền tảng số?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Bắt đầu bằng một concept rõ ràng, hình ảnh chỉn chu và kế hoạch truyền thông phù hợp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${phoneHref}`} className="premium-button">
              Liên hệ tư vấn
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/" className="ghost-button">
              Quay về trang chủ
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <a href={`tel:${phoneHref}`} className="barclub-contact-tile">
            <Phone className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{barClubContact.phone}</span>
          </a>
          <a href={`mailto:${barClubContact.email}`} className="barclub-contact-tile">
            <Mail className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{barClubContact.email}</span>
          </a>
          <a href={barClubContact.facebook} target="_blank" rel="noreferrer" className="barclub-contact-tile">
            <Facebook className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>Facebook công ty</span>
          </a>
          <div className="barclub-contact-tile">
            <BadgeCheck className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{barClubContact.website}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BarClubPage() {
  const rootRef = useBarClubMotion();

  return (
    <div ref={rootRef} className="barclub-page bg-[#050707] text-white">
      <BarClubHeader />
      <main>
        <BarClubHero />
        <ProblemsSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <PackagesSection />
        <FinalContactSection />
      </main>
      <footer className="border-t border-white/10 bg-[#050707] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-8 w-auto" />
            <span className="font-black">Bar / Club / Nightlife</span>
          </Link>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions" className="hover:text-dst-gold">Dịch vụ</a>
            <a href="#bar-projects" className="hover:text-dst-gold">Dự án</a>
            <a href={barClubContact.facebook} target="_blank" rel="noreferrer" className="hover:text-dst-gold">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
