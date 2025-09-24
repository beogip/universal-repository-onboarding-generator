# Data Model: Universal Onboarding AI Prompts and Scripts

Date: 2025-09-23 | Branch: 002-la-generación-de

## Entities

### PromptSection

- id: string
- title: string
- order: number
- variables: Record<string, string>
- relationships:
  - belongsTo: Prompt

### Template

- id: string
- path: string (relative to `.onboarding/template/`)
- placeholders: string[]
- relationships:
  - usedBy: PromptSection[]

### AnalysisOutput

- stack: string
- packageManager: string (npm|yarn|pnpm|pip|maven|gradle|cargo|go|unknown)
- scripts: Record<string, string>
- workspaces?: string[] (monorepo packages)
- confidence: number (0..1)
- metadata?: Record<string, any>

### BuildConfig

- outputs: { name: string; path: string; sections: string[] }[]
- variables: Record<string, string|number|boolean>
- repository: { name: string; description?: string; type: string }

### SessionLog

- timestamp: string (ISO)
- steps: { name: string; status: "ok"|"warn"|"error"; notes?: string }[]
- result: "success" | "partial" | "failed"
- version: string (prompts/templates version)
- user?: string
