# Universal Repository Onboarding Generator

**Generate comprehensive onboarding documentation for any repository automatically**

[![Version](https://img.shields.io/badge/version-v2.1.0-blue.svg)](https://github.com/beogip/universal-repository-onboarding-generator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)]()

## 🎯 Overview

The Universal Repository Onboarding Generator is an AI-powered tool that automatically analyzes any repository and creates tailored onboarding documentation for new developers. It works with any technology stack - from web applications to data science projects - and generates comprehensive documentation that explains the codebase, setup requirements, development workflows, and contribution guidelines.

**Key Features:**

- 🔍 **Smart Analysis**: Automatically detects repository type, technology stack, and architecture patterns
- 📚 **Adaptive Documentation**: Creates tailored documentation based on what's actually in the repository
- 🤖 **Interactive Tech Leader**: Generates an AI mentor prompt for guided onboarding sessions
- 🌍 **Universal Compatibility**: Works with any repository type and technology stack
- ⚡ **Optimized Performance**: v2.1 includes onboarding time objectives and quality gates
- 🎯 **Results-Driven**: Targets first meaningful contribution within 4 hours

## 🚀 Quick Start

### Prerequisites

- VS Code with GitHub Copilot extension
- Access to any repository (public or private)

### Usage

1. Open any repository in VS Code
2. Copy the file `repository-onboarding-generator.prompt.md` into `.github/prompts`
3. Run the command: `/repository-onboarding-generator` in your Copilot chat
4. Wait for analysis and documentation generation
5. Find your onboarding documentation in `doc/onboarding/`
6. Use the generated `.github/prompts/ai-mentor.prompt.md` for AI-guided onboarding

## 📁 Generated Documentation Structure

The tool creates a complete onboarding package in two main locations:

**📚 Main Documentation** (`doc/onboarding/`):

```
doc/onboarding/
├── README.md                    # Project overview with Quick Start (10 min)
├── setup-guide.md              # Essential setup (≤30 min) + Complete setup
├── examples/
│   ├── basic-usage.md          # Simple examples with first contribution guide
│   └── advanced-workflows.md   # Complex scenarios and workflows
└── [conditional files - maximum 2-3, only if essential]
    ├── troubleshooting.md      # Common issues and solutions
    ├── architecture-overview.md # System architecture (if complex)
    └── development-workflow.md # Contributing guidelines (if complex process)
```

**🤖 AI Integration** (`.github/instructions/`):

```
.github/instructions/
└── ai-mentor.prompt.md # Interactive AI mentor (auto-activates)
```

## 🤖 Interactive Tech Leader Experience

One of the most powerful features is the **AI Tech Leader Integration**. The generator creates a specialized Copilot instruction file that automatically activates when you need onboarding help.

### ✨ Auto-Activation Features:

- **Smart Activation**: Simply ask "help me understand this codebase" or "I need repository onboarding"
- **Context-Aware**: The AI Tech Leader knows your specific repository and references the generated documentation
- **Structured Learning**: Follows a 4-phase approach (Assessment → Walkthrough → Development → Contribution)
- **Real Examples**: Uses actual code from your repository, not fictional examples

### 🎯 Onboarding Objectives (New in v2.1):

- **Primary Goal**: First meaningful contribution within 4 hours
- **Setup Time**: ≤ 30 minutes for working environment
- **Understanding Time**: ≤ 20 minutes for core architecture
- **Reading Time**: ≤ 45 minutes total documentation

## 🛠 Supported Repository Types

The generator automatically adapts to various repository types:

- **Web Applications** (React, Vue, Angular, vanilla JS/HTML)
- **Backend Services** (Node.js, Python, Java, Go, PHP, etc.)
- **Mobile Applications** (React Native, Flutter, native iOS/Android)
- **Desktop Applications** (Electron, .NET, Java, C++)
- **Data Science Projects** (Jupyter, Python, R, ML pipelines)
- **DevOps/Infrastructure** (Terraform, Ansible, Docker, K8s)
- **Libraries/Packages** (npm, PyPI, Maven, NuGet packages)
- **Documentation Sites** (Docusaurus, GitBook, Jekyll)
- **Monorepos** (Lerna, Nx, Rush, multi-package projects)

## 📋 Project Structure

```
universal-repository-onboarding-generator/
├── README.md                                               # This file
├── LICENSE                                                 # MIT License
├── package.json                                            # Build system dependencies
├── build/
│   └── build.js                                           # Build script for modular system
├── dist/                                                   # Generated prompt files (ignored in git)
│   └── repository-onboarding-generator.prompt.md    # Built prompt
├── doc/
│   ├── repository-onboarding-generator.v1.0.0.spec.md    # Feature specifications (v1.0)
│   ├── repository-onboarding-generator.v2.1.0.spec.md    # Feature specifications (v2.1)
│   └── onboarding/                                        # Generated documentation examples
└── src/
    ├── parts/                                             # Modular prompt components
    │   ├── config.json                                    # Build configuration
    │   ├── 00-header.md                                   # Prompt header and metadata
    │   ├── 01-establish-objectives.md                     # Step 1: Objectives
    │   ├── 02-repository-analysis.md                      # Step 2: Analysis
    │   ├── 03-documentation-strategy.md                   # Step 3: Strategy
    │   ├── 04-content-creation.md                         # Step 4: Content Creation
    │   ├── 05-copilot-integration.md                      # Step 5: AI Integration
    │   ├── 06-validation-quality.md                       # Step 6: Validation
    │   ├── 07-execution-requirements.md                   # Execution Rules
    │   └── 99-footer.md                                   # Footer and output structure
    └── repository-onboarding-generator.prompt.md    # Legacy monolithic version
```

## �️ Development & Build System

The repository uses a modular build system that assembles the final prompt from individual markdown components.

### Build Commands

```bash
# Install dependencies
yarn install

# Build the complete prompt
yarn build

# Watch for changes and rebuild automatically
yarn watch
```

### Modular Architecture

- **Source**: Individual `.md` files in `src/parts/` for each step and component
- **Configuration**: `src/parts/config.json` defines assembly order and metadata
- **Output**: Built prompt generated in `dist/` directory
- **Watch Mode**: Automatic rebuilding when any source file changes

This architecture makes the prompt easier to maintain, test, and extend compared to the original monolithic file.

## �🔄 Version History

### v2.1.0 (September 2025) - **Current** 🆕

**🎯 Onboarding Optimization Update:**

- **Auto-activating Tech Leader**: Added `applyTo: "**"` frontmatter for seamless Copilot integration
- **Objective-driven approach**: Added STEP 0 with clear time-based goals
- **Improved structure**: Changed from `.copilot/onboarding/` to `doc/onboarding/` (more standard)
- **Reduced fragmentation**: Maximum 2-3 conditional files vs previous 7 options
- **Enhanced AI integration**: Auto-activating tech leader with repository-specific knowledge
- **Quality gates**: Coherent limits and realistic documentation sizes (≤800 lines total)
- **Results focus**: Primary goal of first contribution within 4 hours

### v2.0.0 (September 2025)

- **57% reduction in complexity** while maintaining full functionality
- **Consolidated workflow**: 8 granular steps → 6 streamlined steps
- **Unified constraints**: Eliminated redundant sections and repetitions
- **Improved clarity**: Better logical flow and organization
- **Enhanced performance**: Faster processing and easier maintenance

### v1.0.0 (September 2025) - **Initial Release**

- Complete repository analysis and documentation generation
- Interactive Tech Leader walkthrough creation
- Support for all major repository types
- Conditional documentation based on repository content

## 🔧 How It Works

The generator follows a **6-step optimized process** (updated in v2.1):

**STEP 1.** **🎯 Establish Onboarding Objectives** _(New in v2.1)_

- Sets clear time-based goals for effective onboarding
- Defines success metrics: 4-hour contribution, 30-min setup, 45-min reading

**STEP 2.** **🔍 Complete Repository Analysis**

- Detects repository type, technology stack, and architecture patterns
- Analyzes directory structure, configuration files, and dependencies

**STEP 3.** **📋 Smart Documentation Generation Strategy**

- Determines which documentation files are truly needed
- Applies strict consolidation rules (maximum 2-3 conditional files)

**STEP 4.** **📝 Technology-Specific Content Creation**

- Creates optimized CORE files with Quick Start sections and time estimates
- Generates only essential conditional files with realistic content limits

**STEP 5.** **🤖 GitHub Copilot Instructions Generation**

- Creates auto-activating AI Tech Leader with `applyTo: "**"` frontmatter
- Includes repository-specific knowledge and 4-phase learning flow

**STEP 6.** **✅ Final Validation & Quality Assurance** - File-by-file content verification and comprehensive quality control

- Validates all generated content matches actual repository code and structure
- Performs cross-reference validation to ensure accuracy of all links and paths
- Includes detailed content verification for each documentation file
- Ensures documentation coherence and realistic scope

## 🎯 Key Benefits

- **⏱ Faster Onboarding**: Achieve first meaningful contribution within 4 hours
- **📊 Measurable Goals**: Setup ≤30 min, understanding ≤20 min, reading ≤45 min total
- **🎯 Tailored Content**: Documentation specific to your repository's actual structure
- **🤖 AI-Powered Mentoring**: Auto-activating interactive guidance from AI that knows your codebase
- **� Consolidated Approach**: Maximum 2-3 additional files, focus on essential information
- **📈 Scalable**: Works equally well for small projects and large enterprise codebases

## 📚 Implementation Details

### Core Components

1. **Repository Analysis Engine**: Uses AI capabilities to detect patterns and technologies
2. **Smart Documentation Generator**: Creates adaptive content based on repository characteristics
3. **Interactive Tech Leader**: Generates specialized AI prompts for guided learning
4. **Validation System**: Ensures quality and completeness of generated documentation

### Design Principles

- **Read-Only Operations**: Never modifies existing repository files
- **Real Content Only**: Uses actual repository structure, never creates fictional examples
- **Adaptive Intelligence**: Tailors output to detected technologies and patterns
- **Quality First**: Multiple validation layers ensure high-quality documentation

## 🤝 Contributing

This project follows its own onboarding methodology! To contribute:

1. **Use the generator on this repository** to understand the codebase
2. **Follow the generated Tech Leader walkthrough** for guided onboarding
3. **Review the documentation** in `doc/onboarding/` (if generated)
4. **Make your contributions** following the established patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the GitHub Copilot ecosystem
- Designed to leverage AI-powered development workflows
- Optimized through systematic analysis and user feedback

---

**Ready to revolutionize your repository onboarding?**
Run `/repository-onboarding-generator` in any repository and experience the future of developer onboarding!
