# Universal Repository Onboarding Generator – Feature Specification v2.1.0

## 1. Overview

**Name:** Universal Repository Onboarding Generator  
**Author:** Juan Gipponi  
**Version:** 2.1.0 (September 2025)  
**Status:** Active  
**Objective:** Perform static and automated analysis of the structure, purpose, architectural patterns, and technologies of any repository, generating objective-driven onboarding documentation tailored to the detected stack. The key component is the creation of a specialized auto-activating AI tutor for Copilot, which acts as an interactive, read-only mentor, guiding new developers to achieve first meaningful contribution within 4 hours.

---

## 2. Context

- Onboarding new developers to existing projects is often slow and error-prone due to lack of up-to-date and tailored documentation.
- Many repositories lack onboarding guides that explain the real architecture, stack, and workflows.
- Traditional onboarding approaches lack clear time objectives and measurable success criteria.
- This generator automates the creation of objective-driven documentation and an auto-activating interactive tutor, easing the learning curve and reducing dependency on team experts.
- Stakeholders: development teams, tech leads, new contributors, and documentation owners.

---

## 3. Objectives & Success (Updated v2.1)

### Primary Objective

- **First meaningful contribution within 4 hours** for developers with basic experience in detected tech stack

### Secondary Objectives

- **Setup environment in ≤ 30 minutes** using essential setup guide
- **Understand core architecture in ≤ 20 minutes** through optimized documentation
- **Identify contribution opportunity in ≤ 10 minutes** via clear guidance
- **Provide AI tutor with structured knowledge** for effective interactive guidance

### Success Metrics

- **Total reading time ≤ 45 minutes** for core understanding
- **Setup time ≤ 30 minutes** for working environment
- **Documentation total ≤ 800 lines** across all files (realistic and focused)
- **User feedback validation** on achievement of time objectives

---

## 4. Scope

**Included:**

- Automatic analysis of any public or accessible private repository
- Generation of objective-driven onboarding documentation in `doc/onboarding/`
- Auto-activating AI tutor integration via `.github/instructions/`
- Adaptation to multiple stacks, languages, and architectural patterns
- Smart conditional documentation (maximum 2-3 additional files, only if essential)
- Time-based success criteria and quality gates

**Not included:**

- Generation of new code or fictitious examples
- Modification or creation of files outside the onboarding areas
- Support for repositories without read access
- Guarantee of specific onboarding times for all cases (times are targets)

---

## 5. Requirements

**Functional:**

- Automatically analyze the repository's structure, technologies, and patterns
- Generate onboarding documentation in Markdown format, organized in `doc/onboarding/`
- Create auto-activating AI tutor instructions in `.github/instructions/`
- Implement strict consolidation rules (prefer CORE files over additional files)
- Include time estimates and success indicators throughout documentation
- Create documentation that enables 4-hour first contribution goal

**Non-functional:**

- Documentation must be clear, structured, and optimized for quick understanding
- Must not modify files outside the designated onboarding folders
- Process should require minimal user intervention
- Must be compatible with repositories of different languages and sizes
- Total documentation should not exceed 800 lines across all files

---

## 6. Usage Flow (Updated v2.1)

1. Navigate to the desired repository in VS Code
2. Run the prompt: `@workspace /repo-onboarding`
3. System establishes onboarding objectives (STEP 1 - new)
4. Wait for analysis and documentation generation in `doc/onboarding/`
5. Review generated files with Quick Start sections and time estimates
6. For interactive onboarding, simply ask Copilot "help me understand this codebase" - the AI tutor auto-activates
7. Follow the 4-phase structured learning flow for guided onboarding

---

## 7. Generated Output Structure (Updated v2.1)

### Main Documentation (`doc/onboarding/`):

**CORE FILES (Always Generated):**

- `README.md` - Project overview with Quick Start (10 minutes) section
- `setup-guide.md` - Essential setup (≤30 min) + Complete setup sections
- `examples/basic-usage.md` - Simple examples with first contribution guide
- `examples/advanced-workflows.md` - Complex scenarios and workflows

**CONDITIONAL FILES (Maximum 2-3, only if essential):**

- `troubleshooting.md` - Common issues and solutions (if large/complex codebase)
- `architecture-overview.md` - System architecture (if non-standard/complex)
- `development-workflow.md` - Contributing guidelines (if complex process)

### AI Integration (`.github/instructions/`):

- `tech-leader-walkthrough.instructions.md` - Auto-activating AI mentor with `applyTo: "**"` frontmatter for seamless Copilot integration

---

## 8. Key Improvements in v2.1

**Objective-Driven Approach:**

- Added STEP 1: Establish clear time-based onboarding objectives (renumbered from STEP 0)
- Primary goal: First contribution within 4 hours
- Measurable success criteria with realistic time estimates
- 6-step workflow (1-6) for improved clarity

**Optimized Structure:**

- Changed documentation location: `.copilot/onboarding/` → `doc/onboarding/` (more standard)
- Reduced fragmentation: Maximum 2-3 conditional files vs previous unlimited
- Strict consolidation rules: Prefer CORE files over additional files

**Enhanced AI Integration:**

- Auto-activating tech leader with `applyTo: "**"` frontmatter (no copy/paste required)
- Seamless Copilot integration following GitHub's path-specific instructions format
- Repository-specific knowledge integration
- 4-phase structured learning flow with time awareness

**Quality & Coherence:**

- Realistic documentation limits: ≤800 lines total (vs previous 500)
- Coherent quality gates and validation criteria
- Eliminated internal contradictions and inconsistencies

---

## 9. Validation & Testing (Updated v2.1)

**Content Accuracy Validation (File-by-File) - NEW:**

- **README.md Verification**: Project description, technology stack, architecture patterns, and file references match actual repository
- **setup-guide.md Verification**: Prerequisites, installation commands, configuration files, and build commands align with detected tech stack
- **examples/ Verification**: All code snippets reference actual functions/classes, API endpoints exist, file paths are valid, no fictional examples
- **Tech Leader Verification**: Repository type, assessment questions, file paths, and workflows match actual project structure
- **Cross-Reference Validation**: All internal links point to existing files, technology versions match package files, commands are project-accurate

**Onboarding Effectiveness Validation:**

- Verify developers can complete setup in ≤ 30 minutes using essential setup
- Confirm clear path to first contribution visible in ≤ 10 minutes reading
- Validate technical terms are explained before use
- Check total documentation is ≤ 800 lines across all files
- Ensure README includes time estimates for major activities

**Enhanced Quality Gates:**

- If setup-guide.md > 200 lines → consolidate or split essential vs complete
- If README.md lacks "Quick Start" section → add prominently
- If > 6 total files created → justify or consolidate
- **If any file references non-existent code/files → correct immediately**
- **If setup commands don't match detected tech stack → revise and align**

**Repository-Code Consistency Validation (Enhanced):**

- Documentation uses actual repository structure and patterns (not generic examples)
- All examples reference real code patterns from codebase (verify existence)
- Content is factually accurate with no outdated or incorrect information
- All mentioned tools, frameworks, and libraries are actually used in the project
- Tech Leader prompt includes correct repository context and operational constraints

---

## 10. Launch & Follow-up

- Launch the generator in target repositories and measure objective achievement
- Collect feedback specifically on time-based goals (4-hour contribution, 30-min setup)
- Monitor usage metrics and effectiveness of auto-activating AI tutor
- Schedule periodic reviews to ensure documentation remains optimized
- Track success rate of first contributions within targeted timeframes

---

## 11. Notes & Key Decisions

- 2025-09-14 – Validation focuses on file existence, not setup execution (Juan Gipponi)
- 2025-09-14 – Analysis and generation performed solely via prompt, no external APIs (Juan Gipponi)
- 2025-09-14 – Onboarding times are targets and may vary by context (Juan Gipponi)
- **2025-09-15 – v2.1 Update: Added objective-driven approach with 4-hour contribution goal (Juan Gipponi)**
- **2025-09-15 – Changed documentation structure to `doc/onboarding/` for better standardization (Juan Gipponi)**
- **2025-09-15 – Implemented strict consolidation rules and realistic documentation limits (Juan Gipponi)**
- **2025-09-15 – Added `applyTo: "**"` frontmatter for automatic Tech Leader activation via GitHub Copilot (Juan Gipponi)\*\*
- **2025-09-15 – Renumbered workflow steps from 0-5 to 1-6 for improved clarity and intuitive numbering (Juan Gipponi)**
- **2025-09-15 – Enhanced STEP 6 with comprehensive file-by-file content validation and cross-reference verification (Juan Gipponi)**

---
