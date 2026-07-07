import type { DotLottie } from "@lottiefiles/dotlottie-react";
import type { ReactNode } from "react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { isBrokenAnimation } from "../data/brokenAnimations";
import { assetPath } from "../lib/assetPath";

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact,
  })),
);

type AnimatedLottieProps = {
  src: string;
  className?: string;
  ariaLabel?: string;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  playWhenVisible?: boolean;
  fallback?: ReactNode;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function AnimatedLottie({
  src,
  className,
  ariaLabel,
  loop = true,
  autoplay = false,
  playOnHover = false,
  playWhenVisible = true,
  fallback = null,
}: AnimatedLottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const [isVisible, setIsVisible] = useState(!playWhenVisible);
  const [hasError, setHasError] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isBlocked = isBrokenAnimation(src);
  const resolvedSrc = assetPath(src);
  const shouldAutoplay = !reducedMotion && autoplay && isVisible;
  const shouldRender = isVisible && !isBlocked;

  useEffect(() => {
    if (!playWhenVisible || isVisible) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, playWhenVisible]);

  useEffect(() => {
    const player = dotLottieRef.current;
    if (!player) return;

    if (shouldAutoplay) {
      player.play();
      return;
    }

    player.pause();
  }, [shouldAutoplay]);

  const handleMouseEnter = () => {
    if (reducedMotion || !playOnHover) return;
    dotLottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!playOnHover) return;
    dotLottieRef.current?.pause();
  };

  return (
    <div
      ref={containerRef}
      className={["animated-lottie", className].filter(Boolean).join(" ")}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      {shouldRender && !hasError ? (
        <Suspense fallback={fallback}>
          <DotLottieReact
            src={resolvedSrc}
            loop={loop}
            autoplay={shouldAutoplay}
            dotLottieRefCallback={(instance) => {
              dotLottieRef.current = instance;
            }}
            onError={() => setHasError(true)}
          />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
