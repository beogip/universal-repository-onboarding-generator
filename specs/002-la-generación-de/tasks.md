# Tasks: Universal Onboarding AI Prompts and Scripts (CLI NPX)

**Input**: Design documents from `/specs/002-la-generación-de/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)

```
1. Load plan.md from feature directory
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
   → quickstart.md: Extract flows → integration tests
3. Generate tasks by category:
   → Setup: CLI skeleton (`src/cli/`, `bin/`), templates fuente (`src/templates/`), fixtures de prueba
   → Tests: contract tests, integration tests (fixtures como repos objetivo)
   → Core: comandos CLI (`init|analyze|prepare|teach`), extensión de `build/build.js`
   → Integration: bin, package.json, validaciones preflight, documentación
   → Polish: unit tests, performance, idempotencia, QA manual
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions

- Single project; repository root
- Source: `src/cli/`, `src/templates/`, `src/analysis/`, `build/build.js`
- Tests: `tests/contract/`, `tests/integration/`, `tests/unit/`, `tests/performance/`, `tests/fixtures/`

## Phase 3.1: Setup

- [ ] T001 Scaffold CLI: crear `src/cli/` (index y comandos), `bin/repository-onboarding-generator` (shebang, reexport CLI)
- [ ] T002 Crear `src/templates/` con semillas: `README.md.tpl`, `QUICKSTART.md.tpl`, `CONTRIBUTING.md.tpl` (fuente para siembra en repos objetivo)
- [ ] T003 [P] Preparar fixtures de prueba: `tests/fixtures/basic-repo/` y `tests/fixtures/monorepo/` (package.json mínimos, workspaces en monorepo)
- [ ] T004 [P] Verificar/crear carpetas de test: `tests/contract/`, `tests/integration/`, `tests/unit/`, `tests/performance/`

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

CRITICAL: Estos tests deben escribirse y FALLAR antes de implementar

Contract tests (contratos → tests)

- [ ] T005 [P] Contract test: AnalysisOutput cumple `contracts/analysis-output.schema.json` en `tests/contract/analysis-output.contract.test.js`
- [ ] T006 [P] Contract test: "Generate" (modo AI) — `prepare` valida templates, resuelve placeholders y compone prompts con path `docs/onboarding/` en `tests/contract/generate-onboarding.contract.test.js`
- [ ] T007 [P] Contract test: Teach mode loggea a `.onboarding/logs` con campos requeridos en `tests/contract/teach-mode.contract.test.js`
- [ ] T008 [P] Contract test: Extensión de build soporta multi-output y variables `repository.*` (compatibilidad retenida) en `tests/contract/build-extension.v3.contract.test.js`

Integration tests (historias de usuario → tests con fixtures)

- [ ] T009 [P] CLI `init` siembra `.onboarding/` en fixture basic en `tests/integration/cli-init-seed.test.js`
- [ ] T010 [P] CLI `analyze` produce AnalysisOutput JSON (archivo y/o stdout) en `tests/integration/cli-analyze.test.js`
- [ ] T011 [P] CLI `prepare` compone `generate-onboarding.md` y `teach.md` y valida templates en `tests/integration/cli-prepare.test.js`
- [ ] T012 [P] Ensamblado modular de prompts refleja cambios de secciones en `tests/integration/prompt-assembly.test.js`
- [ ] T013 [P] Ubicación de salida: `prepare` instruye AI para escribir en `docs/onboarding/` en `tests/integration/output-guidance.test.js`
- [ ] T014 [P] Monorepo: selección de workspaces en `tests/integration/monorepo-selection.test.js`
- [ ] T015 [P] Fallback: 3 inputs (stack, PM, start) en `tests/integration/fallback-flow.test.js`
- [ ] T016 [P] Seeding por tipo de repo durante `init` en `tests/integration/template-seeding.test.js`

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [ ] T017 Implementar comandos en `src/cli/commands/init.js` (siembra `.onboarding/` en repo objetivo desde `src/templates/`)
- [ ] T018 [P] Implementar `src/cli/commands/analyze.js` (<=5s) usando `src/analysis/` y emitiendo AnalysisOutput válido
- [ ] T019 [P] Implementar `src/cli/commands/prepare.js` (valida templates, compone prompts/sections, calcula `repository.*`)
- [ ] T020 [P] Implementar `src/cli/commands/teach.js` (guía y logging en `.onboarding/logs`)
- [ ] T021 Extender `build/build.js` (PromptBuilder): multi-output + variables `repository.*` (compatibilidad preservada)
- [ ] T022 Cablear `bin/repository-onboarding-generator` y parser de CLI (sin dependencias pesadas)
- [ ] T023 [P] Implementar seeding por tipo de repo en `src/templates/` (sets por stack)
- [ ] T024 [P] Manejar selección de workspaces (monorepo) en `prepare`
- [ ] T025 [P] Manejar fallback de 3 inputs en `prepare`

## Phase 3.4: Integration

- [ ] T026 Publicación/ejecución: definir `bin` en `package.json` y scripts dev (`cli:dev`)
- [ ] T027 [P] Preflight: `prepare` incluye validaciones de templates/placeholders
- [ ] T028 [P] Actualizar `README.md` y `specs/002-la-generación-de/quickstart.md` con comandos `npx`
- [ ] T029 [P] Actualizar `.github/copilot-instructions.md` con nuevas capacidades del CLI

## Phase 3.5: Polish

## Phase 3.5: Polish

- [ ] T030 [P] Unit tests utilidades de templates/resolución en `tests/unit/template-resolver.test.js`
- [ ] T031 Performance test `analyze` (<5s) en `tests/performance/analyze-perf.test.js`
- [ ] T032 [P] Idempotencia: re-ejecuciones no sobrescriben sin confirmación; manejo de diffs
- [ ] T033 Manual QA: correr quickstart end-to-end y validar checklists

## Phase 3.6: Privacy & Connectors

- [ ] T034 Implementar privacy guard (local-only): asegurar que el CLI no realiza llamadas de red por defecto; flag/entorno para habilitar conectores (opt-in)
- [ ] T035 Implementar interfaz de conectores (stub) con allowlist y hooks de auditoría (deshabilitado por defecto)
- [ ] T036 [P] Unit tests: privacy guard y conectores deshabilitados por defecto en `tests/unit/privacy-connectors.test.js`
- [ ] T037 [P] Unit tests: auditoría de conectores (cuando habilitados) en `tests/unit/connectors-audit.test.js`
- [ ] T038 [P] Logging: registrar resumen de `analyze` y `prepare` (timestamp, entradas, salidas) en `.onboarding/logs` en `tests/unit/analysis-prepare-logging.test.js`

## Dependencies

- Setup (T001–T004) antes de tests e implementación
- Tests (T005–T016) antes de implementación (T017–T025)
- T018 bloquea verificación de AnalysisOutput en integraciones
- T021 habilita ensamblado multi-output y variables para T012
- Implementación antes de integración (T026–T029) y polish (T030–T033)
- Privacy & Connectors (T034–T038) después de Core e Integration; tests unitarios independientes [P]

## Parallel Example

```
# Lanzar en paralelo (carpetas distintas, sin dependencias cruzadas):
T005–T008   # Contract tests
T009–T016   # Integration tests por fixture
```

## Validation Checklist

- [ ] Todos los contratos tienen tests (T005–T008)
- [ ] Todas las historias tienen tests de integración (T009–T016)
- [ ] Tests primero y fallando antes de implementar
- [ ] Tareas [P] independientes (archivos distintos)
- [ ] Cada tarea indica ruta exacta
- [ ] Sin colisiones de edición en tareas paralelas
