import { useState } from "react";
import type { CSSProperties } from "react";
import { TRAVEL_IMAGE_FALLBACK } from "../../data/travelImages";
import { assetPath } from "../../lib/assetPath";

type TravelImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  objectPosition?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decorative?: boolean;
};

export function TravelImage({
  src,
  alt,
  className = "",
  fallbackSrc = TRAVEL_IMAGE_FALLBACK,
  objectPosition = "center",
  loading = "lazy",
  fetchPriority = "auto",
  decorative = false,
}: TravelImageProps) {
  const primarySrc = assetPath(src);
  const fallback = assetPath(fallbackSrc);
  const [currentSrc, setCurrentSrc] = useState(primarySrc);
  const [usedFallback, setUsedFallback] = useState(false);

  const style = {
    "--travel-img-pos": objectPosition,
  } as CSSProperties;

  return (
    <img
      src={currentSrc}
      alt={decorative ? "" : alt}
      className={`travel-image ${className}`.trim()}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onError={() => {
        if (!usedFallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
          setUsedFallback(true);
        }
      }}
    />
  );
}
