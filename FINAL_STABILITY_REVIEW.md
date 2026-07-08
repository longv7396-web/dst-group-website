# Final Stability Review

## Scope

This review freezes new feature work and animation experimentation. No new animation was downloaded, no portfolio image was replaced, and `public/assets/videos` was not touched.

## Git Status Summary

Current branch:

- `main`

Remote:

- `origin https://github.com/longv7396-web/dst-group-website.git`

Modified files:

- `DATA_AUDIT.md`
- `package-lock.json`
- `package.json`
- `src/App.tsx`
- `src/data/barClubData.ts`
- `src/data/hospitalityData.ts`
- `src/data/pricing.ts`
- `src/data/projects.ts`
- `src/data/services.ts`
- `src/data/servicesPageData.ts`
- `src/main.tsx`
- `src/pages/BarClubPage.tsx`
- `src/pages/HospitalityPage.tsx`
- `src/pages/ServicesPage.tsx`
- `src/styles.css`

New/untracked files:

- `ANIMATION_AUDIT.md`
- `ANIMATION_BROWSER_DOWNLOAD_REPORT.md`
- `ANIMATION_INTEGRATION_REPORT.md`
- `ANIMATION_MANUAL_DOWNLOAD_PLAN.md`
- `ANIMATION_PROPOSED_MAPPING.md`
- `ANIMATION_SOURCE_REPORT.md`
- `ANIMATION_TODO.md`
- `ANIMATION_VISUAL_REVIEW_REPORT.md`
- `FIX_REPORT.md`
- `VOICE_FIX_REPORT.md`
- `public/assets/animation-download-inbox/`
- `public/assets/animations/`
- `src/components/AnimatedLottie.tsx`
- `src/data/animationMap.ts`
- `src/data/brokenAnimations.ts`
- `src/pages/AnimationLabPage.tsx`

Deleted files:

- None found.

## Change Classification

Animation-related:

- `package.json`
- `package-lock.json`
- `src/components/AnimatedLottie.tsx`
- `src/data/animationMap.ts`
- `src/data/brokenAnimations.ts`
- `src/pages/AnimationLabPage.tsx`
- `src/main.tsx`
- `src/styles.css`
- `public/assets/animations/`
- `public/assets/animation-download-inbox/`
- Animation report files.

Text/content-related:

- `src/App.tsx`
- `src/data/barClubData.ts`
- `src/data/hospitalityData.ts`
- `src/data/pricing.ts`
- `src/data/projects.ts`
- `src/data/services.ts`
- `src/data/servicesPageData.ts`
- `src/pages/BarClubPage.tsx`
- `src/pages/HospitalityPage.tsx`
- `src/pages/ServicesPage.tsx`
- `DATA_AUDIT.md`
- `FIX_REPORT.md`
- `VOICE_FIX_REPORT.md`

Route/build-related:

- `src/main.tsx`
- `package.json`
- `package-lock.json`
- `src/pages/AnimationLabPage.tsx`

No file was reverted during this review.

## Routes Checked

HTTP status checks:

- `/`: `200`
- `/dstbarclub/`: `200`
- `/dsthotel/`: `200`
- `/dstservice/`: `200`
- `/animation-lab/`: `200`

Browser route checks, desktop:

- `/`: loaded, no horizontal overflow, no broken images detected.
- `/dstbarclub/`: redirected to `#/bar-club`, loaded, no horizontal overflow, no broken images detected.
- `/dsthotel/`: redirected to `#/nha-hang-khach-san`, loaded, no horizontal overflow, no broken images detected.
- `/dstservice/`: redirected to `#/dich-vu`, loaded, no horizontal overflow, no broken images detected.
- `/animation-lab/#/animation-lab`: loaded, no horizontal overflow, no broken images detected.

Browser route checks, mobile:

- `/`: loaded, no horizontal overflow, no broken images detected.
- `/dstbarclub/`: loaded, no horizontal overflow, no broken images detected.
- `/dsthotel/`: loaded, no horizontal overflow, no broken images detected.
- `/dstservice/`: loaded, no horizontal overflow, no broken images detected.
- `/animation-lab/#/animation-lab`: loaded, no horizontal overflow, no broken images detected.

Hash routes checked:

- `#/`: loaded.
- `#/bar-club`: loaded.
- `#/nha-hang-khach-san`: loaded.
- `#/dich-vu`: loaded.

## Lint And Build

- `npm run lint`: pass.
- `npm run build`: pass.
- Vite chunk warning: present for one chunk above 500 KB. This is a warning, not a build error.
- No large optimization/refactor was done.

## Console Errors

Old console error:

- `dotlottie-player.wasm` reported repeated `RuntimeError: remainder by zero`.

Routes where this was observed before the guard fix:

- `/`
- `/dstbarclub/`
- `/dsthotel/`
- `/dstservice/`
- `/animation-lab/`

Files identified:

- `/assets/animations/barclub/barclub-event.lottie`
- `/assets/animations/services/service-ads.json`
- `/assets/animations/services/service-business.json`
- `/assets/animations/services/service-social.json`
- `/assets/animations/services/service-website.json`
- `/assets/animations/stats/stat-calendar.json`
- `/assets/animations/stats/stat-finance-growth.lottie`
- `/assets/animations/stats/stat-growth.json`
- `/assets/animations/stats/stat-services.json`
- `/assets/animations/stats/stat-target.json`

Reason:

- Several `.json` paths used by the main website are actually zip/dotLottie files starting with `PK`, not JSON.
- Two `.lottie` files are very small runtime suspects.

Fix:

- Added `src/data/brokenAnimations.ts`.
- `AnimatedLottie` now renders the existing fallback for these sources.
- `DotLottieReact` is not called for blocked sources.
- `/animation-lab` now places blocked sources into `Rejected` and shows fallback card text: `Animation lỗi runtime, không dùng`.

Result after fix:

- Console recheck completed for `/`, `/dstbarclub/`, `/dsthotel/`, `/dstservice/`, and `/animation-lab`.
- The old `dotlottie-player.wasm RuntimeError: remainder by zero` did not appear after reload.
- Pages still loaded with fallback icons where blocked animations were used.

## Asset Checks

Sample asset paths returned `200`:

- `/assets/animations/hero/home-marketing-dashboard.lottie`
- `/assets/animations/barclub/barclub-video-recap.lottie`
- `/assets/animations/hotel/hotel-booking.lottie`
- `/assets/animations/hero/dynamic-dashboard.lottie`
- `/assets/showcase/valley-beach-club-hero.webp`
- `/assets/bar-club/cana-beer.webp`
- `/assets/hospitality/nha-hang-thien-anh.png`
- `/assets/videos/hero.mp4`

Asset 404:

- None found in the checked sample and rendered browser pages.

## Text/Internal Notes Review

Search terms checked in rendered UI/source:

- `Chưa ghi giá`
- `dữ liệu thật`
- `tài liệu thật`
- `nguồn thật`
- `hồ sơ nội bộ`
- `bảng báo giá nội bộ`
- `confidence`
- `sourceFile`
- `audit`
- `chưa đủ nguồn`
- `Không chỉ nói về năng lực`
- `Hãy nhìn cách DST`
- `Sẵn sàng tăng trưởng`
- `nâng tầm thương hiệu`
- `giải pháp toàn diện`
- `tối ưu hiệu quả`
- `khẳng định vị thế`

Rendered UI result:

- No banned phrases were detected in browser text for checked routes.

Source note:

- Metadata fields such as `sourceFile` and `confidence` still exist in data files for audit/source tracking.
- They were not detected in rendered route text during browser checks.

## Animation Review

Animations currently used by main website:

- Main website imports animation paths from `src/data/animationMap.ts`.
- Main paths point to `public/assets/animations/...` outside `lab-candidates`.
- `/animation-lab` uses `public/assets/animations/lab-candidates/...` for preview.

Candidate animation status:

- GitHub/raw candidate files remain in `public/assets/animations/lab-candidates/`.
- These candidates are not recommended for hero/main website use based on `ANIMATION_VISUAL_REVIEW_REPORT.md`.
- They are kept only for preview/review.

Important rule:

- Candidate animations should not be mapped into the main website unless visually approved.

## Portfolio Image Review

Portfolio/project images remain local image assets, not Lottie/SVG/AI placeholders.

Checked project names and paths include:

- Valley Beach Club: local `.webp`.
- Cana Beer: local `.webp`.
- Hồ Cô Tiên: local `.webp`.
- Bird's Nest Cafe: local `.webp`.
- Cabi Beach: local `.webp`.
- Grand View Palace: local `.webp`.
- Diamond Palace: local `.webp`.
- Nhà hàng Thiên Anh: local `.png` / PDF-derived local asset.
- Nhà hàng Thanh Thư: local `.png` / PDF-derived local asset.

No portfolio image was replaced in this review.

## Files To Keep

Recommended to keep for now:

- `src/components/AnimatedLottie.tsx`
- `src/data/animationMap.ts`
- `src/data/brokenAnimations.ts`
- `src/pages/AnimationLabPage.tsx`
- `public/assets/animations/`
- `ANIMATION_VISUAL_REVIEW_REPORT.md`
- `ANIMATION_PROPOSED_MAPPING.md`
- `ANIMATION_MANUAL_DOWNLOAD_PLAN.md`
- `FINAL_STABILITY_REVIEW.md`

Reason:

- They document and isolate the animation review process.
- `/animation-lab` can remain as a preview area without affecting main routes.

## Files That Can Be Cleaned Later, Not Now

Do not delete yet without approval:

- `public/assets/animation-download-inbox/`
- `public/assets/animations/lab-candidates/`
- Older animation audit/source reports if no longer useful.
- `dist/` generated by build, if present and ignored.

## What Was Not Done

- No new animation was downloaded.
- No candidate GitHub animation was mapped into the main website.
- No animation was replaced.
- No video was edited, deleted, or overwritten.
- No portfolio/project image was replaced.
- No broad copy rewrite was done.
- No large layout/style redesign was done.
- No performance refactor was done for the Vite chunk warning.

## Final Status

- Website routes checked: pass.
- Lint: pass.
- Build: pass.
- Video folder: clean.
- Asset sample checks: pass.
- Rendered banned text check: pass.
- dotLottie WASM console error: fixed by disabling the broken local animation sources and using existing fallbacks.

## Kết luận

- `npm run lint`: pass
- `npm run build`: pass
- Các route `/`, `/dstbarclub/`, `/dsthotel/`, `/dstservice/`, `/animation-lab/` đã kiểm tra
- Lỗi `dotlottie-player.wasm RuntimeError: remainder by zero` đã xử lý bằng `brokenAnimations` fallback
- Đã kiểm tra section Quy trình và khôi phục icon/animation động cho 4 process cards bằng source local hợp lệ
- Không có process card nào buộc fallback sau khi đổi mapping; fallback chỉ giữ cho trường hợp source lỗi runtime
- Process mapping hiện tại:
  - `consult`: `/assets/animations/services/business-service.lottie`
  - `plan`: `/assets/animations/hero/service-website-workflow.lottie`
  - `build`: `/assets/animations/hero/dynamic-dashboard.lottie`
  - `report`: `/assets/animations/hero/home-social-media.lottie`
- Recheck console trên `/`, `/dstbarclub/`, `/dsthotel/`, `/dstservice/`, `/animation-lab/`: chưa ghi nhận lại `dotlottie-player.wasm RuntimeError: remainder by zero`
- Đã rà lại hiệu ứng section Quy trình: có giảm glow/cyan khoảng 20-30%, giữ gold/amber làm tông chính để đúng style tối premium
- Kiểm tra lại desktop/mobile + hover card tại section Quy trình: không ghi nhận horizontal scroll hoặc console error mới
- `npm run lint`: pass
- `npm run build`: pass
- Cleanup trước commit:
  - Giữ `AnimatedLottie`, `animationMap`, `brokenAnimations` và `public/assets/animations/` vì web chính đang dùng.
  - Route `/animation-lab` chỉ bật ở môi trường development (`import.meta.env.DEV`), production không expose route này.
  - Thêm `.gitignore` cho `public/assets/animation-download-inbox/`, `public/assets/animations/lab-candidates/`, và `ANIMATION_*.md` để loại nội dung test khỏi commit/deploy.
- Không thay ảnh portfolio/dự án thật
- Không động `public/assets/videos`
- Không map candidate animation vào web chính
- Không tải animation mới
- Website ở trạng thái ổn định để review
