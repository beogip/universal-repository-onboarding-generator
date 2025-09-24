# Implementation Plan: Universal Onboarding AI Prompts and Scripts

**Branch**: `002-la-generación-de` | **Date**: 2025-09-23 | **Spec**: specs/002-la-generación-de/spec.md
**Input**: Feature specification from `/specs/002-la-generación-de/spec.md`

## Execution Flow (/plan command scope)

```
1. Load feature spec from Input path
   → Found OK: specs/002-la-generación-de/spec.md
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Clarifications present and integrated (Session 2025-09-23)
   → Project Type: single project (CLI + scripts + prompts)
   → Structure Decision: Option 1 (Single project)
3. Fill the Constitution Check section based on the constitution document
4. Evaluate Constitution Check section below
   → No violations detected; constraints aligned
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → Topics: editor AI integration (local-only), monorepo selection UX, fallback UX, template seeding, output layout `docs/onboarding/`
6. Execute Phase 1 → contracts, data-model.md, quickstart.md
   → Contracts: analysis script output schema; prompt assembly inputs/outputs; installer seeding prompts
   → Data model: PromptSection, Template, AnalysisOutput, BuildConfig, SessionLog
   → Quickstart: install, seed templates, run analysis, generate onboarding, run teach
7. Re-evaluate Constitution Check
   → PASS; outputs bounded to designated folders, idempotent flows
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

## Summary

AI-assisted onboarding with two prompts (`/generate-onboarding`, `/teach`), a local analysis script, and a modular prompt + template system. Installer seeds templates by repo type; generation writes to `docs/onboarding/`. Monorepos: select target packages during generation. Fallback: generic templates + 3 inputs clave.

## Technical Context

**Language/Version**: Node.js 18+ (CLI/scripts)  
**Primary Dependencies**: None mandated; editor AI (Copilot/Cursor) in user environment  
**Storage**: Local files in `.onboarding/` and `docs/onboarding/`  
**Testing**: Jest (contract + integration), markdown structure checks  
**Target Platform**: Cross-platform (macOS/Linux/Windows)  
**Project Type**: single  
**Performance Goals**: Analysis < 5s; generation < 10s for median repos  
**Constraints**: Local-only by default; no network; outputs < 1500 lines; idempotent installer  
**Scale/Scope**: Repos up to 1k files; basic monorepo selection support

## Constitution Check

- User-First Documentation: Prompts didácticos y docs accionables en `docs/onboarding/` → PASS
- Automation & Consistency: Scripts reproducibles; templates versionadas; validación previa → PASS
- Measurable Outcomes: Setup ≤30m, primer aporte ≤4h, lectura ≤45m (medibles en quickstart/teach) → PASS
- No Fictional Content: Basado en análisis real + templates semillados; fallback explícito → PASS
- Minimal Intrusion: Solo `.onboarding/` y `docs/onboarding/`; sin sobrescrituras sin confirmación → PASS

## Project Structure

### Documentation (this feature)

```
specs/002-la-generación-de/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md (by /tasks)
```

### Source Code (repository root)

```
.onboarding/
├── scripts/
│   ├── analyze-repo.js
│   └── validate-templates.js
├── template/
│   ├── README.md.tpl
│   ├── QUICKSTART.md.tpl
│   └── CONTRIBUTING.md.tpl
├── prompts/
│   ├── generate-onboarding.md
│   └── teach.md
└── logs/

docs/onboarding/ (generated output)
```

**Structure Decision**: Single project (DEFAULT)

## Phase 0: Outline & Research

- Editor AI local-only vs opt-in connectors: patterns, risks, toggles
- Monorepo selection UX: detection heuristics, selection UI (CLI prompt)
- Fallback UX: 3 inputs estándar y validación mínima
- Template seeding: sets por tipo de repo; re-seeding sin pérdida
- Output layout: navigation, index, per-package docs

**Output**: research.md capturing decisiones y alternativas

## Phase 1: Design & Contracts

- Data model (`data-model.md`):
  - PromptSection(id, title, order, variables)
  - Template(id, path, placeholders)
  - AnalysisOutput(stack, pm, scripts, workspaces?, confidence)
  - BuildConfig(outputs[], variables, repo metadata)
  - SessionLog(timestamp, steps[], result)
- Contracts (`contracts/`):
  - analysis-output.schema.json
  - generate-onboarding.contract.md (inputs: AnalysisOutput + templates; outputs: docs markdown)
  - teach-mode.contract.md (logging, flow)
- Quickstart (`quickstart.md`):
  - Install → Seed templates → Analyze → Generate → Review → Teach
- Update agent context: `.specify/scripts/bash/update-agent-context.sh copilot`

## Phase 2: Task Planning Approach

- Contracts → contract tests
- Entities → model creation tasks
- User stories → integration tests
- Implementation tasks in TDD order; [P] for independientes

## Phase 3+: Future Implementation

- /tasks generates tasks.md
- Implement per tasks, validate with tests and quickstart

## Complexity Tracking

(none)

## Progress Tracking

**Phase Status**:

- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented
