# DEPLOY 3 LINKS UPLOAD STEPS

## 1) Build and package locally

Run in local terminal:

1. `npm run lint`
2. `npm run build`
3. `powershell -ExecutionPolicy Bypass -File .\scripts\create-hosting-zips.ps1`

Expected output in `hosting-packages/`:

- `dstbarclub-latest.zip`
- `dsthotel-latest.zip`
- `dstservice-latest.zip`

Each zip must contain at root:

- `index.html`
- `assets/`

## 2) Target folders on hosting

Map package upload as follows:

- Upload and extract `dstbarclub-latest.zip` into `/dstbarclub/`
- Upload and extract `dsthotel-latest.zip` into `/dsthotel/`
- Upload and extract `dstservice-latest.zip` into `/dstservice/`

Important:

- After extract, structure must be:
  - `/dstbarclub/index.html` and `/dstbarclub/assets/`
  - `/dsthotel/index.html` and `/dsthotel/assets/`
  - `/dstservice/index.html` and `/dstservice/assets/`
- Do not keep nested folders like `/dstbarclub/dist/` or `/dstbarclub/dstbarclub-latest/`.

## 3) If using cPanel / File Manager

1. Login to hosting control panel.
2. Open **File Manager**.
3. Go to web root (usually `public_html/`).
4. Open folder `dstbarclub/`.
5. Backup current folder content (or at minimum `index.html`) before replacing.
6. Upload `dstbarclub-latest.zip`.
7. Extract zip directly inside `dstbarclub/`.
8. Ensure extracted root contains `index.html` and `assets/` immediately.
7. Repeat the same process for:
   - `dsthotel/` with `dsthotel-latest.zip`
   - `dstservice/` with `dstservice-latest.zip`
8. If hosting has cache/CDN panel, purge cache after upload/extract.

## 4) If using FTP/SFTP (FileZilla/WinSCP)

1. Connect to server with FTP/SFTP credentials.
2. Open remote web root folder.
3. Enter `/dstbarclub/`:
   - backup current files
   - upload local `dstbarclub-latest.zip`
   - extract on server (or upload extracted files directly so root has `index.html` + `assets/`).
4. Enter `/dsthotel/`:
   - backup old files
   - upload `dsthotel-latest.zip` and extract.
5. Enter `/dstservice/`:
   - backup old files
   - upload `dstservice-latest.zip` and extract.
6. If CDN enabled, purge cache.

## 5) Hard refresh after upload

After upload and cache purge:

- Chrome/Edge on Windows: `Ctrl + F5` (or `Ctrl + Shift + R`)
- macOS: `Cmd + Shift + R`
- Mobile: close tab, reopen URL; if needed clear browser cache.

## 6) Post-deploy tests (must do)

### Link 1

1. Open `https://long.halongxanh.info/dstbarclub/`
2. Confirm auto redirect to:
   - `https://longv7396-web.github.io/dst-group-website/#/bar-club`
3. If JS blocked, click fallback link and confirm it opens same target.

### Link 2

1. Open `https://long.halongxanh.info/dsthotel/`
2. Confirm auto redirect to:
   - `https://longv7396-web.github.io/dst-group-website/#/nha-hang-khach-san`
3. If JS blocked, click fallback link and confirm it opens same target.

### Link 3

1. Open `https://long.halongxanh.info/dstservice/`
2. Confirm auto redirect to:
   - `https://longv7396-web.github.io/dst-group-website/#/dich-vu`
3. If JS blocked, click fallback link and confirm it opens same target.

## 7) Rollback procedure if issue appears

If any link fails after upload:

1. Go to affected folder.
2. Restore backup file:
   - `index.backup.YYYYMMDD-HHMM.html` -> rename back to `index.html`.
3. Purge cache/CDN again.
4. Hard refresh browser.
5. Re-test affected URL.

## 8) Deployment status rule

Do **not** mark deployment as completed until:

- files are uploaded to real host,
- cache is purged,
- all three live URLs are tested and confirmed redirect correctly.
