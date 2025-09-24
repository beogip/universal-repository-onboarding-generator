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
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → Topics: editor AI integration (local-only), monorepo selection UX, fallback UX, template seeding, output layout `docs/onboarding/`
6. Execute Phase 1 → contracts, data-model.md, quickstart.md
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:

- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

CLI NPX que siembra `.onboarding/` (scripts, prompts, templates, logs) en repos objetivo, expone `analyze` para producir AnalysisOutput, y `prepare/teach` para guiar a la AI del editor (Copilot/Cursor) a generar documentación en `docs/onboarding/`. Extiende `build/build.js` para outputs múltiples y variables `repository.*`; privacidad local-only por defecto; monorepos con selección de paquetes; fallback con 3 inputs.

## Technical Context

**Language/Version**: Node.js 18+
**Primary Dependencies**: Ninguna obligatoria; AI del editor (Copilot/Cursor) en entorno del usuario
**Storage**: Archivos locales en `.onboarding/` y `docs/onboarding/` (en repos objetivo)
**Testing**: Jest (contract + integration), checks de markdown
**Target Platform**: Cross-platform (macOS/Linux/Windows)
**Project Type**: single
**Performance Goals**: Análisis < 5s; generación preparada < 10s median repos
**Constraints**: Local-only por defecto; sin red; outputs < 1500 líneas; idempotente
**Scale/Scope**: Repos hasta 1k archivos; monorepo básico

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- User-First Documentation: Prompts didácticos y docs accionables en `docs/onboarding/` → PASS
- Automation & Consistency: Scripts reproducibles; templates versionadas; validación previa → PASS
- Measurable Outcomes: Setup ≤30m, primer aporte ≤4h, lectura ≤45m → PASS
- No Fictional Content: Basado en análisis real + templates semillados; fallback explícito → PASS
- Minimal Intrusion: Solo `.onboarding/` y `docs/onboarding/`; sin sobrescrituras sin confirmación → PASS

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

```
src/
├── analysis/           # existente; extiende variables repository.* y multi-output
├── cli/                # nuevo: comandos init|analyze|prepare|teach
├── templates/          # nuevo: semillas para .onboarding/template
└── parts/              # prompts/sections reusables para build

tests/
├── contract/
├── integration/
├── unit/
└── performance/

# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure]
```

**Structure Decision**: Single project (DEFAULT)

## Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md capturando decisiones (local-only, monorepo UX, fallback, seeding, layout)

## Phase 1: Design & Contracts

_Prerequisites: research.md complete_

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate contracts** desde requisitos funcionales:
   - analysis-output.schema.json (schema de AnalysisOutput)
   - generate-onboarding.contract.md (inputs/outputs del flujo de generación)
   - teach-mode.contract.md (logging, flujo)

3. **Derivar tests de contrato** a partir de contratos:
   - Un archivo por contrato (fallando inicialmente)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Ejecutar `.specify/scripts/bash/update-agent-context.sh copilot`
   - Incluir solo nuevas tecnologías y mantener tamaño compacto

**Output**: data-model.md, /contracts/\*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach

_This section describes what the /tasks command will do - DO NOT execute during /plan_

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P]
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:

- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

_These phases are beyond the scope of the /plan command_

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking

_Fill ONLY if Constitution Check has violations that must be justified_

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |

## Progress Tracking

_This checklist is updated during execution flow_

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

---

_Constitution reference: `.specify/memory/constitution.md`_
