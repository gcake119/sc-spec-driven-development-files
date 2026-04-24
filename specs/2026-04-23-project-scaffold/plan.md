# Phase 1 Plan: Project Scaffold

## Task Group 1: Bootstrap baseline project
1. Initialize a Next.js project with TypeScript support.
2. Confirm Node.js runtime target is 18+.
3. Set up a clear `src/`-first project layout matching roadmap guidance.

## Task Group 2: Minimal quality tooling
1. Configure linting and formatting with project defaults.
2. Ensure scripts exist for lint and format checks.
3. Keep configuration minimal and easy for course students to understand.

## Task Group 3: Test foundation (Vitest only)
1. Add Vitest configuration for TypeScript code.
2. Add one smoke test to verify the test runner works.
3. Add `test` script and confirm it executes in a clean environment.

## Task Group 4: Minimal home page
1. Create a minimal AgentClinic home page wired through `src/app/page.tsx` and `src/components/home/Home.tsx`.
2. Use a semantic layout component with clear `header`, `main`, and `footer` landmarks.
3. Split layout content into child components, with `HomeHeader`, `HomeMain`, and `HomeFooter` each in their own files, and style with an independent CSS file.
4. Keep implementation intentionally simple and compatible with future dashboard routes.

## Task Group 5: Readiness checks
1. Verify scaffold can install dependencies and run dev server.
2. Verify lint and test scripts pass locally.
3. Document anything intentionally deferred to later phases.
