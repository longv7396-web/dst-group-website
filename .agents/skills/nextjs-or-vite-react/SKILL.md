---
name: nextjs-or-vite-react
description: Start or maintain a TypeScript React website with either Vite or Next.js, choosing the smaller viable stack and organizing app, components, data, and assets clearly. Use when creating a React website from scratch or modernizing one.
---

# Next.js Or Vite React

Choose Vite for a static marketing/company website unless the request requires Next.js routing, server rendering, or API routes.

Use this baseline structure for Vite React projects:
- `src/components/` for UI sections and shared components.
- `src/data/` for verified structured data.
- `src/lib/` for small utilities.
- `public/assets/` for approved static assets.
- `DATA_AUDIT.md` for provenance and exclusions when source fidelity matters.

Use TypeScript, keep strict types for source metadata, and render from data files so content can be audited.

Run `npm install`, `npm run build`, and lint checks when configured.
