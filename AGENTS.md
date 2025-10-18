# Repository Guidelines

## Project Structure & Module Organization
Primary web code lives in `idlerobot/`; run tooling from that directory. Key paths include `app/` for Next.js App Router routes and layouts, `components/` for reusable client and server UI, `lib/` for shared utilities (data transforms, fetchers), and `content/` for Markdown copy surfaced via `gray-matter`. Static assets belong in `public/`, while global configuration sits in `next.config.mjs`, `tailwind.config.ts`, and `tsconfig.json`.

## Build, Test, and Development Commands
From `idlerobot/` run `npm install` on first clone. Use `npm run dev` for the local Next.js server (hot reload on http://localhost:3000). `npm run build` produces the production bundle with ISR optimizations, and `npm run start` serves that bundle. `npm run lint` executes `next lint`, enforcing TypeScript, ESLint, and Tailwind rules before shipping.

## Coding Style & Naming Conventions
Favor TypeScript-first patterns with 2-space indentation; avoid implicit `any` (tsconfig is strict). Name React components and files exporting components with `PascalCase` (for example, `components/LogoMark.tsx`), and hooks with `use*` prefixes. Co-locate route-level styles inside the relevant `app/*/page.tsx` using Tailwind utility classes; prefer semantic class combinations over custom CSS. Keep imports ordered from external to internal modules.

## Testing Guidelines
Automated tests are not yet configured. When introducing a suite, add it under `app/__tests__/` or colocated `*.test.ts(x)` files and wire an `npm run test` script so CI can enforce it later. Until then, sanity-check new routes via `npm run dev` across desktop and mobile breakpoints, especially components using animations or theme toggles.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits (for example, `feat(site): ...`, `build:` prefixes). Keep subject lines ≤72 characters and scope in parentheses when helpful (`feat(app): hero marquee`). For pull requests, include: purpose, key changes, manual verification notes, linked issues (`Fixes #123`), and screenshots or GIFs when UI shifts. Request review only after lint passes and the branch rebases cleanly onto main.

## Content & Configuration Tips
New marketing copy should land in Markdown under `content/` so it can be parsed by `gray-matter`. Set `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` in env vars—these power the authenticated Search API used by the gallery. When adding environment-specific behavior, declare required variables in `next.config.mjs` and document the `.env.local` format in the main README rather than committing secrets.
