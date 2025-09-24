# Contract: Generate Onboarding

## Inputs

- AnalysisOutput JSON (from `.onboarding/scripts/analyze-repo.js`)
- Templates under `.onboarding/template/` (seeded by installer)
- Monorepo package selection (if applicable)

## Process

- Validate templates exist and placeholders resolvable
- Apply templates with variables from AnalysisOutput (and user inputs when fallback)
- Write outputs to `docs/onboarding/` (per package if monorepo)

## Outputs

- Markdown files in `docs/onboarding/` (committable)
- Index file linking to generated docs

## Validation

- All required files created
- No unresolved placeholders remain
- If monorepo, per-package subfolders created
