# Feature Specification: Universal Onboarding AI Prompts and Scripts

**Feature Branch**: `001-universal-repository-onboarding`  
**Created**: 2025-09-23  
**Status**: Draft  
**Input**: User description: "La generación de la documentación debe ser hecha por una AI (Copilot/Cursor). Al instalarse, crear .onboarding y dos prompts /generate-onboarding y /teach. Scripts en .onboarding para operaciones (análisis de tecnologías del repo, etc.) usando ejemplos de .specify/scripts. /generate-onboarding: prompt que hace que la AI genere documentación usando outputs de script Node de análisis y templates en .onboarding/template. /teach: prompt en modo didacta para onboarding rápido. Fácil edición de prompts complejos con sistema de armado de prompts, dividido en secciones y build/deploy del package."

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

## User Scenarios & Testing (mandatory)

### Primary User Story

Como mantenedor de un repositorio, quiero instalar Universal Onboarding para que se creen prompts AI y scripts de análisis dentro de `.onboarding`, de modo que una AI (Copilot/Cursor) pueda generar documentación de onboarding personalizada y pueda guiar didácticamente a nuevos contribuyentes.

### Acceptance Scenarios

1. Given un repositorio existente, When instalo el paquete Universal Onboarding, Then se crea la carpeta `.onboarding` con prompts `/generate-onboarding` y `/teach`, y scripts base de análisis listos para ejecutar.
2. Given ejecuto `/generate-onboarding`, When la AI procesa los outputs del script Node de análisis y consulta templates en `.onboarding/template`, Then se genera documentación de onboarding lista para revisión.
3. Given un usuario nuevo, When ejecuta `/teach`, Then la AI lo guía paso a paso para preparar el entorno, entender la arquitectura, y ejecutar tareas básicas.
4. Given el equipo desea personalizar los prompts, When edita secciones dentro de `.onboarding` y ejecuta el sistema de armado de prompts, Then los prompts resultantes reflejan los cambios y quedan listos para build/deploy del package.

### Edge Cases

- ¿Qué sucede si el análisis de tecnologías falla o no detecta stack? → La AI debe fallback a plantillas genéricas y solicitar confirmaciones mínimas. [NEEDS CLARIFICATION]
- ¿Cómo se manejan repos con múltiples paquetes (monorepos)? → Debe permitir análisis por subproyecto y consolidación. [NEEDS CLARIFICATION]
- ¿Qué pasa si no existen templates en `.onboarding/template`? → Debe incluir templates base al instalar. [Confirmar alcance]
- ¿Privacidad/seguridad de datos al usar AI local/remota? → Definir políticas de qué datos se exponen. [NEEDS CLARIFICATION]

## Requirements (mandatory)

### Functional Requirements

- FR-001: El sistema debe crear automáticamente la carpeta `.onboarding` al instalarse, incluyendo prompts `/generate-onboarding` y `/teach` y scripts base de análisis.
- FR-002: Debe existir un script Node de análisis de repositorio que detecte tecnologías, dependencias, scripts y estructura, y exporte outputs consumibles por la AI.
- FR-003: El prompt `/generate-onboarding` debe instruir a la AI a generar documentación basada en outputs del análisis y templates en `.onboarding/template`.
- FR-004: El prompt `/teach` debe instruir a la AI a operar en modo didáctico, guiando al usuario para preparar el entorno, entender arquitectura, ejecutar pruebas y contribuir.
- FR-005: Debe permitir edición fácil de prompts complejos mediante un sistema de armado por secciones (archivos de secciones) previo a build/deploy del package.
- FR-006: Debe soportar plantillas por tipo de repo y fallback genérico cuando el stack no se detecte con certeza.
- FR-007: Debe generar documentación de onboarding en una ubicación estándar del repo y permitir regeneración bajo demanda.
- FR-008: Debe incluir scripts en `.onboarding/scripts` inspirados en `.specify/scripts` para tareas avanzadas (por ejemplo, análisis incremental, verificación de dependencias, extracción de scripts).
- FR-009: Debe proporcionar hooks o comandos para validar la consistencia entre los prompts y los templates antes de build/deploy.
- FR-010: Debe registrar un resumen del análisis y generación (timestamp, entradas, salidas) para auditoría.
- FR-011: Debe funcionar con AIs locales o integradas en el editor (Copilot/Cursor), sin dependencia de un proveedor específico. [NEEDS CLARIFICATION: alcance de integración]
- FR-012: Debe exponer puntos de extensión para agregar nuevas secciones de prompts y nuevos templates sin romper compatibilidad.

### Key Entities

- Prompt: definición modular por secciones con metadatos (nombre, propósito, dependencias de templates).
- Template: archivo base por tipo de contenido (README, Quickstart, Contributing) con placeholders.
- AnalysisOutput: datos estructurados del script de análisis (stack, dependencias, scripts, rutas, confianza).
- BuildConfig: configuración de armado que mapea secciones a templates y variables.

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
