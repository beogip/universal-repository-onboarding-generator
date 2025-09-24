# Tasks: Universal Onboarding AI Prompts and Scripts

Feature: `002-la-generación-de`
Spec: `specs/002-la-generación-de/spec.md`
Plan: `specs/002-la-generación-de/plan.md`

Notes:

- [P] indicates tasks that can run in parallel (different files/directories)
- TDD order: tests before implementation

## Setup

- T001: Initialize `.onboarding/` structure [P]
  - Create folders: `.onboarding/scripts`, `.onboarding/template`, `.onboarding/prompts`, `.onboarding/logs`
  - Acceptance: folders exist and are tracked

- T002: Seed base templates by repo type [P]
  - Add `.onboarding/template/README.md.tpl`, `QUICKSTART.md.tpl`, `CONTRIBUTING.md.tpl`
  - Acceptance: files created with placeholders and headers

- T003: Add prompts skeletons [P]
  - Create `.onboarding/prompts/generate-onboarding.md` and `teach.md` with section markers
  - Acceptance: prompts exist and render placeholders

## Contract Tests (Phase 1 → tests first)

- T004 [P]: Contract test for analysis output schema
  - Path: `tests/contract/analysis-output.schema.test.js`
  - Assert schema fields: `stack`, `packageManager`, `scripts`, `workspaces?`, `confidence`

- T005 [P]: Contract test for generate-onboarding flow
  - Path: `tests/contract/generate-onboarding.contract.test.js`
  - Inputs: analysis JSON + templates; Outputs: files in `docs/onboarding/`

- T006 [P]: Contract test for teach-mode logging
  - Path: `tests/contract/teach-mode.contract.test.js`
  - Assert logs in `.onboarding/logs` with timestamps and steps

## Core Implementation

- T007: Implement analysis script
  - Path: `.onboarding/scripts/analyze-repo.js`
  - Detect stack, package manager, scripts, workspaces (monorepo), confidence
  - Output JSON to stdout and `.onboarding/analysis.json`

- T008: Implement template validator
  - Path: `.onboarding/scripts/validate-templates.js`
  - Verify required templates exist and placeholders are resolvable

- T009: Implement prompt assembly for /generate-onboarding
  - Update `.onboarding/prompts/generate-onboarding.md` to:
    - Read analysis output
    - Select templates per package selection (monorepo)
    - Emit instructions to write to `docs/onboarding/`

- T010: Implement /teach prompt logic
  - Update `.onboarding/prompts/teach.md` to run didactic steps and log to `.onboarding/logs`

## Monorepo & Fallback

- T011: Add monorepo package selection flow
  - If workspaces exist, prompt user to select target packages
  - Ensure per-package generation in `docs/onboarding/{pkg}/`

- T012: Add fallback when analysis inconclusive
  - Use generic templates and request 3 inputs (stack, PM, start cmd)

## Output & Docs

- T013: Write generated docs to `docs/onboarding/`
  - Ensure index and per-package structure

- T014: Quickstart guide generation
  - Generate `docs/onboarding/QUICKSTART.md` from template

## Privacy & Connectors

- T015: Enforce local-only mode by default
  - Block network in prompts/scripts; document behavior

- T016: Connector interface (opt-in)
  - Define allowlist file `.onboarding/connectors.json` and audit hooks

## Polish [P]

- T017 [P]: Jest integration tests for flows
- T018 [P]: Markdown lint and structure validation
- T019 [P]: Pre-commit hooks for `.onboarding/` and `docs/onboarding/`
- T020 [P]: Update repository README with onboarding instructions

## Dependency Notes

- Setup (T001–T003) precede tests and implementation
- Tests (T004–T006) precede core (T007–T010)
- Monorepo/fallback (T011–T012) after core basics
- Output/docs (T013–T014) after generation flow
- Privacy/connectors (T015–T016) after core; can be parallel if isolated
- Polish (T017–T020) last
