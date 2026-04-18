# Roadmap — AgentClinic

High-level order only; each phase should stay small enough to finish in one sitting.

## Phase 1 — Constitution (specs only)

- [x] Add `specs/mission.md`, `specs/tech-stack.md`, and `specs/roadmap.md`.
- [x] Align mission tone (**playful**, demo-friendly) and lock v1 as **local Node**.
- **No application code** in Phase 1—only the constitution and stakeholder-facing docs.

## Phase 2 — Runnable skeleton

- [x] Minimal **Fastify** server: health check + one playful “clinic status” read endpoint.
- [x] **SQLite** file DB with a tiny schema (e.g. visit counter or single-row clinic state).
- [ ] README quick start verified on a clean machine.

## Phase 3 — First real “intake”

- [ ] One write path (e.g. POST “agent intake” or “session”) with validation.
- [ ] Read back the latest intake for demo narratives.

## Phase 4 — Demo polish

- [ ] Seed data or fixture script for booth mode.
- [ ] Optional: minimal HTML or CLI for non-API viewers.

## Phase 5 — Packaging (optional)

- [ ] Dockerfile or single-command demo script if stakeholders want parity beyond local Node.
