# Tech stack — AgentClinic

## Application

| Layer | Choice | Notes |
|--------|--------|--------|
| Language | **TypeScript** | Strict typing; aligns with lesson and maintainability. |
| Runtime | **Node.js** | Local-first development; simple for students and booth laptops. |
| HTTP framework | **Fastify** | Fast, solid TypeScript ergonomics, built-in JSON schema validation for routes—good for teaching clear API contracts. |
| Database | **SQLite** | Single-file DB, no separate server; ideal for demos and early phases. Access via **`better-sqlite3`** (synchronous, simple for small services). |

## Tooling

- **Build:** `tsc` → output in `dist/`.
- **Dev:** `tsx` to run TypeScript without a separate watch pipeline.
- **Package manager:** npm (current repo default).

## Repository conventions

- Source in `src/`; compiled JS in `dist/`.
- Local SQLite files under `data/` (gitignored).

## Alternatives considered

- **Express** — ubiquitous, but less opinionated validation and slightly heavier middleware patterns for teaching.
- **Hono** — excellent; Fastify chosen here for schema-first routes and familiar Node HTTP mental model in course settings.
