# Research: Universal Onboarding AI Prompts and Scripts

Date: 2025-09-23 | Branch: 002-la-generación-de

## Topics & Decisions

### Editor AI Local-only vs Opt-in Connectors

- Decision: Local-only baseline; connectors opt-in with allowlist and audit.
- Rationale: Privacy by default; predictable, offline-friendly behavior.
- Alternatives: Always-online with fetching docs (Rejected: privacy, reproducibility).

### Monorepo Selection UX

- Decision: Prompt user to select target packages during generation.
- Rationale: Control scope; avoids generating noise; fits diverse monorepos.
- Alternatives: Auto-detect primary app (Rejected: error-prone), generate-all (Rejected: bloat).

### Fallback UX for Inconclusive Analysis

- Decision: Use generic templates and ask 3 inputs (stack, package manager, start command).
- Rationale: Guarantees progress without guessing; fast user confirmation.
- Alternatives: Abort generation (Rejected: blocks onboarding), best-guess (Rejected: misleading).

### Template Seeding Strategy

- Decision: Installer asks repo type and seeds corresponding templates.
- Rationale: Faster first run; curated content.
- Alternatives: No seeding (Rejected: empty state), skeleton-only (Rejected: more manual work).

### Output Layout

- Decision: Write to `docs/onboarding/` (commit-friendly).
- Rationale: Discoverable, versioned; aligns with docs sites.
- Alternatives: `.onboarding/output` (local only), `.github/prompts` (prompt artifacts only).

## Open Questions (for future)

- Performance targets for very large monorepos (>10k files).
- Detailed connector APIs and authentication models.
- Accessibility/localization guidelines for teach mode.
