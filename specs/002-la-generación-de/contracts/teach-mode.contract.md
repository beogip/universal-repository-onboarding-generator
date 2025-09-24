# Contract: Teach Mode

## Inputs

- AnalysisOutput JSON (optional)
- Repo context (READONLY)

## Process

- Guide user through environment setup, architecture overview, test execution
- Log steps and results to `.onboarding/logs` as JSON or NDJSON

## Outputs

- Log files under `.onboarding/logs`

## Validation

- Log entries contain timestamps, step names, status, and optional notes
- No network calls by default (local-only)
