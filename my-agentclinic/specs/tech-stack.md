# Tech Stack

## Language

**TypeScript** — used throughout, both server-side and client-side. Strong typing reduces bugs and improves maintainability as the codebase grows.

## Framework

**Next.js** (recommended)

Next.js is the most widely adopted full-stack TypeScript framework. It combines a React frontend, server-side rendering, and API routes in a single project — eliminating the overhead of maintaining separate frontend and backend repositories.

Reasons for choosing Next.js:

- Popular, well-documented, and widely supported (aligns with Mary's "popular stack" requirement)
- API routes provide a clean server-side layer without needing a separate Express server
- React-based UI with SSR/SSG for fast, SEO-friendly pages in modern browsers (aligns with Steve's requirements)
- File-system routing keeps the project structure predictable
- Strong TypeScript support out of the box

## Frontend

- **React** (via Next.js)
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
