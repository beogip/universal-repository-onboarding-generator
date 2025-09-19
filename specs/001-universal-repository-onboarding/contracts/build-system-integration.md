# Build System Integration Contract

## build.js Extension Architecture

### Core Integration Principle

The existing build.js system will be extended (not replaced) to support multiple output targets while preserving all current functionality and patterns.

### Configuration Extensions

#### Multiple Output Support

Extend config.json to support multiple output files from same parts collection:

```json
{
  "version": "3.0.0",
  "outputs": [
    {
      "name": "repository-analysis",
      "outputPath": ".github/prompts/onboarding-analyze.md",
      "parts": [
        {
          "file": "00-header.md",
          "variables": { "PROMPT_TYPE": "Repository Analysis" }
        },
        { "file": "01-establish-objectives.md" },
        { "file": "02-repository-analysis.md" },
        { "file": "repository-detection.md" },
        { "file": "99-footer.md" }
      ]
    },
    {
      "name": "contribution-workflow",
      "outputPath": ".github/prompts/contribution-guide.md",
      "parts": [
        {
          "file": "00-header.md",
          "variables": { "PROMPT_TYPE": "Contribution Guide" }
        },
        { "file": "setup-environment.md" },
        { "file": "development-workflow.md" },
        { "file": "testing-guide.md" },
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

#### Repository-Specific Variables

Add new variable categories while preserving existing ones:

```javascript
// Existing automatic variables (preserved)
const autoVariables = {
  DATE: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  }),
  BUILD_DATE: new Date().toISOString().split("T")[0],
  TIMESTAMP: new Date().toISOString(),
};

// New repository analysis variables
const repositoryVariables = {
  "repository.name": detectedName,
  "repository.type": detectedType,
  "repository.language": primaryLanguage,
  "repository.framework": detectedFramework,
  "repository.packageManager": packageManager,
  "repository.hasTypeScript": hasTypeScript.toString(),
  "repository.dependencies": majorDependencies.join(", "),
};
```

### Build Process Extensions

#### Extended PromptBuilder Class

```javascript
class PromptBuilder {
  constructor(options = {}) {
    // Preserve all existing functionality
    this.isDev = options.dev || false;
    this.isWatch = options.watch || false;
    this.srcDir = path.join(process.cwd(), "src");
    this.partsDir = path.join(this.srcDir, "parts");
    this.distDir = path.join(process.cwd(), "dist");

    // Add new functionality
    this.repositoryAnalysis = options.repositoryAnalysis || null;
    this.multiOutput = options.multiOutput || false;
    this.outputTargets = options.outputTargets || [];
  }

  // Existing methods preserved unchanged
  log(message) {
    /* existing implementation */
  }
  error(message) {
    /* existing implementation */
  }
  readConfig() {
    /* existing implementation */
  }
  readPartFile(filename) {
    /* existing implementation */
  }

  // Extended methods
  processTemplate(template, variables) {
    // Preserve existing variable processing
    let processed = template;
    const autoVariables = {
      /* existing auto variables */
    };

    // Add repository variables
    const repositoryVariables = this.repositoryAnalysis || {};
    const allVariables = {
      ...autoVariables,
      ...repositoryVariables,
      ...variables,
    };

    // Use existing template processing logic
    for (const [key, value] of Object.entries(allVariables)) {
      const placeholder = `{{${key}}}`;
      processed = processed.replace(new RegExp(placeholder, "g"), value);
    }
    return processed;
  }

  // New method for multi-output support
  buildMultipleOutputs() {
    const config = this.readConfig();

    if (config.outputs) {
      // Multi-output mode
      for (const output of config.outputs) {
        this.buildSingleOutput(output);
      }
    } else {
      // Backward compatibility - existing single output mode
      this.build(); // Use existing build method
    }
  }
}
```

### src/parts/ Structure Extensions

#### Repository-Specific Parts

Add new src/parts/ files while preserving existing ones:

```
src/parts/
├── 00-header.md                 # Existing (enhanced with PROMPT_TYPE variable)
├── 01-establish-objectives.md   # Existing
├── 02-repository-analysis.md    # Existing (enhanced with repository detection)
├── ...existing files...
├── 99-footer.md                 # Existing
├── repository-detection.md      # New - repository type and structure analysis
├── setup-environment.md        # New - environment setup based on repository type
├── development-workflow.md     # New - contribution workflow
├── testing-guide.md           # New - testing instructions
└── template-selection.md       # New - template and prompt selection logic
```

#### Template Content Examples

**repository-detection.md**:

```markdown
## Repository Analysis

Analyze the current repository structure and determine:

1. **Primary Language**: {{repository.language}}
2. **Project Type**: {{repository.type}}
3. **Framework**: {{repository.framework}}
4. **Package Manager**: {{repository.packageManager}}
5. **Key Dependencies**: {{repository.dependencies}}

{{#repository.hasTypeScript}}
This repository uses TypeScript. Include TypeScript-specific setup instructions.
{{/repository.hasTypeScript}}

Based on this analysis, select appropriate onboarding templates...
```

### Backward Compatibility Contract

#### Existing Functionality Preserved

1. **Single Output Mode**: If no `outputs` array in config, use existing build() method
2. **Existing Variables**: All current auto-variables (DATE, BUILD_DATE, TIMESTAMP) unchanged
3. **Watch Mode**: Existing chokidar integration works for all output files
4. **CLI Arguments**: All existing --dev, --watch, etc. flags preserved
5. **Error Handling**: Existing error reporting and validation unchanged

#### Configuration Migration

```javascript
// Old config.json (still supported)
{
  "parts": [
    {"file": "00-header.md"},
    {"file": "01-establish-objectives.md"}
  ]
}

// New config.json (enhanced)
{
  "outputs": [
    {
      "name": "legacy-output",
      "outputPath": "dist/repository-onboarding-generator.prompt.md",
      "parts": [
        {"file": "00-header.md"},
        {"file": "01-establish-objectives.md"}
      ]
    }
  ]
}
```

### Performance Contract

#### Build Time Requirements

- **Single Output**: No performance regression from existing build.js
- **Multi Output**: Linear scaling - 2 outputs = ~2x build time
- **Watch Mode**: Existing chokidar efficiency maintained
- **Memory Usage**: <50MB additional overhead for repository analysis

#### Optimization Strategies

- **Shared Processing**: Parse src/parts/ files once, generate multiple outputs
- **Incremental Builds**: Only regenerate changed outputs during watch mode
- **Template Caching**: Cache processed templates between outputs

### Error Handling Extensions

#### New Error Categories

```javascript
// Repository analysis errors
REPO_ANALYSIS_FAILED: "Unable to analyze repository structure";
REPO_TYPE_DETECTION_FAILED: "Could not determine repository type";

// Multi-output errors
OUTPUT_PATH_CONFLICT: "Multiple outputs targeting same file";
OUTPUT_DIRECTORY_CREATE_FAILED: "Cannot create output directory";

// Template processing errors
REPOSITORY_VARIABLE_MISSING: "Required repository variable not available";
TEMPLATE_CONDITIONAL_ERROR: "Repository conditional logic failed";
```

#### Graceful Degradation

- **Analysis Failure**: Fall back to generic template without repository-specific variables
- **Output Path Issues**: Create single consolidated output as fallback
- **Template Errors**: Skip problematic parts, continue build with warnings

### Testing Integration Contract

#### Extended Test Coverage

```javascript
describe("PromptBuilder Extensions", () => {
  test("preserves existing single-output functionality", () => {
    // Verify backward compatibility
  });

  test("generates multiple outputs from repository analysis", () => {
    // Test new multi-output capability
  });

  test("handles repository-specific variables", () => {
    // Test variable resolution and substitution
  });
});
```

#### Build System Validation

- **Configuration Schema**: Validate extended config.json format
- **Output File Verification**: Confirm all target files created with correct content
- **Variable Resolution**: Test all repository analysis variables resolve correctly
- **Performance Benchmarks**: Ensure build time remains acceptable
