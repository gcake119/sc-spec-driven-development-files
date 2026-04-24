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
- Testing:
  - Validation tests: Vitest
  - End-to-end tests: Playwright

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

## Responsive Design Standard

- The web UI must be responsive across mobile (>=320px), tablet (>=768px), and desktop (>=1024px) viewport widths.
- Layout, spacing, and typography should adapt by breakpoint to preserve readability and usability.
- Horizontal scrolling must be avoided for primary product pages at supported viewport widths.

## Reliability Baseline

- Strong input validation on all API endpoints
- Consistent error response format
- Basic request logging for key clinical flows
- Database migrations tracked in version control
- Smoke tests for core user journeys

## Test Command

- `npm test` runs Vitest validation tests via `vitest run`.

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
