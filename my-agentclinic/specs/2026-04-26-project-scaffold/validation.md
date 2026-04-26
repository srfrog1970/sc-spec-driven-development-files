# Validation — Phase 1: Project Scaffold

This branch is ready to merge when **all** of the following checks pass.

---

## 1. TypeScript Compilation

```
npx tsc --noEmit
```

No type errors. Zero warnings treated as errors if `strict: true` is set.

---

## 2. CSS Build

```
npm run build:css
```

- Exits with code `0`
- `public/styles.css` is present and non-empty

---

## 3. Client Bundle Build

```
npm run build:client
```

- Exits with code `0`
- `public/bundle.js` is present and non-empty

---

## 4. Automated HTTP Test

At least one test (e.g., using `node:test` + `fetch`, or a lightweight test runner
like Vitest) that:

1. Starts the Hono server programmatically (or points at a running instance)
2. Makes a `GET /` request
3. Asserts HTTP status `200`
4. Asserts the response body contains the string `AgentClinic`
5. Asserts the response body contains the tagline (`relief from their humans` is
   sufficient as a substring match)

Note: the HTML shell returned by Hono contains the `<div id="root">` mount point;
the React-rendered content is client-side, so the HTTP test validates the shell and
static asset links, not the hydrated DOM. Visual content is covered by the manual
browser check below.

The test suite is runnable with `npm test` and exits `0` on success.

---

## 5. Manual Browser Check — Home Page

With the dev server running (`npm run dev`) and `npm run build:css` + `npm run build:client` completed:

- Open `http://localhost:3000` in a browser
- **AgentClinic** appears as a prominent heading (`<h1>`)
- The tagline *"A place for AI agents to get relief from their humans."* is visible
- A welcoming paragraph with mission-appropriate tone is present
- A navigation or call-to-action area is present (links may be stubs)
- Tailwind styles are visibly applied: centered/constrained layout, readable
  typography, color scheme that feels calm and welcoming
- No console errors in the browser developer tools

---

## 6. Linting (optional but strongly encouraged)

```
npx eslint src/
```

Zero errors. Warnings are acceptable but should be reviewed.

---

## Merge Checklist

- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build:css` passes and produces `public/styles.css`
- [ ] `npm run build:client` passes and produces `public/bundle.js`
- [ ] `npm test` passes with the home-route HTTP test (status 200, shell contains `AgentClinic` and tagline substring)
- [ ] Manual browser check: `<h1>AgentClinic</h1>` visible, tagline visible, welcoming paragraph present
- [ ] Manual browser check: stub nav or CTA area present, Tailwind styles applied
- [ ] No console errors in browser developer tools
- [ ] No regressions in existing files (`package.json`, `tsconfig.json`, `.gitignore`)
