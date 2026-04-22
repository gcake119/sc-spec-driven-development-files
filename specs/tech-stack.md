# AgentClinic Tech Stack

## Stack Decision

Based on stakeholder priorities and the selected direction, AgentClinic uses:

- Frontend: Next.js (App Router) + TypeScript
- Backend: Next.js Route Handlers (TypeScript)
- Database: SQLite
- ORM: Drizzle ORM
- Runtime: Node.js 18+
- Styling: Tailwind CSS
- Validation: Zod
- Testing: Vitest + Playwright

## Server-Side TypeScript Standard

All backend code must be written in TypeScript and run server-side on Node.js. This includes API handlers, business logic, data access, and background jobs.

## Recommended Framework

Recommended framework: **Next.js**.

Why Next.js:

- Supports server-side TypeScript out of the box.
- Lets us ship API routes and dashboard UI in one project.
- Reduces setup overhead for course students while keeping a production-relevant architecture.

## Database Choice

We use **SQLite** as the default database for AgentClinic.

## Why This Stack

- TypeScript across the full stack improves reliability and maintainability.
- Next.js provides a fast path to building both dashboard UI and API surface.
- SQLite keeps MVP setup simple while preserving relational modeling.
- Drizzle gives type-safe SQL and migration control with low complexity.

## Browser Support

The dashboard must work well on modern browsers:

- Chrome (latest)
- Edge (latest)
- Firefox (latest)
- Safari (latest)

## Reliability Baseline

- Strong input validation on all API endpoints
- Consistent error response format
- Basic request logging for key clinical flows
- Database migrations tracked in version control
- Smoke tests for core user journeys

## Initial Project Layout

```text
src/
  app/
    dashboard/
    api/
  lib/
    db/
    clinic/
  components/
  types/
specs/
  mission.md
  tech-stack.md
  roadmap.md
```
