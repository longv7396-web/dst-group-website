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
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroStaggerContainer, heroStaggerItem, MOTION_DURATION, MOTION_EASE } from "./lib/motion";
import { useEffect, useLayoutEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedLottie } from "./components/AnimatedLottie";
import { MotionIcon } from "./components/MotionIcon";
import type { MotionIconName } from "./components/MotionIcon";
import { ProjectCard as TravelProjectCard } from "./components/travel/ProjectCard";
import { ProjectMedia } from "./components/ProjectMedia";
import { animations } from "./data/animationMap";
import {
  getPricingCategoryIcon,
  homeFeaturedServiceVisuals,
  homeProcessVisuals,
  homeWhyVisuals,
  pickVisual,
} from "./data/visualMap";
import { company } from "./data/company";
import { pricing } from "./data/pricing";
import { projects, type Project, type ProjectImageDisplay } from "./data/projects";
import { travelProjects } from "./data/travelProjects";
import { assetPath, hashRouteHref } from "./lib/assetPath";

const navItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Bar/Club", href: hashRouteHref("/bar-club") },
  { label: "Nhà hàng/KS", href: hashRouteHref("/nha-hang-khach-san") },
  { label: "Lĩnh vực", href: "#industries" },
  { label: "Dịch vụ", href: hashRouteHref("/dich-vu") },
  { label: "Du lịch", href: hashRouteHref("/projects") },
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
    title: "Kế hoạch nội dung",
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
    title: "Tư liệu hình ảnh",
    eyebrow: "Ảnh, video, visual chiến dịch",
    icon: Camera,
    motionIcon: "studio",
    className: "command-media",
  },
  {
    title: "Lịch sự kiện / booking",
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

const gallery: Array<{ title: string; image: string; display: ProjectImageDisplay }> = [
  { title: "Valley Beach Club", image: "/assets/showcase/valley-beach-club-hero.webp", display: "hero" },
  { title: "Cana Beer", image: "/assets/showcase/cana-beer-showcase.webp", display: "showcase" },
  { title: "Hồ Cô Tiên", image: "/assets/showcase/ho-co-tien-showcase.webp", display: "compact" },
  { title: "Bird's Nest Cafe", image: "/assets/showcase/birds-nest-cafe-showcase.webp", display: "compact" },
  { title: "Cabi Beach", image: "/assets/showcase/cabi-beach-showcase.webp", display: "showcase" },
  { title: "Grand View Palace", image: "/assets/showcase/grand-view-palace-showcase.webp", display: "showcase" },
];

const industryCards = [
  {
    title: "Bar / Club / Nightlife",
    description: "Poster, line-up, recap và fanpage đúng nhịp — khách biết event sắp diễn ra trước khi đêm tới.",
    image: "/assets/showcase/valley-beach-club-hero.webp",
    services: ["Fanpage", "Poster line-up", "Video recap", "Ads theo mục tiêu"],
    href: hashRouteHref("/bar-club"),
  },
  {
    title: "Nhà hàng / Cafe / Khách sạn",
    description: "Hình ảnh món ăn, không gian và social content — khách cảm nhận sự chỉn chu trước khi đặt bàn, đặt phòng hoặc nhắn tin.",
    image: "/assets/showcase/birds-nest-cafe-showcase.webp",
    services: ["Social content", "Menu / poster", "TikTok / Reels", "Website SEO"],
    href: hashRouteHref("/nha-hang-khach-san"),
  },
  {
    title: "Doanh nghiệp / Dịch vụ tổng thể",
    description: "Một đầu mối cho website, fanpage, content, media và ads — trao đổi theo nhu cầu hiện tại, không ép gói.",
    image: "/assets/showcase/grand-view-palace-showcase.webp",
    services: ["Website", "Branding", "Media", "Marketing tháng"],
    href: hashRouteHref("/dich-vu"),
  },
];

const featuredServices = [
  {
    title: "Website / Landing page có điểm đến rõ",
    summary: "Nơi khách xem dịch vụ, hình ảnh và liên hệ — thay vì chỉ dựa vào fanpage.",
    motionIcon: "website",
    items: ["Website", "Landing page", "SEO content"],
  },
  {
    title: "Fanpage & social content đều nhịp",
    summary: "Lịch đăng, bài viết và visual nhất quán — fanpage không bị bỏ trống, khách vẫn thấy bạn xuất hiện.",
    motionIcon: "social",
    items: ["Fanpage", "Content plan", "Bài viết"],
  },
  {
    title: "Video ngắn cho nhiều nền tảng",
    summary: "Món ăn, không gian, dịch vụ hoặc sự kiện — video ngắn giúp dễ gây chú ý hơn ảnh tĩnh trên social và ads.",
    motionIcon: "video",
    items: ["TikTok", "Reels", "Kịch bản"],
  },
  {
    title: "Poster / menu / intro / recap",
    summary: "Ấn phẩm, menu, poster và video theo từng hạng mục — thông tin rõ, dễ nhìn.",
    motionIcon: "design",
    items: ["Poster", "Menu", "Intro / recap"],
  },
  {
    title: "Ads theo mục tiêu từng kênh",
    summary: "Facebook, TikTok, Google, Zalo — triển khai theo thông điệp và mục tiêu đã trao đổi, không chạy mù.",
    motionIcon: "ads",
    items: ["Facebook", "TikTok", "Google", "Zalo"],
  },
  {
    title: "Gói marketing theo tháng",
    summary: "Content, thiết kế, media và ads kết hợp theo tháng — khi bạn cần duy trì đều, không chỉ làm một lần.",
    motionIcon: "process-launch",
    items: ["Kế hoạch", "Triển khai", "Báo cáo"],
  },
] satisfies Array<{ title: string; summary: string; motionIcon: MotionIconName; items: string[] }>;

const whyChooseItems = [
  "Một đầu mối cho website, media, content, thiết kế và ads — không cần tự phối hợp nhiều bên.",
  "Hiểu nhịp vận hành nhà hàng, cafe, khách sạn, bar/club và doanh nghiệp dịch vụ địa phương.",
  "Hình ảnh chỉn chu, dễ dùng lại cho fanpage, chiến dịch và vận hành hằng tháng.",
  "Nghe nhu cầu trước, rồi mới tư vấn hạng mục — không ép gói.",
];

const whyIconsHome = homeWhyVisuals;
const serviceVariants = ["gold", "cyan", "warm"] as const;
const statAnimations = [animations.stats.established, animations.stats.capital, animations.stats.services, animations.stats.industries] as const;
const industryAnimations = [animations.industries.barclub, animations.industries.hotel, animations.industries.services] as const;

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
        ".stat-card, .service-card, .service-highlight, .dst-service-card, .industry-card, .why-card, .pricing-card, .process-card, .segment-service, .mini-project, .featured-project, .project-card, .travel-project-card",
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

function useHomeSeoMeta() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "DST Group | Nhận diện thương hiệu, website, media và marketing tại Quảng Ninh";

    const ensureMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      const created = !meta;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      const previous = meta.content;
      meta.content = content;
      return () => {
        if (created && meta?.parentNode) meta.parentNode.removeChild(meta);
        else if (meta) meta.content = previous;
      };
    };

    const cleanupDescription = ensureMeta(
      "description",
      "DST Group cung cấp website, content, media, video, design và ads cho nhà hàng, khách sạn, bar/club và doanh nghiệp dịch vụ tại Quảng Ninh.",
    );

    const cleanupKeywords = ensureMeta(
      "keywords",
      "DST Group, marketing Quang Ninh, website nha hang khach san, media, content, ads",
    );

    const schemaNode = document.createElement("script");
    schemaNode.type = "application/ld+json";
    schemaNode.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DST Group",
      url: company.websiteUrl.value,
      logo: assetPath("/assets/brand/dst-logo.png"),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: company.phone.value,
          contactType: "customer service",
          areaServed: "VN",
          availableLanguage: ["vi"],
        },
      ],
      sameAs: [company.fanpage.value, company.zalo.value],
    });
    document.head.appendChild(schemaNode);

    return () => {
      cleanupDescription();
      cleanupKeywords();
      if (schemaNode.parentNode) schemaNode.parentNode.removeChild(schemaNode);
      document.title = previousTitle;
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="dst-site-header fixed left-0 right-0 top-0 z-50 border-b border-white/10 text-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-8">
        <a href="#home" className="dst-site-logo flex min-w-fit items-center gap-3" aria-label="DST Group">
          <img
            src={assetPath("/assets/brand/dst-logo-marketing-media.png")}
            alt="DST Marketing Media"
            className="h-7 w-auto sm:h-9"
          />
        </a>
        <div className="no-scrollbar ml-auto hidden items-center gap-0.5 overflow-x-auto text-sm font-semibold text-white/72 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="dst-nav-link rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dst-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="dst-header-cta ml-auto hidden rounded-full border border-dst-gold/55 px-4 py-2.5 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink lg:inline-flex"
        >
          Liên hệ cộng tác viên DST
        </a>
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="dst-mobile-menu"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="dst-mobile-menu-btn ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition hover:border-dst-gold/45 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div id="dst-mobile-menu" className="dst-mobile-nav dst-mobile-nav--open border-t border-white/10 lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="dst-mobile-nav-link rounded-xl px-4 py-3 text-sm font-semibold text-white/82"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <a href="#contact" className="premium-button w-full justify-center" onClick={() => setMobileOpen(false)}>
                Liên hệ cộng tác viên DST
              </a>
              <Link
                to="/projects"
                className="ghost-button w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Sản phẩm du lịch
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ProjectArt({
  image,
  display = "showcase",
  className = "",
}: {
  image: string;
  display?: ProjectImageDisplay;
  className?: string;
}) {
  return <ProjectMedia image={image} alt="" display={display} className={className} />;
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
          <p className="text-[0.65rem] font-black uppercase text-dst-gold">Các hạng mục triển khai</p>
          <h2>Kế hoạch đang làm</h2>
        </div>
        <span className="command-live-dot">Đang triển khai</span>
      </div>
      <AnimatedLottie
        src={animations.hero.home}
        className="hero-lottie-panel"
        ariaLabel="Dashboard marketing DST"
        autoplay
        loop
        playWhenVisible={false}
        fallback={<MotionIcon name="analytics" size="6rem" title="Dashboard marketing" />}
      />

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

  return (
    <section id="home" className="technology-hero relative min-h-[100svh] overflow-hidden bg-[#030405] text-white">
      <motion.div
        className="hero-video-wrap"
        aria-hidden="true"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: MOTION_DURATION.heroImage, ease: MOTION_EASE }}
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetPath("/assets/showcase/valley-beach-club-hero.webp")}
        >
          <source src={assetPath("/assets/videos/hero.mp4?v=final-20260628")} type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero-video-fallback" aria-hidden="true" />
      <div className="hero-video-overlay hero-video-overlay--pulse" aria-hidden="true" />
      <div className="hero-bottom-gradient" aria-hidden="true" />
      <div className="hero-tech-grid" aria-hidden="true" />
      <div className="light-beam light-beam-one" aria-hidden="true" />
      <div className="light-beam light-beam-two" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <div className="hero-content-wrap relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[94rem] items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        <motion.div
          className="hero-content relative mx-auto w-full max-w-[42rem] text-center lg:mx-0 lg:text-left"
          variants={reduceMotion ? undefined : heroStaggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          <div className="headline-glow" aria-hidden="true" />
          <motion.p className="section-eyebrow" variants={reduceMotion ? undefined : heroStaggerItem}>
            DST Group · Quảng Ninh
          </motion.p>
          <motion.h1 className="hero-headline mt-5 font-black text-white" variants={reduceMotion ? undefined : heroStaggerItem}>
            Website, content, media và quảng cáo cho <span className="hero-gold-text">nhà hàng, khách sạn và bar/club</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle mx-auto mt-7 max-w-3xl text-white/76 lg:mx-0"
            variants={reduceMotion ? undefined : heroStaggerItem}
          >
            Khi hình ảnh chưa rõ hoặc fanpage thiếu nhịp, khách khó tin và khó liên hệ. DST là một đầu mối tư vấn website, nội dung, video, thiết kế và ads — giúp thương hiệu dịch vụ trông chỉn chu và dễ được chú ý hơn.
          </motion.p>
          <motion.div
            className="hero-actions mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            variants={reduceMotion ? undefined : heroStaggerItem}
          >
            <a href="#contact" className="premium-button hero-primary-button">
              Liên hệ ngay
              <ArrowRight className="h-4 w-4 motion-arrow" aria-hidden="true" />
            </a>
            <a href="#services" className="ghost-button hero-secondary-button">
              Tư vấn dịch vụ
              <ArrowRight className="h-4 w-4 motion-arrow" aria-hidden="true" />
            </a>
            <Link to="/projects" className="ghost-button hero-secondary-button">
              Xem sản phẩm du lịch
              <Compass className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
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
            <AnimatedLottie
              src={statAnimations[index] ?? animations.stats.services}
              className="stat-icon stat-lottie"
              ariaLabel={label}
              autoplay
              loop={false}
              playOnHover
              fallback={<MotionIcon name={motionIcon} title={label} />}
            />
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
  const proofStats = [
    { value: "2020", label: "Thành lập", detail: company.established.value },
    { value: "10 tỷ VNĐ", label: "Vốn điều lệ", detail: company.capital.value },
    { value: "10+", label: "Nhóm dịch vụ", detail: "Website, media, content, design, ads" },
    { value: "03", label: "Nhóm ngành trọng tâm", detail: "Nightlife, hospitality, dịch vụ" },
  ];
  const featuredProjects = ["Valley Beach Club", "Cana Beer", "Bird's Nest Cafe", "Grand View Palace Ha Long Hotel", "Diamond Palace - Hạ Long"];
  const strengths = [
    {
      title: "Nghe nhu cầu trước",
      description: "Xác định ngành, mục tiêu, kênh triển khai và phần nào cần ưu tiên — trước khi bàn làm gì.",
      motionIcon: "target",
    },
    {
      title: "Triển khai theo kế hoạch",
      description: "Website, content, media, thiết kế và ads kết nối trong cùng phạm vi đã chốt.",
      motionIcon: "process-plan",
    },
    {
      title: "Có dự án thật để xem",
      description: "Một số hình ảnh và dự án DST đã triển khai — bạn có thể xem trước khi trao đổi thêm.",
      motionIcon: "media",
    },
    {
      title: "Đầu việc rõ, dễ theo dõi",
      description: "Hai bên chốt việc cần làm, nội dung cần duyệt và đầu ra cần bàn giao — không mơ hồ.",
      motionIcon: "analytics",
    },
  ] satisfies Array<{ title: string; description: string; motionIcon: MotionIconName }>;

  return (
    <section id="about" className="section-reveal bg-[#050707] py-20 text-white lg:py-28" data-reveal>
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-8">
        <Reveal className="about-panel about-story-panel">
          <p className="section-eyebrow">Về DST Group</p>
          <h2 className="section-title mt-3 text-white">Một đội ngũ giúp thương hiệu dịch vụ trông chuyên nghiệp hơn trên mạng</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            DST Group là công ty truyền thông, media và giải pháp hiện diện số tại Quảng Ninh — đồng hành cùng nhà hàng, cafe, khách sạn, bar/club và doanh nghiệp dịch vụ.
          </p>
          <p className="mt-4 text-base leading-8 text-white/70">
            Khách có thể lướt qua rất nhanh nếu hình ảnh chưa đủ rõ, bài viết chưa hấp dẫn hoặc thông tin liên hệ khó tìm. DST nghe nhu cầu trước, rồi tư vấn website, fanpage, content, video, thiết kế hoặc quảng cáo phù hợp.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Nhà hàng", "Cafe", "Khách sạn", "Bar/Club", "Trung tâm sự kiện", "Doanh nghiệp dịch vụ"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/68">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal className="about-panel about-proof-panel">
            <div className="grid gap-3 sm:grid-cols-2">
              {proofStats.map((item, index) => (
                <div key={item.label} className="about-proof-stat">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase text-dst-gold">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-white/48">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-black uppercase text-dst-gold">Dự án tiêu biểu</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredProjects.map((name) => {
                  const project = projects.find((item) => item.name === name);
                  return (
                    <span key={name} className="about-project-chip">
                      {project?.name ?? name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="about-mini-card about-strength-card">
                <span className="motion-icon-badge">
                  <MotionIcon name={item.motionIcon} variant={index % 2 === 0 ? "gold" : "cyan"} title={item.title} />
                </span>
                <h3 className="mt-5 text-lg font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
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
        <SectionHeading eyebrow="Lĩnh vực phục vụ" title="Mỗi ngành có bài toán riêng — DST tư vấn theo đó">
          Nhà hàng cần hình ảnh món ăn. Bar/club cần truyền thông event. Khách sạn cần phòng nghỉ thuyết phục. DST tư vấn theo ngành, ngân sách và nhu cầu hiện tại.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {industryCards.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.06} className="industry-card group">
              <a href={industry.href ?? "#contact"} className="block h-full" aria-label={`Xem dịch vụ ${industry.title}`}>
                <div className="industry-media">
                  <img src={assetPath(industry.image)} alt={industry.title} loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="industry-number">{String(index + 1).padStart(2, "0")}</p>
                    <span className="motion-icon-badge industry-motion-icon">
                      <AnimatedLottie
                        src={industryAnimations[index] ?? animations.services.business}
                        className="card-lottie-icon"
                        ariaLabel={industry.title}
                        autoplay={false}
                        loop={false}
                        playOnHover
                        fallback={
                          <MotionIcon
                            name={industryIcons[index]?.name ?? "branding"}
                            variant={industryIcons[index]?.variant ?? "warm"}
                            title={industry.title}
                          />
                        }
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
                      Xem dịch vụ phù hợp
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
        <SectionHeading eyebrow="Dự án đã thực hiện" title="Một số hình ảnh/dự án DST đã triển khai">
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((item, index) => {
            const isLargeTile = item.display === "hero" || item.display === "showcase";
            return (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className={[
                "showcase-card group relative overflow-hidden rounded-xl border border-white/10 bg-white/5",
                isLargeTile ? "min-h-[280px] lg:col-span-3" : "min-h-[220px] lg:col-span-2 showcase-card--compact",
              ].join(" ")}
            >
              <ProjectArt image={item.image} display={item.display} className="absolute inset-0" />
              <div className="project-image-shade" />
              <h3 className="absolute bottom-5 left-5 z-10 text-xl font-black text-white">{item.title}</h3>
            </Reveal>
            );
          })}
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
    <Reveal delay={index * 0.04}>
      <a href="#contact" className="service-highlight dst-service-card group block h-full">
        <div className="dst-service-card-top">
          <div className="service-highlight-icon">
            <MotionIcon
              name={pickVisual(homeFeaturedServiceVisuals, index, service.motionIcon)}
              size="2.35rem"
              variant={serviceVariants[index % serviceVariants.length]}
              title={service.title}
            />
          </div>
        </div>
        <h3 className="dst-service-card-title">{service.title}</h3>
        <p className="dst-service-card-summary">{service.summary}</p>
        <div className="dst-chip-row">
          {service.items.map((item) => (
            <span key={item} className="dst-chip">
              {item}
            </span>
          ))}
        </div>
        <span className="dst-service-card-cta">
          Tư vấn hạng mục này
          <ArrowRight className="h-4 w-4 motion-arrow" aria-hidden="true" />
        </span>
      </a>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="section-reveal dst-section-services py-20 text-white lg:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dịch vụ DST" title="Giải pháp truyền thông và vận hành cho hospitality">
          Từ nội dung, hình ảnh, quảng cáo đến website và sản phẩm du lịch — DST hỗ trợ triển khai theo nhu cầu thực tế, một đầu mối dễ theo dõi.
        </SectionHeading>
        <div className="responsive-card-grid dst-services-grid">
          {featuredServices.map((service, index) => (
            <HighlightServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <Reveal className="cta-inline-panel mt-6 flex justify-center">
          <a href="#contact" className="premium-button">
            Nhận tư vấn phù hợp
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
      <ProjectArt image={project.image} display={project.imageDisplay} className="absolute inset-0" />
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
          Trao đổi nhu cầu tương tự
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const stacked = project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact";

  if (stacked) {
    return (
      <Reveal delay={index * 0.04} className={`project-card project-card--${project.imageDisplay} group`}>
        <ProjectMedia
          image={project.image}
          alt={`Ảnh dự án ${project.name}`}
          display={project.imageDisplay}
          variant="stacked"
        />
        <div className="project-card-body">
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
          <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-dst-gold transition hover:text-dst-cyan">
            Xem hướng triển khai
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.04} className={`project-card project-card--${project.imageDisplay} group`}>
      <ProjectArt image={project.image} display={project.imageDisplay} className="absolute inset-0" />
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
        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-dst-gold transition hover:text-dst-cyan">
          Xem hướng triển khai
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

function TravelProducts() {
  return (
    <section id="travel" className="section-reveal dst-section-travel py-20 text-white lg:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Sản phẩm du lịch" title="Căn hộ & villa nghỉ dưỡng Hạ Long">
          DST check lịch trống nhanh, gợi ý căn phù hợp gia đình, nhóm bạn hoặc đoàn công ty. Giá thay đổi theo ngày — liên hệ để xác nhận trước khi đặt.
        </SectionHeading>
        <div className="travel-project-grid">
          {travelProjects.map((project, index) => (
            <TravelProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <Reveal className="cta-inline-panel mt-8 flex justify-center">
          <Link to="/projects" className="premium-button">
            Xem tất cả dự án du lịch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-reveal bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dự án đã triển khai" title="Một số dự án DST từng triển khai cho khách hàng">
          Mỗi khách hàng có nhu cầu khác nhau. DST tư vấn hạng mục theo từng trường hợp.
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
        <SectionHeading eyebrow="Gói dịch vụ" title="Bắt đầu từ mục tiêu, rồi chọn đúng hạng mục">
          Có khách chỉ cần website. Có khách cần fanpage, media hoặc ads theo tháng. DST tư vấn theo nhu cầu thực tế.
        </SectionHeading>
        <div className="responsive-card-grid">
          {pricing.map((item, index) => (
            <Reveal key={`${item.category}-${item.item}`} delay={index * 0.04} className="pricing-card">
              <span className="motion-icon-badge">
                {(() => {
                  const iconName = getPricingCategoryIcon(item.category, index);
                  return <MotionIcon name={iconName} title={item.category} />;
                })()}
              </span>
              <p className="text-xs font-black uppercase text-dst-gold">{item.category}</p>
              <h3 className="mt-4 text-2xl font-black text-white">{item.item}</h3>
              <p className="mt-4 text-3xl font-black text-white">{item.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{item.note}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                Tư vấn gói triển khai
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
    ["01", "Nghe và phân tích", "Làm rõ bối cảnh thương hiệu, kênh hiện tại và mục tiêu truyền thông cần ưu tiên."],
    ["02", "Chọn hướng triển khai", "Chốt thông điệp, hướng hình ảnh, kênh và lịch sản xuất phù hợp với ngân sách."],
    ["03", "Triển khai & sản xuất", "Website, bài viết, visual, video ngắn và chiến dịch quảng cáo theo phạm vi đã chốt."],
    ["04", "Trao đổi & điều chỉnh", "Cập nhật theo phản hồi thực tế — giữ đúng nhịp với vận hành của bạn."],
  ];

  return (
    <section id="process" className="section-reveal process-section bg-[#050707] py-24 text-white lg:py-32" data-reveal>
      <div className="process-section-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Quy trình làm việc" title="Bắt đầu từ nhu cầu cần giải quyết">
          Quy trình gọn — bạn dễ nắm việc, dễ duyệt nội dung và dễ theo dõi tiến độ.
        </SectionHeading>
        <div className="process-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, desc], index) => (
            <Reveal key={number} delay={index * 0.05} className="process-card process-card-premium">
              <span className="motion-icon-badge">
                {(() => {
                  const iconName = pickVisual(homeProcessVisuals, index, "process");
                  return <MotionIcon name={iconName} title={title} />;
                })()}
              </span>
              <span className="process-step-number mt-5 block text-sm font-black text-dst-gold">{number}</span>
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
            DST Group phù hợp khi bạn cần một đầu mối tư vấn hình ảnh, sản xuất nội dung hoặc chạy quảng cáo — trong cùng một kế hoạch, không rời rạc.
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
        <AnimatedLottie
          src={animations.contact.message}
          className="cta-lottie"
          ariaLabel="Liên hệ tư vấn DST"
          autoplay={false}
          loop={false}
          playOnHover
          fallback={<MotionIcon name="contact" size="4.5rem" title="Liên hệ tư vấn" />}
        />
        <p className="section-eyebrow">Cần tư vấn website, content hoặc quảng cáo?</p>
        <h2 className="section-title mx-auto mt-4 max-w-4xl text-white">Hãy nói rõ bạn đang cần gì — DST sẽ đề xuất cách triển khai phù hợp</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70">
          Bắt đầu bằng mục tiêu cụ thể. DST sẽ gợi ý tổ hợp website, content, media và ads vừa đủ với ngành, ngân sách và nhịp vận hành của bạn.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="premium-button">
            Liên hệ cộng tác viên DST
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#services" className="ghost-button">
            Xem hạng mục dịch vụ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function HomeFaq() {
  const items = [
    {
      q: "DST phù hợp với doanh nghiệp nào?",
      a: "Phù hợp với nhà hàng, cafe, khách sạn, bar/club và doanh nghiệp dịch vụ cần hình ảnh và kênh online chỉn chu hơn.",
    },
    {
      q: "Có bắt buộc làm trọn gói không?",
      a: "Không. DST tư vấn theo nhu cầu thực tế: bạn có thể bắt đầu từ website, content, media hoặc ads trước.",
    },
    {
      q: "Bao lâu nhận được hướng triển khai ban đầu?",
      a: "Thông thường trong ngày làm việc, sau khi bạn gửi mục tiêu chính, ngành và kênh hiện tại.",
    },
  ];

  return (
    <section className="section-reveal bg-[#070909] py-20 text-white lg:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp trước khi bắt đầu">
          Giải đáp nhanh để bạn quyết định bước tiếp theo dễ hơn.
        </SectionHeading>
        <div className="travel-faq-grid">
          {items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.04} className="travel-faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
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
      href: company.websiteUrl.value,
      icon: Globe2,
      external: true,
    },
    {
      label: "Fanpage",
      value: "DST Group",
      href: company.fanpage.value,
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Zalo/Hotline",
      value: company.phone.value,
      href: company.zalo.value,
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-reveal relative overflow-hidden bg-[#050707] py-24 text-white" data-reveal>
      <div className="cta-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8">
        <Reveal>
          <p className="section-eyebrow">Liên hệ</p>
          <h2 className="section-title mt-3 text-white">Gửi nhu cầu — DST tư vấn hướng triển khai</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Chia sẻ ngành, tình trạng kênh hiện tại và mục tiêu truyền thông. DST sẽ gợi ý hướng vừa đủ, dễ quản lý và có thể bắt đầu nhanh.
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
            {contactItems.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
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
  useHomeSeoMeta();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Bỏ qua đến nội dung chính
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Industries />
        <Services />
        <Gallery />
        <TravelProducts />
        <Projects />
        <Process />
        <WhyChoose />
        <Pricing />
        <FinalCTA />
        <HomeFaq />
        <Contact />
      </main>
      <div className="mobile-sticky-cta lg:hidden">
        <a href="#contact" className="premium-button">
          Liên hệ cộng tác viên
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={hashRouteHref("/projects")} className="ghost-button">
          Xem sản phẩm du lịch
          <Compass className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="mobile-sticky-spacer lg:hidden" aria-hidden="true" />
      <footer className="border-t border-white/10 bg-[#050707] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Website, media, nội dung số và marketing cho thương hiệu dịch vụ.
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
              <a href={company.fanpage.value} target="_blank" rel="noopener noreferrer" className="hover:text-dst-gold">Fanpage DST Group</a>
              <a href={company.zalo.value} target="_blank" rel="noopener noreferrer" className="hover:text-dst-gold">Zalo/Hotline</a>
              <a href={company.websiteUrl.value} target="_blank" rel="noopener noreferrer" className="hover:text-dst-gold">{company.website.value}</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© DST Group. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
