import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChartNoAxesCombined,
  Clapperboard,
  FileText,
  Home,
  Laptop,
  Layers3,
  Mail,
  Megaphone,
  MessageCircle,
  Palette,
  Phone,
  Search,
  Sparkles,
  Target,
  Video,
  Zap,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  featuredServiceProjects,
  industryLinks,
  serviceGroups,
  servicePricing,
  serviceProcess,
  servicesContact,
  servicesHero,
  servicesOverview,
  whyChooseServices,
} from "../data/servicesPageData";
import { assetPath, hashRouteHref } from "../lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = [Laptop, Megaphone, Video, Palette, Zap, Layers3];
const processIcons = [MessageCircle, Target, FileText, Clapperboard, ChartNoAxesCombined];

function useServicesMotion() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(root.querySelectorAll<HTMLElement>("[data-services-reveal]"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".services-section");
      const reveals = gsap.utils.toArray<HTMLElement>(".services-reveal");
      const cards = gsap.utils.toArray<HTMLElement>(".services-card");

      gsap.set(sections, { autoAlpha: 0, y: 52, scale: 0.97 });
      gsap.set(reveals, { autoAlpha: 0, y: 28 });
      gsap.set(cards, { autoAlpha: 0, y: 40, scale: 0.975 });

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

      gsap.to(".services-hero-content", {
        y: -72,
        autoAlpha: 0.38,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".services-video", {
        scale: 1.07,
        yPercent: 3.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-hero",
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

function ServicesHeader() {
  const nav = [
    ["Tổng quan", "#services-overview"],
    ["Nhóm dịch vụ", "#service-groups"],
    ["Bảng giá", "#service-pricing"],
    ["Ngành", "#service-industries"],
    ["Dự án", "#service-projects"],
    ["Liên hệ", "#service-contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050707]/74 text-white shadow-[0_18px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-fit items-center gap-3" aria-label="DST Group homepage">
          <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-8 w-auto" />
        </Link>
        <div className="ml-auto hidden items-center gap-1 text-sm font-semibold text-white/70 xl:flex">
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
          href="#service-contact"
          className="rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink"
        >
          Tư vấn
        </a>
      </nav>
    </header>
  );
}

function ServicesHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="services-reveal mx-auto mb-12 max-w-3xl text-center" data-services-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="services-section-title mt-3 text-white">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-white/68">{children}</p> : null}
    </div>
  );
}

function ServicesHero() {
  const [videoSrc, setVideoSrc] = useState(servicesHero.video);
  const isUsingFallback = videoSrc === servicesHero.fallbackVideo;

  return (
    <section className="services-hero relative min-h-[100svh] overflow-hidden bg-[#050707] text-white">
      <video
        className="services-video"
        src={assetPath(videoSrc)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath(servicesHero.poster)}
        onError={() => {
          if (!isUsingFallback) {
            setVideoSrc(servicesHero.fallbackVideo);
          }
        }}
        aria-hidden="true"
      />
      <div className="services-hero-fallback" aria-hidden="true" />
      <div className="services-overlay" aria-hidden="true" />
      <div className="services-grid-overlay" aria-hidden="true" />
      <div className="services-bottom-gradient" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="services-hero-content max-w-5xl">
          <p className="section-eyebrow">{servicesHero.eyebrow}</p>
          <h1 className="services-hero-title mt-5 font-black text-white">{servicesHero.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">{servicesHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#service-groups" className="premium-button">
              Xem dịch vụ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#service-contact" className="ghost-button">
              Liên hệ tư vấn
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {["Website", "Media", "Marketing"].map((item) => (
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

function OverviewSection() {
  return (
    <section id="services-overview" className="services-section bg-[#050707] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Tổng quan dịch vụ" title="Một hệ sinh thái dịch vụ số cho thương hiệu cần triển khai thực tế">
          DST Group gom website, nội dung, media, thiết kế và quảng cáo thành các nhóm dịch vụ dễ chọn, dễ triển khai và dễ phối hợp.
        </ServicesHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {servicesOverview.map((item, index) => (
            <article key={item.title} className="services-card services-info-card" data-services-reveal>
              <span className="text-sm font-black text-dst-gold">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-black leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGroupsSection() {
  return (
    <section id="service-groups" className="services-section bg-[#080b0b] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Nhóm dịch vụ chính" title="Sáu nhóm dịch vụ để xây dựng hiện diện số chỉn chu">
          Mỗi nhóm có phạm vi rõ: từ nền tảng website đến nội dung, media, design, ads và gói marketing theo tháng.
        </ServicesHeading>
        <div className="services-card-grid">
          {serviceGroups.map((group, index) => {
            const Icon = serviceIcons[index] ?? Boxes;
            return (
              <article key={group.title} className="services-card services-service-card group" data-services-reveal>
                <div className="services-icon">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-white">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{group.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-white/68">
                      {item}
                    </span>
                  ))}
                </div>
                <a href="#service-contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                  Nhận tư vấn
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="service-pricing" className="services-section bg-[#050707] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Gói dịch vụ / bảng giá" title="Chỉ hiển thị giá và hạng mục đã có trong dữ liệu">
          Các dòng chưa có giá cố định được giữ ở mức “Liên hệ tư vấn”, không tự bịa chi phí.
        </ServicesHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {servicePricing.map((item) => (
            <article key={`${item.category}-${item.item}`} className="services-card services-price-card" data-services-reveal>
              <p className="text-xs font-black uppercase text-dst-gold">{item.category}</p>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">{item.item}</h3>
              <p className="mt-5 text-2xl font-black text-white">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryLinksSection() {
  return (
    <section id="service-industries" className="services-section bg-[#080b0b] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Dịch vụ theo ngành" title="Đi từ trang dịch vụ tổng thể sang landing page chuyên ngành">
          Trang này là trung tâm dịch vụ, liên kết ngược lại các landing page đã tạo cho từng nhóm khách hàng.
        </ServicesHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {industryLinks.map((item) => (
            <a key={item.title} href={hashRouteHref(item.href)} className="services-card services-industry-card group" data-services-reveal>
              <div className="services-industry-media">
                <img src={assetPath(item.image)} alt={item.title} loading="lazy" />
                <div className="services-project-shade" aria-hidden="true" />
                <h3 className="absolute bottom-5 left-5 right-5 z-10 text-2xl font-black leading-tight text-white">{item.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-white/66">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/68">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-dst-gold">
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="service-process" className="services-section bg-[#050707] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Quy trình triển khai" title="Từ nhu cầu ban đầu đến sản xuất, tối ưu và bàn giao">
          Quy trình 5 bước giúp khách hàng dễ nắm phạm vi, dễ duyệt hạng mục và dễ theo dõi tiến độ.
        </ServicesHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {serviceProcess.map((step, index) => {
            const Icon = processIcons[index] ?? BadgeCheck;
            return (
              <article key={step.step} className="services-card services-process-card" data-services-reveal>
                <Icon className="h-5 w-5 text-dst-gold" aria-hidden="true" />
                <span className="mt-8 block text-sm font-black text-dst-gold">{step.step}</span>
                <h3 className="mt-4 text-lg font-black leading-tight text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="service-projects" className="services-section bg-[#080b0b] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeading eyebrow="Dự án tiêu biểu" title="Một số thương hiệu đã xuất hiện trong dữ liệu dự án">
          Ảnh được lấy từ asset thật trong project, chỉ dùng gradient nhẹ ở đáy để đọc tên dự án.
        </ServicesHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServiceProjects.map((project) => (
            <article key={project.name} className="services-card services-project-card group" data-services-reveal>
              <div className="services-project-media">
                <img src={assetPath(project.image)} alt={`${project.name} - ${project.sector}`} loading="lazy" />
                <div className="services-project-shade" aria-hidden="true" />
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

function WhyChooseSection() {
  return (
    <section className="services-section bg-[#050707] py-24 text-white lg:py-32" data-services-reveal>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="services-reveal" data-services-reveal>
          <p className="section-eyebrow">Vì sao chọn DST Group</p>
          <h2 className="services-section-title mt-3 text-white">Một đội triển khai đủ rộng cho nhiều nhu cầu truyền thông</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            Các hạng mục được tổ chức để khách hàng dễ chọn gói phù hợp, từ một landing page nhỏ đến một hệ thống marketing theo tháng.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseServices.map((item) => (
            <article key={item} className="services-card services-why-card" data-services-reveal>
              <BadgeCheck className="h-6 w-6 text-dst-gold" aria-hidden="true" />
              <p className="mt-8 text-lg font-black leading-7 text-white">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const phoneHref = servicesContact.phone.replace(/\s/g, "");

  return (
    <section id="service-contact" className="services-section relative overflow-hidden bg-[#080b0b] px-4 py-24 text-white sm:px-6 lg:px-8" data-services-reveal>
      <div className="services-cta-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.48)] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
        <div>
          <p className="section-eyebrow">Liên hệ tư vấn</p>
          <h2 className="services-section-title mt-4 text-white">Bạn cần một gói dịch vụ phù hợp với thương hiệu của mình?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Hãy bắt đầu bằng mục tiêu cụ thể. Chúng tôi sẽ đề xuất giải pháp phù hợp cho website, nội dung, media và quảng cáo.
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
          <a href={`tel:${phoneHref}`} className="services-contact-tile">
            <Phone className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{servicesContact.phone}</span>
          </a>
          <a href={`mailto:${servicesContact.email}`} className="services-contact-tile">
            <Mail className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{servicesContact.email}</span>
          </a>
          <div className="services-contact-tile">
            <Search className="h-5 w-5 text-dst-gold" aria-hidden="true" />
            <span>{servicesContact.website}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const rootRef = useServicesMotion();

  return (
    <div ref={rootRef} className="services-page bg-[#050707] text-white">
      <ServicesHeader />
      <main>
        <ServicesHero />
        <OverviewSection />
        <ServiceGroupsSection />
        <PricingSection />
        <IndustryLinksSection />
        <ProcessSection />
        <ProjectsSection />
        <WhyChooseSection />
        <FinalCtaSection />
      </main>
      <footer className="border-t border-white/10 bg-[#050707] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <img src={assetPath("/assets/brand/dst-logo-marketing-media.png")} alt="DST Marketing Media" className="h-8 w-auto" />
            <span className="font-black">Dịch vụ DST Group</span>
          </Link>
          <div className="flex flex-wrap gap-4">
            <Link to="/bar-club" className="hover:text-dst-gold">Bar/Club</Link>
            <Link to="/nha-hang-khach-san" className="hover:text-dst-gold">Nhà hàng/KS</Link>
            <a href="#service-groups" className="hover:text-dst-gold">Nhóm dịch vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
