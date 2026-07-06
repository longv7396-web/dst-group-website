import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionIcon } from "../components/MotionIcon";
import type { MotionIconName } from "../components/MotionIcon";
import {
  barClubContact,
  barClubDeliverables,
  barClubEventJourney,
  barClubFaqs,
  barClubHero,
  barClubPackages,
  barClubProblems,
  barClubProjects,
  barClubSevenDayTimeline,
  barClubServiceCards,
} from "../data/barClubData";
import { assetPath } from "../lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = ["design", "content", "video", "booking", "social", "website"] satisfies MotionIconName[];
const problemIcons = ["process-plan", "design", "media", "analytics"] satisfies MotionIconName[];
const journeyIcons = ["process-plan", "studio", "process-report"] satisfies MotionIconName[];
const sevenDayIcons = ["process-plan", "design", "video", "booking", "studio", "media", "analytics"] satisfies MotionIconName[];
const deliverableIcons = ["design", "process-plan", "social", "video", "content", "ads", "media", "studio", "video", "booking"] satisfies MotionIconName[];
const packageIcons = ["ads", "content", "media"] satisfies MotionIconName[];

const venueTypes = ["Bar", "Club", "Lounge", "Beach club", "Karaoke", "Other"];
const eventNeeds = ["Visual", "Content", "Recap", "Ads", "Booking", "Gói tháng"];

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
          Nhận kế hoạch
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

      <div className="subpage-hero-shell relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="barclub-hero-content max-w-4xl">
          <p className="section-eyebrow">{barClubHero.eyebrow}</p>
          <h1 className="barclub-hero-title mt-5 font-black text-white">{barClubHero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">{barClubHero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#bar-contact" className="premium-button">
              Nhận kế hoạch truyền thông event
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#bar-projects" className="ghost-button">
              Xem dự án nightlife
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
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="problems" className="bar-section bg-[#050707] py-24 text-white lg:py-32" data-bar-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BarSectionHeading eyebrow="Vấn đề của Bar / Club" title="Đêm diễn hay chưa đủ, khách cần thấy nó trước khi họ quyết định đến">
          Nhiều bar/club có line-up tốt, không gian đẹp, âm nhạc ổn nhưng truyền thông chưa đủ đều. Event đăng muộn, visual thiếu đồng bộ, recap chưa hấp dẫn, quảng cáo chưa gắn với booking khiến khách khó nhớ và khó quay lại.
        </BarSectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {barClubProblems.map((problem, index) => (
            <article key={problem.title} className="bar-card barclub-card" data-bar-reveal>
              <span className="motion-icon-badge barclub-motion-icon">
                {(() => {
                  const iconName = problemIcons[index] ?? "ads";
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
        <BarSectionHeading eyebrow="Before / During / After Event" title="Một đêm diễn cần truyền thông theo cả hành trình">
          DST xây chất liệu truyền thông theo 3 giai đoạn để sự kiện không chỉ diễn ra, mà còn được nhìn thấy, được nhớ và được chia sẻ.
        </BarSectionHeading>
        <div className="barclub-timeline-grid">
          {barClubEventJourney.map((stage, index) => {
            const iconName = journeyIcons[index] ?? "process-plan";
            return (
              <article key={stage.phase} className="bar-card barclub-timeline-card" data-bar-reveal>
                <div className="flex items-start justify-between gap-4">
                  <span className="motion-icon-badge barclub-motion-icon">
                    <MotionIcon name={iconName} variant="gold" title={stage.label} />
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
            Lên kế hoạch cho event tiếp theo
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
        <BarSectionHeading eyebrow="Timeline 7 ngày trước event" title="Truyền thông event nên bắt đầu trước khi đêm diễn diễn ra">
          Một event nightlife cần nhịp nội dung đủ sớm để khách nhìn thấy, ghi nhớ và có lý do đặt lịch.
        </BarSectionHeading>
        <div className="barclub-seven-day-timeline">
          {barClubSevenDayTimeline.map((item, index) => {
            const iconName = sevenDayIcons[index] ?? "process-plan";
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
            Lên lịch truyền thông event
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
        <BarSectionHeading eyebrow="DST triển khai gì cho Bar / Club" title="DST có thể đồng hành từ hình ảnh đến truyền thông">
          Từ line-up visual, event content, recap đến ads và booking/inbox, mỗi hạng mục được chọn theo lịch sự kiện và cách vận hành thực tế của venue.
        </BarSectionHeading>
        <div className="barclub-service-grid">
          {barClubServiceCards.map((service, index) => {
            const iconName = serviceIcons[index] ?? "ads";
            return (
              <article key={service.title} className="bar-card barclub-service-card group" data-bar-reveal>
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-black uppercase text-dst-gold">
                  {service.tag}
                </span>
                <div className="barclub-icon mt-5">
                  <MotionIcon name={iconName} size="clamp(4.3rem, 5.4vw, 5.55rem)" variant="gold" title={service.title} />
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
            Nhận gói phù hợp
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
        <BarSectionHeading eyebrow="Bạn sẽ nhận được gì?" title="Một gói truyền thông event có thể bao gồm">
          DST giúp đóng gói đầu ra theo nhu cầu thực tế của từng event, từ visual đến nội dung social và recap.
        </BarSectionHeading>
        <div className="barclub-deliverable-grid">
          {barClubDeliverables.map((item, index) => {
            const iconName = deliverableIcons[index] ?? "content";
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
        <BarSectionHeading eyebrow="Portfolio Bar / Club" title="Dự án thật trong nhóm nightlife và F&B giải trí">
          Case card chỉ trình bày các đầu việc và chất liệu đầu ra có căn cứ từ dữ liệu dự án hiện có, không thêm số liệu tăng trưởng khi chưa có dữ liệu xác nhận.
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
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase text-dst-gold">DST đã xử lý</p>
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
                    <p className="text-xs font-black uppercase text-dst-gold">Kết quả đầu ra</p>
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
                    Xem dự án
                  </a>
                  <a href="#bar-contact" className="premium-button">
                    Trao đổi cho mô hình tương tự
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
        <BarSectionHeading eyebrow="Gói dịch vụ gợi ý" title="Gói triển khai gợi ý cho bar/club">
          Chưa ghi giá khi chưa có báo giá cụ thể. DST có thể tư vấn gói theo một event, theo tháng hoặc triển khai đồng bộ cho lịch nightlife đều.
        </BarSectionHeading>
        <div className="grid gap-4 lg:grid-cols-3">
          {barClubPackages.map((item, index) => (
            <article key={item.title} className={["bar-card barclub-package-card", item.featured ? "is-featured" : ""].filter(Boolean).join(" ")} data-bar-reveal>
              <span className="motion-icon-badge barclub-motion-icon">
                {(() => {
                  const iconName = packageIcons[index] ?? "ads";
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
            Nhận gói phù hợp
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
          <h2 className="barclub-section-title mt-3 text-white">Gửi thông tin event để DST gợi ý hướng triển khai</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            Chỉ cần gửi lịch event, mô hình quán và nhu cầu chính. DST sẽ có đủ ngữ cảnh để gợi ý hướng visual, content, recap hoặc ads phù hợp hơn.
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
        <BarSectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp khi làm truyền thông event nightlife" />
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
          <h2 className="barclub-section-title mt-4 text-white">Bạn có event sắp diễn ra? Hãy để DST chuẩn bị truyền thông trước khi đêm diễn bắt đầu.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            Gửi lịch event, line-up hoặc mô hình quán. DST sẽ gợi ý hướng nội dung, visual và kênh triển khai phù hợp.
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
