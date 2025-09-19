# GitHub Copilot Instructions: Universal Repository Onboarding Generator

## Project Overview

NPX-installable CLI tool that analyzes repository structure and generates comprehensive onboarding documentation using customizable templates. **Critical**: Extends existing build.js system to generate multiple .github/prompts/ files from src/parts/ modules based on repository analysis.

## Current Architecture (v2.x) - PRESERVE

- **Build System**: `build.js` assembles prompts from modular `src/parts/` files
- **Structure**: Markdown parts with JSON configuration in `src/parts/config.json`
- **Output**: Single concatenated prompt (`dist/repository-onboarding-generator.prompt.md`)
- **Variables**: Automatic variables (DATE, BUILD_DATE, TIMESTAMP) and custom template processing
- **Watch System**: chokidar-based file watching for automatic rebuilds

## v3.0.0 Development Context - EXTEND NOT REPLACE

- **Primary Integration**: Extend build.js to support multiple output targets
- **Repository Analysis**: Generate repository-specific variables for build.js template processing
- **Multi-Output**: Generate multiple .github/prompts/ files from same src/parts/ collection
- **Backward Compatibility**: All existing build.js functionality must be preserved

## Key Technical Decisions (Updated for build.js Integration)

- **Build System Extension**: Extend existing PromptBuilder class to support multiple outputs
- **Configuration Format**: Add "outputs" array to config.json while preserving backward compatibility
- **Variable System**: Add repository.\* variables to existing automatic variable system
- **Template Processing**: Reuse existing processTemplate() method with repository analysis variables
- **Watch Integration**: Leverage existing chokidar system for multi-output regeneration

## Implementation Priorities (Build.js Integration Focus)

1. **Repository Analysis Engine**: Fast (<5s) detection that generates build.js variables
2. **Build System Extension**: Add multi-output support to existing PromptBuilder class
3. **src/parts/ Extensions**: Add new template parts for repository-specific content
4. **NPX CLI Wrapper**: Simple CLI that configures and runs extended build.js system
5. **Configuration Migration**: Support both old and new config.json formats

## Critical Build.js Integration Requirements

- **Preserve Existing Functionality**: Original build.js workflow must work unchanged
- **Extend, Don't Replace**: Add features to existing PromptBuilder class
- **Variable System Compatibility**: New repository.\* variables alongside existing auto variables
- **Performance**: Multi-output generation should scale linearly from existing single-output performance
- **Configuration Backward Compatibility**: Existing config.json format must still work

## Code Patterns to Follow

- **Error Handling**: Clear error messages with actionable suggestions
- **Performance**: <5s analysis time, <100MB memory usage
- **Cross-Platform**: Use Node.js path/fs for Windows/macOS/Linux compatibility
- **Testing**: Jest with integration tests for full NPX workflow

## File Organization

```
src/
├── cli/           # Command line interface (new)
├── analysis/      # Repository analysis (new)
├── templates/     # Template system (new)
└── parts/         # Existing prompt parts (extend)
```

## Recent Changes

- Completed v3.0.0 specification with functional requirements FR-001 through FR-010
- Established constitutional framework (5 core principles)
- Created implementation plan with research and design documentation
- Defined data models and API contracts for CLI and template systems

## Development Guidelines

- Maintain backward compatibility with existing build.js system
- Follow constitutional principles: user-first documentation, automation, measurability
- Ensure all operations are idempotent and safe for repeated execution
- Generate meaningful error messages with suggested resolutions

## Testing Strategy

- Unit tests for repository analysis and template rendering
- Integration tests for full NPX installation workflow
- Performance tests for large repositories (1000+ files)
- Cross-platform testing for Windows/macOS/Linux compatibility

## Success Metrics

- Installation completes in <5 seconds
- First contributor onboarding in <4 hours
- 90%+ success rate across different repository types
- Memory usage <100MB during operation
