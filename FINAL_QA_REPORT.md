# FINAL QA REPORT

Date: 2026-07-09

## 1) Routes checked

Target routes:

- `#/`
- `#/bar-club`
- `#/nha-hang-khach-san`
- `#/dich-vu`
- `#/projects`
- `#/projects/holiday-ha-long`
- `#/projects/villa-tuan-chau`
- `#/projects/villa-sun-feria`
- `#/projects/villa-flc`
- `#/projects/abc`

Current status:

- Route set is preserved in code (`HashRouter` and route table in `src/main.tsx`).
- `#/projects/abc` keeps not-found flow (no crash).
- Full live browser pass on every route is still required after latest deploy propagation.

## 2) Hosting package (3 links)

Prepared redirect package files:

- `dist-dstbarclub/index.html`
- `dist-dsthotel/index.html`
- `dist-dstservice/index.html`
- `scripts/create-hosting-zips.ps1` (local packaging script for `dstbarclub-latest.zip`, `dsthotel-latest.zip`, `dstservice-latest.zip`)

Validation of 3 files:

- `window.location.replace(...)`: present
- `meta refresh` fallback: present
- manual link fallback: present
- route target mapping:
  - `dstbarclub` -> `#/bar-club`
  - `dsthotel` -> `#/nha-hang-khach-san`
  - `dstservice` -> `#/dich-vu`

Additional upload guide:

- `DEPLOY_3_LINKS_UPLOAD_STEPS.md`

Zip status:

- Zip artifacts are generated in this session:
  - `hosting-packages/dstbarclub-latest.zip`
  - `hosting-packages/dsthotel-latest.zip`
  - `hosting-packages/dstservice-latest.zip`
- Zip integrity check: each zip root contains `index.html` and `assets/` (no nested `dist/`).

## 3) Viewports planned for QA

Required viewports:

- 360
- 390
- 768
- 1024
- 1440

Status:

- CSS and layout adjustments are preserved.
- Full browser QA pass on all required breakpoints is still pending final live cycle.

## 4) Lint/build results

Commands required:

- `npm run lint`
- `npm run build`

Status in this session:

- **PASS**
- `npm run lint`: pass
- `npm run build`: pass
- Build output has no severe warning; bundle chunks stay in expected range for current architecture.

## 5) What was improved in this cycle

### SEO/meta

- Added centralized SEO hook: `src/lib/seo.ts` (`usePageSeo`).
- Applied route-specific SEO metadata to:
  - `src/App.tsx` (Home)
  - `src/pages/BarClubPage.tsx`
  - `src/pages/HospitalityPage.tsx`
  - `src/pages/ServicesPage.tsx`
  - `src/pages/TravelProjectsPage.tsx`
  - `src/pages/ProjectDetailPage.tsx`
- Kept FAQ JSON-LD on project detail page.

### Content polish

- Reduced over-claiming copy in hospitality/services pages.
- Kept CTA intent but shifted language to practical, consultative tone.

### Motion/image behavior

- Reduced shared card media zoom cap from `1.04` to `1.03` in `src/styles.css`.
- Preserved `object-fit: cover` + centered image behavior in travel components.

### Image audit documentation

- Added `src/data/imageQualityReport.md` with:
  - current image usage by route
  - hero/card/gallery suitability assessment
  - items needing higher-resolution source files

## 6) Performance & asset status

- Build-size snapshot (gzip):
  - `index-*.css`: ~21.38 kB
  - `index-*.js`: ~28.40 kB
  - `vendor-react-*.js`: ~76.76 kB
  - `vendor-motion-*.js`: ~58.13 kB
- Asset 404 full recheck: pending post-upload live browser validation on production URLs.
- No new heavy libraries added in this cycle.

## 7) Accessibility status

- Existing structure already keeps core landmarks (`header/main/footer`) and focus-visible styles.
- Motion respects reduced motion in key areas.
- Final keyboard/contrast pass should be executed in browser during final live QA.

## 8) Remaining issues (honest status)

1. **Not yet deployed live** in this session to hosting folders.
2. **Live links still need re-test** after upload:
   - `https://long.halongxanh.info/dstbarclub/`
   - `https://long.halongxanh.info/dsthotel/`
   - `https://long.halongxanh.info/dstservice/`
3. Home/Bar/Hospitality/Services image sets still need a complete pixel-dimension table for strict image-governance sign-off.

## 9) Current quality rating (honest)

Estimated current level: **~9.2 to 9.4 / 10** (not 9.5+ yet)

Why not 9.8 yet:

- Live hosting package upload + verification not completed in this session.
- Full live route/viewport verification on production links not completed after latest push.
- Some non-travel image sources still need explicit per-file pixel audit documentation for strict 9.5+ review criteria.
