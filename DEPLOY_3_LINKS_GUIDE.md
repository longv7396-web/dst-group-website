# Deploy 3 Link Production (dstbarclub / dsthotel / dstservice)

## Files prepared

- `dist-dstbarclub/index.html` -> auto-redirect to `https://longv7396-web.github.io/dst-group-website/#/bar-club`
- `dist-dsthotel/index.html` -> auto-redirect to `https://longv7396-web.github.io/dst-group-website/#/nha-hang-khach-san`
- `dist-dstservice/index.html` -> auto-redirect to `https://longv7396-web.github.io/dst-group-website/#/dich-vu`

Each file has:

- JavaScript redirect using `window.location.replace(...)` (fast path)
- `meta refresh` fallback (1s) when JavaScript is disabled
- manual link fallback for no-script/browser restrictions

## Upload steps on hosting

1. Upload `dist-dstbarclub/index.html` to folder `/dstbarclub/index.html`.
2. Upload `dist-dsthotel/index.html` to folder `/dsthotel/index.html`.
3. Upload `dist-dstservice/index.html` to folder `/dstservice/index.html`.
4. Clear server/CDN cache if enabled.

## Verify links after upload

- `https://long.halongxanh.info/dstbarclub/` -> auto open `#/bar-club`
- `https://long.halongxanh.info/dsthotel/` -> auto open `#/nha-hang-khach-san`
- `https://long.halongxanh.info/dstservice/` -> auto open `#/dich-vu`

## Existing app compatibility notes

- App already uses `HashRouter` in `src/main.tsx`.
- `src/main.tsx` already maps standalone path:
  - `/dstbarclub` -> `/bar-club`
  - `/dsthotel` -> `/nha-hang-khach-san`
  - `/dstservice` -> `/dich-vu`
- `vite.config.ts` is using `base: process.env.VITE_BASE_PATH || "./"` which is compatible with subfolder/static hosting.
