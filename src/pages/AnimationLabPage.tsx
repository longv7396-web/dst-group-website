import { ArrowLeft, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatedLottie } from "../components/AnimatedLottie";
import { MotionIcon } from "../components/MotionIcon";
import { animationLabCandidates } from "../data/animationMap";
import { isBrokenAnimation } from "../data/brokenAnimations";
import { hashRouteHref } from "../lib/assetPath";

const labGroups = ["Hero", "Stats", "Services", "Bar/Club", "Hotel", "Process", "Contact", "Rejected"];

export default function AnimationLabPage() {
  const [activeGroup, setActiveGroup] = useState(labGroups[0]);
  const groupedCandidates = useMemo(
    () =>
      animationLabCandidates.map((item) => ({
        ...item,
        isBroken: isBrokenAnimation(item.src),
        effectiveGroup: isBrokenAnimation(item.src) ? "Rejected" : item.group,
      })),
    [],
  );
  const groupCounts = useMemo(
    () =>
      labGroups.reduce<Record<string, number>>((counts, group) => {
        counts[group] = groupedCandidates.filter((item) => item.effectiveGroup === group).length;
        return counts;
      }, {}),
    [groupedCandidates],
  );
  const activeItems = groupedCandidates.filter((item) => item.effectiveGroup === activeGroup);

  return (
    <main className="min-h-screen bg-[#050707] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href={hashRouteHref("/")}
              className="inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-dst-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Về website chính
            </a>
            <p className="section-eyebrow mt-8">Animation Lab</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Xem animation mới trước khi đưa vào website
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">
              Website chính đã quay lại bộ animation cũ. Các animation mới được để riêng ở đây để chọn bằng mắt trước khi thay vào từng section.
            </p>
          </div>
          <div className="rounded-2xl border border-dst-gold/25 bg-dst-gold/10 p-4 text-sm leading-6 text-dst-gold">
            Chọn file nào nhìn hợp, rồi mới map vào trang thật.
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {labGroups.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-bold transition",
                activeGroup === group
                  ? "border-dst-gold/60 bg-dst-gold/15 text-dst-gold"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-dst-gold/40 hover:text-dst-gold",
              ].join(" ")}
            >
              {group} <span className="text-white/38">({groupCounts[group] ?? 0})</span>
            </button>
          ))}
        </div>

        <section className="mt-10 scroll-mt-24">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="section-eyebrow">{activeGroup}</p>
              <h2 className="mt-2 text-2xl font-black text-white">{activeItems.length} animation ứng viên</h2>
            </div>
          </div>

          {activeItems.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {activeItems.map((item) => (
                <article key={item.src} className="animation-lab-card">
                  <div className="animation-lab-preview">
                    {item.isBroken ? (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-white/60">
                        <MotionIcon name="media" size="4rem" title={item.label} />
                        <p className="text-xs font-semibold tracking-wide text-red-200">
                          Animation lỗi runtime, không dùng
                        </p>
                      </div>
                    ) : (
                      <AnimatedLottie
                        src={item.src}
                        className="animation-lab-lottie"
                        ariaLabel={item.label}
                        autoplay
                        loop
                        playWhenVisible
                        fallback={<MotionIcon name="media" size="4rem" title={item.label} />}
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-black text-white">{item.label}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/58">{item.note}</p>
                        {item.isBroken ? (
                          <p className="mt-3 inline-flex rounded-full border border-red-300/40 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-200">
                            broken/rejected
                          </p>
                        ) : null}
                      </div>
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-dst-gold/40 hover:text-dst-gold"
                        aria-label={`Mở file ${item.label}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="mt-4 break-all rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/42">
                      {item.src}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/58">
              Chưa có animation trong nhóm này. File nào không đạt sẽ được ghi vào report thay vì đưa vào website chính.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
