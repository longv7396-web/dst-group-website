import { useEffect } from "react";
import { assetPath } from "./assetPath";

type SeoConfig = {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

function ensureMetaByName(name: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  const created = !meta;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  return { meta, created };
}

function ensureMetaByProperty(property: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  const created = !meta;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  return { meta, created };
}

function ensureCanonical() {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const created = !link;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  return { link, created };
}

export function usePageSeo(config: SeoConfig) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = config.title;

    const { meta: descriptionMeta, created: createdDescription } = ensureMetaByName("description");
    const prevDescription = descriptionMeta.content;
    descriptionMeta.content = config.description;

    const { meta: ogTitleMeta, created: createdOgTitle } = ensureMetaByProperty("og:title");
    const prevOgTitle = ogTitleMeta.content;
    ogTitleMeta.content = config.ogTitle ?? config.title;

    const { meta: ogDescriptionMeta, created: createdOgDescription } = ensureMetaByProperty("og:description");
    const prevOgDescription = ogDescriptionMeta.content;
    ogDescriptionMeta.content = config.ogDescription ?? config.description;

    const { meta: ogImageMeta, created: createdOgImage } = ensureMetaByProperty("og:image");
    const prevOgImage = ogImageMeta.content;
    if (config.ogImage) {
      ogImageMeta.content = assetPath(config.ogImage);
    }

    const canonicalTarget = config.canonical?.trim();
    const { link: canonicalLink, created: createdCanonical } = ensureCanonical();
    const prevCanonical = canonicalLink.href;
    if (canonicalTarget) {
      canonicalLink.href = canonicalTarget;
    }

    return () => {
      document.title = previousTitle;

      if (createdDescription && descriptionMeta.parentNode) descriptionMeta.parentNode.removeChild(descriptionMeta);
      else descriptionMeta.content = prevDescription;

      if (createdOgTitle && ogTitleMeta.parentNode) ogTitleMeta.parentNode.removeChild(ogTitleMeta);
      else ogTitleMeta.content = prevOgTitle;

      if (createdOgDescription && ogDescriptionMeta.parentNode) ogDescriptionMeta.parentNode.removeChild(ogDescriptionMeta);
      else ogDescriptionMeta.content = prevOgDescription;

      if (createdOgImage && ogImageMeta.parentNode) ogImageMeta.parentNode.removeChild(ogImageMeta);
      else ogImageMeta.content = prevOgImage;

      if (canonicalTarget) {
        if (createdCanonical && canonicalLink.parentNode) canonicalLink.parentNode.removeChild(canonicalLink);
        else canonicalLink.href = prevCanonical;
      }
    };
  }, [config.canonical, config.description, config.ogDescription, config.ogImage, config.ogTitle, config.title]);
}
