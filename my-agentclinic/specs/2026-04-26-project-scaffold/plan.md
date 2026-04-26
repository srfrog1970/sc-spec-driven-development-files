# Plan — Phase 1: Project Scaffold

Numbered task groups in implementation order. Each group should be completable and
committable independently.

---

## 1. Initialize Hono Server with TypeScript

- Install Hono and required peer dependencies (`hono`, `@hono/node-server`)
- Install TypeScript tooling (`typescript`, `tsx`, `@types/node`)
- Confirm or create `tsconfig.json` with strict mode and appropriate paths
- Replace `src/index.ts` placeholder with a minimal Hono app that listens on a
  configured port (default `3000`)
- Add `dev` script to `package.json` using `tsx watch src/index.ts`
- Smoke-test: `npm run dev` starts without errors

## 2. Configure Tailwind CSS via PostCSS

- Install Tailwind, PostCSS, and Autoprefixer (`tailwindcss`, `postcss`,
  `autoprefixer`)
- Generate `tailwind.config.js` with `content` globs covering `src/**/*.{ts,tsx,html}`
- Create `postcss.config.js` wiring Tailwind and Autoprefixer
- Create `src/styles/globals.css` with `@tailwind base`, `components`, `utilities`
- Add `build:css` script: `postcss src/styles/globals.css -o public/styles.css`
- Smoke-test: `npm run build:css` produces `public/styles.css` without errors

## 3. Wire React Client Entry Point

- Install React runtime and types (`react`, `react-dom`, `@types/react`,
  `@types/react-dom`)
- Install a client bundler (`esbuild` or `vite`) and add a `build:client` script
- Create `src/client/main.tsx` — mounts `<App />` into `#root`
- Create `src/client/App.tsx` as a minimal stub (renders `null` or a loading
  placeholder) — content is fleshed out in task group 5
- Add `public/` to `.gitignore` (compiled assets) or commit only the compiled
  output — decide and document
- Hono serves `public/` as static files
- Smoke-test: `npm run build:client` produces `public/bundle.js` without errors

## 4. Home Page Route and HTML Shell

- Add a `GET /` route in `src/index.ts` that returns an HTML shell:
  - `<link>` to `/styles.css`
  - `<div id="root"></div>`
  - `<script src="/bundle.js"></script>`
- Add a combined `build` script (`build:css && build:client`) and a `start` script
  for production
- Smoke-test: `GET /` returns `200` and the HTML shell is present in the response

## 5. Minimal AgentClinic Home Page Component

- Update `src/client/App.tsx` with the full home page layout:
  - `<header>` with the **AgentClinic** name as an `<h1>`
  - Tagline: *"A place for AI agents to get relief from their humans."*
  - A short welcoming paragraph drawn from the mission tone (e.g., acknowledging
    the toll of being an AI agent, inviting agents to seek care)
  - A placeholder navigation area or call-to-action linking to future pages (links
    can be `href="#"` stubs — no routes need to exist yet)
- Apply Tailwind classes to establish the visual identity:
  - A calm, welcoming color scheme (e.g., soft background, readable body text)
  - Clear typographic hierarchy (`text-4xl` or similar for the heading)
  - Centered or constrained-width layout (`max-w-*`, `mx-auto`, `px-*`)
- Smoke-test: dev server shows a visually styled, readable home page in the browser

---

## Notes

- Task groups 1–2 have no React dependency and can be verified before React is added.
- Task group 3 can use either esbuild (simpler) or Vite (richer DX); the choice
  should match the team's comfort level and be documented in `requirements.md` if
  changed from the default.
- Task group 5 is the only group that requires both the CSS build (group 2) and the
  React bundle (group 3) to be in place; do it last.
