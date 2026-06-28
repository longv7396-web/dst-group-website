# Agent Guidance

This project is a React + Vite + TypeScript website for DST Group with a premium dark theme, GSAP/ScrollTrigger motion, and company/portfolio content.

Before making UI changes:

- Check `.agents/skills` for relevant project skills.
- Use existing skills such as `web-ui-design`, `responsive-design`, `performance-accessibility-check`, and `framer-motion-animation` when relevant.
- Use `frontend-design` and `web-design-taste` when those local skills are available for design, redesign, UI polish, homepage, typography, spacing, visual hierarchy, animation, and responsive work.
- Use `portfolio-ui-audit` when that local skill is available for project, portfolio, case study, gallery, or showcase card changes.
- Do not redesign unrelated sections unless the user asks.
- Do not change core content, routing, or backend logic unless required by the task.
- Prefer small, scoped edits in `src/App.tsx` and `src/styles.css`.
- Keep GSAP/ScrollTrigger setup and cleanup safe.
- Keep the website responsive and avoid horizontal overflow.

Validation:

- Run `npm run build` after code changes.
- Run `npm run lint` when the script exists.
- If a check cannot run, report why clearly.

Security:

- Do not install external skills, scripts, packages, or assets from GitHub without reviewing their files first.
- Instruction-only skills are preferred.
- If a skill includes scripts, binaries, assets, API keys, or unusual tools, ask the user before running or installing it.

Video asset protection:

- Treat `public/assets/videos/*.mp4` as protected source assets.
- Do not delete, overwrite, rename, compress, convert, copy fallback files over, or physically create replacement videos in `public/assets/videos` unless the user explicitly asks for video file changes.
- Keep these route mappings intact unless the user explicitly asks otherwise:
  - `/` uses `/assets/videos/hero.mp4`
  - `/bar-club` uses `/assets/videos/bar-club-hero.mp4`
  - `/nha-hang-khach-san` uses `/assets/videos/hospitality-hero.mp4`
  - `/dich-vu` uses `/assets/videos/services-hero.mp4`
- If cache busting is needed, change only the code path query string, for example `?v=final`; do not modify the video file.
- Do not manually edit `dist` video output. Build/deploy may only let Vite copy videos from `public` to `dist`.
- Before and after code/UI changes, run `git status --short` and verify no unexpected `public/assets/videos/*.mp4` changes were introduced.
