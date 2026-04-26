# Tech Stack

## Language

**TypeScript** — used throughout, both server-side and client-side. Strong typing reduces bugs and improves maintainability as the codebase grows.

## Framework

**Hono** (recommended)

Hono is a lightweight, fast, web-standards-based framework for server-side TypeScript. It runs on Node.js and is designed for building clean REST APIs with minimal overhead.

Reasons for choosing Hono:

- Lightweight and fast — no bloat, just routing and middleware
- First-class TypeScript support
- Web-standards API (Request/Response) keeps the code portable
- Simple, explicit routing aligns well with a spec-driven approach
- Popular and actively maintained (aligns with Mary's "popular stack" requirement)

## Frontend

- **React** — served separately or via static export
- **Tailwind CSS** — utility-first styling for a modern, attractive UI without heavy custom CSS

## Database

**SQLite** — lightweight, file-based relational database. No separate server required, easy to set up locally, and well-suited for the scale of AgentClinic.

## Runtime

- **Node.js**

## Package Manager

- **npm**

## Development Tools

- **TypeScript** (`tsc`) for type checking
- **ESLint** for linting
- **Prettier** for code formatting
