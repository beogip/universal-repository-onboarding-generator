# Data Model: Universal Onboarding AI Prompts and Scripts (CLI NPX)

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
- path: string (relative to seed root `src/templates/`)
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

### CLICommand

- name: "init"|"analyze"|"prepare"|"teach"
- args: Record<string, string|number|boolean>
- io: { cwd: string; targetRepoPath: string }

### TemplateSeed

- name: string
- files: { src: string; dest: string }[]
- repoType: string (e.g., node, python, java, go)

### TargetRepository

- path: string
- workspaces?: string[]
- docsPath: string (default `docs/onboarding/`)
- onboardingPath: string (default `.onboarding/`)
