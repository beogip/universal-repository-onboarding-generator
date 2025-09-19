# Universal Repository Onboarding Generator Constitution

## Core Principles

### I. User-First Documentation

All features and outputs must prioritize clarity, accessibility, and value for new developers onboarding to a repository. Documentation must be actionable, concise, and tailored to the actual repository structure and stack.

### II. Automation & Consistency

Onboarding documentation generation must be automated, reproducible, and consistent across repositories. Manual steps should be minimized. Templates and validation rules must be used to ensure quality and uniformity.

### III. Measurable Outcomes

All onboarding flows must target measurable objectives: first meaningful contribution in ≤4 hours, setup in ≤30 minutes, and total reading time ≤45 minutes. Success metrics must be tracked and validated.

### IV. No Fictional Content

All generated documentation must be based on real repository analysis. No fictional code, examples, or references are allowed. All links, commands, and code snippets must exist and be verifiable.

### V. Minimal Intrusion

The generator must not modify or create files outside the designated onboarding and configuration folders. Existing customizations must be preserved unless explicitly confirmed by the user.

## Additional Constraints

- Documentation must not exceed 1500 lines across all files.
- The installation process must be idempotent and safe to repeat.
- The system must support multiple stacks and repository types.
- All outputs must be in Markdown and human-readable.
- All templates and configuration must be versioned.

## Development Workflow & Quality Gates

- All changes must be reviewed for compliance with this constitution.
- All new features must include testable, user-focused requirements.
- Quality gates: documentation structure, time objectives, and template compliance must be validated before release.
- Breaking changes require explicit migration instructions and version bump.

## Governance

This constitution supersedes all other practices for onboarding documentation generation in this project. Amendments require documentation, approval, and a migration plan. All PRs and reviews must verify compliance with these principles. Complexity must be justified. Use the latest specification and constitution as guidance for all development and review activities.

**Version**: 1.0.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-09-18
