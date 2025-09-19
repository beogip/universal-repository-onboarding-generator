# CLI Interface Contract

## Command: `npx repository-onboarding-generator install`

### Input

- **Working Directory**: Current working directory (repository root)
- **Options**:
  - `--template <id>`: Specific template/parts selection to use
  - `--force`: Overwrite existing files and regenerate prompts
  - `--dry-run`: Show what would be installed and which prompts generated
  - `--quiet`: Suppress non-error output
  - `--config <path>`: Custom build configuration file path

### Process

1. **Repository Analysis**

   - Validate current directory is a repository
   - Detect repository type, language, framework
   - Extract metadata for build.js variables (package.json, dependencies, etc.)

2. **Build Configuration Generation**

   - Map repository type to appropriate src/parts/ selection
   - Generate repository-specific variables for build.js template processing
   - Configure output targets for different prompt types (.github/prompts/)

3. **Prompt Generation via build.js**

   - Create dynamic build configuration with repository-specific parts
   - Execute extended build.js with multiple output targets
   - Generate .github/prompts/onboarding-analyze.md and other prompt files

4. **Template Installation**
   - Create .repository-onboarding/ directory structure
   - Install customizable template parts for future modifications
   - Set up regeneration capability using build system

### Output

- **Success (Exit Code 0)**:

  ```
  ✅ Repository onboarding generator installed successfully
  📁 Templates installed in .repository-onboarding/
  🤖 GitHub Copilot prompts generated in .github/prompts/ via build.js
     - onboarding-analyze.md (Repository analysis prompt)
     - contribution-guide.md (Contribution workflow prompt)
     - setup-assistant.md (Environment setup assistant)
  ⚡ Ready for VS Code Copilot integration
  ```

- **Failure (Exit Code 1)**:
  ```
  ❌ Installation failed: <specific error message>
  💡 Build.js integration: <build system specific guidance>
  ```

### Files Created

- `.repository-onboarding/config.json` - Build configuration with repository-specific parts selection
- `.repository-onboarding/build-config.json` - Extended build.js configuration for prompt generation
- `.repository-onboarding/templates/parts/` - Customizable src/parts/ templates for local modification
- `.github/prompts/onboarding-analyze.md` - Generated repository analysis prompt (via build.js)
- `.github/prompts/contribution-guide.md` - Generated contribution workflow prompt (via build.js)
- `.github/prompts/setup-assistant.md` - Generated environment setup prompt (via build.js)

## Command: `npx repository-onboarding-generator regenerate`

### Input

- **Working Directory**: Repository with existing installation
- **Options**:
  - `--parts <list>`: Specific src/parts/ files to include
  - `--output <type>`: Specific prompt type to regenerate
  - `--watch`: Use build.js watch mode for automatic regeneration

### Process

1. **Configuration Loading**

   - Load .repository-onboarding/build-config.json
   - Verify src/parts/ template availability
   - Check for local customizations

2. **Build System Execution**

   - Run extended build.js with repository-specific configuration
   - Process customized templates if available
   - Generate updated .github/prompts/ files

3. **Incremental Updates**
   - Compare with existing prompts
   - Preserve manual modifications where possible
   - Update only changed sections

### Output

- **Success (Exit Code 0)**:
  ```
  🔄 Prompts regenerated via build.js
  📝 Updated: .github/prompts/onboarding-analyze.md
  📝 Updated: .github/prompts/contribution-guide.md
  ⚡ Repository-specific customizations preserved
  ```

## Command: `npx repository-onboarding-generator customize`

### Input

- **Options**:
  - `--part <name>`: Specific src/parts/ template to customize
  - `--output <type>`: Specific prompt output to modify
  - `--editor`: Open customization files in default editor

### Process

1. **Template Extraction**

   - Copy relevant src/parts/ files to .repository-onboarding/templates/parts/
   - Preserve original build.js structure and variables
   - Enable local modifications while maintaining build compatibility

2. **Build Integration Setup**
   - Configure build.js to prefer local templates over src/parts/
   - Maintain variable substitution and processing pipeline
   - Set up watch mode for automatic regeneration during customization

### Output

```
📝 Template parts available for customization:
   .repository-onboarding/templates/parts/repository-analysis.md
   .repository-onboarding/templates/parts/setup-instructions.md

🔧 Modify templates and run 'regenerate' to update prompts
⚡ Watch mode: npx repository-onboarding-generator regenerate --watch
```

## Build.js Integration Contract

### Extended Configuration Format

The system extends build.js configuration to support multiple outputs:

```json
{
  "repositoryType": "javascript-npm",
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
          "file": "repository-analysis.md",
          "variables": { "REPO_TYPE": "{{repository.type}}" }
        },
        { "file": "template-selection.md" },
        { "file": "99-footer.md" }
      ]
    }
  ],
  "variables": {
    "repository.name": "my-project",
    "repository.type": "javascript-npm",
    "repository.packageManager": "npm",
    "repository.framework": "react"
  }
}
```

### Variable Extension Contract

Repository analysis results are provided to build.js as variables:

- All existing build.js variables preserved (DATE, BUILD_DATE, TIMESTAMP)
- New repository-specific variables added with `repository.` prefix
- Build system variables added with `build.` prefix
- Template processing logic unchanged from existing build.js

### Output Pipeline Contract

1. **Analysis Phase**: Repository → Variables
2. **Configuration Phase**: Variables → Build config
3. **Generation Phase**: Build config → build.js → Multiple .github/prompts/ files
4. **Watch Phase**: File changes → Regeneration (existing chokidar integration)

## Error Handling Contract

### Repository Analysis Errors

- **REPO_TYPE_UNKNOWN**: Fallback to generic parts selection, continue build
- **METADATA_PARSE_ERROR**: Use detected file structure, skip package.json variables

### Build System Errors

- **BUILD_CONFIG_INVALID**: Validate against existing build.js schema requirements
- **PARTS_MISSING**: Check src/parts/ availability, provide helpful error messages
- **TEMPLATE_SYNTAX_ERROR**: Use build.js existing error handling and validation

### Integration Errors

- **BUILD_SYSTEM_UNAVAILABLE**: Gracefully degrade to static template generation
- **OUTPUT_PATH_CONFLICT**: Handle .github/prompts/ directory creation and permissions
- **VARIABLE_RESOLUTION_FAILED**: Provide fallback values, continue generation with warnings
