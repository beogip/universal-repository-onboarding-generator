# Tasks: Universal Repository Onboarding Generator v3.0.0

**Input**: Design documents from `/specs/001-universal-repository-onboarding/`
**Prerequisites**: plan.md (✓), research.md (✓), data-model.md (✓), contracts/ (✓)

## Execution Flow (main)

```
1. Load plan.md from feature directory
   → ✓ COMPLETE: Node.js 18+ CLI with build.js extension approach
   → Extract: Commander.js, Mustache, build.js integration, src/parts/ extension
2. Load design documents:
   → data-model.md: Repository, BuildConfiguration, PromptOutput, RepositoryType entities
   → contracts/: CLI interface, build system integration contracts
   → research.md: NPX distribution, build.js extension, repository analysis decisions
3. Generate tasks focused on build.js extension (preserve existing functionality)
   → Setup: NPX package, CLI structure, build.js extension
   → Tests: CLI commands, repository analysis, build integration
   → Core: Analysis engine, build system extension, template parts
   → Integration: NPX workflow, prompt generation, file system
   → Polish: Performance, cross-platform testing, documentation
4. Task rules applied:
   → Different files = [P] for parallel execution
   → Build.js extensions = sequential (shared system)
   → Tests before implementation (TDD approach)
5. All contracts and entities covered
6. Dependencies mapped for build.js integration workflow
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **Build.js Focus**: Extend existing system, don't replace

## Path Conventions (Single Project Structure)

- **CLI Source**: `src/cli/`, `src/analysis/`, `src/templates/`
- **Build Extensions**: `build/`, `src/parts/` (extend existing)
- **Tests**: `tests/unit/`, `tests/integration/`, `tests/contract/`
- **Package**: Root-level `package.json`, `bin/` directory

## Phase 3.1: Setup & NPX Package Structure

- [ ] T001 Create NPX package structure with bin entry for `repository-onboarding-generator`
- [ ] T002 Initialize Node.js project with Commander.js, Mustache.js dependencies (preserve existing chokidar)
- [ ] T003 [P] Configure Jest testing framework with integration test setup
- [ ] T004 [P] Configure ESLint/Prettier for CLI code (separate from build.js linting)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

- [ ] T005 [P] Contract test CLI `install` command in `tests/contract/test_cli_install.js`
- [ ] T006 [P] Contract test CLI `regenerate` command in `tests/contract/test_cli_regenerate.js`
- [ ] T007 [P] Contract test CLI `customize` command in `tests/contract/test_cli_customize.js`
- [ ] T008 [P] Contract test build.js multi-output extension in `tests/contract/test_build_extension.js`
- [ ] T009 [P] Integration test repository analysis workflow in `tests/integration/test_repository_analysis.js`
- [ ] T010 [P] Integration test build.js prompt generation in `tests/integration/test_prompt_generation.js`
- [ ] T011 [P] Integration test NPX installation workflow in `tests/integration/test_npx_workflow.js`
- [ ] T012 [P] Integration test template customization in `tests/integration/test_template_customization.js`

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### Repository Analysis Engine

- [ ] T013 [P] Repository entity model in `src/analysis/repository.js`
- [ ] T014 [P] RepositoryType detection logic in `src/analysis/repository-detector.js`
- [ ] T015 [P] BuildConfiguration generator in `src/analysis/build-config-generator.js`
- [ ] T016 Repository analysis orchestrator in `src/analysis/analyzer.js` (coordinates T013-T015)

### Build System Extension (Sequential - shared build.js system)

- [ ] T017 Extend PromptBuilder class for multi-output support in `build/build.js`
- [ ] T018 Add repository variables to existing variable system in `build/build.js`
- [ ] T019 Implement multi-output configuration processing in `build/build.js`
- [ ] T020 Add build.js watch mode integration for prompt regeneration in `build/build.js`

### CLI Command Implementation

- [ ] T021 [P] CLI install command controller in `src/cli/install-command.js`
- [ ] T022 [P] CLI regenerate command controller in `src/cli/regenerate-command.js`
- [ ] T023 [P] CLI customize command controller in `src/cli/customize-command.js`
- [ ] T024 Main CLI entry point in `bin/repository-onboarding-generator` (coordinates T021-T023)

### Template Parts Extensions

- [ ] T025 [P] Repository detection template part in `src/parts/repository-detection.md`
- [ ] T026 [P] Setup environment template part in `src/parts/setup-environment.md`
- [ ] T027 [P] Development workflow template part in `src/parts/development-workflow.md`
- [ ] T028 [P] Testing guide template part in `src/parts/testing-guide.md`
- [ ] T029 [P] Template selection logic part in `src/parts/template-selection.md`

## Phase 3.4: Integration & File System Operations

- [ ] T030 Template installation service in `src/templates/template-installer.js`
- [ ] T031 File conflict resolution handler in `src/templates/conflict-resolver.js`
- [ ] T032 .repository-onboarding/ directory manager in `src/templates/local-storage.js`
- [ ] T033 .github/prompts/ output manager in `src/templates/prompt-outputter.js`
- [ ] T034 NPX package.json configuration with proper bin entries

## Phase 3.5: Polish & Validation

- [ ] T035 [P] Unit tests for repository detection in `tests/unit/test_repository_detector.js`
- [ ] T036 [P] Unit tests for build configuration generation in `tests/unit/test_build_config_generator.js`
- [ ] T037 [P] Performance tests (<5s analysis time) in `tests/performance/test_analysis_speed.js`
- [ ] T038 [P] Cross-platform compatibility tests in `tests/platform/test_cross_platform.js`
- [ ] T039 [P] Build.js backward compatibility verification in `tests/integration/test_backward_compatibility.js`
- [ ] T040 [P] Memory usage validation (<100MB) in `tests/performance/test_memory_usage.js`
- [ ] T041 [P] Update README.md with installation and usage instructions
- [ ] T042 [P] Create NPM package documentation in `docs/npm-package.md`
- [ ] T043 Remove any temporary/debug code and optimize imports

## Dependencies

### Critical Path (Build System Integration)

- Tests (T005-T012) before ALL implementation
- Repository Analysis (T013-T016) before Build Extension (T017-T020)
- Build Extension (T017-T020) before CLI Implementation (T021-T024)
- CLI Implementation before Integration (T030-T034)

### Parallel Opportunities

- **Repository Models** (T013-T015): Different files, can run parallel
- **Template Parts** (T025-T029): Independent files, fully parallel
- **CLI Commands** (T021-T023): Different command files, can run parallel
- **Unit Tests** (T035-T036): Different test files, can run parallel
- **Polish Tasks** (T037-T042): Independent documentation and testing

### Build.js Extension Sequence (MUST be sequential)

1. T017: Multi-output support
2. T018: Repository variables
3. T019: Configuration processing
4. T020: Watch mode integration

## Parallel Execution Examples

### Phase 3.2: Launch all contract tests together

```bash
# These can all run in parallel - different test files
Task: "Contract test CLI install command in tests/contract/test_cli_install.js"
Task: "Contract test CLI regenerate command in tests/contract/test_cli_regenerate.js"
Task: "Contract test build.js extension in tests/contract/test_build_extension.js"
Task: "Integration test NPX workflow in tests/integration/test_npx_workflow.js"
```

### Phase 3.3: Repository analysis models (parallel)

```bash
# Different entity files - can run together
Task: "Repository entity model in src/analysis/repository.js"
Task: "RepositoryType detection logic in src/analysis/repository-detector.js"
Task: "BuildConfiguration generator in src/analysis/build-config-generator.js"
```

### Phase 3.3: Template parts creation (fully parallel)

```bash
# All independent markdown files in src/parts/
Task: "Repository detection template part in src/parts/repository-detection.md"
Task: "Setup environment template part in src/parts/setup-environment.md"
Task: "Development workflow template part in src/parts/development-workflow.md"
Task: "Testing guide template part in src/parts/testing-guide.md"
```

## Key Implementation Notes

### Build.js Integration Requirements

- **Preserve Existing**: All current build.js functionality must work unchanged
- **Extend Configuration**: Support both old config.json and new multi-output format
- **Variable Compatibility**: Add repository.\* variables alongside existing auto-variables
- **Watch System**: Leverage existing chokidar for prompt regeneration

### NPX Package Requirements

- **Executable**: Proper bin entry in package.json for global NPX access
- **Dependencies**: Minimal additional deps beyond existing build.js requirements
- **Cross-Platform**: Path handling compatible with Windows/macOS/Linux
- **Performance**: Installation and analysis complete in <5 seconds

### Repository Analysis Focus

- **Multi-Layer Detection**: package.json → file extensions → directory structure
- **Build Variable Generation**: Convert analysis results to build.js template variables
- **Type-Specific Parts**: Map repository types to appropriate src/parts/ selections
- **Error Handling**: Graceful fallback to generic templates on analysis failure

## Success Validation

Each task completion should be verified against:

- [ ] Tests pass (for test tasks)
- [ ] Build.js backward compatibility maintained
- [ ] NPX installation workflow functions end-to-end
- [ ] Repository-specific prompts generated correctly
- [ ] Performance targets met (<5s analysis, <100MB memory)
- [ ] Cross-platform compatibility verified
