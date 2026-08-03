## Project

Personal portfolio. Next.js App Router, TypeScript, Tailwind v4, deployed on Vercel.

- Use npm. Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint`
- No `src/` directory. `app/`, `components/`, `data/`, and `lib/` sit at the repo root.
- `@/*` maps to the repo root.
- `components/layout/` (navbar, footer), `components/sections/` (hero, about,
  skills, contact), `components/ui/` (badge, card, link-button, section-shell).
- Routes: `app/page.tsx` (home), `app/projects/[slug]/page.tsx` (case studies).

## Conventions

- Project content is data-driven. Edit `data/projects.ts` and
  `data/case-studies.ts`, joined by `getCaseStudy()`. Never hardcode project
  content into components.
- Tailwind v4, CSS-first. Theme tokens live in `@theme inline` in
  `app/globals.css`. Do not create `tailwind.config.ts` — it doesn't exist by design.
- Use the local `cn()` from `lib/utils.ts` for class joining. Do not install
  `clsx` or `tailwind-merge`.
- No CSS modules.
