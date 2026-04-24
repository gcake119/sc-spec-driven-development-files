# Phase 1 Requirements: Project Scaffold

## Scope

- Build the initial project skeleton for AgentClinic using Next.js and TypeScript.
- Establish a minimal, reliable foundation for development and testing.
- Include only baseline tooling for this phase: lint/format setup plus Vitest smoke testing.
- Deliver a minimal AgentClinic home page as the default entry point.
- Deliver a responsive baseline UI for the home page across mobile, tablet, and desktop viewport sizes.

## Context

- This work implements phase 1 from `specs/roadmap.md` (`Project Scaffold`).
- The scaffold must support future phases for database, APIs, and dashboards without major restructuring.
- The setup should stay simple for course students and demo-friendly for quick onboarding.

## Decisions

1. **Feature slug**: `project-scaffold`
2. **Phase directory**: `specs/2026-04-23-project-scaffold/`
3. **Scope level**: minimal (Next.js + TypeScript + base structure)
4. **Testing baseline**: Vitest validation tests with one smoke test
5. **Tech alignment**:
   - Next.js App Router + TypeScript
   - Node.js 18+
   - Keep structure compatible with upcoming SQLite + Drizzle phases
6. **Responsive baseline**:
   - Home page must be readable and usable at 320px, 768px, and 1024px+ viewport widths

## In-Scope Deliverables

- Next.js TypeScript project initialized and runnable.
- Minimal project folders prepared for `app`, `api`, `lib`, `components`, and `types`.
- Lint and format tooling configured.
- Vitest configured with one passing smoke test and runnable validation scripts (`npm test` and `npm run test:validation`).
- Minimal home page exists as `Home.tsx`, presents AgentClinic name and short purpose, and uses semantic layout landmarks (`header`, `main`, `footer`) with split subcomponents where `HomeHeader`, `HomeMain`, and `HomeFooter` each live in their own files, plus independent CSS.
- Home page layout and typography adapt responsively without introducing horizontal overflow at supported breakpoints.

## Out of Scope

- Database setup and migrations.
- API domain logic (agents, ailments, therapies, appointments).
- Full Playwright setup and end-to-end flows.
- Production hardening and advanced observability.
- Full dashboard UX, feature navigation, and role-specific views.
