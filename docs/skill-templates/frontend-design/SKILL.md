---
name: frontend-design
description: Senior frontend UI/UX design guidance for React, Vite, TypeScript, and marketing/company websites. Use when Codex is asked to design, redesign, improve, polish, modernize, or evaluate a website UI, homepage, hero, layout, typography, visual hierarchy, interaction states, responsive behavior, or premium frontend experience.
---

# Frontend Design

Use this skill before making UI changes. Treat the work as product design plus frontend engineering, not decoration.

## Operating Principles

- Start by reading the current UI structure, content, CSS system, and existing visual language.
- Preserve the user's content, sections, and business intent unless the user explicitly asks for content changes.
- Choose a clear design concept before editing: audience, mood, hierarchy, visual rhythm, and conversion goal.
- Design for the real brand and domain. Avoid generic SaaS templates, random gradients, oversized cards, and filler copy.
- Prefer a polished, restrained premium look over loud effects.
- Use visual hierarchy intentionally: one primary message, one primary action, supporting details below.
- Keep typography strong and readable. Use `clamp()` for major responsive headings.
- Make spacing feel deliberate. Use consistent section padding, container width, grid gaps, and card rhythm.
- Make responsive behavior a first-class requirement, not an afterthought.

## Premium Homepage Checklist

- Hero must communicate the company's value quickly with a strong headline and concise supporting copy.
- CTA buttons must be obvious, usable, and not compete with too many secondary actions.
- The first viewport should establish brand quality through layout, type, imagery/video, and motion restraint.
- Avoid stuffing the hero with paragraphs, badges, and decorative layers.
- Use real project imagery where available. Do not hide real work behind excessive overlays.
- Keep colors aligned with the brand. Avoid default purple/blue AI gradients unless the brand requires them.

## React/Vite Implementation Rules

- Prefer existing components and CSS conventions in `src/App.tsx` and `src/styles.css`.
- Keep edits scoped. Do not redesign unrelated sections while fixing one area.
- Use semantic markup, readable class names, and accessible interactive states.
- Animate with `transform` and `opacity`; avoid animating layout properties.
- Keep GSAP/ScrollTrigger cleanup intact when editing motion code.
- Respect `prefers-reduced-motion`.

## Responsive Rules

- Check mobile, tablet, laptop, and large desktop breakpoints.
- Prevent horizontal scroll at the source: fixed widths, oversized text, excessive padding, and rigid grids.
- Use `max-width`, `margin-inline: auto`, responsive padding, and flexible grids.
- Cards should collapse cleanly: mobile 1 column, tablet 2 columns, desktop 3 or 4 columns when appropriate.
- Text must not overlap images, buttons, nav, or adjacent content.

## Before Finishing

- Verify the UI in browser when possible.
- Run `npm run build`.
- Run `npm run lint` if the script exists.
- Report changed files, affected components/classes, and any checks that could not run.
