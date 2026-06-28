---
name: portfolio-ui-audit
description: Portfolio, projects, case study, gallery, and brand showcase UI audit guidance. Use when Codex is asked to fix or improve project cards, portfolio sections, case studies, showcase imagery, card overlays, image clarity, hover treatment, project CTAs, or visual presentation of real client work.
---

# Portfolio UI Audit

Use this skill for project, brand, case study, gallery, and portfolio sections. The work must make real projects easier to inspect and understand.

## Core Principle

The project image is the main content. Do not bury it under decorative effects.

## Image Treatment Rules

- Show images clearly and directly.
- Use `img { width: 100%; height: 100%; object-fit: cover; }` for card media.
- Do not lower image opacity.
- Do not use blur, heavy contrast filters, `mix-blend-mode`, or `background-blend-mode` on project images.
- Avoid diagonal lines, pattern overlays, glass panels, translucent blocks, decorative dots, or glow layers over the image.
- If text sits on an image, use only a bottom gradient: `linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.3), transparent)`.
- Keep overlays lower than the text layer and never stronger than needed for readability.

## Card Content Rules

- Include a clear project name.
- Include a sector/category tag when available.
- Include a short description that explains what the company did.
- Include a CTA only if it helps the user continue.
- Keep tags readable but secondary.
- Place text in a consistent bottom area so it does not cover the most important image content.

## Hover Rules

- Hover may scale the image slightly, around `1.02` to `1.03`.
- Hover may add a subtle border highlight and outer glow.
- Hover must not add a new layer that darkens or blurs the image.
- Hover must not change grid dimensions or cause card shift.

## Layout Rules

- Desktop can use 3 columns or a featured card plus grid.
- Tablet should remain stable at 2 columns when space allows.
- Mobile should be 1 column.
- Use consistent aspect ratio or stable min-height so cards do not feel random.
- Avoid horizontal scroll and card overlap.

## Audit Checklist

- Are images visible enough to identify the real project?
- Is any pseudo-element covering the image?
- Is any filter, opacity, or blend mode making the image worse?
- Does the bottom text remain readable?
- Do card hover effects feel premium but restrained?
- Does the portfolio section help users understand DST's work quickly?
