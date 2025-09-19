# Implementation Plan: Universal Repository Onboarding Generator v3.0.0

**Branch**: `001-universal-repository-onboarding` | **Date**: 2025-09-18 | **Spec**: [./spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-universal-repository-onboarding/spec.md`

## Execution Flow (/plan command scope)

```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, or `QWEN.md` for Qwen Code).
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

NPX-installable command that analyzes repository structure and generates comprehensive onboarding documentation using customizable templates. Technical approach: Extend existing build.js system from src/parts/ to generate complex prompts in .github/prompts/, enabling VS Code Copilot integration with template-based repository analysis and documentation generation.

## Technical Context

**Language/Version**: Node.js 18+ (NPM package with existing build.js infrastructure)  
**Primary Dependencies**: Commander.js (CLI), fs/path (file operations), mustache (templating), chokidar (existing watch system)  
**Storage**: Local filesystem (.repository-onboarding/ for templates, .github/prompts/ for generated prompts via build.js)  
**Testing**: Jest (unit tests), integration tests for NPX installation workflow  
**Target Platform**: Cross-platform CLI (macOS, Linux, Windows) with existing build system
**Project Type**: single (CLI tool with modular prompt system using existing src/parts/ architecture)  
**Performance Goals**: <5 seconds analysis time, <1MB template storage, leverage existing build optimization  
**Constraints**: Must work offline, idempotent operations, extend existing build.js without breaking compatibility  
**Scale/Scope**: Support 10+ repository types, 20+ template variations, reuse existing src/parts/ modular system

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

**User-First Documentation**: ✅ PASS - Templates prioritize contributor experience, 4-hour first contribution goal aligned with requirements
**Automation & Consistency**: ✅ PASS - NPX installation + build.js system provides automated, consistent setup across projects  
**Measurable Outcomes**: ✅ PASS - Success criteria: <5s analysis, 4-hour first contribution, setup ≤30min, understanding ≤20min
**No Fictional Content**: ✅ PASS - All templates based on actual repository analysis via build.js modular system
**Minimal Intrusion**: ✅ PASS - Only creates .repository-onboarding/ and .github/prompts/, leverages existing architecture

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
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

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

**Structure Decision**: [DEFAULT to Option 1 unless Technical Context indicates web/mobile app]

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

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts

_Prerequisites: research.md complete_

1. **Extract entities from feature spec** → `data-model.md`:

   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:

   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:

   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:

   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh copilot` for your AI assistant
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/\*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach

_This section describes what the /tasks command will do - DO NOT execute during /plan_

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks focused on build.js integration and NPX packaging
- **Build System Tasks**: Extend PromptBuilder class, add multi-output support, preserve backward compatibility
- **Repository Analysis Tasks**: Create analysis engine that generates build.js variables
- **CLI Integration Tasks**: NPX package structure, command interface, build system integration
- **Template System Tasks**: New src/parts/ files for repository-specific content

**Ordering Strategy (Build.js Integration Focus)**:

1. **Foundation**: Repository analysis engine [P] + Build system contract tests [P]
2. **Core Extension**: Extend PromptBuilder class for multi-output support
3. **Integration Layer**: CLI commands that configure and execute extended build.js
4. **Template Content**: New src/parts/ files for different repository types [P]
5. **Testing**: Integration tests for full NPX → build.js → prompt generation workflow

**Estimated Output**: 20-25 numbered tasks focusing on extending existing architecture rather than building from scratch

**Build.js Integration Priority**: All tasks must preserve existing functionality while adding new capabilities

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
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---

_Based on Constitution v2.1.1 - See `/memory/constitution.md`_
