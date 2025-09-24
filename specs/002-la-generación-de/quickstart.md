# Quickstart (CLI NPX): Universal Onboarding

## Requisitos

- Node.js 18+
- Editor con AI (Copilot/Cursor)

## Pasos

1. Instalar y sembrar en el repo objetivo

```
npx repository-onboarding-generator init
```

2. Analizar el repositorio

```
npx repository-onboarding-generator analyze
```

3. Preparar prompts y validaciones para generación

```
npx repository-onboarding-generator prepare
```

4. Generar documentación (en el editor)

- Abre `.onboarding/prompts/generate-onboarding.md` en el editor y ejecuta el prompt.
- La AI escribirá archivos en `docs/onboarding/`.

5. Sesión didáctica (teach)

- Abre `.onboarding/prompts/teach.md` y sigue la guía; se registrará en `.onboarding/logs`.

## Monorepos

- Durante `prepare`, selecciona workspaces objetivo.

## Fallback

- Si análisis es inconcluso, `prepare` te pedirá: stack, package manager, start command.

## Validación

- Usa `prepare` para verificar placeholders y coherencia antes de generar.
