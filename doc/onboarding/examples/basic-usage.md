# Basic Usage Example

Based on analysis findings and strategy: Using KEY COMPONENTS from REPOSITORY ANALYSIS SUMMARY (src/parts/ modular system, build/build.js processor) and basic workflow from DOCUMENTATION STRATEGY SUMMARY.

## 🎯 Your First Prompt Generation (5 minutes)

This example walks you through generating your first repository onboarding prompt using the modular parts system.

### Prerequisites

- ✅ Completed [setup-guide.md](../setup-guide.md)
- ✅ Repository dependencies installed (`yarn install`)

### Step-by-Step Walkthrough

**1. Explore the Parts System** (2 minutes):

```bash
# List all source parts
ls -la src/parts/
```

**Expected Output**:

```
00-header.md                 # Prompt header with metadata
01-establish-objectives.md   # Step 1 content
02-repository-analysis.md    # Step 2 content
[... more numbered parts]
99-footer.md                # Prompt footer
config.json                 # Build configuration
```

**2. Examine Build Configuration**:

```bash
# View the build settings
cat src/parts/config.json | head -20
```

**Key Fields**:

- `version`: Current prompt version (2.2.0)
- `parts`: Array of markdown files to combine
- `variables`: Template substitutions

**3. Generate the Prompt** (1 minute):

```bash
yarn build
```

**✅ Success Indicator**: No error messages, build completes in ~2-3 seconds

**4. Verify Output** (1 minute):

```bash
# Check generated file size and content
ls -lh dist/repository-onboarding-generator.prompt.md
head -10 dist/repository-onboarding-generator.prompt.md
```

**Expected**: File should be several KB with header showing version 2.2.0 and current build date

### Understanding the Build Process

**Template Variable Processing**:
The build script replaces template variables in markdown files:

```markdown
# Before processing (in source files)

Version: {{VERSION}}
Built: {{BUILD_DATE}}

# After processing (in output)

Version: 2.2.0
Built: 2025-09-17
```

**File Combination Order**:
Files are combined in numerical order:

1. `00-header.md` (prompt metadata)
2. `01-establish-objectives.md` (Step 1)
3. `02-repository-analysis.md` (Step 2)
4. [continuing through all numbered parts]
5. `99-footer.md` (completion message)

## 🔄 Making Your First Change (5 minutes)

Let's modify a part file to see the system in action:

**1. Start Watch Mode**:

```bash
yarn watch
# Keep this running in terminal
```

**2. Edit a Part File**:

```bash
# Edit the header (safe to modify)
nano src/parts/00-header.md
```

**Simple Change**: Add your name to the author line or change version number.

**3. Save and Observe**:
The watch process automatically detects changes and rebuilds:

```
[timestamp] File changed: src/parts/00-header.md
[timestamp] ✅ Build completed successfully
```

**4. Verify Your Change**:

```bash
head -15 dist/repository-onboarding-generator.prompt.md
```

Your modification should appear in the generated file.

## 📋 Common Patterns

**Adding New Content**:

- Create new numbered part: `src/parts/08-new-section.md`
- Update `src/parts/config.json` to include it in parts array
- Run `yarn build` to incorporate

**Template Variables Available**:

- `{{VERSION}}` - From config.json
- `{{DATE}}` - Current date (auto-generated)
- `{{BUILD_DATE}}` - YYYY-MM-DD format
- `{{TIMESTAMP}}` - Full ISO timestamp

**Build Commands Summary**:

```bash
yarn clean      # Remove output files
yarn dev        # Clean + development build
yarn build      # Production build
yarn watch      # Auto-rebuild on changes
yarn prod       # Clean + production build
```

## ✅ Success Validation

After completing this example, you should:

- ✅ Understand the numbered parts system in `src/parts/`
- ✅ Know how to run builds (`yarn build`)
- ✅ See how template variables get processed
- ✅ Be able to make simple edits and rebuild
- ✅ Have generated `dist/repository-onboarding-generator.prompt.md`

## 🎯 Ready for Next Steps

**First Contribution Ideas**:

1. **Improve Documentation**: Edit parts in `src/parts/` for clarity
2. **Add Variables**: Extend template variables in `config.json`
3. **Enhance Build**: Improve processing in `build/build.js`

**Continue Learning**: Try [advanced-customization.md](advanced-customization.md) for deeper customization options.

---

**Example completion time**: ~10 minutes | **First meaningful change**: ~5 minutes
