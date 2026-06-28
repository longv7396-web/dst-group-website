# Installed Skills Plan

This repo already contains local project skills in `.agents/skills`, including:

- `web-ui-design`
- `responsive-design`
- `performance-accessibility-check`
- `framer-motion-animation`
- `frontend-development`
- `tailwindcss`

The requested new instruction-only skills could not be written into `.agents/skills` because that directory is read-only in this sandbox. Full safe templates were created under `docs/skill-templates/` for:

- `frontend-design`
- `web-design-taste`
- `portfolio-ui-audit`

## Template Paths

- `docs/skill-templates/frontend-design/SKILL.md`
- `docs/skill-templates/web-design-taste/SKILL.md`
- `docs/skill-templates/portfolio-ui-audit/SKILL.md`

## Current Permission Status

The current sandbox exposes `.agents` as read-only, so Codex could inspect existing skills but could not create new folders under `.agents/skills` in this turn.

No external scripts, assets, binaries, API keys, or package installs were added.

## Intended Skill Use

### frontend-design

Use when improving or redesigning UI, homepage sections, hero sections, typography, layout, interaction states, responsive behavior, and premium frontend presentation.

### web-design-taste

Use when the goal is to raise visual quality: spacing, hierarchy, contrast, typography, card design, CTA clarity, hover polish, image treatment, and premium/professional feel.

### portfolio-ui-audit

Use when editing project, portfolio, case study, gallery, showcase, or brand card sections.

Focus:

- Keep real project images clear and direct.
- Avoid heavy overlays, diagonal effects, patterns, blur, low opacity, and blend modes.
- Use only a light bottom gradient when text needs readability.
- Keep card hover clean and stable.

## How To Call Skills

In a future Codex request, mention the skill name naturally:

- "Dùng `web-ui-design` để redesign hero."
- "Dùng `responsive-design` để kiểm tra mobile/tablet/desktop."
- "Dùng `performance-accessibility-check` để audit sau khi sửa."
- After the new skills are writable/installed: "Dùng `frontend-design`", "Dùng `web-design-taste`", or "Dùng `portfolio-ui-audit`."

## Security Notes For GitHub Skills

Before installing a skill from GitHub:

1. Read `SKILL.md`.
2. Check whether the skill includes `scripts/`, binaries, assets, or unusual tools.
3. Check whether it requires API keys, tokens, browser extensions, or external services.
4. Do not run any script before reviewing what it does.
5. Prefer instruction-only skills for design guidance.
6. Keep third-party skills out of the project if the source is unclear or unmaintained.

## How To Add A New Skill Later

Create a folder:

```text
.agents/skills/new-skill-name/SKILL.md
```

Use frontmatter:

```yaml
---
name: new-skill-name
description: What this skill does and when Codex should use it.
---
```

Keep the body concise and procedural. Add scripts or assets only when they are truly needed and reviewed.

## Source Review Notes

The requested external sources were treated as inspiration only. Direct installer usage was skipped because network/escalation was not available in this sandbox, and the user requested a safe, review-first workflow.
