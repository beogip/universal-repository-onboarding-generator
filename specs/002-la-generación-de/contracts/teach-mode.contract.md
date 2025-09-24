# Contract: Teach Mode

## Inputs

- AnalysisOutput JSON (opcional)
- Repo context (READONLY)

## Process

- Guía de setup, arquitectura y tests
- Logging de pasos a `.onboarding/logs` (JSON o NDJSON)

## Outputs

- Archivos de log en `.onboarding/logs`

## Validation

- Cada entrada: timestamp, step name, status, optional notes
- Sin llamadas de red por defecto (local-only)
