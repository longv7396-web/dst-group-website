import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "travel-overview", label: "Tổng quan" },
  { id: "travel-highlights", label: "Điểm nổi bật" },
  { id: "travel-pricing", label: "Bảng giá" },
  { id: "travel-amenities", label: "Tiện ích" },
  { id: "travel-contact", label: "Tư vấn" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProjectDetailNav() {
  const [activeId, setActiveId] = useState<string>(NAV_LINKS[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (intersecting[0]?.target.id) setActiveId(intersecting[0].target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`travel-detail-nav${visible ? " is-visible" : ""}`}
      aria-label="Điều hướng trang dự án"
    >
      <div className="travel-detail-nav-inner">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? "is-active" : ""}
            onClick={(event) => {
              event.preventDefault();
              setActiveId(link.id);
              scrollToSection(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
