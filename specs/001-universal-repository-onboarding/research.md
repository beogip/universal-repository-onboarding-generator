# Research: Universal Repository Onboarding Generator v3.0.0

## NPX Package Distribution Strategy

**Decision**: Use standard NPX-compatible package structure with bin entry
**Rationale**: NPX requires executable entry in package.json bin field, enables `npx repository-onboarding-generator install` workflow
**Alternatives considered**: Global npm install, direct GitHub download (rejected: extra installation steps)

## CLI Framework Selection

**Decision**: Commander.js for argument parsing and command structure
**Rationale**: Industry standard, supports subcommands, built-in help generation, minimal dependencies, compatible with existing build system
**Alternatives considered**: Yargs (heavier), native process.argv parsing (more complex)

## Template Engine Selection

**Decision**: Mustache.js for variable substitution in templates
**Rationale**: Logic-less templates prevent template complexity, wide language support, already familiar syntax from existing build.js variable processing
**Alternatives considered**: Handlebars (too complex), native string replacement (build.js already handles this pattern)

## Build System Integration Strategy

**Decision**: Extend existing build.js system to generate .github/prompts/ content
**Rationale**: Leverages proven modular architecture from src/parts/, reuses template processing, chokidar watch system, and variable substitution logic
**Alternatives considered**: Separate build system (duplicated effort), template-only approach (less flexible than proven parts system)

## Repository Analysis Strategy

**Decision**: Multi-layer analysis: package.json → file extensions → directory structure → framework detection
**Rationale**: Progressive complexity allows accurate detection while maintaining performance, results can drive src/parts/ selection
**Alternatives considered**: AST parsing (too slow), file content analysis (too intrusive)

## Prompt Generation Architecture

**Decision**: Use build.js to assemble repository-specific prompts from src/parts/ modules
**Rationale**: Existing system already handles modular assembly, variable substitution, and file watching. Can be extended to generate different prompt types based on repository analysis
**Alternatives considered**: Static templates (less flexible), runtime assembly (slower)

## Template Storage Architecture

**Decision**: Local `.repository-onboarding/` directory with template hierarchy + src/parts/ for prompt generation
**Rationale**: Enables customization, offline operation, leverages existing proven architecture for complex prompt assembly
**Alternatives considered**: NPM package embedded templates (not customizable), remote templates (internet dependency)

## Build.js Extension Strategy

**Decision**: Add new output targets to build.js for .github/prompts/ generation
**Rationale**: Existing system handles parts assembly, variable processing, and output generation. Can add multiple output targets for different prompt types
**Implementation approach**:

- New config options for prompt-specific parts selection
- Repository analysis results as build.js variables
- Multiple output files from single parts collection

## Cross-Platform Compatibility

**Decision**: Node.js path/fs modules with platform-agnostic path handling
**Rationale**: Existing build.js already handles cross-platform paths correctly, ensures Windows/macOS/Linux compatibility
**Alternatives considered**: OS-specific scripts (maintenance burden), Docker containers (overkill)

## Testing Strategy

**Decision**: Jest with integration tests for full NPX workflow + build system integration
**Rationale**: Covers real-world usage patterns, validates entire installation process and prompt generation
**Alternatives considered**: Unit tests only (insufficient coverage), manual testing (not scalable)

## Performance Optimization

**Decision**: Reuse build.js caching and optimization patterns for prompt generation
**Rationale**: Existing system already optimized for file watching, template processing, and build performance
**Implementation**: Extend existing statistics and timing to include prompt generation metrics
