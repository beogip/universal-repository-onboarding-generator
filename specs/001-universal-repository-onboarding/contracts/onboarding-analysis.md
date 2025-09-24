# Contract: Onboarding Analysis Prompt

## Purpose

Generate repository analysis prompt tailored to detected stack.

## Inputs

- repository metadata (derived from analysis)
- variables: repository.\*

## Outputs

- `.github/prompts/onboarding-analyze.md`
- Contains sections: header, repository analysis, validation, footer

## Acceptance Tests (to be written under tests/contract)

- Ensures variables are resolved (no placeholders)
- Ensures output path is correct
- Ensures analysis timing and memory constraints are documented
