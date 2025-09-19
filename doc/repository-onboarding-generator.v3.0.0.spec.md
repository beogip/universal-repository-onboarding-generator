# Universal Repository Onboarding Generator – Feature Specification v3.0.0

## 1. Overview

**Name:** Universal Repository Onboarding Generator  
**Author:** Juan Gipponi  
**Version:** 3.0.0 (September 2025)  
**Status:** In Planning  
**Objective:** Perform static and automated analysis of the structure, purpose, architectural patterns, and technologies of any repository, generating objective-driven onboarding documentation tailored to the detected stack using advanced template system and automated installation process. The key component is the creation of a specialized auto-activating AI tutor for Copilot, which acts as an interactive, read-only mentor, guiding new developers to achieve first meaningful contribution within 4 hours.

---

## 2. Context

- Onboarding new developers to existing projects is often slow and error-prone due to lack of up-to-date and tailored documentation.
- Many repositories lack onboarding guides that explain the real architecture, stack, and workflows.
- Traditional onboarding approaches lack clear time objectives and measurable success criteria.
- **NEW in v3.0**: Current installation process requires manual file copying and lacks consistency in generated documentation quality.
- **NEW in v3.0**: Different repositories need different documentation approaches, but current system doesn't provide structured templates.
- This generator automates the creation of objective-driven documentation with consistent quality through templates and simplified installation.
- Stakeholders: development teams, tech leads, new contributors, documentation owners, prompt engineers, and repository administrators.

---

## 3. Objectives & Success (Updated v3.0)

### Primary Objective

- **First meaningful contribution within 4 hours** for developers with basic experience in detected tech stack

### Secondary Objectives

- **Setup environment in ≤ 30 minutes** using essential setup guide
- **Understand core architecture in ≤ 20 minutes** through optimized documentation
- **Identify contribution opportunity in ≤ 10 minutes** via clear guidance
- **Provide AI tutor with structured knowledge** for effective interactive guidance
- **Maintainable generator architecture** for prompt engineers and contributors
- **NEW**: **Installation in ≤ 5 minutes** for any repository using automated installer
- **NEW**: **Consistent documentation quality** across all repositories using template system

### Success Metrics

- **Total reading time ≤ 45 minutes** for core understanding
- **Setup time ≤ 30 minutes** for working environment
- **Documentation total ≤ 800 lines** across all files (realistic and focused)
- **User feedback validation** on achievement of time objectives
- **Build time <1 second** for development efficiency
- **Modular maintainability** with clear component separation
- **NEW**: **Installation time ≤ 5 minutes** from start to first generation
- **NEW**: **Documentation consistency score ≥ 90%** across different repositories
- **NEW**: **Template compliance rate ≥ 95%** for generated content

---

## 4. Scope

**Included:**

- Automatic analysis of any public or accessible private repository
- Generation of objective-driven onboarding documentation in `doc/onboarding/`
- Auto-activating AI tutor integration via `.github/instructions/`
- Adaptation to multiple stacks, languages, and architectural patterns
- Smart conditional documentation (maximum 2-3 additional files, only if essential)
- Time-based success criteria and quality gates
- Modular prompt architecture with automated build system
- Development workflow with watch mode and template variables
- **NEW**: Advanced template system for consistent documentation generation
- **NEW**: Automated installation process for any repository
- **NEW**: Template validation and quality enforcement
- **NEW**: One-command setup and configuration

**Not included:**

- Generation of new code or fictitious examples
- Modification or creation of files outside the onboarding areas
- Support for repositories without read access
- Guarantee of specific onboarding times for all cases (times are targets)
- CLI independent tool (postponed to future versions)
- Multi-language support (postponed to v3.1+)
- Enterprise configuration management (postponed to v3.1+)

---

## 5. Requirements

**Functional:**

- Automatically analyze the repository's structure, technologies, and patterns
- Generate onboarding documentation in Markdown format, organized in `doc/onboarding/`
- Create auto-activating AI tutor instructions in `.github/instructions/`
- Implement strict consolidation rules (prefer CORE files over additional files)
- Include time estimates and success indicators throughout documentation
- Create documentation that enables 4-hour first contribution goal
- Support modular prompt development with automatic assembly
- Provide automated build system with template variable processing
- **NEW**: Implement template-based documentation generation with variable substitution
- **NEW**: Provide automated installation script for any repository
- **NEW**: Validate generated content against template requirements
- **NEW**: Support template customization and override mechanisms

**Non-functional:**

- Documentation must be clear, structured, and optimized for quick understanding
- Must not modify files outside the designated onboarding folders
- Process should require minimal user intervention
- Must be compatible with repositories of different languages and sizes
- Total documentation should not exceed 800 lines across all files
- Build system must be fast (<1 second) and reliable
- Modular architecture must maintain prompt coherence and effectiveness
- **NEW**: Installation process must be idempotent and safe
- **NEW**: Template system must be extensible and maintainable
- **NEW**: Generated documentation must pass template validation checks

---

## 6. Usage Flow (Updated v3.0)

### For End Users (Repository Analysis):

1. Navigate to the desired repository root directory in terminal
2. **NEW**: Run the automated installer: `npx repository-onboarding-generator install`
3. **NEW**: Follow the guided installation process (≤5 minutes)
4. Open the repository in VS Code
5. Run the generation command: `/repository-onboarding-generator`
6. System establishes onboarding objectives (STEP 1)
7. **NEW**: System selects and applies appropriate templates based on repository analysis
8. Wait for analysis and template-based documentation generation in `doc/onboarding/`
9. **NEW**: System validates generated content against template requirements
10. Review the generated files with Quick Start sections and time estimates
11. For interactive onboarding, simply ask Copilot "help me understand this codebase" – the AI tutor auto-activates
12. Follow the 4-phase structured learning flow for guided onboarding

### For Prompt Developers (Updated v3.0):

1. Clone the generator repository
2. Install dependencies: `yarn install`
3. Make changes to modular components in `src/parts/`
4. **NEW**: Edit or create templates in `src/templates/`
5. Use `yarn watch` for real-time development with automatic rebuilds
6. Test changes with `yarn build` to generate final prompt
7. **NEW**: Test template system with `yarn test-templates`
8. Deploy using the generated `dist/repository-onboarding-generator.prompt.md`

---

## 7. Generated Output Structure (Updated v3.0)

### Main Documentation (`doc/onboarding/`):

**CORE FILES (Always Generated using Templates):**

- `README.md` - Project overview with Quick Start (10 minutes) section **[Template: readme-template.md]**
- `setup-guide.md` - Essential setup (≤30 min) + Complete setup sections **[Template: setup-guide-template.md]**
- `examples/basic-usage.md` - Simple examples with first contribution guide **[Template: basic-usage-template.md]**
- `examples/advanced-workflows.md` - Complex scenarios and workflows **[Template: advanced-workflows-template.md]**

**CONDITIONAL FILES (Maximum 2-3, only if essential, using Templates):**

- `troubleshooting.md` - Common issues and solutions **[Template: troubleshooting-template.md]**
- `architecture-overview.md` - System architecture **[Template: architecture-template.md]**
- `development-workflow.md` - Contributing guidelines **[Template: development-workflow-template.md]**

### AI Integration (`.github/prompts/`):

- `repository-onboarding-generator.prompt.md` - Main generation prompt installed by npx installer

### NEW: Installation Assets:

- `.repository-onboarding/` - Installation and configuration directory
  - `config.json` - Installation configuration
  - `templates/` - Local template files for documentation generation
    - `core/` - Core templates (README, setup-guide, examples)
    - `conditional/` - Conditional templates (troubleshooting, architecture)
    - `ai-integration/` - AI mentor templates
  - `install.log` - Installation log for debugging

---

src/templates/
├── core/ # Core templates (always used)
│ ├── readme-template.md
│ ├── setup-guide-template.md
│ ├── basic-usage-template.md
│ └── advanced-workflows-template.md
├── conditional/ # Conditional templates
│ ├── troubleshooting-template.md
│ ├── architecture-template.md
│ └── development-workflow-template.md
├── ai-integration/ # AI tutor templates
│ └── ai-mentor-template.md
└── schema/ # Template validation
├── template-schema.json
└── variables-schema.json
target-repository/
├── .repository-onboarding/ # Created by installer
│ ├── config.json # Installation configuration
│ ├── install.log # Installation log
│ └── templates/ # Local template files
│ ├── core/
│ ├── conditional/
│ └── ai-integration/
├── .github/
│ └── prompts/ # Created if doesn't exist
│ └── repository-onboarding-generator.prompt.md
└── [existing repository files]

## 8. Validation & Testing (Updated v3.0)

**Content Accuracy Validation (File-by-File):**

- **README.md Verification**: Project description, technology stack, architecture patterns, and file references match actual repository
- **setup-guide.md Verification**: Prerequisites, installation commands, configuration files, and build commands align with detected tech stack
- **examples/ Verification**: All code snippets reference actual functions/classes, API endpoints exist, file paths are valid, no fictional examples
- **Tech Leader Verification**: Repository type, assessment questions, file paths, and workflows match actual project structure
- **Cross-Reference Validation**: All internal links point to existing files, technology versions match package files, commands are project-accurate

**NEW: Template & Installation Validation:**

- **Template Compliance**: Generated documentation follows template structure and requirements
- **Variable Substitution**: All template variables are correctly replaced
- **Installation Validation**: All required files and folders are created in the correct locations
- **Idempotency**: Installation can be safely repeated without data loss
- **Output Quality**: Documentation meets readability and completeness standards

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
- **If installation process fails or is destructive → fix and validate**

---

## 9. Migration from v2.2 to v3.0

**For End Users:**

**Action Required**: Use new installation process before first use

**Migration Steps:**

1. Remove existing `.github/prompts/repository-onboarding-generator.prompt.md` (if exists)
2. Run: `npx repository-onboarding-generator install`
3. Follow guided installation process
4. Use: `/repository-onboarding-generator` in VS Code Copilot chat as before

**Benefits After Migration:**

- Faster, more consistent documentation generation
- Better quality and structure in generated files
- Easier updates and maintenance
- Template-based customization options

**For Prompt Engineers:**

**New Development Workflow:**

- **Template Development**: Edit templates in `src/templates/`
- **Template Testing**: Use `yarn test-templates` for validation
- **Installation Testing**: Test installer with `yarn test-install`
- **Build Process**: Same `yarn build` generates prompt + installer

**Breaking Changes:**

- New template system requires template updates for customizations
- Installation process changes (now two-step: install + generate)
- Configuration format updated for template system

---

## 10. Notes & Key Decisions

- 2025-09-14 – Validation focuses on file existence, not setup execution (Juan Gipponi)
- 2025-09-14 – Analysis and generation performed solely via prompt, no external APIs (Juan Gipponi)
- 2025-09-14 – Onboarding times are targets and may vary by context (Juan Gipponi)
- 2025-09-15 – v2.1 Update: Added objective-driven approach with 4-hour contribution goal (Juan Gipponi)
- 2025-09-15 – Changed documentation structure to `doc/onboarding/` for better standardization (Juan Gipponi)
- 2025-09-15 – Implemented strict consolidation rules and realistic documentation limits (Juan Gipponi)
- 2025-09-15 – Added `applyTo: "**"` frontmatter for automatic Tech Leader activation via GitHub Copilot (Juan Gipponi)
- 2025-09-15 – Renumbered workflow steps from 0-5 to 1-6 for improved clarity and intuitive numbering (Juan Gipponi)
- 2025-09-15 – Enhanced STEP 6 with comprehensive file-by-file content validation and cross-reference verification (Juan Gipponi)
- 2025-09-16 – v2.2 Update: Complete architectural transformation from monolithic to modular (Juan Gipponi)
- 2025-09-16 – Implemented automated build system with yarn, watch mode, and template variables (Juan Gipponi)
- 2025-09-16 – Added mandatory summary enforcement for critical information handoff points (Juan Gipponi)
- 2025-09-16 – Created comprehensive development workflow for prompt engineering and maintenance (Juan Gipponi)
- **2025-09-17 – v3.0 Planning: Focused scope on Template System and NPX-based Automated Installation (Juan Gipponi)**
- **2025-09-17 – v3.0 Decision: NPX installer creates .repository-onboarding/ directory with templates (Juan Gipponi)**
- **2025-09-17 – v3.0 Architecture: Template-based generation with local template storage and validation (Juan Gipponi)**
- **2025-09-17 – v3.0 UX: NPX install once, then generate with /repository-onboarding-generator command (Juan Gipponi)**

---
