# Universal Repository Onboarding Generator

**AI-powered tool that automatically analyzes repositories and creates tailored onboarding documentation**

## 🚀 Quick Start (10 minutes)

**Goal**: Generate your first repository onboarding documentation in under 10 minutes.

### What This Tool Does

This is a **Documentation Generation Tool** built with **Node.js** that creates comprehensive onboarding guides for any repository. It uses a modular markdown system to build AI prompts that analyze codebases and generate tailored documentation.

### Instant Usage

1. Open any repository in VS Code with GitHub Copilot
2. Copy the file `repository-onboarding-generator.prompt.md` into the `.github/prompts/` folder of your target repository.
3. Run: `/repository-onboarding-generator`
4. Wait for analysis and documentation generation (2-5 minutes)
5. Find your documentation in `doc/onboarding/`

**✅ Success Indicator**: You should see generated files in `doc/onboarding/` with project-specific setup guides and examples.

## 📖 Project Overview

### Purpose

The Universal Repository Onboarding Generator analyzes any repository structure, detects technologies, and creates comprehensive documentation that enables new developers to:

- Understand the project in ≤ 20 minutes
- Complete setup in ≤ 30 minutes
- Make first meaningful contribution in ≤ 4 hours

### How It Works

**Modular Architecture**: The tool combines multiple markdown parts from `src/parts/` into a single AI prompt:

- `00-header.md` through `99-footer.md` - Sequential documentation sections
- `config.json` - Build configuration and template variables
- `build/build.js` - Custom build script that processes and combines parts

### Technology Stack

- **Language**: JavaScript (Node.js ≥16.0.0)
- **Build System**: Custom build script using Node.js
- **Package Manager**: Yarn (yarn.lock detected)
- **Dependencies**: chokidar@^3.6.0 (file watching for development)
- **Architecture**: Modular markdown parts system

### Key Components

- **Source**: `src/parts/` - Modular markdown sections
- **Build**: `build/build.js` - Template processor and file combiner
- **Output**: `dist/repository-onboarding-generator.prompt.md` - Final AI prompt
- **Config**: `src/parts/config.json` - Build settings and variables

## 🎯 Generated Documentation Structure

When you run this tool on a repository, it creates:

```
doc/onboarding/
├── README.md                 # Project overview & quick start
├── setup-guide.md           # Installation & configuration
├── examples/
│   ├── basic-usage.md       # Simple examples
│   └── advanced-workflows.md # Complex scenarios
└── [additional files only if needed]

.github/prompts/
└── ai-mentor.prompt.md      # Interactive AI mentor
```

## ⚙️ Development Commands

Based on package.json scripts analysis:

```bash
# Install dependencies
yarn install

# Development build (with file watching)
yarn dev                    # Same as: yarn clean && yarn build:dev

# Production build
yarn build                  # Build final prompt file
yarn prod                   # Same as: yarn clean && yarn build

# Development with auto-rebuild
yarn watch                  # Watch for changes and rebuild

# Clean output
yarn clean                  # Remove dist/ files
```

**✅ Success Indicator**: Running `yarn build` should create `dist/repository-onboarding-generator.prompt.md`

## 🏗️ Architecture Overview

**Data Flow**:

1. Build script reads all files in `src/parts/` (00-header.md → 99-footer.md)
2. Processes template variables from `config.json`
3. Combines parts into single prompt file
4. Outputs to `dist/repository-onboarding-generator.prompt.md`

**Template System**:

- Variables in `{{VARIABLE}}` format are replaced during build
- Automatic variables: `{{DATE}}`, `{{BUILD_DATE}}`, `{{TIMESTAMP}}`
- Custom variables defined in `config.json`

## 📋 Key Files Reference

- `package.json` - Dependencies and scripts (main: "build/index.js")
- `build/build.js` - Main build logic and template processing
- `src/parts/config.json` - Build configuration (version: 2.2.0)
- `src/parts/*.md` - Sequential markdown parts for prompt building
- `dist/` - Output directory (gitignored)

## 🎓 Learning Path

**New to the project?**

1. **First**: Read this README (5 minutes)
2. **Next**: Follow [setup-guide.md](setup-guide.md) (15 minutes)
3. **Then**: Try [examples/basic-usage.md](examples/basic-usage.md) (10 minutes)
4. **Finally**: Explore advanced customization options

**Quick Contribution Ideas**:

- Add new markdown parts in `src/parts/`
- Improve template variables in `config.json`
- Enhance build script functionality in `build/build.js`

---

**Total reading time**: ~8 minutes | **Setup time**: ~15 minutes | **First contribution**: ~30 minutes
