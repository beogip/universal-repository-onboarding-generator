# Contract: Generate Onboarding (AI-driven)

## Inputs

- AnalysisOutput JSON (from `npx repository-onboarding-generator analyze`)
- Templates under `.onboarding/template/` (seeded by `init`)
- Monorepo package selection (if applicable)

## Process

- CLI `prepare` valida templates y placeholders, compone prompts (`.onboarding/prompts/generate-onboarding.md`, `teach.md`), y señala path `docs/onboarding/`.
- La AI del editor usa esos prompts para escribir los archivos.

## Outputs

- Markdown files en `docs/onboarding/` (committable) — producidos por la AI
- Index con links a los generados

## Validation

- `prepare` deja cero placeholders sin resolver en seeding
- Los prompts generados existen y referencian el path de salida
- Si monorepo, prompts guían generación por paquete
