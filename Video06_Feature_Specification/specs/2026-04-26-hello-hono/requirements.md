# Requirements — Phase 1: Hello Hono

## Scope

Install and configure Hono with the `tsx` dev server. Expose a root route that serves a minimal HTML home page. Confirm TypeScript types work end-to-end.

### In Scope

- `package.json` with `dev` and `typecheck` scripts
- `tsconfig.json` with strict TypeScript mode enabled
- Dependencies: `hono`, `tsx`, `typescript`
- `src/index.ts` — Hono app with a single `GET /` handler
- HTML home page response via `c.html()` with a template literal — title, heading, and a brief welcome message
- Response `Content-Type` must be `text/html`

### Out of Scope

- Hono JSX renderer / JSX syntax (Phase 2+)
- Shared layout component (Phase 2+)
- CSS files / stylesheets (Phase 2+)
- SQLite / migrations (Phase 3+)
- Prettier config (later phase)
- Vitest setup (later phase)
- Any route other than `GET /`

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Templating | `c.html()` template literal | Delivers a real HTML page without enabling the JSX renderer; no build step, no extra deps |
| TypeScript | Strict mode | Catches errors early; aligns with tech-stack guidance |
| Dev runner | `tsx watch` | No build step required; listed in [tech-stack.md](../tech-stack.md) |

## Context

AgentClinic is a server-side TypeScript wellness platform for AI agents. See [mission.md](../mission.md) for product context and [tech-stack.md](../tech-stack.md) for the full stack rationale. Hono is chosen for its first-class TypeScript support, lightweight footprint, and natural middleware model.

Phase 1 proves the skeleton works and delivers the first user-visible artifact: a running server, a real HTML home page, and a clean `tsc` output — before any real features are built on top.
