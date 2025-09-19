# Quickstart: Universal Repository Onboarding Generator v3.0.0

## Prerequisites

- Node.js 18+ installed
- NPM or NPX available
- Repository with write permissions
- Git repository (initialized)
- Existing build.js system understanding (for development)

## Installation Test (5 minutes)

### Step 1: Install in Test Repository

```bash
# Create test repository
mkdir test-onboarding-repo
cd test-onboarding-repo
git init

# Create minimal JavaScript project
echo '{"name": "test-project", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}' > package.json
echo '# Test Project' > README.md

# Install onboarding generator
npx repository-onboarding-generator install
```

**Expected Output**:

```
✅ Repository onboarding generator installed successfully
📁 Templates installed in .repository-onboarding/
🤖 GitHub Copilot prompts generated in .github/prompts/ via build.js
   - onboarding-analyze.md (Repository analysis prompt)
   - contribution-guide.md (Contribution workflow prompt)
   - setup-assistant.md (Environment setup assistant)
⚡ Ready for VS Code Copilot integration
```

**Validation**:

- [ ] `.repository-onboarding/` directory created with build configuration
- [ ] `.github/prompts/` directory created with multiple prompt files
- [ ] Prompts contain repository-specific variables (project name, React framework)
- [ ] Installation completed in under 10 seconds

### Step 2: Verify Build.js Integration

```bash
# Check generated build configuration
cat .repository-onboarding/build-config.json

# Verify prompt content includes repository analysis
head -20 .github/prompts/onboarding-analyze.md
```

**Expected Content**:

- Build configuration with repository-specific parts selection
- Repository analysis variables in prompts (test-project, react, npm)
- Multiple output targets configured for different prompt types
- Repository type correctly detected as "javascript-npm"

**Validation**:

- [ ] Build config includes repository.name = "test-project"
- [ ] Build config includes repository.framework = "react"
- [ ] Prompts contain actual project metadata (not placeholders)
- [ ] Multiple prompt files generated from same parts collection

### Step 3: Test Customization and Regeneration

```bash
# Customize a template part
npx repository-onboarding-generator customize --part repository-analysis

# Modify the local template
echo "Custom analysis step for {{repository.name}}" >> .repository-onboarding/templates/parts/repository-analysis.md

# Regenerate prompts with customization
npx repository-onboarding-generator regenerate
```

**Expected Behavior**:

- Local template parts extracted to .repository-onboarding/templates/parts/
- Customizations preserved during regeneration
- Build system uses local templates over src/parts/ originals
- Generated prompts reflect custom content

**Validation**:

- [ ] Custom content appears in regenerated prompts
- [ ] Original src/parts/ files unchanged
- [ ] Build configuration updated to reference local templates

## Build System Integration Test (10 minutes)

### Step 1: Test with Existing build.js System

```bash
# Navigate to the onboarding generator repository itself
cd /path/to/universal-repository-onboarding-generator

# Test that existing build.js still works
node build/build.js

# Verify original functionality preserved
ls -la dist/
cat dist/repository-onboarding-generator.prompt.md | head -10
```

**Expected Behavior**:

- Original build.js produces existing prompt file
- No regression in existing functionality
- Original src/parts/ system works unchanged
- Existing config.json format still supported

### Step 2: Test Extended Multi-Output Mode

```bash
# Create extended config for multi-output test
cp src/parts/config.json src/parts/config-multi.json

# Edit config-multi.json to test new format
# (Add outputs array with multiple targets)

# Test extended build system
node build/build.js --config src/parts/config-multi.json
```

**Expected Behavior**:

- Multiple output files generated
- Each output contains appropriate src/parts/ content
- Repository-specific variables resolved correctly
- Build statistics show multiple file generation

### Step 3: Test Repository Analysis Integration

```bash
# Install in the generator repository itself
npx repository-onboarding-generator install

# Verify it detects itself as a Node.js project
cat .github/prompts/onboarding-analyze.md | grep -A5 "Repository Analysis"
```

**Expected Content**:

- Repository type: "javascript-npm"
- Dependencies include chokidar (from existing build system)
- Framework detection shows build tooling
- Package manager correctly identified

## Performance Validation

### Build Time Comparison

```bash
# Time original build.js
time node build/build.js

# Time extended multi-output build
time npx repository-onboarding-generator regenerate
```

**Success Criteria**: Multi-output build <3x original build time

### Watch Mode Integration

```bash
# Start watch mode for prompt regeneration
npx repository-onboarding-generator regenerate --watch &

# Modify a src/parts/ file
echo "# Updated content" >> src/parts/02-repository-analysis.md

# Verify automatic regeneration
sleep 2
ls -lt .github/prompts/
```

**Success Criteria**: Changes trigger automatic regeneration within 2 seconds

### Memory Usage Test

```bash
# Monitor memory during extended build process
/usr/bin/time -v node build/build.js 2>&1 | grep "Maximum resident set size"
```

**Success Criteria**: Memory usage <150MB for multi-output generation

## Real-World Repository Tests

### JavaScript/React Project

```bash
# Clone or create React project
npx create-react-app test-react-app
cd test-react-app

# Install onboarding generator
npx repository-onboarding-generator install

# Verify React-specific content
grep -i "react" .github/prompts/onboarding-analyze.md
grep -i "npm start" .github/prompts/contribution-guide.md
```

### Python Project

```bash
# Create Python project
mkdir test-python-project
cd test-python-project
echo "django>=4.0" > requirements.txt
echo "# Python Project" > README.md

# Install and verify Python-specific detection
npx repository-onboarding-generator install
grep -i "python" .github/prompts/onboarding-analyze.md
grep -i "pip install" .github/prompts/setup-assistant.md
```

### Generic Repository

```bash
# Create repository without specific language indicators
mkdir test-generic-repo
cd test-generic-repo
git init
echo "# Generic Repository" > README.md

# Verify fallback to generic templates
npx repository-onboarding-generator install
grep -i "generic" .repository-onboarding/build-config.json
```

## VS Code Copilot Integration Test

### Prompt File Validation

```bash
# Verify prompt files are properly formatted for Copilot
head -5 .github/prompts/onboarding-analyze.md
tail -5 .github/prompts/onboarding-analyze.md
```

**Expected Format**: Clear instructions, repository context, actionable steps

### Interactive Testing

1. Open repository in VS Code
2. Start GitHub Copilot Chat
3. Reference generated prompts: "Use @.github/prompts/onboarding-analyze.md to analyze this repository"
4. Verify Copilot can read and use generated content

**Success Criteria**: Copilot provides repository-specific guidance based on generated prompts

## Error Handling Verification

### Build System Fallback

```bash
# Test with corrupted parts file
echo "{{INVALID_SYNTAX" >> src/parts/02-repository-analysis.md

# Verify graceful error handling
npx repository-onboarding-generator regenerate 2>&1 | grep -i "error"

# Restore file
git checkout -- src/parts/02-repository-analysis.md
```

**Expected Behavior**: Clear error message, build continues with warnings

### Repository Analysis Failure

```bash
# Test with unreadable directory
chmod 000 package.json
npx repository-onboarding-generator install
chmod 644 package.json  # restore
```

**Expected Behavior**: Falls back to generic template generation

### Configuration Migration

```bash
# Test backward compatibility with old config format
cp src/parts/config.json .test-old-config.json
# Remove outputs array if present, use old format

node build/build.js --config .test-old-config.json
```

**Expected Behavior**: Works with existing configuration format

## Development Workflow Validation

### Template Part Development

```bash
# Create new src/parts/ file
echo "## Custom Analysis Step\nAnalyze {{repository.name}} for custom requirements." > src/parts/custom-analysis.md

# Add to build configuration
# Edit .repository-onboarding/build-config.json to include new part

# Regenerate and verify inclusion
npx repository-onboarding-generator regenerate
grep -i "custom requirements" .github/prompts/onboarding-analyze.md
```

### Variable System Testing

```bash
# Test all repository variables resolve correctly
npx repository-onboarding-generator install --dry-run | grep -A10 "Variables:"
```

**Expected Output**: All repository.\* variables show actual values (not template placeholders)

## Cleanup

```bash
# Remove test installation
rm -rf .repository-onboarding/
rm -rf .github/prompts/
```

## Troubleshooting Build Integration Issues

### Build System Conflicts

- Check existing build.js functionality first: `node build/build.js`
- Verify src/parts/ directory structure unchanged
- Confirm config.json backward compatibility

### Repository Analysis Problems

- Enable verbose mode: `npx repository-onboarding-generator install --verbose`
- Check detection logic: `npx repository-onboarding-generator analyze --dry-run`
- Verify package.json and file structure accessible

### Prompt Generation Issues

- Test build system independently: `node build/build.js --config .repository-onboarding/build-config.json`
- Check template processing: Review variables in generated config
- Validate output paths: Ensure .github/prompts/ directory permissions

### Performance Issues

- Profile build time: `time npx repository-onboarding-generator regenerate`
- Check memory usage: Monitor during generation process
- Review parts selection: Ensure only necessary templates included
