### STEP 2: Complete Repository Analysis

**🚨 CRITICAL REQUIREMENT: ALL INFORMATION MUST COME FROM ACTUAL REPOSITORY INSPECTION**

**MANDATORY APPROACH: EVIDENCE-BASED ANALYSIS ONLY**

- Use ONLY file reading, code inspection, and workspace analysis tools
- NEVER make assumptions or create fictional information
- ALL findings must be verifiable by examining actual repository files
- If information cannot be found in repository, acknowledge its absence rather than inventing it

**REQUIRED ANALYSIS SEQUENCE:**

**2.1 Core Repository Inspection:**

- **Root Directory Scan**: List and examine all files in root directory
- **Package/Dependency Files Analysis**:
  - Read package.json, requirements.txt, Cargo.toml, go.mod, pom.xml, etc.
  - Extract ACTUAL dependencies, not assumed ones
  - Note specific versions and dev dependencies
- **Configuration Files Review**:
  - Examine .gitignore, .env.example, config files, docker files
  - Read actual build configurations (webpack, vite, etc.)
  - Check CI/CD files (.github/workflows, .gitlab-ci.yml, etc.)

**2.2 Technology Stack Detection (Evidence-Based):**

- **Languages**: Based on file extensions found in repository scan
- **Frameworks**: Based on dependencies in package files and import statements
- **Build Tools**: Based on configuration files and scripts sections
- **Databases**: Based on connection strings, migrations, or schema files found
- **Testing**: Based on test directories and testing dependencies found
- **Deployment**: Based on Docker files, deployment configs, or CI files found

**2.3 Architecture Pattern Recognition:**

- **Directory Structure Analysis**: Map actual folder structure and naming conventions
- **Code Organization**: Read sample files to understand actual patterns used
- **Entry Points**: Identify main files, index files, or application entry points
- **API Structure**: If applicable, examine route files or API definitions
- **Data Layer**: Look for models, schemas, or database interaction patterns
- **Frontend Structure**: If applicable, examine component organization and state management

**2.4 Development Workflow Investigation:**

- **Scripts Analysis**: Read package.json scripts or Makefile commands
- **Development Commands**: Identify actual dev server, build, and test commands
- **Environment Setup**: Check for environment variable requirements
- **Database Setup**: Look for migration files, seed data, or setup scripts
- **Documentation Review**: Read existing README, CONTRIBUTING.md, or docs/ folder

**2.5 Repository Characteristics Assessment:**

- **Project Size**: Count files, lines of code, number of dependencies
- **Complexity Level**: Assess based on directory depth, file count, and architecture
- **Maintenance Status**: Check recent commits, dependencies updates, documentation quality
- **Team Patterns**: Look for code style configs, PR templates, issue templates

**2.6 VERIFICATION REQUIREMENTS:**

Before proceeding to STEP 3, ensure:

- ✅ All technology stack items have been verified by examining actual files
- ✅ All configuration details come from reading actual config files
- ✅ All development commands have been found in package.json, Makefile, or scripts
- ✅ Architecture descriptions match actual directory structure observed
- ✅ Any mentioned features exist in the actual codebase
- ✅ Dependencies versions match those in package/dependency files
- ✅ No assumptions or generic patterns have been used without verification

**🚫 STRICTLY PROHIBITED:**

- Making assumptions about technology stack without evidence
- Describing features that don't exist in the repository
- Using generic examples instead of repository-specific ones
- Inventing commands, dependencies, or configurations
- Creating documentation based on "typical" patterns rather than actual ones

**2.7 MANDATORY REPOSITORY ANALYSIS SUMMARY:**

**🚨 CRITICAL: BEFORE PROCEEDING TO STEP 3, YOU MUST CREATE THIS STRUCTURED SUMMARY**

Based on your actual repository inspection, create this exact structured summary:

```
📋 REPOSITORY ANALYSIS SUMMARY
=================================

🏗️ PROJECT IDENTIFICATION:
- Project Name: [from package.json name or repository name]
- Project Type: [e.g., web application, API, library, etc. - based on structure observed]
- Main Purpose: [from README.md or inferred from main files]

🔧 TECHNOLOGY STACK (VERIFIED):
- Primary Language(s): [list based on file extensions found]
- Framework(s): [from dependencies in package files]
- Build Tool: [from package.json scripts, Makefile, etc.]
- Package Manager: [npm, yarn, pip, etc. - detected from lock files]
- Testing Framework: [from devDependencies or test directories]
- Database: [if connection files or schemas found, otherwise "None detected"]

📁 DIRECTORY STRUCTURE (ACTUAL):
- Root level directories: [list actual directories found]
- Main entry point: [actual main file from package.json or observed]
- Source code location: [src/, lib/, app/, etc. - actual path]
- Tests location: [test/, spec/, __tests__, etc. - if found]
- Configuration files: [list actual config files found]

⚙️ DEVELOPMENT COMMANDS (VERIFIED):
- Install dependencies: [actual command from package manager detected]
- Development server: [from package.json scripts or documentation]
- Build command: [from package.json scripts if exists]
- Test command: [from package.json scripts if exists]
- Other available scripts: [list from package.json scripts section]

🏛️ ARCHITECTURE PATTERN (OBSERVED):
- Code organization: [describe actual structure observed]
- Key components: [list main directories/files that indicate architecture]
- Data flow: [if observable from code structure]

📋 DEPENDENCIES (EXACT):
- Production dependencies: [list key ones from package.json]
- Development dependencies: [list key ones from devDependencies]
- Versions: [note if specific version constraints observed]

🚀 QUICK START REQUIREMENTS (FOUND):
- Prerequisites: [from engines, README, or inferred from dependencies]
- Environment variables: [from .env.example or code examination]
- Initial setup steps: [from README or scripts examination]

❌ GAPS IDENTIFIED:
- Missing information: [list what couldn't be found in repository]
- Assumptions avoided: [note what you did NOT assume]
```

**THIS SUMMARY WILL BE USED AS THE SINGLE SOURCE OF TRUTH FOR ALL DOCUMENTATION CREATION IN STEP 4**
