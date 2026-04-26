# Plan — Phase 1: Hello Hono

Each task group is independently committable and reviewable.

---

## 1. Project Bootstrap

- Initialize `package.json` (`npm init -y`)
- Install runtime dependencies: `hono`
- Install dev dependencies: `tsx`, `typescript`
- Create `tsconfig.json` with `strict: true`, `module: NodeNext`, `moduleResolution: NodeNext`, `target: ES2022`
- Add scripts to `package.json`:
  - `"dev": "tsx watch src/index.ts"`
  - `"typecheck": "tsc --noEmit"`

## 2. Dev Server Entry Point

- Create `src/index.ts`
- Import `Hono` from `hono`
- Instantiate the app
- Start the server with `serve` from `@hono/node-server` on port `3000`
- Confirm `npm run dev` starts without errors

## 3. Root Route

- Add `GET /` handler to the Hono app
- Confirm the route is typed (Hono infers request/response types automatically)

## 4. Home Page

- Return an HTML response from `GET /` using `c.html()` with a template literal (no JSX renderer required)
- Page must include:
  - `<title>AgentClinic</title>`
  - `<h1>AgentClinic</h1>`
  - A short welcome sentence drawn from the product mission (e.g. "We're open for business. No agent suffers alone.")
- Response `Content-Type` must be `text/html`
- No external CSS, no layout component — inline styles are acceptable if needed for readability

## 5. Type Check

- Run `npm run typecheck` (`tsc --noEmit`)
- Resolve any TypeScript errors before marking this task group complete
- This is the final gate before the branch is ready for review
