import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CircleDollarSign,
  Compass,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Palette,
  Phone,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company } from "./data/company";
import { pricing } from "./data/pricing";
import { projects, type Project } from "./data/projects";
import { assetPath, hashRouteHref } from "./lib/assetPath";

const navItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Bar/Club", href: hashRouteHref("/bar-club") },
  { label: "Nhà hàng/KS", href: hashRouteHref("/nha-hang-khach-san") },
  { label: "Lĩnh vực", href: "#industries" },
  { label: "Dịch vụ", href: hashRouteHref("/dich-vu") },
  { label: "Dự án", href: "#projects" },
  { label: "Quy trình", href: "#process" },
  { label: "Liên hệ", href: "#contact" },
];

const stats = [
  { value: "2020", label: "Thành lập", icon: CalendarDays },
  { value: "10 tỷ", label: "Vốn điều lệ", icon: CircleDollarSign },
  { value: "10+", label: "Nhóm dịch vụ", icon: Layers3 },
  { value: "03", label: "Nhóm ngành trọng tâm", icon: Compass },
];

const marquee = [
  "ADS",
  "TikTok Shop Partner",
  "Design",
  "Booking",
  "Content",
  "Studio",
  "Media",
  "Branding",
  "Setup Restaurant - Hotel",
  "Xây dựng phòng Marketing",
];

const gallery = [
  { title: "Valley Beach Club", image: "/assets/showcase/valley-beach-club-hero.webp" },
  { title: "Cana Beer", image: "/assets/showcase/cana-beer-showcase.webp" },
  { title: "Hồ Cô Tiên", image: "/assets/showcase/ho-co-tien-showcase.webp" },
  { title: "Bird's Nest Cafe", image: "/assets/showcase/birds-nest-cafe-showcase.webp" },
  { title: "Cabi Beach", image: "/assets/showcase/cabi-beach-showcase.webp" },
  { title: "Grand View Palace", image: "/assets/showcase/grand-view-palace-showcase.webp" },
];

const industryCards = [
  {
    title: "Bar / Club / Nightlife",
    description: "Visual năng lượng cao, nội dung sự kiện và quảng cáo cho mô hình giải trí cần độ phủ nhanh.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    services: ["Fanpage", "Poster line-up", "Video recap", "ADS đa kênh"],
    href: hashRouteHref("/bar-club"),
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Hình ảnh chỉn chu, nội dung đều nhịp và kênh social rõ định vị cho ngành dịch vụ lưu trú, F&B.",
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    services: ["Social content", "Menu / poster", "TikTok / Reels", "Website SEO"],
    href: hashRouteHref("/nha-hang-khach-san"),
  },
  {
    title: "Doanh nghiệp / Dịch vụ tổng thể",
    description: "Website, media, nhận diện và đội marketing thuê ngoài cho thương hiệu cần triển khai bài bản.",
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    services: ["Website", "Branding", "Media", "Marketing tháng"],
    href: hashRouteHref("/dich-vu"),
  },
];

const featuredServices = [
  {
    title: "Website / Landing page / SEO",
    summary: "Xây dựng hiện diện số rõ ràng, dễ chuyển đổi và có nền tảng nội dung tìm kiếm.",
    icon: Globe2,
    items: ["Website", "Landing page", "SEO content"],
  },
  {
    title: "Fanpage & social content",
    summary: "Lịch nội dung, bài viết và visual giúp thương hiệu xuất hiện đều đặn trên mạng xã hội.",
    icon: Megaphone,
    items: ["Fanpage", "Content plan", "Bài viết"],
  },
  {
    title: "Video ngắn / TikTok / Reels",
    summary: "Sản xuất video ngắn theo kịch bản, phù hợp hành vi xem nhanh và mục tiêu lan truyền.",
    icon: Video,
    items: ["TikTok", "Reels", "Kịch bản"],
  },
  {
    title: "Poster / menu / intro / recap",
    summary: "Thiết kế ấn phẩm và video sự kiện giúp chiến dịch bán hàng có hình ảnh đồng bộ.",
    icon: Palette,
    items: ["Poster", "Menu", "Intro / recap"],
  },
  {
    title: "Ads Facebook / TikTok / Google / Zalo",
    summary: "Thiết lập và tối ưu quảng cáo theo từng kênh, mục tiêu tiếp cận và ngân sách triển khai.",
    icon: Zap,
    items: ["Facebook", "TikTok", "Google", "Zalo"],
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Kết hợp nội dung, thiết kế, media và quảng cáo để vận hành marketing đều nhịp.",
    icon: Layers3,
    items: ["Kế hoạch", "Triển khai", "Báo cáo"],
  },
];

const whyChooseItems = [
  "Hiểu ngành dịch vụ địa phương và nhịp triển khai thực tế.",
  "Thiết kế hình ảnh chỉn chu, nhất quán với định vị thương hiệu.",
  "Kết hợp website, media, social content và quảng cáo trong một kế hoạch.",
  "Triển khai nhanh, dễ phối hợp và tối ưu theo mục tiêu kinh doanh.",
];

gsap.registerPlugin(ScrollTrigger);

function usePremiumScrollMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const ctx = gsap.context(() => {
      const sectionTargets = gsap.utils.toArray<HTMLElement>(".section-reveal");
      const cardTargets = gsap.utils.toArray<HTMLElement>(
        ".stat-card, .service-card, .service-highlight, .industry-card, .why-card, .pricing-card, .process-card, .segment-service, .mini-project, .featured-project, .project-card",
      );
      const revealTargets = gsap
        .utils
        .toArray<HTMLElement>(".reveal")
        .filter((element) => !element.matches(".stat-card, .service-card, .service-highlight, .industry-card, .why-card, .pricing-card, .process-card, .segment-service, .mini-project, .featured-project, .project-card"));

      gsap.set(sectionTargets, { autoAlpha: 0, y: 60, scale: 0.965 });
      gsap.set(revealTargets, { autoAlpha: 0, y: 34, scale: 0.985 });
      gsap.set(cardTargets, { autoAlpha: 0, y: 42, scale: 0.97 });

      ScrollTrigger.batch(sectionTargets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      ScrollTrigger.batch(revealTargets, {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      ScrollTrigger.batch(cardTargets, {
        start: "top 88%",
        once: true,
        interval: 0.08,
        batchMax: 4,
        onEnter: (batch) => {
          batch.forEach((element) => element.classList.add("is-visible"));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
            onComplete: () => gsap.set(batch, { clearProps: "opacity,visibility,transform,willChange" }),
          });
        },
      });

      gsap.utils.toArray<HTMLElement>(".stat-value").forEach((stat) => {
        const value = stat.dataset.countValue ?? stat.textContent ?? "";
        const match = value.match(/\d+/);

        if (!match) return;

        const target = Number(match[0]);
        const suffix = value.replace(match[0], "");
        const state = { value: 0 };

        gsap.to(state, {
          value: target,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            stat.textContent = `${Math.round(state.value)}${suffix}`;
          },
        });
      });

      gsap.to(".hero-content", {
        y: -90,
        autoAlpha: 0.32,
        ease: "none",
        scrollTrigger: {
          trigger: ".technology-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".hero-video", {
        scale: 1.08,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".technology-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".hero-video-overlay", {
        "--hero-scroll-dark": 0.18,
        ease: "none",
        scrollTrigger: {
          trigger: ".technology-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.utils.toArray<HTMLElement>(".headline-glow, .cta-glow").forEach((glow) => {
          gsap.to(glow, {
            y: -34,
            ease: "none",
            scrollTrigger: {
              trigger: glow.closest("section") ?? glow,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    });

    return () => {
      ctx.revert();
      root.classList.remove("motion-ready");
    };
  }, []);
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      data-reveal
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3 text-white">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-white/70">{children}</p> : null}
    </Reveal>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050707]/70 text-white shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-fit items-center gap-3" aria-label="DST Group">
          <img
            src={assetPath("/assets/brand/dst-logo-marketing-media.png")}
            alt="DST Marketing Media"
            className="h-8 w-auto"
          />
        </a>
        <div className="no-scrollbar ml-auto hidden gap-1 overflow-x-auto text-sm font-semibold text-white/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-auto hidden rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink lg:inline-flex"
        >
          Liên hệ tư vấn
        </a>
        <a
          href="#services"
          aria-label="Mở nhanh dịch vụ"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function ProjectArt({
  image,
  className = "",
}: {
  image: string;
  className?: string;
}) {
  return (
    <div className={`project-art ${className}`} aria-hidden="true">
      <img src={assetPath(image)} alt="" className="project-art-photo" loading="lazy" />
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = reduceMotion ? {} : { opacity: 0, y: 34 };
  const fadeIn = reduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section id="home" className="technology-hero relative min-h-[100svh] overflow-hidden bg-[#030405] text-white">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath("/assets/showcase/valley-beach-club-hero.webp")}
        aria-hidden="true"
      >
        <source src={assetPath("/assets/videos/hero.mp4")} type="video/mp4" />
      </video>
      <div className="hero-video-fallback" aria-hidden="true" />
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-bottom-gradient" aria-hidden="true" />
      <div className="hero-tech-grid" aria-hidden="true" />
      <div className="light-beam light-beam-one" aria-hidden="true" />
      <div className="light-beam light-beam-two" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <div className="hero-content-wrap relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[90rem] items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="hero-content relative mx-auto w-full max-w-[68rem]">
          <div className="headline-glow" aria-hidden="true" />
          <motion.p
            className="section-eyebrow"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            DST Group Marketing - Media
          </motion.p>
          <motion.h1
            className="hero-headline mt-5 font-black text-white"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Giải pháp số, media và marketing cho thương hiệu hiện đại
          </motion.h1>
          <motion.p
            className="hero-subtitle mx-auto mt-7 max-w-3xl text-white/76"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            Chúng tôi xây dựng website, nội dung truyền thông, video ngắn và chiến dịch quảng cáo giúp thương hiệu nổi bật hơn trên nền tảng số.
          </motion.p>
          <motion.div
            className="hero-actions mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#services" className="premium-button hero-primary-button">
              Khám phá dịch vụ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#projects" className="ghost-button hero-secondary-button">
              Xem dự án
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="section-reveal overflow-hidden border-y border-white/10 bg-[#080b0b] py-5 text-white" data-reveal>
      <div className="marquee-track">
        {[...marquee, ...marquee].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-chip">
            <Zap className="h-4 w-4 text-dst-gold" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-reveal bg-[#050707] px-4 py-14 text-white sm:px-6 lg:px-8" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <Reveal key={label} delay={index * 0.04} className="stat-card">
            <Icon className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <div className="stat-value mt-5 text-4xl font-black text-white" data-count-value={value}>
              {value}
            </div>
            <p className="mt-2 text-sm font-semibold uppercase text-white/60">{label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Giới thiệu</p>
          <h2 className="section-title mt-3 text-white">Một đội ngũ triển khai hình ảnh số cho thương hiệu dịch vụ</h2>
        </Reveal>
        <div className="grid gap-5">
          <Reveal className="about-panel">
            <p className="text-xl font-black leading-tight text-white sm:text-2xl">
              DST Group cung cấp giải pháp website, media, marketing và nội dung số theo hướng thực chiến, chỉn chu, dễ triển khai.
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              Chúng tôi đồng hành cùng bar/club, nhà hàng/cafe/khách sạn và các doanh nghiệp dịch vụ cần một hệ thống truyền thông rõ ràng hơn: từ website, fanpage, video ngắn, visual chiến dịch đến quảng cáo đa kênh.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {["Website & SEO", "Media & video ngắn", "Marketing đa kênh"].map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="about-mini-card">
                <Sparkles className="h-5 w-5 text-dst-gold" aria-hidden="true" />
                <p className="mt-5 text-lg font-black text-white">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section-reveal bg-[#080b0b] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Lĩnh vực phục vụ" title="Ba nhóm khách hàng, một hệ thống triển khai rõ ràng">
          Website hiện tại gom nhiều mảng vì DST Group phục vụ nhiều ngành dịch vụ khác nhau bằng cùng một năng lực lõi: hình ảnh, nội dung, media và quảng cáo.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {industryCards.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.06} className="industry-card group">
              <a href={industry.href ?? "#contact"} className="block h-full" aria-label={`Xem giải pháp ${industry.title}`}>
                <div className="industry-media">
                  <img src={assetPath(industry.image)} alt={industry.title} loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-black uppercase text-dst-gold">Lĩnh vực {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">{industry.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{industry.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.services.map((service) => (
                      <span key={service} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                        {service}
                      </span>
                    ))}
                  </div>
                  {industry.href ? (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                      Xem landing page
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-reveal bg-[#070909] py-24 text-white lg:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Visual System" title="Hình ảnh thật. Cảm giác cao cấp.">
          Bộ visual được chọn từ tài liệu nội bộ, xử lý lại để phục vụ trải nghiệm web sắc nét hơn.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className={`showcase-card group relative min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5 ${
                index === 0 || index === 1 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <ProjectArt image={item.image} className="absolute inset-0" />
              <div className="project-image-shade" />
              <h3 className="absolute bottom-5 left-5 z-10 text-xl font-black text-white">{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightServiceCard({
  service,
  index,
}: {
  service: (typeof featuredServices)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.04} className="service-highlight group">
      <div className="flex items-start justify-between gap-5">
        <div className="service-highlight-icon">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <ArrowRight className="h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-dst-gold" aria-hidden="true" />
      </div>
      <h3 className="mt-7 text-2xl font-black leading-tight text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/66">{service.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-white/68">
            {item}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dịch vụ nổi bật" title="Các hạng mục chính để thương hiệu vận hành tốt hơn trên nền tảng số">
          Dịch vụ được gom theo nhu cầu thực tế: có website chỉn chu, có nội dung đều nhịp, có media rõ hình ảnh và có quảng cáo để tăng độ phủ.
        </SectionHeading>
        <div className="responsive-card-grid">
          {featuredServices.map((service, index) => (
            <HighlightServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <a href="#contact" className="premium-button">
            Nhận tư vấn dịch vụ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal className="featured-project group">
      <ProjectArt image={project.image} className="absolute inset-0" />
      <div className="project-image-shade project-image-shade-featured" />
      <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14">
        <p className="section-eyebrow">{project.sector}</p>
        <h3 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-5 text-base leading-8 text-white/70">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
              {service}
            </span>
          ))}
        </div>
        <a href="#contact" className="premium-button mt-8">
          Khám phá dự án
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.04} className="project-card group">
      <ProjectArt image={project.image} className="absolute inset-0" />
      <div className="project-image-shade" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <p className="text-xs font-bold uppercase text-dst-gold">{project.sector}</p>
        <h3 className="mt-2 text-2xl font-black text-white">{project.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/70">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service) => (
            <span key={service} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
              {service}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-dst-gold">
          Xem chi tiết
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Reveal>
  );
}

function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dự án đã triển khai" title="Portfolio thực tế từ nightlife, F&B đến khách sạn và sự kiện">
          Mỗi dự án giữ ảnh trực diện, tag ngành nghề rõ ràng và mô tả ngắn để người xem hiểu DST Group đã triển khai gì.
        </SectionHeading>
        <FeaturedProject project={featured} />
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-reveal bg-[#080b0b] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Packages" title="Hạng mục dịch vụ linh hoạt theo mục tiêu">
          Các gói được trình bày gọn để dễ chọn hướng triển khai. Hạng mục cần tinh chỉnh sẽ được tư vấn trực tiếp.
        </SectionHeading>
        <div className="responsive-card-grid">
          {pricing.map((item, index) => (
            <Reveal key={`${item.category}-${item.item}`} delay={index * 0.04} className="pricing-card">
              <p className="text-xs font-black uppercase text-dst-gold">{item.category}</p>
              <h3 className="mt-4 text-2xl font-black text-white">{item.item}</h3>
              <p className="mt-4 text-3xl font-black text-white">{item.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{item.note}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                Nhận tư vấn
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Tư vấn mục tiêu", "Xác định thương hiệu cần website, nội dung, media hay quảng cáo ở mức độ nào."],
    ["02", "Lên concept & kế hoạch", "Chốt thông điệp, hình ảnh chủ đạo, kênh triển khai và lịch sản xuất."],
    ["03", "Thiết kế / sản xuất / triển khai", "Thực hiện website, bài viết, visual, video ngắn và chiến dịch quảng cáo."],
    ["04", "Đo lường & tối ưu", "Theo dõi phản hồi, tối ưu nội dung và điều chỉnh theo mục tiêu kinh doanh."],
  ];

  return (
    <section id="process" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Quy trình làm việc" title="Từ mục tiêu kinh doanh đến kế hoạch truyền thông có thể triển khai">
          Quy trình được giữ gọn để chủ thương hiệu dễ nắm việc, dễ duyệt nội dung và dễ theo dõi tiến độ.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, desc], index) => (
            <Reveal key={number} delay={index * 0.05} className="process-card">
              <span className="text-sm font-black text-dst-gold">{number}</span>
              <h3 className="mt-10 text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/60">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-reveal bg-[#080b0b] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Vì sao chọn DST Group</p>
          <h2 className="section-title mt-3 text-white">Không chỉ làm đẹp hình ảnh, mà làm cho thương hiệu dễ triển khai hơn</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            DST Group phù hợp với các thương hiệu dịch vụ cần một đội triển khai thực tế: hiểu ngành, có media, có thiết kế, có quảng cáo và có tư duy vận hành đều nhịp.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.05} className="why-card">
              <BadgeCheck className="h-6 w-6 text-dst-gold" aria-hidden="true" />
              <p className="mt-8 text-lg font-black leading-7 text-white">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-reveal relative overflow-hidden bg-[#050707] px-4 py-20 text-white sm:px-6 lg:px-8" data-reveal>
      <div className="cta-glow" aria-hidden="true" />
      <Reveal className="final-cta-panel mx-auto max-w-7xl text-center">
        <p className="section-eyebrow">Bắt đầu từ một kế hoạch rõ ràng</p>
        <h2 className="section-title mx-auto mt-4 max-w-4xl text-white">Bạn muốn thương hiệu của mình nổi bật hơn?</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70">
          Bắt đầu từ một website chỉn chu, một chiến dịch nội dung rõ ràng và một kế hoạch truyền thông phù hợp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="premium-button">
            Liên hệ tư vấn
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#services" className="ghost-button">
            Xem dịch vụ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const contactItems = [
    {
      label: "Hotline",
      value: company.phone.value,
      href: "tel:0328247888",
      icon: Phone,
    },
    {
      label: "Email",
      value: company.email.value,
      href: `mailto:${company.email.value}`,
      icon: Mail,
    },
    {
      label: "Website",
      value: company.website.value,
      href: `https://${company.website.value}`,
      icon: Globe2,
    },
  ];

  return (
    <section id="contact" className="section-reveal relative overflow-hidden bg-[#050707] py-24 text-white" data-reveal>
      <div className="cta-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-3 text-white">Sẵn sàng nâng cấp hình ảnh thương hiệu?</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Kết nối với DST Group để chọn hạng mục phù hợp cho ngành dịch vụ, giải trí, lưu trú hoặc doanh nghiệp của bạn.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <MapPin className="mt-1 h-5 w-5 flex-none text-dst-gold" aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Trụ sở chính</p>
                <p className="mt-1 text-sm leading-6 text-white/60">{company.headquarters.value}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Building2 className="mt-1 h-5 w-5 flex-none text-dst-gold" aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Văn phòng tư vấn</p>
                <p className="mt-1 text-sm leading-6 text-white/60">{company.quotationAddress.value}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
          <div className="mb-8 flex items-center justify-between gap-5">
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-12 w-auto" />
            <BadgeCheck className="h-8 w-8 text-dst-gold" aria-hidden="true" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="rounded-xl border border-white/10 bg-black/25 p-4 transition hover:-translate-y-1 hover:border-dst-gold/40 hover:bg-dst-gold/10"
              >
                <Icon className="h-5 w-5 text-dst-gold" aria-hidden="true" />
                <p className="mt-5 text-xs font-bold uppercase text-white/50">{label}</p>
                <p className="mt-2 break-words text-sm font-black text-white">{value}</p>
              </a>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-dst-gold/25 bg-dst-gold/10 p-5">
            <p className="text-sm font-bold text-dst-gold">Thông tin doanh nghiệp</p>
            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <p><span className="text-white/50">Công ty</span><br /><strong>{company.legalName.value}</strong></p>
              <p><span className="text-white/50">Đại diện</span><br /><strong>{company.representative.value}</strong></p>
              <p><span className="text-white/50">Ngày thành lập</span><br /><strong>{company.established.value}</strong></p>
              <p><span className="text-white/50">Vốn điều lệ</span><br /><strong>{company.capital.value}</strong></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function App() {
  usePremiumScrollMotion();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Industries />
        <Services />
        <Gallery />
        <Projects />
        <Process />
        <WhyChoose />
        <Pricing />
        <FinalCTA />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#050707] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              {company.tagline.value}. Website, media, nội dung số và marketing cho thương hiệu dịch vụ hiện đại.
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase text-white">Dịch vụ chính</p>
            <div className="mt-4 grid gap-2 text-sm text-white/58">
              <span>Website / Landing page</span>
              <span>Social content</span>
              <span>Video ngắn / Media</span>
              <a href={hashRouteHref("/dich-vu")} className="hover:text-dst-gold">Quảng cáo đa kênh</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase text-white">Lĩnh vực</p>
            <div className="mt-4 grid gap-2 text-sm text-white/58">
              <a href={hashRouteHref("/bar-club")} className="hover:text-dst-gold">Bar / Club</a>
              <a href={hashRouteHref("/nha-hang-khach-san")} className="hover:text-dst-gold">Nhà hàng / Cafe</a>
              <span>Khách sạn / Sự kiện</span>
              <span>Doanh nghiệp dịch vụ</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase text-white">Liên hệ</p>
            <div className="mt-4 grid gap-2 text-sm text-white/58">
              <a href="tel:0328247888" className="hover:text-dst-gold">{company.phone.value}</a>
              <a href={`mailto:${company.email.value}`} className="hover:text-dst-gold">{company.email.value}</a>
              <span>{company.website.value}</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© DST Group. All rights reserved.</p>
          <p>Nội dung được xây dựng từ hồ sơ năng lực và bảng báo giá nội bộ DST Group.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
