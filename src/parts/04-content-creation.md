### STEP 4: Technology-Specific Content Creation

**🚨 MANDATORY PREREQUISITES: REFERENCE BOTH SUMMARIES**

Before creating ANY documentation file, you MUST:

1. **Review the REPOSITORY ANALYSIS SUMMARY** created in STEP 2
2. **Review the DOCUMENTATION STRATEGY SUMMARY** created in STEP 3
3. **Use ONLY information from those summaries** - no additional assumptions
4. **Start each file creation with "Based on analysis findings and strategy:"** followed by specific references to both summaries

**STRICT RULE: If information is not in the REPOSITORY ANALYSIS SUMMARY or DOCUMENTATION STRATEGY SUMMARY, do not include it in documentation**

**🚨 MANDATORY CONTENT SOURCING: ALL INFORMATION MUST BE REPOSITORY-SPECIFIC**

**CONTENT CREATION GUIDELINES:**

**README.md Requirements:**

**MUST START WITH**: "Based on analysis findings and strategy: [reference specific items from both REPOSITORY ANALYSIS SUMMARY and DOCUMENTATION STRATEGY SUMMARY]"

- **File Structure**: Follow content allocation from DOCUMENTATION STRATEGY SUMMARY
- **Project Description**: Use ONLY "Project Name" and "Main Purpose" from REPOSITORY ANALYSIS SUMMARY
- **Technology Stack**: Use ONLY "TECHNOLOGY STACK (VERIFIED)" section from REPOSITORY ANALYSIS SUMMARY
- **Architecture Overview**: Use ONLY "ARCHITECTURE PATTERN (OBSERVED)" from REPOSITORY ANALYSIS SUMMARY
- **Quick Start Commands**: Use ONLY "DEVELOPMENT COMMANDS (VERIFIED)" from REPOSITORY ANALYSIS SUMMARY
- **Line Limit**: Respect estimated lines from DOCUMENTATION STRATEGY SUMMARY (≤150 lines)
- Include prominent "🚀 Quick Start (10 minutes)" section at the top
- Structure with progressive complexity: Simple overview → Quick start → Detailed info
- Include glossary of technical terms inline
- Add "✅ Success Indicators" for each major step

**setup-guide.md Requirements:**

**MUST START WITH**: "Based on analysis findings and strategy: [reference specific items from both summaries]"

- **File Structure**: Follow content allocation from DOCUMENTATION STRATEGY SUMMARY
- **Prerequisites**: Use ONLY "QUICK START REQUIREMENTS (FOUND)" section from REPOSITORY ANALYSIS SUMMARY
- **Installation Commands**: Use ONLY "Package Manager" and "Install dependencies" from REPOSITORY ANALYSIS SUMMARY
- **Configuration Steps**: Use ONLY "Configuration files" and "Environment variables" from REPOSITORY ANALYSIS SUMMARY
- **Environment Variables**: Use ONLY those listed in "Environment variables" from REPOSITORY ANALYSIS SUMMARY
- **Database Setup**: Use ONLY if "Database" is detected in TECHNOLOGY STACK section (not "None detected")
- **Development Server**: Use ONLY "Development server" command from REPOSITORY ANALYSIS SUMMARY
- **Line Limit**: Respect estimated lines from DOCUMENTATION STRATEGY SUMMARY (≤150 lines for essential setup)
- Focus on "minimal viable setup" first (should take ≤ 30 minutes)
- Include "Essential Setup" vs "Complete Setup" sections
- Include troubleshooting for 3 most common issues inline
- Add time estimates for each step

**examples/ Requirements:**

**MUST START WITH**: "Based on analysis findings and strategy: [reference specific items from both summaries]"

- **File Structure**: Follow content allocation from DOCUMENTATION STRATEGY SUMMARY
- **Number of Files**: Respect files planned in DOCUMENTATION STRATEGY SUMMARY
- **Code Examples**: Use ONLY "Key components" and "Main entry point" from REPOSITORY ANALYSIS SUMMARY
- **API Endpoints**: Use ONLY if API structure is observable in "ARCHITECTURE PATTERN (OBSERVED)"
- **Configuration Examples**: Use ONLY "Configuration files" formats from REPOSITORY ANALYSIS SUMMARY
- **Import Statements**: Use ONLY "Source code location" and actual structure from REPOSITORY ANALYSIS SUMMARY
- Include practical "first contribution" example based on actual project structure
- Show complete request/response cycles only if API endpoints are confirmed in analysis
- Respect file limits from DOCUMENTATION STRATEGY SUMMARY (typically 1-2 files)

**REPOSITORY-SPECIFIC IMPLEMENTATION REQUIREMENTS:**

**For README.md:**

- ✅ Project purpose matches "Main Purpose" from REPOSITORY ANALYSIS SUMMARY
- ✅ Technology versions match "DEPENDENCIES (EXACT)" from REPOSITORY ANALYSIS SUMMARY
- ✅ Quick start commands use only "DEVELOPMENT COMMANDS (VERIFIED)" from REPOSITORY ANALYSIS SUMMARY
- ✅ All mentioned directories use only "DIRECTORY STRUCTURE (ACTUAL)" from REPOSITORY ANALYSIS SUMMARY
- ✅ Architecture description uses only "ARCHITECTURE PATTERN (OBSERVED)" from REPOSITORY ANALYSIS SUMMARY

**For setup-guide.md:**

- ✅ Installation commands use only "Package Manager" from REPOSITORY ANALYSIS SUMMARY
- ✅ Port numbers and URLs use only information from "Configuration files" in REPOSITORY ANALYSIS SUMMARY
- ✅ Environment variables use only those listed in REPOSITORY ANALYSIS SUMMARY
- ✅ Database commands use only if "Database" detected (not "None detected") in REPOSITORY ANALYSIS SUMMARY
- ✅ Build and run scripts use only "DEVELOPMENT COMMANDS (VERIFIED)" from REPOSITORY ANALYSIS SUMMARY

**For examples/ files:**

- ✅ All code snippets reference only "Key components" from REPOSITORY ANALYSIS SUMMARY
- ✅ Import paths use only "Source code location" from REPOSITORY ANALYSIS SUMMARY
- ✅ API endpoints use only if confirmed in "ARCHITECTURE PATTERN (OBSERVED)" from REPOSITORY ANALYSIS SUMMARY
- ✅ Configuration examples use only "Configuration files" formats from REPOSITORY ANALYSIS SUMMARY
- ✅ No fictional or generic examples - only examples based on REPOSITORY ANALYSIS SUMMARY findings

**FINAL IMPLEMENTATION CHECKLIST:**

Before creating any documentation file, verify:

- ✅ **REPOSITORY ANALYSIS SUMMARY has been created and reviewed**
- ✅ **DOCUMENTATION STRATEGY SUMMARY has been created and reviewed**
- ✅ **All information comes exclusively from both summaries**
- ✅ **Each file starts with "Based on analysis findings and strategy:" followed by specific references**
- ✅ **No information outside the summaries has been used**
- ✅ **Any gaps acknowledged in summaries are mentioned, not filled with assumptions**
- ✅ **All commands, dependencies, and configurations are exactly as listed in summaries**

**STRICT ENFORCEMENT:**

- **MANDATORY**: Create both summaries before any content creation
- **MANDATORY**: Reference both summaries explicitly in each documentation file
- **MANDATORY**: Start each documentation file with "Based on analysis findings and strategy:" + specific references
- Create all CORE files using ONLY information from both summaries
- Create only justified CONDITIONAL files (maximum 2-3) based on complexity noted in summaries
- Include ONLY setup commands listed in "DEVELOPMENT COMMANDS (VERIFIED)" section
- Provide ONLY examples referencing components listed in REPOSITORY ANALYSIS SUMMARY
- Make documentation beginner-friendly but use ONLY factual information from summaries
- **If information is not in summaries, acknowledge gap - do not invent**
