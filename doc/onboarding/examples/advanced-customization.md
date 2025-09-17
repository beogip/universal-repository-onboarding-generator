# Advanced Customization

Based on analysis findings and strategy: Using ARCHITECTURE PATTERN details (modular parts system, template processing) and KEY COMPONENTS (config.json, build/build.js) from REPOSITORY ANALYSIS SUMMARY.

## 🔧 Deep Customization (20 minutes)

This guide covers advanced usage patterns for customizing the prompt generation system.

### Understanding Build Script Internals

**Core Build Logic** (`build/build.js`):
The build script uses a `PromptBuilder` class with these key methods:

```javascript
// Key functionality discovered in build/build.js:
class PromptBuilder {
  processTemplate(template, variables)  // Variable substitution
  validateParts(parts)                 // File existence checks
  buildPrompt()                       // Main build logic
}
```

**Template Processing Details**:

- Variables use `{{VARIABLE}}` syntax
- Automatic variables are injected during build
- User variables from config.json take precedence

### Custom Variable Configuration

**Extending config.json**:

Current structure (from actual `src/parts/config.json`):

```json
{
  "name": "Universal Repository Onboarding Generator",
  "version": "2.2.0",
  "header": {
    "variables": {
      "VERSION": "2.2.0"
    }
  },
  "parts": [...]
}
```

**Adding Custom Variables**:

1. Edit `src/parts/config.json`:

```json
{
  "header": {
    "variables": {
      "VERSION": "2.2.0",
      "AUTHOR": "Your Name",
      "CUSTOM_FIELD": "Your Value"
    }
  }
}
```

2. Use in any part file:

```markdown
Author: {{AUTHOR}}
Custom: {{CUSTOM_FIELD}}
```

3. Build to see substitution:

```bash
yarn build
```

### Advanced Parts Management

**Creating Complex Part Sections**:

Based on observed pattern in `src/parts/`:

- **00-09**: Headers and metadata
- **10-89**: Main content sections
- **90-99**: Footers and conclusions

**Example: Adding New Analysis Step**:

1. Create `src/parts/08-custom-analysis.md`:

```markdown
### STEP X: Custom Repository Analysis

Your custom analysis content here.
Uses {{VERSION}} and {{BUILD_DATE}} automatically.
```

2. Update config.json parts array:

```json
{
  "parts": [
    {
      "name": "Custom Analysis Step",
      "file": "08-custom-analysis.md",
      "description": "Custom repository analysis logic"
    }
  ]
}
```

### Build Process Customization

**Development vs Production Builds**:

From package.json scripts analysis:

- `yarn dev` = `yarn clean && yarn build:dev` (with development flags)
- `yarn prod` = `yarn clean && yarn build` (production optimized)

**Custom Build Arguments**:
The build script supports flags:

```bash
node build/build.js --dev     # Development mode
node build/build.js --watch   # Watch mode (used by yarn watch)
```

**File Watching Configuration**:
Uses chokidar@^3.6.0 for file watching:

- Watches all files in `src/parts/`
- Rebuilds automatically on changes
- Logs rebuild status with timestamps

### Output Customization

**Default Output Location**: `dist/repository-onboarding-generator.prompt.md`

**Custom Output Path** (modify build script):

```javascript
// In build/build.js, modify:
this.outputFile = path.join(this.distDir, "custom-prompt-name.md");
```

### Template System Deep Dive

**Automatic Variables** (injected by build script):

```javascript
const autoVariables = {
  DATE: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  }),
  BUILD_DATE: new Date().toISOString().split("T")[0],
  TIMESTAMP: new Date().toISOString(),
};
```

**Variable Priority**: User variables > Automatic variables

**Advanced Template Patterns**:

```markdown
<!-- Conditional content based on variables -->

{{#if DEVELOPMENT_MODE}}
Development notes here...
{{/if}}

<!-- Multiple variable substitution -->

Built on {{BUILD_DATE}} at {{TIMESTAMP}} for version {{VERSION}}
```

### Workflow Optimization

**Efficient Development Cycle**:

1. **Terminal 1**: Run `yarn watch` (continuous builds)
2. **Terminal 2**: Work on parts files
3. **Terminal 3**: Test output with `head dist/repository-onboarding-generator.prompt.md`

**Validation Scripts** (custom additions):

```bash
# Add to package.json scripts:
"validate": "node -e \"console.log('Checking output...'); require('fs').readFileSync('dist/repository-onboarding-generator.prompt.md', 'utf8')\""
"wordcount": "wc -w dist/repository-onboarding-generator.prompt.md"
```

### Integration Patterns

**VS Code Integration**:

- Place generated prompt in `.github/prompts/` for GitHub Copilot
- Use `@workspace /repo-onboarding` to activate

**CI/CD Integration Example**:

```yaml
# .github/workflows/build.yml (not currently present)
- name: Build Prompt
  run: |
    yarn install
    yarn build
    # Validate output exists
    test -f dist/repository-onboarding-generator.prompt.md
```

## 🎯 Advanced Contribution Patterns

**Architecture Improvements**:

1. **Add Part Validation**: Enhance `validateParts()` method
2. **Template Engine**: Extend variable processing capabilities
3. **Output Formats**: Support multiple output formats (JSON, YAML, etc.)

**Build System Enhancements**:

1. **Source Maps**: Track which parts contribute to output sections
2. **Performance**: Add build timing and optimization
3. **Testing**: Add validation for generated prompts

### Configuration Examples

**Multi-Version Support**:

```json
{
  "versions": {
    "2.2.0": { "stable": true },
    "3.0.0": { "experimental": true }
  },
  "build": {
    "minify": false,
    "validate": true
  }
}
```

## ✅ Mastery Validation

Advanced customization mastery indicators:

- ✅ Created custom part files with proper numbering
- ✅ Extended config.json with custom variables
- ✅ Modified build process for specific needs
- ✅ Understood template variable precedence
- ✅ Implemented efficient development workflow
- ✅ Ready to contribute architectural improvements

**Time Investment**: ~20 minutes for basic patterns, ~60 minutes for build script modifications

---

**Mastery level**: Advanced user | **Contribution ready**: Architecture improvements
