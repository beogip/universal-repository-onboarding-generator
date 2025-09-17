### STEP 3: Smart Documentation Generation Strategy

Based on analysis, determine documentation structure in `doc/onboarding/`:

**CORE FILES (Always Required):**

1. **README.md** - Project overview, purpose, and quick start guide
2. **setup-guide.md** - Installation, configuration, and first steps
3. **examples/** folder with practical usage examples

**GITHUB COPILOT INTEGRATION (Always Required):**

4. **.github/instructions/tech-leader-walkthrough.instructions.md** - Interactive AI Tech Leader prompt following Copilot conventions

**CONDITIONAL FILES (Maximum 2-3 additional files, only if essential):**

- **development-workflow.md** - (ONLY if complex development process exists)
- **troubleshooting.md** - (ONLY if codebase is large/complex with common issues)
- **architecture-overview.md** - (ONLY if system architecture is non-standard or complex)

**STRICT RULE**: Prefer consolidating information in CORE files over creating additional files. Only create conditional files if the information cannot reasonably fit in README.md or setup-guide.md.

**3.1 MANDATORY DOCUMENTATION STRATEGY SUMMARY:**

**🚨 CRITICAL: BEFORE PROCEEDING TO STEP 4, YOU MUST CREATE THIS STRUCTURED STRATEGY SUMMARY**

Based on the REPOSITORY ANALYSIS SUMMARY, create this exact structured strategy:

```
📋 DOCUMENTATION STRATEGY SUMMARY
=====================================

📁 FILES TO CREATE (JUSTIFIED):

CORE FILES (Always created):
✅ README.md
   - Purpose: [based on project type from REPOSITORY ANALYSIS SUMMARY]
   - Content focus: [based on main purpose and tech stack from analysis]
   - Estimated lines: [realistic estimate ≤150 lines]

✅ setup-guide.md
   - Purpose: [based on complexity and dependencies from analysis]
   - Content focus: [based on development commands and requirements from analysis]
   - Estimated lines: [realistic estimate ≤150 lines for essential setup]

✅ examples/ folder
   - Purpose: [based on project type and architecture from analysis]
   - Content focus: [based on key components and entry points from analysis]
   - Files planned: [1-2 files unless complexity justifies more]

✅ .github/instructions/tech-leader-walkthrough.instructions.md
   - Purpose: Interactive AI mentor for repository onboarding
   - Customization: [based on detected tech stack and architecture from analysis]

CONDITIONAL FILES (Only if justified):
[If creating any, list here with explicit justification from REPOSITORY ANALYSIS SUMMARY]
❌ development-workflow.md: [ONLY if justified - explain why based on analysis]
❌ troubleshooting.md: [ONLY if justified - explain why based on analysis]
❌ architecture-overview.md: [ONLY if justified - explain why based on analysis]

🎯 CONTENT ALLOCATION STRATEGY:

README.md will include:
- [list specific sections based on REPOSITORY ANALYSIS SUMMARY]

setup-guide.md will include:
- [list specific sections based on REPOSITORY ANALYSIS SUMMARY]

examples/ will include:
- [list specific examples based on REPOSITORY ANALYSIS SUMMARY]

📏 SIZE VALIDATION:
- Total estimated lines: [sum of all files, must be ≤800 lines]
- Consolidation decisions: [explain any information moved between files]

🔗 CROSS-REFERENCE PLAN:
- Internal links planned: [list planned links between documentation files]
- External references: [only to actual files found in REPOSITORY ANALYSIS SUMMARY]
```

**THIS STRATEGY SUMMARY WILL GUIDE ALL FILE CREATION IN STEP 4**
