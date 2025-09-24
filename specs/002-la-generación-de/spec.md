# Feature Specification: Universal Onboarding AI Prompts and Scripts

**Feature Branch**: `002-la-generación-de`  
**Created**: 2025-09-23  
**Status**: Draft  
**Input**: User description: "La generación de la documentación debe ser hecha por una AI (Copilot/Cursor). Al instalarse, crear .onboarding y dos prompts /generate-onboarding y /teach. Scripts en .onboarding para operaciones (análisis de tecnologías del repo, etc.) usando ejemplos de .specify/scripts. /generate-onboarding: prompt que hace que la AI genere documentación usando outputs de script Node de análisis y templates en .onboarding/template. /teach: prompt en modo didacta para onboarding rápido. Fácil edición de prompts complejos con sistema de armado de prompts, dividido en secciones y build/deploy del package."

Scope & Context: Este repositorio implementa un CLI instalable (NPX), similar a "speckit", que se ejecuta dentro de repositorios objetivo para sembrar `.onboarding/` (scripts, prompts, templates, logs) y generar documentación en `docs/onboarding/`. Aquí mantenemos las plantillas y lógica (p. ej., `src/templates/`, `src/analysis/`, `build/build.js`); el CLI no escribe `.onboarding/` en este propio repositorio salvo en fixtures de prueba.

## Execution Flow (main)

```
1. Parse user description from Input
   → If empty: ERROR "No feature description provided"
2. Extract key concepts from description
   → Identify: actors, actions, data, constraints
3. For each unclear aspect:
   → Mark with [NEEDS CLARIFICATION: specific question]
4. Fill User Scenarios & Testing section
   → If no clear user flow: ERROR "Cannot determine user scenarios"
5. Generate Functional Requirements
   → Each requirement must be testable
   → Mark ambiguous requirements
6. Identify Key Entities (if data involved)
7. Run Review Checklist
   → If any [NEEDS CLARIFICATION]: WARN "Spec has uncertainties"
   → If implementation details found: ERROR "Remove tech details"
8. Return: SUCCESS (spec ready for planning)
```

---

## Clarifications

### Session 2025-09-23

- Q: ¿Cómo manejamos monorepos al generar el onboarding? → A: B (Seleccionar paquetes objetivo en generación)
- Q: ¿Cuál es el fallback cuando el análisis es inconcluso? → A: A (Usar plantillas genéricas y pedir 3 inputs clave)
- Q: ¿Cómo manejamos privacidad y exposición de datos a la AI? → A: A (Local-only: sin llamadas externas). Nota: futuro opt‑in para APIs propias y logging de clases.
- Q: ¿Debe el instalador sembrar templates base en `.onboarding/template/`? → A: B (Preguntar tipo de repo y sembrar set correspondiente)
- Q: ¿Dónde escribir la documentación generada? → A: B (`docs/onboarding/` en el repo, comiteable)
- Q: ¿Quién genera los archivos en `docs/onboarding/` durante "generate"? → A: B (La AI en el editor; el CLI prepara AnalysisOutput + prompts y copia templates)

## User Scenarios & Testing (mandatory)

### Primary User Story

Como mantenedor de un repositorio, quiero instalar Universal Onboarding para que se creen prompts AI y scripts de análisis dentro de `.onboarding`, de modo que una AI (Copilot/Cursor) pueda generar documentación de onboarding personalizada y pueda guiar didácticamente a nuevos contribuyentes.

### Acceptance Scenarios

1. Given un repositorio objetivo, When ejecuto `npx repository-onboarding-generator init`, Then se crea en ese repositorio la carpeta `.onboarding/` con prompts `/generate-onboarding` y `/teach`, y scripts base de análisis listos para ejecutar.
2. Given un repositorio objetivo ya inicializado, When ejecuto `npx repository-onboarding-generator generate`, Then la AI (en el editor) usa el AnalysisOutput y los templates de `.onboarding/template` para producir documentación de onboarding lista para revisión.
3. Given un usuario nuevo, When ejecuta `/teach` usando los prompts creados por el CLI en el repo objetivo, Then la AI lo guía paso a paso para preparar el entorno, entender la arquitectura, y ejecutar tareas básicas.
4. Given el equipo desea personalizar los prompts, When edita secciones dentro de `.onboarding` en el repo objetivo y ejecuta el sistema de armado de prompts (provisto por el CLI/build), Then los prompts resultantes reflejan los cambios y quedan listos para build/deploy del package.
5. Given se completa la generación, When la AI finaliza la sesión de generación, Then los archivos se escriben en `docs/onboarding/` del repo objetivo listos para ser comiteados.
6. Given un monorepo con múltiples paquetes, When ejecuto `npx repository-onboarding-generator generate`, Then el sistema solicita elegir paquetes objetivo y genera el onboarding para los seleccionados.
7. Given el análisis tecnológico es inconcluso, When ejecuto `npx repository-onboarding-generator generate`, Then el sistema usa plantillas genéricas y solicita 3 inputs clave al usuario para completar la generación.
8. Given ejecuto `npx repository-onboarding-generator init`, When selecciono el tipo de repo propuesto, Then se siembran templates correspondientes en `.onboarding/template/` del repo objetivo listos para usar.
9. Given ejecuto `/teach` en el repo objetivo, When se desarrolla una sesión didáctica, Then se registra un log local de la sesión en `.onboarding/logs` con timestamps y pasos ejecutados.

### Edge Cases

- Fallback de análisis inconcluso: usar plantillas genéricas y solicitar 3 inputs clave al usuario antes de generar.
- Monorepos: durante la generación, el sistema solicita seleccionar paquetes objetivo a procesar.
- Si no existen templates en `.onboarding/template/`, el instalador pregunta el tipo de repo y siembra el set de templates correspondiente.
- Ubicación de salida: la documentación generada se escribe en `docs/onboarding/` para su versionado en el repositorio.
- Privacidad/seguridad: por defecto local-only (FR-015) y conectores opt-in con allowlist + auditoría (FR-016).

## Requirements (mandatory)

### Functional Requirements

- FR-001: El sistema debe crear automáticamente la carpeta `.onboarding` al instalarse, incluyendo prompts `/generate-onboarding` y `/teach` y scripts base de análisis.
- FR-002: Debe existir un script Node de análisis de repositorio que detecte tecnologías, dependencias, scripts y estructura, y exporte outputs consumibles por la AI.
- FR-003: El prompt `/generate-onboarding` debe instruir a la AI a generar documentación basada en outputs del análisis y templates en `.onboarding/template`.
- FR-004: El prompt `/teach` debe instruir a la AI a operar en modo didáctico, guiando al usuario para preparar el entorno, entender arquitectura, ejecutar pruebas y contribuir.
- FR-005: Debe permitir edición fácil de prompts complejos mediante un sistema de armado por secciones (archivos de secciones) previo a build/deploy del package.
- FR-006: Debe soportar plantillas por tipo de repo y fallback genérico cuando el stack no se detecte con certeza.
- FR-007: Debe generar documentación de onboarding en `docs/onboarding/` (ruta por defecto, comiteable) y permitir regeneración bajo demanda.
- FR-008: Debe incluir scripts en `.onboarding/scripts` inspirados en `.specify/scripts` para tareas avanzadas (por ejemplo, análisis incremental, verificación de dependencias, extracción de scripts).
- FR-009: Debe proporcionar hooks o comandos para validar la consistencia entre los prompts y los templates antes de build/deploy.
- FR-010: Debe registrar un resumen del análisis y generación (timestamp, entradas, salidas) para auditoría.
- FR-011: Debe funcionar con AIs locales o integradas en el editor (Copilot/Cursor), sin dependencia de un proveedor específico, y sin requerir acceso de red por defecto.
- FR-012: Debe exponer puntos de extensión para agregar nuevas secciones de prompts y nuevos templates sin romper compatibilidad.
- FR-013: Monorepos: al generar, el sistema debe solicitar selección de paquetes objetivo y procesar de forma independiente cada paquete seleccionado para producir su onboarding correspondiente.
- FR-014: Fallback de análisis: cuando la detección sea inconclusa, el sistema debe utilizar plantillas genéricas y pedir exactamente 3 inputs clave (stack principal, gestor de paquetes, comando de inicio) antes de generar.
- FR-015: Privacidad por defecto: la AI debe operar en modo local‑only (sin llamadas externas), con límites de alcance al repositorio y contexto del editor.
- FR-016: Conectores opcionales: el sistema debe permitir (opt‑in) integrar APIs propias mediante listas de permitidos (allowlist) y registrar auditoría de cada llamada.
- FR-017: Teach logging: registrar localmente las sesiones de `/teach` (timestamps, pasos, resultados) en `.onboarding/logs` con política de retención configurable.
- FR-018: Instalador: sembrar templates en `.onboarding/template/` pidiendo al usuario seleccionar el tipo de repo; permitir re‑sembrado posterior sin sobrescribir cambios sin confirmación.

// CLI y Build System (este repositorio)

- FR-019: CLI instalable (NPX) con comandos: `init` (siembra), `analyze` (emite AnalysisOutput JSON), `prepare` (valida templates, compone prompts/secciones y prepara contexto para la AI), `teach` (facilita apertura del prompt de enseñanza). La escritura de `docs/onboarding/` la realiza la AI en el editor.
- FR-020: Plantillas y prompts se mantienen en este repo (p. ej., `src/templates/` y `src/parts/`) y se siembran en repos objetivo sin depender de red; no se crea `.onboarding/` dentro de este repo salvo en fixtures de tests.
- FR-021: Extender `build/build.js` para soportar múltiples outputs y variables `repository.*`, reutilizando `processTemplate()` y preservando compatibilidad con la configuración actual (backward compatible).
- FR-022: Sistema de variables: incorporar `repository.*` derivadas del análisis (stack, PM, scripts, workspaces) para procesamiento de plantillas/prompts.
- FR-023: Publicación del CLI: exponer `bin/repository-onboarding-generator`, documentar `npx` y mantener performance (<5s análisis) y memoria (<100MB).

### Key Entities

- Prompt: definición modular por secciones con metadatos (nombre, propósito, dependencias de templates).
- Template: archivo base por tipo de contenido (README, Quickstart, Contributing) con placeholders.
- AnalysisOutput: datos estructurados del script de análisis (stack, dependencias, scripts, rutas, confianza).
- BuildConfig: configuración de armado que mapea secciones a templates y variables.
- SessionLog: registros de sesiones de enseñanza (timestamp, usuario opcional, pasos, resultados, versión de prompts), almacenados localmente.

// Este repositorio

- CLICommand: comandos `init|analyze|generate|teach` con opciones y IO (paths del repo objetivo).
- TemplateSeed: set de archivos origen en este repo que se copian al repo objetivo, versionados y validados.
- TargetRepository: contexto del repo donde se ejecuta el CLI (ruta, permisos, monorepo workspaces, `docs/onboarding/`).

---

## Review & Acceptance Checklist

### Content Quality

- [ ] No implementation details (languages, frameworks, APIs)
- [ ] Enfoque en valor al usuario y necesidades de onboarding
- [ ] Redactado para stakeholders no técnicos
- [ ] Secciones obligatorias completas

### Requirement Completeness

- [ ] Sin marcadores [NEEDS CLARIFICATION]
- [ ] Requisitos testables y no ambiguos
- [ ] Criterios de éxito medibles
- [ ] Alcance claramente delimitado
- [ ] Dependencias y supuestos identificados

---

## Execution Status

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities marked
- [x] User scenarios defined
- [x] Requirements generated
- [x] Entities identified
- [ ] Review checklist passed
