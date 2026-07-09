# Image Quality Report

Date: 2026-07-09

## Scope audited

- `#/`
- `#/bar-club`
- `#/nha-hang-khach-san`
- `#/dich-vu`
- `#/projects`
- `#/projects/holiday-ha-long`
- `#/projects/villa-tuan-chau`
- `#/projects/villa-sun-feria`
- `#/projects/villa-flc`

## Image quality rules

- Hero image: >= 1600px width (recommended 1920px+)
- Card image: >= 800px width
- Gallery image: >= 1000px width
- No stretch/upscale trick, no blurry banner screenshot for hero

## Route to image mapping (current)

- Home: showcase images in `/assets/showcase/*` and hero video poster.
- Bar/Club: images from `/assets/bar-club/*` and `/assets/showcase/*`.
- Hospitality: images from `/assets/hospitality/*` and `/assets/showcase/*`.
- Services: images from `/assets/showcase/*`.
- Travel list/detail: centralized in `src/data/travelImages.ts` using separated fields:
  - `heroImage`
  - `coverImage`
  - `gallery`

## Measured travel image dimensions (from latest build audit)

Source: `npm run build` -> `scripts/check-travel-images.mjs`.

### holiday-ha-long

- Hero: `/assets/showcase/travel/holiday-hero.jpg` -> `6000x4000` (`PASS`)
- Cover: `/assets/showcase/travel/holiday-cover.jpg` -> `5975x3983` (`PASS`)
- Gallery: `/assets/showcase/travel/holiday-gallery-1.jpg` -> `6000x4000` (`PASS`)

### villa-tuan-chau

- Hero: `/assets/showcase/travel/villa-tuan-chau-hero.jpg` -> `1920x1080` (`PASS`)
- Cover: `/assets/showcase/travel/villa-tuan-chau-cover.jpg` -> `1920x1080` (`PASS`)
- Gallery: `/assets/showcase/travel/villa-tuan-chau-gallery-1.jpg` -> `5889x3926` (`PASS`)

### villa-sun-feria

- Hero: `/assets/showcase/travel/villa-sun-feria-hero.jpg` -> `6000x4000` (`PASS`)
- Cover: `/assets/showcase/travel/villa-sun-feria-cover.jpg` -> `6720x4480` (`PASS`)
- Gallery: `/assets/showcase/travel/villa-sun-feria-gallery-1.jpg` -> `6000x4000` (`PASS`)

### villa-flc

- Hero: `/assets/showcase/travel/villa-flc-hero.jpg` -> `1920x1080` (`PASS`)
- Cover: `/assets/showcase/travel/villa-flc-cover.jpg` -> `6000x4000` (`PASS`)
- Gallery: `/assets/showcase/travel/villa-flc-gallery-1.jpg` -> `1800x1206` (`PASS`)

## CSS behavior check

- Travel/project images render with `object-fit: cover`: `PASS`
- Travel image position uses centered object-position by default: `PASS`
- Card hover zoom capped at `1.03`: `PASS`
- Travel hero zoom remains restrained (max ~`1.02`): `PASS`

## Images replaced in this cycle

- No physical image file replaced in this cycle.
- Data and rendering were kept stable; quality work focused on audit validation and safe presentation constraints.

## Remaining gaps for strict 9.5+ sign-off

- Home/Bar/Hospitality/Services still need a full per-file pixel table (width/height) documented in this report.
- If stricter brand review requires all hero visuals >=1920px with first-party originals, additional source assets are still needed for several non-travel sections.
