# Data Model: Universal Repository Onboarding Generator v3.0.0

## Core Entities

### Repository

**Fields**:

- `path`: string (absolute path to repository root)
- `name`: string (repository directory name)
- `type`: RepositoryType (detected type)
- `structure`: DirectoryStructure (analyzed structure)
- `metadata`: RepositoryMetadata (parsed from package.json/etc)
- `buildConfig`: BuildConfiguration (src/parts/ selection for this repo type)

**Validation Rules**:

- Path must exist and be readable
- Must contain .git directory or be valid project root
- Type detection must succeed within 5 seconds

**State Transitions**:

- Unanalyzed → Analyzing → Analyzed → Build-Ready → Template-Ready

### BuildConfiguration

**Fields**:

- `partsSelection`: string[] (which src/parts/ files to include)
- `variables`: VariableMap (repository-specific variables for build.js)
- `outputTargets`: OutputTarget[] (which prompt types to generate)
- `templateOverrides`: TemplateOverride[] (custom template parts)

**Integration with build.js**:

- Generates dynamic config.json for build.js based on repository analysis
- Provides repository-specific variables for existing build.js template processing
- Determines which src/parts/ modules to include in final prompt

### RepositoryType

**Enum Values**:

- `javascript-npm` (package.json present) → parts: [js-setup, npm-scripts, node-contrib]
- `python-pip` (requirements.txt/pyproject.toml) → parts: [py-setup, venv-guide, pip-contrib]
- `java-maven` (pom.xml) → parts: [java-setup, maven-guide, spring-contrib]
- `java-gradle` (build.gradle) → parts: [java-setup, gradle-guide, android-contrib]
- `csharp-dotnet` (.csproj/.sln) → parts: [dotnet-setup, nuget-guide, vs-contrib]
- `rust-cargo` (Cargo.toml) → parts: [rust-setup, cargo-guide, rust-contrib]
- `go-module` (go.mod) → parts: [go-setup, mod-guide, go-contrib]
- `generic` (fallback) → parts: [generic-setup, git-guide, basic-contrib]

### Template (extends existing build.js parts system)

**Fields**:

- `id`: string (unique template identifier, maps to src/parts/ filename)
- `name`: string (human-readable name)
- `path`: string (src/parts/ file path)
- `variables`: TemplateVariable[] (required substitutions for build.js)
- `applicableTypes`: RepositoryType[] (compatible repo types)
- `priority`: number (selection priority for parts ordering)
- `buildOrder`: number (order in build.js parts array)

**Integration Pattern**:

- Each template corresponds to a src/parts/ markdown file
- build.js processes templates with repository-specific variables
- Multiple templates combined into comprehensive prompts

### PromptOutput (new build.js output type)

**Fields**:

- `type`: PromptType (onboarding-analyze, contribution-guide, setup-assistant)
- `targetPath`: string (.github/prompts/ location)
- `partsUsed`: string[] (which src/parts/ files were included)
- `variables`: VariableMap (resolved variables from repository analysis)
- `generatedContent`: string (final assembled prompt)

**Build.js Integration**:

- Extends existing build.js to support multiple output targets
- Reuses existing template processing, variable substitution
- Maintains existing watch system for prompt regeneration

### VariableSource (extends build.js variable system)

**Enum Values**:

- `repository.name` (repository directory name)
- `repository.description` (from package.json/README)
- `repository.language` (primary detected language)
- `repository.framework` (detected framework)
- `repository.dependencies` (major dependencies list)
- `repository.scripts` (available npm/make scripts)
- `repository.packageManager` (npm, yarn, pnpm from lockfiles)
- `repository.hasTypeScript` (boolean for TypeScript presence)
- `repository.hasDocker` (boolean for Docker presence)
- `build.timestamp` (existing build.js variable)
- `build.date` (existing build.js variable)

### Installation

**Fields**:

- `targetPath`: string (repository root)
- `templates`: Template[] (selected src/parts/ templates)
- `buildOutputs`: PromptOutput[] (generated .github/prompts/ files)
- `status`: InstallationStatus (current state)
- `buildConfig`: BuildConfiguration (src/parts/ configuration)
- `conflicts`: Conflict[] (detected conflicts)

**Build Integration Workflow**:

1. Analyze repository → Generate BuildConfiguration
2. Create dynamic config for build.js with repository-specific parts/variables
3. Run extended build.js to generate .github/prompts/ files
4. Install local templates for customization

### OutputTarget (new build.js concept)

**Fields**:

- `name`: string (e.g., "onboarding-analyze", "contribution-guide")
- `outputPath`: string (e.g., ".github/prompts/onboarding-analyze.md")
- `partsFilter`: string[] (which src/parts/ to include for this output)
- `templateOverrides`: TemplateOverride[] (output-specific customizations)

### InstallationStatus

**Enum Values**:

- `planned` (ready to install)
- `installing` (in progress)
- `completed` (successful)
- `failed` (error occurred)
- `partial` (some prompts generated successfully)

### Conflict

**Fields**:

- `path`: string (conflicting file path)
- `type`: ConflictType (nature of conflict)
- `resolution`: ConflictResolution (how to handle)

### ConflictType

**Enum Values**:

- `file-exists` (target file already exists)
- `directory-exists` (target directory exists)
- `permission-denied` (insufficient permissions)
- `build-config-conflict` (conflicting build.js configuration)

## Build.js Integration Patterns

### Extended Configuration Structure

```json
{
  "version": "3.0.0",
  "outputs": [
    {
      "name": "onboarding-analyze",
      "outputPath": ".github/prompts/onboarding-analyze.md",
      "parts": [
        {
          "file": "00-header.md",
          "variables": { "PROMPT_TYPE": "Repository Analysis" }
        },
        {
          "file": "02-repository-analysis.md",
          "variables": { "REPO_TYPE": "{{repository.type}}" }
        },
        { "file": "repository-detection.md" },
        { "file": "99-footer.md" }
      ]
    },
    {
      "name": "contribution-guide",
      "outputPath": ".github/prompts/contribution-guide.md",
      "parts": [
        {
          "file": "00-header.md",
          "variables": { "PROMPT_TYPE": "Contribution Workflow" }
        },
        {
          "file": "setup-environment.md",
          "variables": { "PACKAGE_MANAGER": "{{repository.packageManager}}" }
        },
        { "file": "development-workflow.md" },
        { "file": "99-footer.md" }
      ]
    }
  ],
  "variables": {
    "repository.name": "{{REPO_NAME}}",
    "repository.type": "{{REPO_TYPE}}",
    "repository.framework": "{{FRAMEWORK}}"
  }
}
```

### Variable Resolution Flow

1. **Repository Analysis** → Extract metadata, detect type/framework
2. **Build Configuration** → Map repository type to relevant src/parts/ files
3. **Variable Mapping** → Convert repository analysis to build.js variables
4. **Template Processing** → Use existing build.js logic with new variables
5. **Multi-Output Generation** → Generate multiple .github/prompts/ files from single parts collection

## Relationships

- Repository **has-one** BuildConfiguration (repository-specific build setup)
- BuildConfiguration **has-many** OutputTargets (different prompt types)
- OutputTarget **references-many** Templates (src/parts/ files)
- Installation **belongs-to** Repository (target repository)
- Installation **has-many** PromptOutputs (generated .github/prompts/ files)
- Installation **has-many** Conflicts (detected issues)

## Data Flow Integration

1. **Repository Analysis**: Directory scan → Type detection → Metadata extraction → Build variable mapping
2. **Build Configuration**: Type-based parts selection → Variable preparation → Output target configuration
3. **Prompt Generation**: Extended build.js execution → Multiple output files → .github/prompts/ creation
4. **Template Installation**: Local .repository-onboarding/ setup → Customization support → Future regeneration capability
5. **Watch Integration**: Leverage existing chokidar system for automatic prompt regeneration
