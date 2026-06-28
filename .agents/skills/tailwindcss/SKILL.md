---
name: tailwindcss
description: Style React or HTML interfaces with Tailwind CSS using a coherent design system, responsive utilities, accessible contrast, and minimal custom CSS. Use when implementing or refining Tailwind-based web interfaces.
---

# Tailwind CSS

Define brand tokens in `tailwind.config` when a project has clear colors, spacing, or typography needs. Use custom CSS only for global effects, animations, or base styling that Tailwind cannot express cleanly.

Keep class strings readable:
- Group layout, spacing, color, typography, and interaction utilities consistently.
- Extract repeated visual patterns into components.
- Avoid single-hue palettes; balance brand colors with neutrals and accent colors.
- Use responsive constraints such as `max-w`, grid columns, aspect ratios, and stable heights for image-heavy sections.

Check mobile and desktop layouts for overflow, clipping, and text collisions.
