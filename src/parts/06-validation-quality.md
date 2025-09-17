### STEP 6: Final Validation & Quality Assurance

Perform comprehensive validation with detailed file-by-file content verification:

**CONTENT ACCURACY VALIDATION (FILE-BY-FILE):**

For each generated documentation file, verify content matches actual repository code and structure:

**README.md Content Verification:**

- ✅ Project description matches actual repository purpose (check main files, package.json, README, etc.)
- ✅ Technology stack listed matches detected dependencies and configuration files
- ✅ Architecture patterns described match actual code organization
- ✅ Quick Start section references real files and actual entry points
- ✅ All mentioned directories and files actually exist in the repository
- ✅ Command examples use correct syntax for detected tech stack

**setup-guide.md Content Verification:**

- ✅ Prerequisites match actual project dependencies (package.json, requirements.txt, etc.)
- ✅ Installation commands are correct for detected package manager/tech stack
- ✅ Configuration files referenced actually exist and contain expected content
- ✅ Environment variables mentioned match those used in actual code
- ✅ Build/run commands match scripts in package.json or build configurations
- ✅ Port numbers and URLs match default configurations in codebase

**examples/ Folder Content Verification:**

- ✅ Code snippets reference actual functions, classes, or modules from the repository
- ✅ API endpoints mentioned exist in the actual codebase
- ✅ File paths in examples point to real files
- ✅ Import/require statements use correct module names from the project
- ✅ Configuration examples match actual config file formats
- ✅ No fictional or invented code examples are included

**Tech Leader Walkthrough Content Verification:**

- ✅ Repository type and stack mentioned match actual analysis
- ✅ Assessment questions reference correct technologies detected
- ✅ File paths and directory structure match actual repository layout
- ✅ Architecture patterns described align with actual code organization
- ✅ Development workflow steps match actual project practices

**CROSS-REFERENCE VALIDATION:**

- ✅ All internal documentation links point to files that actually exist
- ✅ File paths mentioned across documents are consistent and accurate
- ✅ Technology versions mentioned match those in package files
- ✅ Command line tools referenced are actually used by the project
- ✅ Branch names, repository URLs match actual repository information

**ONBOARDING EFFECTIVENESS CHECK:**

Before completion, validate:

- ✅ Can a developer complete setup in ≤ 30 minutes using essential setup?
- ✅ Is there a clear path to first contribution visible in ≤ 10 minutes reading?
- ✅ Are technical terms explained before they're used?
- ✅ Total documentation is ≤ 800 lines across all files?
- ✅ README.md includes time estimates for major activities?

**QUALITY GATES:**

- If setup-guide.md > 200 lines → consolidate or split essential vs complete
- If README.md lacks "Quick Start" section → add prominently
- If > 6 total files created → justify or consolidate
- If any file references non-existent code/files → correct immediately
- If setup commands don't match detected tech stack → revise and align

**FILE VERIFICATION:**

- ✅ Confirm all 3 CORE files exist with substantial, relevant content in `doc/onboarding/`
- ✅ Confirm GitHub Copilot instruction file exists at `.github/prompts/ai-mentor.prompt.md`
- ✅ Verify only justified conditional files were created (maximum 2-3)
- ✅ Check all cross-references are accurate
- ✅ Validate setup instructions match detected technology stack

**REPOSITORY-CODE CONSISTENCY CHECK:**

- ✅ Documentation uses actual repository structure and patterns (not generic examples)
- ✅ Tech Leader prompt includes all operational constraints and correct repository context
- ✅ All examples reference real code patterns from codebase (verify existence)
- ✅ Content is beginner-friendly but comprehensive and factually accurate
- ✅ No outdated or incorrect information about the repository structure
- ✅ All mentioned tools, frameworks, and libraries are actually used in the project

**6.1 MANDATORY VALIDATION RESULTS SUMMARY:**

**🚨 CRITICAL: BEFORE COMPLETION REPORT, YOU MUST CREATE THIS VALIDATION SUMMARY**

Document all validation results in this structured format:

```
📋 VALIDATION RESULTS SUMMARY
========================================

🔍 CONTENT ACCURACY VALIDATION RESULTS:

README.md Validation:
✅/❌ Project description matches repository analysis: [result with details]
✅/❌ Technology stack accurate: [result with specific items verified]
✅/❌ Quick Start commands verified: [result with actual commands tested]
✅/❌ All directories/files mentioned exist: [result with file paths checked]

setup-guide.md Validation:
✅/❌ Prerequisites match actual requirements: [result with details]
✅/❌ Installation commands correct: [result with package manager verified]
✅/❌ Environment variables accurate: [result with .env.example checked]
✅/❌ Development server command works: [result with script verification]

examples/ Validation:
✅/❌ Code examples reference actual code: [result with components verified]
✅/❌ Import statements correct: [result with module paths checked]
✅/❌ No fictional examples: [result - confirm all examples are real]

Tech Leader Validation:
✅/❌ Repository context accurate: [result with tech stack verification]
✅/❌ File paths and structure correct: [result with directory validation]

📊 SUMMARY CONSISTENCY CHECK:
✅/❌ REPOSITORY ANALYSIS SUMMARY used exclusively: [confirm no external info used]
✅/❌ DOCUMENTATION STRATEGY SUMMARY followed: [confirm file structure matches]
✅/❌ Cross-references between summaries accurate: [validate consistency]

📏 QUALITY GATES RESULTS:
✅/❌ Total documentation ≤ 800 lines: [actual count: X lines]
✅/❌ No more than 6 files created: [actual count: X files]
✅/❌ No fictional content detected: [confirm all content is repository-based]

❌ ISSUES IDENTIFIED:
[List any issues found that need correction before completion]

🎯 ONBOARDING EFFECTIVENESS ASSESSMENT:
✅/❌ Setup can be completed in ≤ 30 minutes: [assessment based on complexity]
✅/❌ First contribution path visible in ≤ 10 minutes: [assessment based on examples]
✅/❌ Documentation total reading time ≤ 45 minutes: [estimated reading time]

📋 GAPS ACKNOWLEDGED:
[List any information gaps that were acknowledged rather than filled with assumptions]
```

**COMPLETION REPORT:**
Upon successful validation (including file-by-file content verification and validation results summary):

- "✅ **ONBOARDING DOCUMENTATION GENERATION COMPLETE**"
- "📁 **Files Created**: [list all generated files with line counts]"
- "🎯 **Repository Type Detected**: [detected type and stack]"
- "🔍 **Content Validation Status**: All generated content verified against actual repository code"
- "📋 **Cross-References Checked**: [number] internal links validated"
- "⚡ **Setup Commands Verified**: All installation/build commands match detected tech stack"
- "🚀 **Ready for Use**: Documentation available in `doc/onboarding/`"
- "🎓 **Interactive Tech Leader**: Auto-activates for repository onboarding requests"
