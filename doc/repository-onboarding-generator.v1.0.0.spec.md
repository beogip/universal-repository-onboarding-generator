# Universal Repository Onboarding Generator – Feature Specification

## 1. Overview

**Name:** Universal Repository Onboarding Generator  
**Author:** Juan Gipponi  
**Status:** Active  
**Objective:** Perform static and automated analysis of the structure, purpose, architectural patterns, and technologies of any repository, generating comprehensive onboarding documentation tailored to the detected stack. The key component is the creation of a specialized prompt for Copilot (or other AI), which acts as an interactive, read-only tutor, guiding new developers in exploring, understanding, and effectively contributing to the existing codebase.

---

## 2. Context

- Onboarding new developers to existing projects is often slow and error-prone due to lack of up-to-date and tailored documentation.
- Many repositories lack onboarding guides that explain the real architecture, stack, and workflows.
- This generator automates the creation of documentation and an interactive tutor, easing the learning curve and reducing dependency on team experts.
- Stakeholders: development teams, tech leads, new contributors, and documentation owners.

---

## 3. Objectives & Success

- Generate tailored and complete onboarding documentation for any repository, with minimal user intervention.
- Reduce the onboarding time for new developers by at least 50%.
- The goal is to enable a new contributor to understand the architecture and make their first contribution as quickly as possible, ideally within one day.\*
- Validate usefulness through user feedback and adoption rate of the generated onboarding.

\*Note: The mentioned times are estimates and may vary depending on repository complexity and contributor experience.

---

## 4. Scope

**Included:**

- Automatic analysis of any public or accessible private repository.
- Generation of onboarding documentation (README, setup-guide, examples, etc.).
- Creation of an interactive AI tutor prompt (Copilot or other).
- Adaptation to multiple stacks, languages, and architectural patterns.
- Detection of conditional documentation needs (API, testing, deployment, etc.).

**Not included:**

- Generation of new code or fictitious examples.
- Modification or creation of files outside the onboarding folder.
- Support for repositories without read access.
- Guarantee of specific onboarding times for all cases.

---

## 5. Requirements

**Functional:**

- Automatically analyze the repository's structure, technologies, and patterns.
- Generate onboarding documentation in Markdown format, organized in the `.copilot/onboarding/` folder.
- Detect and create conditional files only if justified by the repository.
- Create an interactive tutor prompt that uses only real repository information.

**Non-functional:**

- Documentation must be clear, structured, and easy to navigate.
- Must not modify files outside the onboarding folder.
- The process should require minimal user intervention.
- Must be compatible with repositories of different languages and sizes.

---

## 6. Usage Flow

1. Navigate to the desired repository in VS Code.
2. Run the prompt: `@workspace /repo-onboarding`.
3. Wait for the system to analyze the repository and generate documentation in `.copilot/onboarding/`.
4. Review the generated files: `README.md`, `setup-guide.md`, `tech-leader-walkthrough.md`, and the `examples/` folder.
5. Share the documentation with new contributors or customize it as needed.
6. For interactive onboarding, copy the prompt from `tech-leader-walkthrough.md` and use it with Copilot or compatible AI.

---

## 7. Risks & Mitigations

| Risk                                    | Impact | Mitigation                                              |
| --------------------------------------- | ------ | ------------------------------------------------------- |
| Incomplete or superficial documentation | Medium | Allow manual review and post-editing.                   |
| Errors in stack detection               | High   | Validate results and adjust generated files.            |
| Dependency on AI for onboarding         | Medium | Provide editable documentation and clear examples.      |
| Unreflected repository changes          | Low    | Recommend regenerating documentation after key changes. |

---

## 8. Implementation

- **Dependencies:** Only requires access to a prompt-compatible environment (e.g., Copilot in VS Code).
- **Technical plan:**
  - The user runs the `@workspace /repo-onboarding` prompt in the desired repository.
  - The prompt analyzes the repository's structure, technologies, and patterns using the AI environment's own analysis capabilities.
  - Generates Markdown files in `.copilot/onboarding/` following internal rules and templates.
  - Creates an interactive tutor prompt tailored to the actual repository content.
- **Tools:** AI prompt, analysis and text generation capabilities of the environment (no external APIs or additional tools required).

---

## 9. Validation & Testing

- Verify that all expected files are correctly generated in `.copilot/onboarding/` (README.md, setup-guide.md, tech-leader-walkthrough.md, examples/ folder, and conditional files if applicable).
- Review that the documentation is clear, relevant, and tailored to the repository's real stack.
- Validate that the interactive tutor prompt works correctly and references the generated documentation.
- Request feedback from new contributors on the usefulness, clarity, and completeness of the onboarding.
- Allow and encourage manual editing of the documentation if omissions or errors are detected.
- At the end of generation, the AI should perform an “installation check” by verifying that all onboarding files have been created correctly and report any absence or inconsistency.

---

## 10. Launch & Follow-up

- Launch the generator in the target repository and share the generated documentation with the team.
- Review usage metrics and feedback from new contributors after each onboarding.
- Schedule periodic reviews of the documentation to ensure it remains up to date as the repository evolves.
- Assign responsible parties for the continuous update and improvement of the onboarding files.

---

## 11. Notes & Key Decisions

- 2025-09-14 – Validation should focus on the existence of generated files, not on setup execution. (Juan Gipponi)
- 2025-09-14 – Clarified that analysis and generation are performed solely via the prompt, with no external APIs. (Juan Gipponi)
- 2025-09-14 – Established that onboarding times are ideal and may vary depending on context. (Juan Gipponi)

---
