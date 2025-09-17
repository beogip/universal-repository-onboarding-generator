# Universal Repository Onboarding Generator – Feature Specification v2.2.0

## 1. Overview

**Name:** Universal Repository Onboarding Generator  
**Author:** Juan Gipponi  
**Version:** 2.2.0 (September 2025)  
**Status:** Active  
**Objective:** Perform static and automated analysis of the structure, purpose, architectural patterns, and technologies of any repository, generating objective-driven onboarding documentation tailored to the detected stack. The key component is the creation of a specialized auto-activating AI tutor for Copilot, which acts as an interactive, read-only mentor, guiding new developers to achieve first meaningful contribution within 4 hours.

---

## 2. Context

- Onboarding new developers to existing projects is often slow and error-prone due to lack of up-to-date and tailored documentation.
- Many repositories lack onboarding guides that explain the real architecture, stack, and workflows.
- Traditional onboarding approaches lack clear time objectives and measurable success criteria.
- This generator automates the creation of objective-driven documentation and an auto-activating interactive tutor, easing the learning curve and reducing dependency on team experts.
- **NEW in v2.2**: The generator itself needed better maintainability and development workflow, leading to a complete architectural transformation.
- Stakeholders: development teams, tech leads, new contributors, documentation owners, and prompt engineers.

---

## 3. Objectives & Success (Updated v2.2)

### Primary Objective

- **First meaningful contribution within 4 hours** for developers with basic experience in detected tech stack

### Secondary Objectives

- **Setup environment in ≤ 30 minutes** using essential setup guide
- **Understand core architecture in ≤ 20 minutes** through optimized documentation
- **Identify contribution opportunity in ≤ 10 minutes** via clear guidance
- **Provide AI tutor with structured knowledge** for effective interactive guidance
- **NEW**: **Maintainable generator architecture** for prompt engineers and contributors

### Success Metrics

- **Total reading time ≤ 45 minutes** for core understanding
- **Setup time ≤ 30 minutes** for working environment
- **Documentation total ≤ 800 lines** across all files (realistic and focused)
- **User feedback validation** on achievement of time objectives
- **NEW**: **Build time <1 second** for development efficiency
- **NEW**: **Modular maintainability** with clear component separation

---

## 4. Scope

**Included:**

- Automatic analysis of any public or accessible private repository
- Generation of objective-driven onboarding documentation in `doc/onboarding/`
- Auto-activating AI tutor integration via `.github/instructions/`
- Adaptation to multiple stacks, languages, and architectural patterns
- Smart conditional documentation (maximum 2-3 additional files, only if essential)
- Time-based success criteria and quality gates
- **NEW**: Modular prompt architecture with automated build system
- **NEW**: Development workflow with watch mode and template variables

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
- **NEW**: Support modular prompt development with automatic assembly
- **NEW**: Provide automated build system with template variable processing

**Non-functional:**

- Documentation must be clear, structured, and optimized for quick understanding
- Must not modify files outside the designated onboarding folders
- Process should require minimal user intervention
- Must be compatible with repositories of different languages and sizes
- Total documentation should not exceed 800 lines across all files
- **NEW**: Build system must be fast (<1 second) and reliable
- **NEW**: Modular architecture must maintain prompt coherence and effectiveness

---

## 6. Usage Flow (Updated v2.2)

### For End Users (Repository Analysis):

1. Navigate to the desired repository in VS Code
2. Run the prompt: `@workspace /repo-onboarding`
3. System establishes onboarding objectives (STEP 1)
4. Wait for analysis and documentation generation in `doc/onboarding/`
5. Review generated files with Quick Start sections and time estimates
6. For interactive onboarding, simply ask Copilot "help me understand this codebase" - the AI tutor auto-activates
7. Follow the 4-phase structured learning flow for guided onboarding

### For Prompt Developers (NEW in v2.2):

1. Clone the generator repository
2. Install dependencies: `yarn install`
3. Make changes to modular components in `src/parts/`
4. Use `yarn watch` for real-time development with automatic rebuilds
5. Test changes with `yarn build` to generate final prompt
6. Deploy using the generated `dist/repository-onboarding-generator.instructions.md`

---

## 7. Generated Output Structure (Updated v2.2)

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

## 8. Key Improvements in v2.2 (NEW)

**Modular Architecture Transformation:**

- **Monolithic → Modular**: Converted 803-line single file to 9 specialized components
- **Component Structure**: Each prompt step now has its own `.md` file for focused editing
- **Configuration Management**: `config.json` defines assembly order, metadata, and variables
- **Maintainability**: Clear separation of concerns enables easier updates and contributions

**Automated Build System:**

- **Build Script**: `build/build.js` (223 lines) with template variable processing
- **Template Variables**: Automatic DATE, BUILD_DATE, TIMESTAMP generation
- **Watch Mode**: Real-time development with `yarn watch` for immediate feedback
- **Build Statistics**: Performance metrics and file size reporting

**Development Experience:**

- **Package Management**: Full yarn integration with optimized scripts
- **Development Scripts**: `yarn dev`, `yarn watch`, `yarn build` workflows
- **File Organization**: Clear `src/parts/` structure with numbered components
- **Distribution**: Automated generation to `dist/` with `.gitignore` exclusion

**Enhanced Information Flow:**

- **Mandatory Summaries**: Critical handoff points between STEP 2, STEP 3, and STEP 6
- **Evidence-Based Approach**: Stronger enforcement against fictional documentation
- **Quality Gates**: Enhanced validation with file-by-file verification
- **Coherence Protocol**: Systematic information preservation across prompt steps

---

## 9. Modular Architecture Details (NEW v2.2)

### Component Structure (`src/parts/`):

```
src/parts/
├── config.json                    # Build configuration and metadata
├── 00-header.md                   # Prompt header with version variables
├── 01-establish-objectives.md     # STEP 1: Onboarding objectives
├── 02-repository-analysis.md      # STEP 2: Evidence-based analysis
├── 03-documentation-strategy.md   # STEP 3: Strategy with summary
├── 04-content-creation.md         # STEP 4: Content generation
├── 05-copilot-integration.md      # STEP 5: AI tutor creation
├── 06-validation-quality.md       # STEP 6: Enhanced validation
├── 07-execution-requirements.md   # Execution requirements
└── 99-footer.md                   # Final instructions and reminders
```

### Build System Features:

- **Template Processing**: Variables like `{{VERSION}}`, `{{DATE}}` automatically substituted
- **Configuration Driven**: `config.json` controls assembly order and metadata
- **Performance**: Sub-second builds with file watching capabilities
- **Validation**: Configuration and file existence verification
- **Statistics**: Build time, output size, and component metrics

### Development Workflow:

1. **Edit Components**: Modify specific `.md` files for targeted changes
2. **Watch Mode**: `yarn watch` provides real-time builds during development
3. **Testing**: `yarn build` generates final prompt for testing
4. **Quality Assurance**: Built-in validation ensures component integrity
5. **Deployment**: Use generated `dist/` file for production deployment

---

## 10. Validation & Testing (Enhanced v2.2)

**Content Accuracy Validation (File-by-File):**

- **README.md Verification**: Project description, technology stack, architecture patterns, and file references match actual repository
- **setup-guide.md Verification**: Prerequisites, installation commands, configuration files, and build commands align with detected tech stack
- **examples/ Verification**: All code snippets reference actual functions/classes, API endpoints exist, file paths are valid, no fictional examples
- **Tech Leader Verification**: Repository type, assessment questions, file paths, and workflows match actual project structure
- **Cross-Reference Validation**: All internal links point to existing files, technology versions match package files, commands are project-accurate

**NEW: Build System Validation:**

- **Component Integrity**: Each modular component maintains prompt coherence
- **Variable Processing**: Template variables correctly substituted in final output
- **Assembly Validation**: Final prompt maintains logical flow and effectiveness
- **Performance Testing**: Build time remains under 1 second threshold
- **Configuration Validation**: `config.json` structure and component references verified

**Enhanced Information Flow Validation:**

- **Mandatory Summary Enforcement**: STEP 2, 3, and 6 must produce structured summaries
- **Handoff Protocol**: Information correctly passes between prompt steps
- **Evidence Verification**: All claims backed by actual repository analysis
- **Anti-Fiction Measures**: Strong enforcement against generated fictional content

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
- **NEW**: If build time > 1 second → optimize build process
- **NEW**: If component changes break prompt effectiveness → rollback and revise

---

## 11. Launch & Follow-up (Updated v2.2)

**End User Experience:**

- Launch the generator in target repositories and measure objective achievement
- Collect feedback specifically on time-based goals (4-hour contribution, 30-min setup)
- Monitor usage metrics and effectiveness of auto-activating AI tutor
- Schedule periodic reviews to ensure documentation remains optimized
- Track success rate of first contributions within targeted timeframes

**NEW: Development Experience:**

- Monitor prompt engineer productivity with modular architecture
- Collect feedback on build system effectiveness and development workflow
- Track contribution velocity and maintenance overhead reduction
- Measure impact of automated builds on prompt quality consistency
- Evaluate modular approach effectiveness for collaborative development

---

## 12. Migration from v2.1 to v2.2

**For End Users:**

- **No Changes Required**: Same `@workspace /repo-onboarding` command
- **Same Output**: Generated documentation structure and content unchanged
- **Enhanced Quality**: Better validation and more accurate repository analysis

**For Prompt Engineers:**

- **Architecture Change**: Single file → modular components approach
- **New Workflow**: Use `yarn install`, `yarn watch`, `yarn build` workflow
- **File Locations**: Edit `src/parts/*.md` instead of single instruction file
- **Build Requirement**: Must run build process to generate final prompt

**Breaking Changes:**

- Direct editing of `src/repository-onboarding-generator.instructions.md` no longer supported
- Build step now required for prompt deployment
- Development environment setup needed for prompt modification

---

## 13. Notes & Key Decisions

- 2025-09-14 – Validation focuses on file existence, not setup execution (Juan Gipponi)
- 2025-09-14 – Analysis and generation performed solely via prompt, no external APIs (Juan Gipponi)
- 2025-09-14 – Onboarding times are targets and may vary by context (Juan Gipponi)
- 2025-09-15 – v2.1 Update: Added objective-driven approach with 4-hour contribution goal (Juan Gipponi)
- 2025-09-15 – Changed documentation structure to `doc/onboarding/` for better standardization (Juan Gipponi)
- 2025-09-15 – Implemented strict consolidation rules and realistic documentation limits (Juan Gipponi)
- 2025-09-15 – Added `applyTo: "**"` frontmatter for automatic Tech Leader activation via GitHub Copilot (Juan Gipponi)
- 2025-09-15 – Renumbered workflow steps from 0-5 to 1-6 for improved clarity and intuitive numbering (Juan Gipponi)
- 2025-09-15 – Enhanced STEP 6 with comprehensive file-by-file content validation and cross-reference verification (Juan Gipponi)
- **2025-09-16 – v2.2 Update: Complete architectural transformation from monolithic to modular (Juan Gipponi)**
- **2025-09-16 – Implemented automated build system with yarn, watch mode, and template variables (Juan Gipponi)**
- **2025-09-16 – Added mandatory summary enforcement for critical information handoff points (Juan Gipponi)**
- **2025-09-16 – Created comprehensive development workflow for prompt engineering and maintenance (Juan Gipponi)**

---
