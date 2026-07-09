# Image Quality Report

Date: 2026-07-09

## Scope audited

- Home (`#/`)
- Bar/Club (`#/bar-club`)
- Nhà hàng/Khách sạn (`#/nha-hang-khach-san`)
- Dịch vụ (`#/dich-vu`)
- Travel list (`#/projects`)
- Travel detail:
  - `#/projects/holiday-ha-long`
  - `#/projects/villa-tuan-chau`
  - `#/projects/villa-sun-feria`
  - `#/projects/villa-flc`

## Current image mapping by route

### Home (`#/`)

- Hero video poster: `/assets/showcase/valley-beach-club-hero.webp`
- Industry cards:
  - `/assets/showcase/valley-beach-club-hero.webp`
  - `/assets/showcase/birds-nest-cafe-showcase.webp`
  - `/assets/showcase/grand-view-palace-showcase.webp`
- Gallery:
  - `/assets/showcase/valley-beach-club-hero.webp`
  - `/assets/showcase/cana-beer-showcase.webp`
  - `/assets/showcase/ho-co-tien-showcase.webp`
  - `/assets/showcase/birds-nest-cafe-showcase.webp`
  - `/assets/showcase/cabi-beach-showcase.webp`
  - `/assets/showcase/grand-view-palace-showcase.webp`

### Bar/Club (`#/bar-club`)

- Hero poster: from `barClubHero.poster` in `src/data/barClubData.ts`
- Project visuals use entries from `barClubProjects` and `ProjectMedia` with local assets in `/assets/bar-club` and `/assets/showcase`.

### Nhà hàng/Khách sạn (`#/nha-hang-khach-san`)

- Hero poster: from `hospitalityHero.poster` in `src/data/hospitalityData.ts`
- Project visuals from `hospitalityProjects` with local assets in `/assets/hospitality` and `/assets/showcase`.

### Dịch vụ (`#/dich-vu`)

- Hero poster: from `servicesHero.poster` in `src/data/servicesPageData.ts`
- Industry and project blocks use `/assets/showcase/*`.

### Travel list/detail (`#/projects/*`)

- Image sources are centralized in `src/data/travelImages.ts`.
- Projects already use split fields:
  - `heroImage`
  - `coverImage`
  - `gallery`
- Current travel sets:
  - `holiday-ha-long`: `holiday-hero.jpg`, `holiday-cover.jpg`, gallery set
  - `villa-tuan-chau`: `villa-tuan-chau-hero.jpg`, `villa-tuan-chau-cover.jpg`, gallery set
  - `villa-sun-feria`: `villa-sun-feria-hero.jpg`, `villa-sun-feria-cover.jpg`, gallery set
  - `villa-flc`: `villa-flc-hero.jpg`, `villa-flc-cover.jpg`, gallery set

## Quality verdict (manual visual/code audit)

Legend:

- `PASS` = suitable for current role
- `REVIEW` = usable but should be rechecked with original high-res file
- `NEED SOURCE` = should be replaced when better original is available

### Hero usage

- Home poster (`valley-beach-club-hero.webp`): `PASS`
- Travel detail heroes from `/assets/showcase/travel/*-hero.jpg`: `PASS` for current rendering
- Some project media entries that originate from old PDF/image exports: `REVIEW`

### Card usage

- Travel cards using `coverImage`: `PASS`
- Service/industry cards from showcase set: `PASS`
- Legacy `pdf-slide` style media blocks in projects sections: `REVIEW` (content is usable but image source quality is uneven)

### Gallery usage

- Travel gallery sets: `PASS`
- Home/gallery mixed showcase assets: `REVIEW` for long-term consistency

## CSS/image behavior check

Verified current behavior:

- `object-fit: cover` on travel/card/gallery images: `PASS`
- `object-position` supported via `TravelImage`: `PASS`
- No blur filter on main travel images: `PASS`
- Card hover zoom reduced to max `1.03`: `PASS`
- Hero zoom in travel hero stays restrained (`1.02` initial to `1`): `PASS`

## Images replaced in this cycle

- No physical image files were replaced in this cycle.
- Improvements focused on:
  - enforcing restrained scale behavior in CSS
  - preserving split mapping (`heroImage` / `coverImage` / `gallery`)
  - documenting source-quality gaps

## Items needing higher-resolution source files

- Any project visual still tied to low-detail PDF-export style assets should be upgraded with original files (recommended 1920px+ width for hero usage).
- If available, provide original source photos for:
  - hospitality project covers
  - bar/club portfolio hero candidates
  - legacy project entries rendered via `pdf-slide` display

## Important note on pixel-dimension verification

- Exact per-file pixel checks normally require running local script/CLI (`scripts/check-travel-images.mjs` or image metadata commands).
- In this session, terminal tool execution is unstable; therefore this report is based on:
  - current source mapping,
  - existing visual behavior in components/CSS,
  - prior project audits already in repository.
- Before final 9.8 production sign-off, re-run image-dimension checks locally and append numeric width/height per hero/card/gallery file.
# Image Quality Report

- Scope: #/projects, #/projects/holiday-ha-long, #/projects/villa-tuan-chau, #/projects/villa-sun-feria, #/projects/villa-flc
- Rules: hero >=1600w, card >=800w, gallery >=1000w
- Source policy: removed PDF/banner/screenshot assets from travel routes; using high-resolution official website photos.

## holiday-ha-long

| Role | File | Resolution | Size (MB) | Suitability | Notes |
|---|---|---:|---:|---|---|
| Hero | /assets/showcase/travel/holiday-hero.jpg | 6000x4000 | 11.29 | PASS | Official source image, no banner text overlay. |
| Card cover | /assets/showcase/travel/holiday-cover.jpg | 5975x3983 | 6.75 | PASS | Official source image, no banner text overlay. |
| Gallery 1 | /assets/showcase/travel/holiday-gallery-1.jpg | 6000x4000 | 13.75 | PASS | Official source image, no banner text overlay. |
| Gallery 2 | /assets/showcase/travel/holiday-cover.jpg | 5975x3983 | 6.75 | PASS | Official source image, no banner text overlay. |
| Gallery 3 | /assets/showcase/travel/holiday-hero.jpg | 6000x4000 | 11.29 | PASS | Official source image, no banner text overlay. |

## villa-tuan-chau

| Role | File | Resolution | Size (MB) | Suitability | Notes |
|---|---|---:|---:|---|---|
| Hero | /assets/showcase/travel/villa-tuan-chau-hero.jpg | 1920x1080 | 3.72 | PASS | Official source image, no banner text overlay. |
| Card cover | /assets/showcase/travel/villa-tuan-chau-cover.jpg | 1920x1080 | 1.45 | PASS | Official source image, no banner text overlay. |
| Gallery 1 | /assets/showcase/travel/villa-tuan-chau-gallery-1.jpg | 5889x3926 | 6.49 | PASS | Official source image, no banner text overlay. |
| Gallery 2 | /assets/showcase/travel/villa-tuan-chau-cover.jpg | 1920x1080 | 1.45 | PASS | Official source image, no banner text overlay. |
| Gallery 3 | /assets/showcase/travel/villa-tuan-chau-hero.jpg | 1920x1080 | 3.72 | PASS | Official source image, no banner text overlay. |

## villa-sun-feria

| Role | File | Resolution | Size (MB) | Suitability | Notes |
|---|---|---:|---:|---|---|
| Hero | /assets/showcase/travel/villa-sun-feria-hero.jpg | 6000x4000 | 13.75 | PASS | Official source image, no banner text overlay. |
| Card cover | /assets/showcase/travel/villa-sun-feria-cover.jpg | 6720x4480 | 2.46 | PASS | Official source image, no banner text overlay. |
| Gallery 1 | /assets/showcase/travel/villa-sun-feria-gallery-1.jpg | 6000x4000 | 12.89 | PASS | Official source image, no banner text overlay. |
| Gallery 2 | /assets/showcase/travel/villa-sun-feria-cover.jpg | 6720x4480 | 2.46 | PASS | Official source image, no banner text overlay. |
| Gallery 3 | /assets/showcase/travel/villa-sun-feria-hero.jpg | 6000x4000 | 13.75 | PASS | Official source image, no banner text overlay. |

## villa-flc

| Role | File | Resolution | Size (MB) | Suitability | Notes |
|---|---|---:|---:|---|---|
| Hero | /assets/showcase/travel/villa-flc-hero.jpg | 1920x1080 | 3.72 | PASS | Official source image, no banner text overlay. |
| Card cover | /assets/showcase/travel/villa-flc-cover.jpg | 6000x4000 | 11.29 | PASS | Official source image, no banner text overlay. |
| Gallery 1 | /assets/showcase/travel/villa-flc-gallery-1.jpg | 1800x1206 | 0.43 | PASS | Official source image, no banner text overlay. |
| Gallery 2 | /assets/showcase/travel/villa-flc-cover.jpg | 6000x4000 | 11.29 | PASS | Official source image, no banner text overlay. |
| Gallery 3 | /assets/showcase/travel/villa-flc-hero.jpg | 1920x1080 | 3.72 | PASS | Official source image, no banner text overlay. |

## Changes Applied

- Separated hero and card image usage via heroImage + coverImage data fields.
- Hero now only uses files that meet or exceed hero threshold.
- Removed dependence on PDF-rendered/banner-like images for these travel routes.
- Fallback is high-resolution travel image (/assets/showcase/travel/holiday-hero.jpg).

## Remaining Risk

- Source set is currently from one official hospitality brand image pool; if exact per-property originals are required (Villa Tuần Châu / Sun Feria / FLC), provide first-party originals (recommended >=1920px).