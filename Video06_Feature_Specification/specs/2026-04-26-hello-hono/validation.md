# Validation — Phase 1: Hello Hono

## How to Know This Phase Succeeded

All checks below must pass before the branch can be merged.

---

## 1. Server Starts

```bash
npm run dev
```

Expected: server starts on port 3000 with no errors printed to the console.

## 2. Home Page Serves HTML

```bash
curl -i http://localhost:3000
```

Expected:

- Response header includes `Content-Type: text/html`
- Response body contains `<title>AgentClinic</title>`
- Response body contains `<h1>AgentClinic</h1>`
- Response body contains a welcome sentence (e.g. "We're open for business")

## 3. TypeScript Is Clean

```bash
npm run typecheck
```

Expected: exits with code `0` and no errors or warnings.

---

## Merge Checklist

- [ ] `npm run dev` starts without errors
- [ ] `curl -i http://localhost:3000` response includes `Content-Type: text/html`
- [ ] Response body contains `<title>AgentClinic</title>` and `<h1>AgentClinic</h1>`
- [ ] Response body contains a welcome sentence
- [ ] `npm run typecheck` exits with code 0
- [ ] No files outside of `src/`, `package.json`, `tsconfig.json`, and `specs/2026-04-26-hello-hono/` are modified
- [ ] No JSX renderer, shared layout, CSS files, or database code introduced (out of scope for Phase 1)
