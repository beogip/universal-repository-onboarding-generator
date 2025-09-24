# Research: Universal Onboarding AI Prompts and Scripts (CLI NPX)

Date: 2025-09-23 | Branch: 002-la-generación-de

## Decisions

- Local-only by default (no network). Editor AI (Copilot/Cursor) executes prompts; CLI no hace llamadas externas.
- AI writes docs to `docs/onboarding/`. CLI provides `analyze` + `prepare` (AnalysisOutput, prompts, paths) y `teach`.
- Monorepo support: selección de workspaces durante `prepare` (usar `package.json` workspaces y/o heurísticas).
- Fallback cuando análisis es inconcluso: solicitar 3 inputs (stack, PM, start) antes de preparar generación.
- Template seeding: sets por tipo de repo; re-seeding seguro (no sobrescribir sin confirmación).
- Build extension: `build/build.js` multi-output + `repository.*` variables; backward compatible.

## Rationale

- Privacidad y reproducibilidad: todo local; auditable; sin dependencia de proveedor.
- Editor-centric: aprovechar contexto del editor/AI para redacción y refinamiento.
- Escala: repos hasta 1k archivos, análisis <5s.
- Mantenibilidad: plantillas versionadas en este repo; siembra determinística en repos objetivo.

## Alternatives Considered

- CLI generando directamente los docs (descartado por enfoque editor-centric y privacidad contextual).
- Servicios remotos para análisis (descartado por política local-only y simplicidad operativa).
- Ignorar monorepos (descartado; común en ecos Node, pnpm, yarn).

## Open Notes

- Conectores opt-in futuros: allowlist + audit; fuera de alcance inmediato.
- UX exacta de selección monorepo: prompt CLI (+ flags) y persistencia opcional en `.onboarding/config.json`.
