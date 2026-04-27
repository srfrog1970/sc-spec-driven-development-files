# Phase 1 Validation — Hello Hono

## Definition of Done

All of the following must be true before this branch is merged.

### 1. TypeScript compiles cleanly

```
npm run typecheck
```

Must exit with code 0 and produce no errors or warnings.

### 2. Server starts

```
npm run dev
```

Must start without errors. The terminal should show the server is listening (port 3000 or logged port).

### 3. Route returns an HTML home page

```
curl -s http://localhost:3000
```

HTTP status must be `200 OK`. Response body must be HTML and must contain:

- An `<h1>` element with the text `AgentClinic`
- A tagline (any short descriptive text; exact wording is implementation choice)

### 4. Hono version is pinned

`package.json` must list `hono` without a `^` or `~` range prefix.

### 5. Strict TypeScript is on

`tsconfig.json` must contain `"strict": true`.

### 6. CSS includes responsive media query

`static/style.css` must contain at least one `@media` rule that adjusts layout for narrow viewports (max-width: 640px), covering `header`, `main`, and `footer` padding at minimum.

## Not Required

- No automated tests needed for this phase
- No CI pipeline required
- Browser rendering not checked (curl is sufficient)
