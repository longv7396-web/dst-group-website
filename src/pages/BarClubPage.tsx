import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedLottie } from "../components/AnimatedLottie";
import { MotionIcon } from "../components/MotionIcon";
import { ProjectMedia } from "../components/ProjectMedia";
import { animations } from "../data/animationMap";
import {
  barClubDeliverableVisuals,
  barClubJourneyVisuals,
  barClubPackageVisuals,
  barClubProblemVisuals,
  barClubServiceVisuals,
  barClubTimelineVisuals,
  getPricingCategoryIcon,
  pickVisual,
} from "../data/visualMap";
import {
  barClubContact,
  barClubDeliverables,
  barClubEventJourney,
  barClubFaqs,
  barClubHero,
  barClubPackages,
  barClubPricing,
  barClubProblems,
  barClubProjects,
  barClubSevenDayTimeline,
  barClubServiceCards,
} from "../data/barClubData";
import { assetPath } from "../lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const journeyAnimations = [animations.barclub.before, animations.barclub.during, animations.barclub.after] as const;

const venueTypes = ["Bar", "Club", "Lounge", "Beach club", "Karaoke", "Other"];
const eventNeeds = ["Visual", "Content", "Recap", "Ads", "Booking", "Gói tháng"];

const barClubSectionIds = [
  "problems",
  "event-journey",
  "solutions",
  "bar-projects",
  "bar-packages",
  "bar-pricing",
  "bar-contact",
] as const;

function useBarClubSectionLinks() {
  useLayoutEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href");
      if (!href || href.length < 2 || href.startsWith("#/")) return;

      const sectionId = href.slice(1);
      if (!barClubSectionIds.includes(sectionId as (typeof barClubSectionIds)[number])) return;

      const section = document.getElementById(sectionId);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${window.location.pathname}#/bar-club`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

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
    ["Hành trình", "#event-journey"],
    ["Dịch vụ", "#solutions"],
    ["Dự án", "#bar-projects"],
    ["Gói", "#bar-packages"],
    ["Báo giá", "#bar-pricing"],
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
        <a
          href="#bar-contact"
          className="rounded-full border border-dst-gold/50 px-4 py-2 text-sm font-bold text-dst-gold transition hover:bg-dst-gold hover:text-dst-ink"
        >
          Nhận tư vấn
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
    <div className="bar-reveal mx-auto mb-7 max-w-3xl text-center" data-bar-reveal>
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
    <section className="barclub-hero relative min-h-[78svh] overflow-hidden bg-[#040303] text-white">
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

      <div className="subpage-hero-shell relative z-10 mx-auto grid min-h-[78svh] max-w-7xl items-center gap-8 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.55fr] lg:px-8">
        <div className="barclub-hero-content max-w-4xl">
          <p className="section-eyebrow">{barClubHero.eyebrow}</p>
          <h1 className="barclub-hero-title mt-5 font-black text-white">{barClubHero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">{barClubHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#bar-contact" className="premium-button">
              Nhận tư vấn cho event
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#bar-projects" className="ghost-button">
              Xem dự án đã có
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 flex max-w-3xl flex-wrap gap-2.5">
            {barClubHero.chips.map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-black text-white/78 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
        <AnimatedLottie
          src={animations.hero.barclub}
          className="subpage-hero-lottie hidden lg:block"
          ariaLabel="Lịch truyền thông event bar club"
          autoplay
          loop
          playWhenVisible={false}
          fallback={<MotionIcon name="booking" size="8rem" variant="gold" title="Event bar club" />}
        />
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="problems" className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Vấn đề của Bar / Club" title="Một đêm hay — nhưng khách có biết sớm không?">
          Nhiều quán có line-up tốt nhưng poster, bài đăng hoặc recap chưa kịp chuẩn bị. DST nghe nhu cầu trước khi tư vấn hạng mục.
        </BarSectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {barClubProblems.map((problem, index) => (
            <article key={problem.title} className="bar-card barclub-card" data-bar-reveal>
              <span className="motion-icon-badge barclub-motion-icon">
                {(() => {
                  const iconName = pickVisual(barClubProblemVisuals, index, "ads");
                  return <MotionIcon name={iconName} variant="gold" title={problem.title} />;
                })()}
              </span>
              <span className="mt-5 block text-sm font-black text-dst-gold">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">{problem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventJourneySection() {
  return (
    <section id="event-journey" className="bar-section bg-[#080707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Before / During / After Event" title="Truyền thông event chia theo từng giai đoạn">
          Trước event: thông tin rõ. Trong event: tư liệu thật. Sau event: recap để dùng lại.
        </BarSectionHeading>
        <div className="barclub-timeline-grid">
          {barClubEventJourney.map((stage, index) => {
            const iconName = pickVisual(barClubJourneyVisuals, index, "process-plan");
            return (
              <article key={stage.phase} className="bar-card barclub-timeline-card" data-bar-reveal>
                <div className="flex items-start justify-between gap-4">
                  <span className="motion-icon-badge barclub-motion-icon">
                    <AnimatedLottie
                      src={journeyAnimations[index] ?? animations.barclub.before}
                      className="card-lottie-icon"
                      ariaLabel={stage.label}
                      autoplay
                      loop={false}
                      fallback={<MotionIcon name={iconName} variant="gold" title={stage.label} />}
                    />
                  </span>
                  <span className="rounded-full border border-dst-gold/25 bg-dst-gold/10 px-3 py-1 text-xs font-black uppercase text-dst-gold">
                    {stage.phase}
                  </span>
                </div>
                <p className="mt-5 text-sm font-black text-dst-gold">{stage.label}</p>
                <h3 className="mt-3 text-xl font-black leading-tight text-white">{stage.title}</h3>
                <ul className="mt-6 grid gap-2">
                  {stage.deliverables.map((item) => (
                    <li key={item} className="barclub-check-item">
                      <span aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="#bar-contact" className="ghost-button">
            Trao đổi lịch event
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SevenDayTimelineSection() {
  return (
    <section id="event-timeline" className="bar-section bg-[#050707] py-20 text-white lg:py-28" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Timeline tham khảo" title="Nên chuẩn bị nội dung trước ngày diễn">
          Đây là quy trình đề xuất khi tư vấn. Lịch thực tế sẽ điều chỉnh theo từng event.
        </BarSectionHeading>
        <div className="barclub-seven-day-timeline">
          {barClubSevenDayTimeline.map((item, index) => {
            const iconName = pickVisual(barClubTimelineVisuals, index, "process-plan");
            return (
              <article key={item.marker} className="bar-card barclub-mini-timeline-card" data-bar-reveal>
                <div className="flex items-center justify-between gap-3">
                  <span className="motion-icon-badge barclub-motion-icon barclub-compact-icon">
                    <MotionIcon name={iconName} variant="gold" title={item.marker} />
                  </span>
                  <span className="barclub-marker-pill">{item.marker}</span>
                </div>
                <h3 className="mt-4 text-base font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-9 text-center">
          <a href="#event-brief" className="ghost-button">
            Gửi lịch event
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="solutions" className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="DST làm gì cho Bar / Club" title="Hạng mục có thể triển khai theo event">
          Poster, fanpage, video, ads — DST tư vấn theo lịch event, ngân sách và kênh quán đang dùng.
        </BarSectionHeading>
        <div className="barclub-service-grid">
          {barClubServiceCards.map((service, index) => {
            const iconName = pickVisual(barClubServiceVisuals, index, "branding");
            return (
              <article key={service.title} className="bar-card barclub-service-card group" data-bar-reveal>
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-black uppercase text-dst-gold">
                  {service.tag}
                </span>
                <div className="barclub-icon mt-5">
                  <MotionIcon
                    name={iconName}
                    size="clamp(4.3rem, 5.4vw, 5.55rem)"
                    variant="gold"
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
        <div className="mt-10 text-center">
          <a href="#bar-packages" className="premium-button">
            Tư vấn gói triển khai
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section id="deliverables" className="bar-section bg-[#080707] py-20 text-white lg:py-28" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Đầu ra có thể có" title="Một số hạng mục thường được tư vấn">
          Mỗi event có phạm vi khác nhau. DST sẽ trao đổi thêm để chọn hạng mục phù hợp.
        </BarSectionHeading>
        <div className="barclub-deliverable-grid">
          {barClubDeliverables.map((item, index) => {
            const iconName = pickVisual(barClubDeliverableVisuals, index, "content");
            return (
              <article key={item} className="bar-card barclub-deliverable-card" data-bar-reveal>
                <span className="motion-icon-badge barclub-motion-icon barclub-compact-icon">
                  <MotionIcon name={iconName} variant="gold" title={item} />
                </span>
                <h3 className="mt-4 text-base font-black leading-tight text-white">{item}</h3>
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
        <BarSectionHeading eyebrow="Portfolio Bar / Club" title="Một số hình ảnh/dự án DST đã triển khai">
          Thông tin bên dưới được ghi theo tài liệu DST. Những mục chưa có chi tiết sẽ được tư vấn riêng.
        </BarSectionHeading>
        <div className="grid gap-5 lg:grid-cols-2">
          {barClubProjects.map((project) => (
            <article key={project.name} className={`bar-card barclub-project-card barclub-project-card--${project.imageDisplay} group`} data-bar-reveal>
              <div className="barclub-project-media">
              <ProjectMedia
                image={project.image}
                alt={`Ảnh dự án ${project.name}`}
                display={project.imageDisplay}
                variant={project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? "stacked" : "overlay"}
                className={project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? "" : "absolute inset-0"}
              />
              {project.imageDisplay !== "pdf-slide" && project.imageDisplay !== "compact" ? (
                <div className="barclub-project-shade" aria-hidden="true" />
              ) : null}
              {project.imageDisplay !== "pdf-slide" && project.imageDisplay !== "compact" ? (
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                  <h3 className="mt-2 text-3xl font-black leading-tight text-white">{project.name}</h3>
                </div>
              ) : null}
              </div>
              {project.imageDisplay === "pdf-slide" || project.imageDisplay === "compact" ? (
                <div className="border-b border-white/10 px-5 py-4 sm:px-7">
                  <p className="text-xs font-black uppercase text-dst-gold">{project.sector}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">{project.name}</h3>
                </div>
              ) : null}
              <div className="p-5 sm:p-7">
                <p className="text-sm leading-7 text-white/66">{project.summary}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase text-dst-gold">Thông tin có nguồn</p>
                    <ul className="mt-3 grid gap-2">
                      {project.handled.map((item) => (
                        <li key={item} className="barclub-check-item">
                          <span aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-dst-gold">Nguồn tài liệu</p>
                    <ul className="mt-3 grid gap-2">
                      {project.outputs.map((item) => (
                        <li key={item} className="barclub-check-item">
                          <span aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="#bar-projects" className="ghost-button">
                    Xem thông tin
                  </a>
                  <a href="#bar-contact" className="premium-button">
                    Trao đổi nhu cầu
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="bar-packages" className="bar-section bg-[#080707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Hướng triển khai" title="Chọn hạng mục theo event hoặc theo tháng">
          Chi phí được tư vấn theo quy mô, số lượng hạng mục và thời điểm triển khai.
        </BarSectionHeading>
        <div className="grid gap-4 lg:grid-cols-3">
          {barClubPackages.map((item, index) => (
            <article key={item.title} className={["bar-card barclub-package-card", item.featured ? "is-featured" : ""].filter(Boolean).join(" ")} data-bar-reveal>
              <span className="motion-icon-badge barclub-motion-icon">
                {(() => {
                  const iconName = pickVisual(barClubPackageVisuals, index, "ads");
                  return <MotionIcon name={iconName} variant="gold" title={item.title} />;
                })()}
              </span>
              <p className="text-xs font-black uppercase text-dst-gold">{item.label}</p>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">Dành cho: {item.audience}</p>
              <ul className="mt-6 grid gap-2">
                {item.includes.map((include) => (
                  <li key={include} className="barclub-check-item">
                    <span aria-hidden="true" />
                    {include}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-full border border-dst-gold/30 bg-dst-gold/10 px-4 py-2 text-center text-xs font-black uppercase text-dst-gold">
                {item.cta}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#bar-contact" className="premium-button">
            Tư vấn gói triển khai
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function getPricingDisplayDetails(item: (typeof barClubPricing)[number]) {
  if (item.displayDetails?.length) return item.displayDetails;
  if (item.details?.length) return item.details.slice(0, 4);
  return [];
}

function PricingSection() {
  return (
    <section id="bar-pricing" className="bar-section bg-[#080706] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="CHI PHÍ VÀ HẠNG MỤC" title="Báo giá theo phạm vi triển khai">
          Các hạng mục được tổng hợp từ BAO GIA.pdf trang 26–27. Một số chi phí phụ thuộc vào phạm vi triển khai, số
          lượng nội dung và kênh quảng cáo khách chọn.
        </BarSectionHeading>
        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {barClubPricing.map((item, index) => {
            const displayDetails = getPricingDisplayDetails(item);

            return (
              <article
                key={`${item.category}-${item.item}`}
                className="bar-card barclub-package-card barclub-pricing-card flex h-full flex-col"
                data-bar-reveal
              >
                <span className="motion-icon-badge barclub-motion-icon">
                  {(() => {
                    const iconName = getPricingCategoryIcon(item.category, index);
                    return <MotionIcon name={iconName} variant="gold" title={item.item} />;
                  })()}
                </span>
                <p className="text-xs font-black uppercase text-dst-gold">{item.category}</p>
                <h3 className="mt-4 text-xl font-black leading-tight text-white">{item.item}</h3>
                <p className="mt-5 text-lg font-black text-dst-gold">{item.price}</p>
                {displayDetails.length > 0 ? (
                  <ul className="barclub-pricing-list mt-4 grid gap-2.5">
                    {displayDetails.map((detail) => (
                      <li key={detail} className="barclub-check-item">
                        <span aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm leading-7 text-white/58">
          Chi phí thực tế được tư vấn theo phạm vi, số lượng nội dung và kênh triển khai.
        </p>
        <div className="mt-8 text-center">
          <a href="#bar-contact" className="premium-button">
            Tư vấn gói triển khai
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

type EventBriefState = {
  brand: string;
  venueType: string;
  eventDate: string;
  needs: string[];
  phone: string;
  note: string;
};

const initialEventBrief: EventBriefState = {
  brand: "",
  venueType: "Bar",
  eventDate: "",
  needs: ["Visual"],
  phone: "",
  note: "",
};

function EventBriefSection() {
  const [brief, setBrief] = useState<EventBriefState>(initialEventBrief);
  const phoneHref = barClubContact.phone.replace(/\s/g, "");

  function updateField(field: keyof Omit<EventBriefState, "needs">, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function toggleNeed(need: string) {
    setBrief((current) => {
      const hasNeed = current.needs.includes(need);
      return {
        ...current,
        needs: hasNeed ? current.needs.filter((item) => item !== need) : [...current.needs, need],
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Thông tin event Bar/Club cần DST tư vấn");
    const body = encodeURIComponent(
      [
        `Tên quán / thương hiệu: ${brief.brand || "Chưa nhập"}`,
        `Loại hình: ${brief.venueType}`,
        `Ngày event dự kiến: ${brief.eventDate || "Chưa nhập"}`,
        `Nhu cầu: ${brief.needs.length ? brief.needs.join(", ") : "Chưa chọn"}`,
        `SĐT/Zalo: ${brief.phone || "Chưa nhập"}`,
        `Ghi chú thêm: ${brief.note || "Không có"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${barClubContact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="event-brief" className="bar-section bg-[#050707] py-20 text-white lg:py-28" data-bar-reveal>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 lg:px-8">
        <div className="bar-reveal" data-bar-reveal>
          <p className="section-eyebrow">Gửi thông tin event</p>
          <h2 className="barclub-section-title mt-3 text-white">Gửi lịch event, DST sẽ tư vấn cách làm phù hợp</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            Bạn gửi lịch event, mô hình quán và nhu cầu chính. DST sẽ xem trước khi tư vấn hạng mục phù hợp.
          </p>
          <div className="mt-7 grid gap-3">
            <a href={`tel:${phoneHref}`} className="barclub-contact-tile">
              <MotionIcon name="contact" size="1.45rem" variant="gold" title="Hotline" />
              <span>Hotline {barClubContact.phone}</span>
            </a>
            <a href={barClubContact.facebook} target="_blank" rel="noopener noreferrer" className="barclub-contact-tile">
              <MotionIcon name="social" size="1.45rem" variant="gold" title="Fanpage" />
              <span>Inbox Fanpage DST Group</span>
            </a>
            <a href={barClubContact.zalo} target="_blank" rel="noopener noreferrer" className="barclub-contact-tile">
              <MotionIcon name="booking" size="1.45rem" variant="gold" title="Zalo/Hotline" />
              <span>Chat Zalo/Hotline</span>
            </a>
          </div>
        </div>

        <form className="bar-card barclub-brief-form" onSubmit={handleSubmit} data-bar-reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="barclub-field">
              <span>Tên quán / thương hiệu</span>
              <input value={brief.brand} onChange={(event) => updateField("brand", event.target.value)} placeholder="VD: DST Lounge" />
            </label>
            <label className="barclub-field">
              <span>Loại hình</span>
              <select value={brief.venueType} onChange={(event) => updateField("venueType", event.target.value)}>
                {venueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="barclub-field">
              <span>Ngày event dự kiến</span>
              <input type="date" value={brief.eventDate} onChange={(event) => updateField("eventDate", event.target.value)} />
            </label>
            <label className="barclub-field">
              <span>SĐT/Zalo</span>
              <input value={brief.phone} onChange={(event) => updateField("phone", event.target.value)} inputMode="tel" placeholder="Số điện thoại hoặc Zalo" />
            </label>
          </div>

          <div className="mt-5">
            <p className="text-sm font-black text-white">Nhu cầu</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {eventNeeds.map((need) => (
                <button
                  key={need}
                  type="button"
                  className={["barclub-need-chip", brief.needs.includes(need) ? "is-active" : ""].filter(Boolean).join(" ")}
                  onClick={() => toggleNeed(need)}
                >
                  {need}
                </button>
              ))}
            </div>
          </div>

          <label className="barclub-field mt-5">
            <span>Ghi chú thêm</span>
            <textarea value={brief.note} onChange={(event) => updateField("note", event.target.value)} rows={4} placeholder="Line-up, phong cách nhạc, quy mô dự kiến hoặc deadline cần có visual..." />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-white/50">
              Form đang dùng mailto. DST sẽ phản hồi qua email, hotline hoặc Zalo theo thông tin bạn cung cấp.
            </p>
            <button type="submit" className="premium-button">
              Gửi thông tin event
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="bar-faq" className="bar-section bg-[#080707] py-20 text-white lg:py-28" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <div className="barclub-faq-grid">
          {barClubFaqs.map((item) => (
            <article key={item.question} className="bar-card barclub-faq-card" data-bar-reveal>
              <h3 className="text-base font-black leading-tight text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.answer}</p>
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
      <div className="relative mx-auto grid max-w-7xl gap-6 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.5)] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:gap-8 lg:p-10">
        <div>
          <p className="section-eyebrow">Trao đổi dự án</p>
          <h2 className="barclub-section-title mt-4 text-white">Có event sắp diễn ra?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Gửi lịch event, line-up hoặc mô tả quán. DST sẽ xem và tư vấn poster, fanpage, ads hoặc recap phù hợp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={barClubContact.facebook} target="_blank" rel="noopener noreferrer" className="premium-button">
              Inbox Fanpage DST Group
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={`tel:${phoneHref}`} className="ghost-button">
              Gọi {barClubContact.phone}
              <MotionIcon name="contact" size="1.35rem" variant="gold" title="Hotline" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          <a href={barClubContact.facebook} target="_blank" rel="noopener noreferrer" className="barclub-contact-tile">
            <MotionIcon name="social" size="1.65rem" variant="gold" title="Facebook" />
            <span>Inbox Fanpage DST Group</span>
          </a>
          <a href={barClubContact.zalo} target="_blank" rel="noopener noreferrer" className="barclub-contact-tile">
            <MotionIcon name="booking" size="1.65rem" variant="gold" title="Zalo/Hotline" />
            <span>Chat Zalo/Hotline</span>
          </a>
          <a href={`tel:${phoneHref}`} className="barclub-contact-tile">
            <MotionIcon name="contact" size="1.65rem" variant="gold" title="Hotline" />
            <span>Gọi {barClubContact.phone}</span>
          </a>
          <a href={barClubContact.websiteUrl} target="_blank" rel="noopener noreferrer" className="barclub-contact-tile">
            <MotionIcon name="website" size="1.65rem" variant="gold" title="Website" />
            <span>Website {barClubContact.website}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function BarClubPage() {
  const rootRef = useBarClubMotion();
  useBarClubSectionLinks();

  return (
    <div ref={rootRef} className="barclub-page bg-[#050707] text-white">
      <BarClubHeader />
      <main>
        <BarClubHero />
        <ProblemsSection />
        <EventJourneySection />
        <SevenDayTimelineSection />
        <ServicesSection />
        <DeliverablesSection />
        <PortfolioSection />
        <PackagesSection />
        <PricingSection />
        <EventBriefSection />
        <FaqSection />
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
            <a href={barClubContact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-dst-gold">Fanpage</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
