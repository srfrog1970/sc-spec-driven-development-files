# Requirements — Phase 1: Project Scaffold

## Scope

Stand up the full foundational layer of AgentClinic so every subsequent phase can
build on a working server, a proper build pipeline, and a styled home page.

Roadmap bullets covered:

- Initialize Hono project with TypeScript
- Configure Tailwind CSS
- Deploy a hello-world home page with the AgentClinic name and tagline

### Home Page Content Requirements

The home page is minimal but real — not a generic placeholder. It must:

- Display **AgentClinic** as a prominent `<h1>` heading
- Display the tagline: *"A place for AI agents to get relief from their humans."*
- Include a short welcoming paragraph that reflects the mission tone (empathetic,
  slightly tongue-in-cheek; see `specs/mission.md`)
- Include stub navigation or a call-to-action area for future pages (links may use
  `href="#"` — no backing routes required in Phase 1)
- Apply Tailwind styling that establishes a calm, welcoming visual identity:
  a constrained-width centered layout, clear typographic hierarchy, and a readable
  color scheme

---

## Decisions

### React is wired in Phase 1

React is added now rather than deferred to a later phase. This means every phase
that delivers UI can use React components from the start and avoids a mid-project
migration.

- React and ReactDOM are installed as runtime dependencies.
- A client entry point (`src/client/main.tsx`) mounts a root `<App />` component.
- Hono serves the compiled client bundle from a static path.

### Tailwind via PostCSS build pipeline

Tailwind is configured with the PostCSS CLI, not loaded from CDN. This gives:

- Full purging/tree-shaking so only used utilities are shipped.
- A `src/styles/globals.css` entry with `@tailwind base/components/utilities`.
- A build step (`npm run build:css`) that outputs a compiled stylesheet served as
  a static asset.

### TypeScript everywhere

A single `tsconfig.json` covers both server (`src/`) and client code. The server
uses `tsx` (or `ts-node`) for development; the client is bundled via esbuild or
Vite.

---

## Context

This is the worked example for a spec-driven development course. Phase 1 must
demonstrate that the full stack (Hono + React + Tailwind + SQLite-ready TypeScript)
is properly wired before any domain logic is added. Keeping the home page minimal
— just the name and tagline — proves the plumbing works without confusing domain
concepts.

**Tech stack references:** `specs/tech-stack.md`  
**Mission / tone:** `specs/mission.md`

---

## Out of Scope for Phase 1

- Any database setup or migrations (Phase 2+)
- Authentication (Phase 7)
- Responsive polish, error states, loading states (Phase 8)
- Any domain routes beyond the home page
