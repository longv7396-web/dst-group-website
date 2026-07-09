import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { company } from "../../data/company";
import { TRAVEL_PRICE_DISCLAIMER } from "../../data/travelProjects";

type ProjectCTAProps = {
  contactHref: string;
  contactNote?: string;
};

export function ProjectCTA({ contactHref, contactNote }: ProjectCTAProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="travel-cta-panel dst-travel-cta-panel travel-cta-panel--premium" id="travel-contact">
      <div className="travel-cta-glow" aria-hidden="true" />
      <div className="travel-cta-orb travel-cta-orb--left" aria-hidden="true" />
      <div className="travel-cta-orb travel-cta-orb--right" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-eyebrow">Liên hệ DST Group</p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Bạn cần check căn cho ngày cụ thể?</h2>
        <p className="mt-4 text-base leading-8 text-white/72">
          DST sẽ hỗ trợ kiểm tra lịch trống, giá và căn phù hợp với số lượng khách.
        </p>
        <p className="travel-cta-disclaimer mt-4">{contactNote ?? TRAVEL_PRICE_DISCLAIMER}</p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href={contactHref} className="premium-button travel-cta-btn-primary w-full sm:w-auto">
            Nhắn Zalo check lịch
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`tel:${company.phone.value.replace(/\s/g, "")}`}
            className="ghost-button travel-cta-btn-secondary w-full sm:w-auto"
          >
            Gọi tư vấn
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <a
          href={company.zalo.value}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-dst-gold transition hover:text-white"
        >
          Hoặc nhắn Zalo DST Group
          <ArrowRight className="h-4 w-4 motion-arrow" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
