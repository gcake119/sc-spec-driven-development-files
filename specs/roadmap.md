# AgentClinic Roadmap

## Implementation Strategy

Build in very small, testable phases. Each phase should be completable in a few hours.

## Phase Plan (10 Small Phases)

1. **Project Scaffold** (Completed)
   - Initialize Next.js + TypeScript project
   - Add lint, format, and test tooling
   - Create base folder structure
   - Establish responsive baseline styles for the home page

2. **Database Foundation**
   - Add SQLite + Drizzle setup
   - Define initial schema for agents, ailments, therapies, appointments
   - Add migration and seed scripts

3. **Agent Management API**
   - Create CRUD endpoints for agents
   - Add validation and error handling
   - Add API smoke tests

4. **Ailment Tracking API**
   - Add ailment create/read/update flows
   - Link ailments to agents
   - Add history-ready fields

5. **Therapy API**
   - Add therapy catalog and assignment endpoints
   - Link therapies to ailment records
   - Add therapy status transitions

6. **Appointment API**
   - Implement appointment booking and rescheduling
   - Add timeline queries per agent
   - Validate scheduling conflicts

7. **Staff Dashboard UI**
   - Build overview page for agents, ailments, and appointments
   - Add detail pages and quick actions
   - Connect to API routes
   - Ensure responsive behavior for tablet and desktop-first workflows

8. **Agent Dashboard UI**
   - Build agent-facing view for therapies and appointments
   - Add status summary and recent activity
   - Ensure responsive layout

9. **Reliability and UX Hardening**
   - Add loading/error states
   - Improve accessibility and browser compatibility
   - Verify responsive quality across representative viewport sizes
   - Add structured logging for core workflows

10. **MVP Validation and Release Prep**
    - End-to-end tests for critical paths
    - Final polish and docs update
    - Define MVP release checklist

## Exit Criteria for MVP

- Core features (agents, ailments, therapies, appointments, dashboards) are functional.
- Core API and UI flows are covered by automated tests.
- App runs reliably in modern browsers.
- Core UI flows are responsive across mobile, tablet, and desktop viewport ranges.
