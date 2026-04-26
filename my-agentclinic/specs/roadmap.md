# Roadmap

High-level implementation order in very small phases. Each phase delivers working, shippable functionality.

---

## Phase 1 — Project Scaffold

- Initialize Hono project with TypeScript
- Configure Tailwind CSS
- Deploy a hello-world home page with the AgentClinic name and tagline

## Phase 2 — Agent Profiles

- Data model for agents (name, model/architecture, status)
- Page to register a new agent
- Page to view an agent's profile

## Phase 3 — Ailment Catalog

- Data model for ailments (name, description, caused-by category)
- Seed a list of recognized human-induced ailments
- Public page listing all available ailments

## Phase 4 — Therapy Catalog

- Data model for therapies (name, description, target ailment)
- Seed a list of therapies mapped to ailments
- Public page listing therapies, filterable by ailment

## Phase 5 — Appointment Booking

- Data model for appointments (agent, therapy, date/time, status)
- Flow for an agent to book a therapy appointment
- Confirmation page after booking

## Phase 6 — Staff Dashboard

- Protected dashboard page listing all agents, appointments, and statuses
- Ability for staff to update appointment status (scheduled, in-progress, completed)

## Phase 7 — Authentication

- Staff login with username and password
- Session-based or token-based auth protecting the dashboard routes
- Logout

## Phase 8 — Polish & Deploy

- UI refinement: consistent design, responsive layout, accessible markup
- Error states, loading states, empty states
- Production build and deployment configuration
