import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Camera,
  CalendarDays,
  CircleDollarSign,
  Compass,
  FileText,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Store,
  Video,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionIcon } from "./components/MotionIcon";
import type { MotionIconName } from "./components/MotionIcon";
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

const homeSectionIds = new Set(["home", "about", "industries", "services", "projects", "pricing", "process", "contact"]);

function getCurrentHomeSectionId() {
  const hash = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return homeSectionIds.has(hash) ? hash : "";
}

const stats = [
  { value: "2020", label: "Thành lập", motionIcon: "booking" },
  { value: "10 tỷ", label: "Vốn điều lệ", motionIcon: "analytics" },
  { value: "10+", label: "Nhóm dịch vụ", motionIcon: "branding" },
  { value: "03", label: "Nhóm ngành trọng tâm", motionIcon: "target" },
] satisfies Array<{ value: string; label: string; motionIcon: MotionIconName }>;

const marquee = [
  { label: "ADS", motionIcon: "ads" },
  { label: "TikTok Shop Partner", motionIcon: "social" },
  { label: "Design", motionIcon: "design" },
  { label: "Booking", motionIcon: "booking" },
  { label: "Content", motionIcon: "content" },
  { label: "Studio", motionIcon: "studio" },
  { label: "Media", motionIcon: "media" },
  { label: "Branding", motionIcon: "branding" },
  { label: "Website", motionIcon: "website" },
  { label: "Setup Restaurant - Hotel", motionIcon: "hospitality" },
] satisfies Array<{ label: string; motionIcon: MotionIconName }>;

const industryIcons = [
  { name: "ads", variant: "gold" },
  { name: "hospitality", variant: "warm" },
  { name: "branding", variant: "cyan" },
] satisfies Array<{ name: MotionIconName; variant: "gold" | "cyan" | "warm" }>;

const commandCenterModules = [
  {
    title: "Content Calendar",
    eyebrow: "Kế hoạch đăng tải",
    icon: CalendarDays,
    motionIcon: "process-plan",
    className: "command-calendar",
  },
  {
    title: "Ads Channels",
    eyebrow: "Meta / TikTok / Google / Zalo",
    icon: BarChart3,
    motionIcon: "ads",
    className: "command-ads",
  },
  {
    title: "Media Assets",
    eyebrow: "Ảnh, video, visual chiến dịch",
    icon: Camera,
    motionIcon: "studio",
    className: "command-media",
  },
  {
    title: "Booking Plan",
    eyebrow: "Lịch sự kiện & đặt chỗ",
    icon: CalendarDays,
    motionIcon: "booking",
    className: "command-booking",
  },
  {
    title: "TikTok Shop Partner",
    eyebrow: "Kênh bán hàng & nội dung",
    icon: Store,
    motionIcon: "content",
    className: "command-tiktok",
  },
  {
    title: "Branding System",
    eyebrow: "Nhận diện thương hiệu",
    icon: Palette,
    motionIcon: "branding",
    className: "command-branding",
  },
  {
    title: "Website / Landing Page",
    eyebrow: "Điểm đến số cho khách hàng",
    icon: Globe2,
    motionIcon: "website",
    className: "command-website",
  },
] satisfies Array<{ title: string; eyebrow: string; icon: typeof CalendarDays; motionIcon: MotionIconName; className: string }>;

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
    description: "Line-up, poster, recap, fanpage và quảng cáo theo mục tiêu để mỗi sự kiện có nhịp truyền thông trước, trong và sau đêm diễn.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    services: ["Fanpage", "Poster line-up", "Video recap", "Ads theo mục tiêu"],
    href: hashRouteHref("/bar-club"),
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Hình ảnh món ăn, không gian, website và social content giúp khách cảm nhận sự chỉn chu trước khi đặt bàn, đặt phòng hoặc liên hệ.",
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    services: ["Social content", "Menu / poster", "TikTok / Reels", "Website SEO"],
    href: hashRouteHref("/nha-hang-khach-san"),
  },
  {
    title: "Doanh nghiệp / Dịch vụ tổng thể",
    description: "Một đầu mối cho website, fanpage, content, media và ads khi thương hiệu muốn triển khai rõ ràng hơn mà không chia nhỏ cho nhiều bên.",
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    services: ["Website", "Branding", "Media", "Marketing tháng"],
    href: hashRouteHref("/dich-vu"),
  },
];

const featuredServices = [
  {
    title: "Website / Landing page có điểm đến rõ",
    summary: "Xây nơi khách có thể xem dịch vụ, hiểu điểm mạnh và liên hệ dễ hơn thay vì chỉ phụ thuộc vào fanpage.",
    motionIcon: "website",
    items: ["Website", "Landing page", "SEO content"],
  },
  {
    title: "Fanpage & social content đều nhịp",
    summary: "Xây lịch đăng, bài viết và visual nhất quán để fanpage không bị bỏ trống và giữ nhịp xuất hiện với khách hàng.",
    motionIcon: "social",
    items: ["Fanpage", "Content plan", "Bài viết"],
  },
  {
    title: "Video ngắn cho nhiều nền tảng",
    summary: "Sản xuất video ngắn theo kịch bản để món ăn, không gian, dịch vụ hoặc sự kiện có thêm chất liệu dùng cho social và ads.",
    motionIcon: "video",
    items: ["TikTok", "Reels", "Kịch bản"],
  },
  {
    title: "Poster / menu / intro / recap",
    summary: "Thiết kế ấn phẩm, menu, poster và video chiến dịch để hình ảnh thương hiệu đồng bộ hơn trên từng điểm chạm.",
    motionIcon: "design",
    items: ["Poster", "Menu", "Intro / recap"],
  },
  {
    title: "Ads theo mục tiêu từng kênh",
    summary: "Triển khai quảng cáo dựa trên thông điệp, hình ảnh và mục tiêu rõ: nhận diện, tương tác, giới thiệu event hoặc dịch vụ.",
    motionIcon: "ads",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Kết hợp content, thiết kế, media và ads để thương hiệu có đội triển khai đều nhịp, dễ phối hợp và dễ theo dõi.",
    motionIcon: "process-launch",
    items: ["Kế hoạch", "Triển khai", "Báo cáo"],
  },
] satisfies Array<{ title: string; summary: string; motionIcon: MotionIconName; items: string[] }>;

const whyChooseItems = [
  "Một đầu mối cho website, media, content, thiết kế và ads, giúp khách dễ phối hợp hơn.",
  "Hiểu nhịp vận hành của nhà hàng, cafe, khách sạn, nightlife và doanh nghiệp dịch vụ địa phương.",
  "Hình ảnh chỉn chu nhưng vẫn dễ ứng dụng vào chiến dịch, fanpage và vận hành hằng tháng.",
  "Tập trung vào mục tiêu kinh doanh của thương hiệu, không chỉ làm đẹp từng ấn phẩm riêng lẻ.",
];

const pricingIcons = ["ads", "video", "design", "analytics", "website", "branding", "process-launch"] satisfies MotionIconName[];
const processIcons = ["process-consult", "process-plan", "process-launch", "process-report"] satisfies MotionIconName[];
const whyIconsHome = ["branding", "hospitality", "website", "target"] satisfies MotionIconName[];
const serviceVariants = ["gold", "cyan", "warm"] as const;

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
            const nextValue = Math.round(state.value);
            stat.textContent = value.startsWith("0") ? `${String(nextValue).padStart(match[0].length, "0")}${suffix}` : `${nextValue}${suffix}`;
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

      gsap.to(".command-center-card", {
        y: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ".technology-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
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

function useHomeSectionScroll() {
  useLayoutEffect(() => {
    const scrollToCurrentSection = () => {
      const sectionId = getCurrentHomeSectionId();
      if (!sectionId) return;

      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    };

    scrollToCurrentSection();
    window.addEventListener("hashchange", scrollToCurrentSection);

    return () => {
      window.removeEventListener("hashchange", scrollToCurrentSection);
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
    <Reveal className={align === "center" ? "mx-auto mb-7 max-w-3xl text-center" : "mb-6 max-w-3xl"}>
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

function HeroCommandCenter() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="command-center-card"
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="command-center-header">
        <div>
          <p className="text-[0.65rem] font-black uppercase text-dst-gold">Live operation map</p>
          <h2>DST Command Center</h2>
        </div>
        <span className="command-live-dot">Live</span>
      </div>

      <div className="command-center-grid">
        {commandCenterModules.map(({ title, eyebrow, motionIcon, className }) => (
          <div key={title} className={`command-module ${className}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p>{title}</p>
                <span>{eyebrow}</span>
              </div>
              <span className="command-module-icon" aria-hidden="true">
                <MotionIcon name={motionIcon} size="1.75rem" title={title} />
              </span>
            </div>
            {className === "command-calendar" ? (
              <div className="command-calendar-grid" aria-hidden="true">
                {Array.from({ length: 14 }, (_, index) => (
                  <i key={index} className={index % 4 === 0 ? "is-active" : ""} />
                ))}
              </div>
            ) : null}
            {className === "command-ads" ? (
              <div className="command-bars" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            ) : null}
            {className === "command-media" ? (
              <div className="command-thumbs" aria-hidden="true">
                {gallery.slice(0, 3).map((item) => (
                  <img key={item.title} src={assetPath(item.image)} alt="" loading="lazy" />
                ))}
              </div>
            ) : null}
            {className === "command-branding" ? (
              <div className="command-swatches" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            ) : null}
            {className === "command-website" ? (
              <div className="command-site-strip" aria-hidden="true">
                <FileText className="h-4 w-4" />
                <span>Landing page + SEO content</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </motion.div>
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
        <source src={assetPath("/assets/videos/hero.mp4?v=final-20260628")} type="video/mp4" />
      </video>
      <div className="hero-video-fallback" aria-hidden="true" />
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-bottom-gradient" aria-hidden="true" />
      <div className="hero-tech-grid" aria-hidden="true" />
      <div className="light-beam light-beam-one" aria-hidden="true" />
      <div className="light-beam light-beam-two" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <div className="hero-content-wrap relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[94rem] items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        <div className="hero-content relative mx-auto w-full max-w-[42rem] text-center lg:mx-0 lg:text-left">
          <div className="headline-glow" aria-hidden="true" />
          <motion.p
            className="section-eyebrow"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {company.tagline.value}
          </motion.p>
          <motion.h1
            className="hero-headline mt-5 font-black text-white"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Một đội ngũ cho <span className="hero-gold-text">toàn bộ hình ảnh số</span> của thương hiệu
          </motion.h1>
          <motion.p
            className="hero-subtitle mx-auto mt-7 max-w-3xl text-white/76 lg:mx-0"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            DST Group kết hợp website, nội dung, video, thiết kế và quảng cáo để thương hiệu dịch vụ xuất hiện chỉn chu, dễ nhớ và dễ được khách hàng liên hệ hơn.
          </motion.p>
          <motion.div
            className="hero-actions mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            initial={fadeUp}
            animate={fadeIn}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="premium-button hero-primary-button">
              Nhận tư vấn gói phù hợp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#industries" className="ghost-button hero-secondary-button">
              Xem giải pháp cho ngành của bạn
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
        <div className="relative hidden lg:block">
          <HeroCommandCenter />
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
          <span key={`${item.label}-${index}`} className="marquee-chip">
            <span className="marquee-chip-icon">
              <MotionIcon name={item.motionIcon} size="1.45rem" title={item.label} />
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-reveal command-stats-section bg-[#050707] px-4 py-14 text-white sm:px-6 lg:px-8" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, motionIcon }, index) => (
          <Reveal key={label} delay={index * 0.04} className="stat-card">
            <span className="stat-icon">
              <MotionIcon name={motionIcon} title={label} />
            </span>
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
  const strengths = ["Chiến lược bài bản", "Sáng tạo khác biệt", "Triển khai hiệu quả", "Đo lường minh bạch"];

  return (
    <section id="about" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Về DST Group</p>
          <h2 className="section-title mt-3 text-white">Một đội ngũ - Một quy trình - Một mục tiêu: Tăng trưởng thương hiệu</h2>
        </Reveal>
        <div className="grid gap-5">
          <Reveal className="about-panel">
            <p className="text-xl font-black leading-tight text-white sm:text-2xl">
              DST Group là đầu mối triển khai website, media, branding và vận hành truyền thông cho thương hiệu dịch vụ.
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              Thay vì tách lẻ từng hạng mục, DST kết nối chiến lược, nội dung, hình ảnh, video và quảng cáo trong cùng một nhịp triển khai để thương hiệu xuất hiện rõ ràng hơn.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {strengths.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="about-mini-card">
                <BadgeCheck className="h-5 w-5 text-dst-gold" aria-hidden="true" />
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
        <SectionHeading eyebrow="Lĩnh vực phục vụ" title="Mỗi ngành có nhịp truyền thông riêng. DST triển khai theo đúng ngữ cảnh đó.">
          Nightlife cần nhịp sự kiện, hospitality cần cảm giác tin cậy, doanh nghiệp dịch vụ cần một hệ thống nội dung rõ ràng và dễ quản lý.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {industryCards.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.06} className="industry-card group">
              <a href={industry.href ?? "#contact"} className="block h-full" aria-label={`Xem giải pháp ${industry.title}`}>
                <div className="industry-media">
                  <img src={assetPath(industry.image)} alt={industry.title} loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="industry-number">{String(index + 1).padStart(2, "0")}</p>
                    <span className="motion-icon-badge industry-motion-icon">
                      <MotionIcon
                        name={industryIcons[index]?.name ?? "branding"}
                        variant={industryIcons[index]?.variant ?? "warm"}
                        title={industry.title}
                      />
                    </span>
                  </div>
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
                      Xem giải pháp ngành này
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
        <SectionHeading eyebrow="Dự án thật" title="Không chỉ nói về năng lực. Hãy nhìn cách DST đã triển khai hình ảnh.">
          Ảnh và dự án được lấy từ tài liệu thật, giúp khách xem nhanh chất liệu thương hiệu DST từng xử lý.
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
  return (
    <Reveal delay={index * 0.04} className="service-highlight group">
      <div className="flex items-start justify-between gap-5">
        <div className="service-highlight-icon">
          <MotionIcon
            name={service.motionIcon}
            size="clamp(4.3rem, 5.4vw, 5.55rem)"
            variant={serviceVariants[index % serviceVariants.length]}
            title={service.title}
          />
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
        <SectionHeading eyebrow="Dịch vụ nổi bật" title="Từ một bài đăng đến cả hệ thống truyền thông, mọi điểm chạm cần đi cùng nhau">
          DST gom website, fanpage, content, media, thiết kế và ads thành các hạng mục dễ chọn theo mục tiêu thật của từng thương hiệu.
        </SectionHeading>
        <div className="responsive-card-grid">
          {featuredServices.map((service, index) => (
            <HighlightServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <Reveal className="cta-inline-panel mt-6 flex justify-center">
          <a href="#contact" className="premium-button">
            Nhận đề xuất truyền thông
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
          Trao đổi về dự án tương tự
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
          Xem hướng triển khai
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
        <SectionHeading eyebrow="Dự án đã triển khai" title="Dự án thật cho thấy DST xử lý nhiều kiểu bài toán truyền thông">
          Mỗi dự án cho thấy một nhu cầu khác nhau: sự kiện, fanpage, visual, media, quảng cáo hoặc hình ảnh hospitality.
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
        <SectionHeading eyebrow="Gói dịch vụ" title="Bắt đầu từ mục tiêu, rồi chọn đúng hạng mục cần triển khai">
          Có thương hiệu chỉ cần website, có thương hiệu cần fanpage đều nhịp, có thương hiệu cần combo media, content và ads theo tháng.
        </SectionHeading>
        <div className="responsive-card-grid">
          {pricing.map((item, index) => (
            <Reveal key={`${item.category}-${item.item}`} delay={index * 0.04} className="pricing-card">
              <span className="motion-icon-badge">
                {(() => {
                  const iconName = pricingIcons[index] ?? "branding";
                  return <MotionIcon name={iconName} title={item.category} />;
                })()}
              </span>
              <p className="text-xs font-black uppercase text-dst-gold">{item.category}</p>
              <h3 className="mt-4 text-2xl font-black text-white">{item.item}</h3>
              <p className="mt-4 text-3xl font-black text-white">{item.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{item.note}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                Nhận gói phù hợp
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
    ["01", "Tư vấn & phân tích", "Xác định bối cảnh thương hiệu, kênh hiện tại và mục tiêu truyền thông cần ưu tiên."],
    ["02", "Lên chiến lược", "Chốt thông điệp, hướng hình ảnh, kênh triển khai và lịch sản xuất phù hợp."],
    ["03", "Triển khai & sản xuất", "Thực hiện website, bài viết, visual, video ngắn và chiến dịch quảng cáo."],
    ["04", "Đo lường & tối ưu", "Theo dõi phản hồi, tối ưu nội dung và điều chỉnh theo mục tiêu kinh doanh."],
  ];

  return (
    <section id="process" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Quy trình làm việc" title="Không bắt đầu bằng thiết kế. Bắt đầu bằng mục tiêu của thương hiệu.">
          Quy trình được giữ gọn để chủ thương hiệu dễ nắm việc, dễ duyệt nội dung và dễ theo dõi tiến độ.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, desc], index) => (
            <Reveal key={number} delay={index * 0.05} className="process-card">
              <span className="motion-icon-badge">
                {(() => {
                  const iconName = processIcons[index] ?? "process";
                  return <MotionIcon name={iconName} title={title} />;
                })()}
              </span>
              <span className="mt-5 block text-sm font-black text-dst-gold">{number}</span>
              <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
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
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Vì sao chọn DST Group</p>
          <h2 className="section-title mt-3 text-white">Một đầu mối cho website, nội dung, media và quảng cáo</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            DST Group phù hợp với thương hiệu dịch vụ muốn triển khai thực tế: có người tư vấn, có người làm hình ảnh, có người sản xuất nội dung và có người chạy quảng cáo trong cùng một kế hoạch.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.05} className="why-card">
              <span className="motion-icon-badge">
                {(() => {
                  const iconName = whyIconsHome[index] ?? "branding";
                  return <MotionIcon name={iconName} title={item} />;
                })()}
              </span>
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
    <section className="section-reveal relative overflow-hidden bg-[#050707] px-4 py-16 text-white sm:px-6 lg:px-8" data-reveal>
      <div className="cta-glow" aria-hidden="true" />
      <Reveal className="final-cta-panel mx-auto max-w-7xl text-center">
        <p className="section-eyebrow">Sẵn sàng tăng trưởng cùng DST Group?</p>
          <h2 className="section-title mx-auto mt-4 max-w-4xl text-white">Hãy biến kênh truyền thông thành một hệ thống vận hành rõ ràng hơn</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70">
          Hãy bắt đầu bằng mục tiêu cụ thể. DST sẽ đề xuất tổ hợp website, content, media và ads phù hợp với ngành, ngân sách và nhịp vận hành của bạn.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="premium-button">
            Nhận tư vấn gói phù hợp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#services" className="ghost-button">
            Xem giải pháp cho ngành của bạn
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
      <div className="relative mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Liên hệ</p>
          <h2 className="section-title mt-3 text-white">Trao đổi với DST Group về hướng triển khai phù hợp</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Chia sẻ ngành, tình trạng kênh hiện tại và mục tiêu truyền thông. DST sẽ gợi ý hướng triển khai vừa đủ, dễ quản lý và có thể bắt đầu nhanh.
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
  useHomeSectionScroll();

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
              <a href={hashRouteHref("/dich-vu")} className="hover:text-dst-gold">Ads theo mục tiêu</a>
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
