# Setup Guide

Based on analysis findings and strategy: Using Node.js ≥16.0.0 requirement from REPOSITORY ANALYSIS SUMMARY engines field, Yarn package manager from yarn.lock detection, and DEVELOPMENT COMMANDS from package.json scripts.

## 🚀 Essential Setup (15 minutes)

### Prerequisites Verification

**Node.js Requirement**: ≥16.0.0 (verified from package.json engines field)

```bash
# Check your Node.js version
node --version
# Should show v16.0.0 or higher
```

**✅ Success Indicator**: Version shows v16.x.x or higher

**If Node.js needs installation**:

- Download from [nodejs.org](https://nodejs.org)
- Choose LTS version (recommended)
- Restart terminal after installation

### Package Manager Setup

**Yarn Required** (detected from yarn.lock file presence):

```bash
# Install Yarn globally if not present
npm install -g yarn

# Verify installation
yarn --version
```

**✅ Success Indicator**: Yarn version displays (any recent version works)

### Repository Setup

**1. Clone & Navigate** (2 minutes):

```bash
git clone [repository-url]
cd universal-repository-onboarding-generator
```

**2. Install Dependencies** (3 minutes):

```bash
yarn install
```

**✅ Success Indicator**: No error messages, `node_modules/` directory created

**3. Verify Build System** (2 minutes):

```bash
yarn build
```

**✅ Success Indicator**: `dist/repository-onboarding-generator.prompt.md` file created

## 🎯 First Prompt Generation (10 minutes)

### Understanding the Build Process

**Development vs Production builds**:

- `yarn dev` - Clean + development build with detailed logging
- `yarn build` - Production build for final prompt
- `yarn watch` - Auto-rebuild on file changes (great for development)

### Generate Your First Build

**Step 1: Clean Build**:

```bash
yarn clean
yarn build
```

**Step 2: Verify Output**:

```bash
ls -la dist/
# Should show: repository-onboarding-generator.prompt.md
```

**Step 3: Inspect Generated Prompt**:

```bash
head -20 dist/repository-onboarding-generator.prompt.md
```

**✅ Success Indicator**: File contains header with version 2.2.0 and current build date

### Development Workflow Setup

**For Active Development**:

```bash
# Start watch mode (rebuilds on changes)
yarn watch
```

Keep this running in a terminal. Edit any file in `src/parts/` and the prompt rebuilds automatically.

## 🛠️ Configuration Understanding

### Key Configuration Files

**src/parts/config.json** (build settings):

- Controls part order and processing
- Defines template variables
- Current version: 2.2.0

**package.json** (project settings):

- Scripts definitions
- Node.js version requirement (≥16.0.0)
- Dependencies: chokidar@^3.6.0

### Directory Structure Overview

```
src/parts/           # Source markdown parts
├── 00-header.md     # Prompt header
├── 01-establish-objectives.md
├── 02-repository-analysis.md
├── [more parts...]
├── 99-footer.md     # Prompt footer
└── config.json      # Build configuration

build/build.js       # Main build script
dist/               # Output (created after build)
```

## 🔧 Common Setup Issues

**Issue**: `yarn: command not found`
**Solution**: Install Yarn globally: `npm install -g yarn`

**Issue**: Node.js version too old
**Solution**: Update to Node.js ≥16.0.0 from nodejs.org

**Issue**: Build fails with file permission errors
**Solution**: Check write permissions for `dist/` directory

**Issue**: `chokidar` dependency issues on watch
**Solution**: Delete `node_modules/` and run `yarn install` again

## ✅ Setup Validation

**Complete Setup Checklist**:

- ✅ Node.js ≥16.0.0 installed and verified
- ✅ Yarn package manager available
- ✅ Repository cloned and dependencies installed
- ✅ Successfully run `yarn build` with no errors
- ✅ Generated `dist/repository-onboarding-generator.prompt.md` exists
- ✅ File contains current date and version 2.2.0

**Time Check**: Essential setup should take ≤ 15 minutes

## 🎓 Next Steps

1. **Try Examples**: Go to [examples/basic-usage.md](examples/basic-usage.md)
2. **Understand Parts**: Explore `src/parts/` directory structure
3. **Make Changes**: Edit a part file and run `yarn watch` to see rebuilds
4. **First Contribution**: Improve documentation or add new features

---

**Setup time**: ~15 minutes | **Validation time**: ~3 minutes
