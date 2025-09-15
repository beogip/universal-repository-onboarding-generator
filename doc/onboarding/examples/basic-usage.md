# Basic Usage Examples

## Example 1: Generate Documentation for a Simple Project

### Scenario: Small Web Application
You have a basic React application and want to create onboarding documentation.

**Steps:**
1. Open the React repository in VS Code
2. Start new Copilot conversation
3. Execute the onboarding generator prompt
4. Review generated documentation

**Expected Output Structure:**
```
doc/onboarding/
├── README.md                    # Overview with "Quick Start (10 minutes)"
├── setup-guide.md              # Node.js/npm setup, dev server instructions  
├── examples/
│   ├── basic-usage.md          # Creating components, running dev server
│   └── advanced-workflows.md   # Testing, building, deployment
└── troubleshooting.md          # Common React/npm issues
```

**Generated Content Examples:**
- Setup instructions will include `npm install` and `npm start`
- Examples will reference actual components from your repository
- Tech Leader will understand React patterns and guide accordingly

## Example 2: First Contribution Walkthrough

### Making Your First Contribution to This Repository

**Goal**: Add a new example to the documentation  
**Time Estimate**: 30-45 minutes  
**Difficulty**: Beginner-friendly

**Step-by-Step Process:**

1. **Understand the Repository Structure**
   ```
   universal-repository-onboarding-generator/
   ├── src/                    # Main prompt implementation
   ├── doc/                    # Specifications and generated docs
   └── README.md               # Project overview
   ```

2. **Identify Contribution Opportunity**
   - Add a new usage example in `doc/onboarding/examples/`
   - Document a specific repository type scenario
   - Improve existing documentation with real-world case

3. **Make the Change**
   ```markdown
   # Example: Documentation Repository
   
   ### Scenario: GitBook or Jekyll Site
   Repository contains mostly markdown files with configuration for static site generation.
   
   **Generated Documentation Focus:**
   - Setup instructions for static site generator
   - Content contribution workflow  
   - Preview and publication process
   ```

4. **Test Your Contribution**
   - Ensure markdown formatting is correct
   - Verify examples reference real repository patterns
   - Check that time estimates are realistic

**Success Indicators:**
- ✅ New example follows existing pattern
- ✅ Content is practical and actionable
- ✅ Examples use real repository scenarios (not fictional)

## Example 3: Interactive Tech Leader Experience

### How to Use the Generated AI Mentor

Once documentation is generated, you can experience guided onboarding:

**Activation:**
```
User: "I need help understanding this repository"
Tech Leader: "I'm your Senior Developer mentor for this specific repository..."
```

**4-Phase Walkthrough Example:**

**Phase 1: Assessment**
```
Tech Leader: "What's your experience level with Markdown and AI prompt engineering?"
User: "I'm familiar with Markdown but new to AI prompts"
Tech Leader: "Perfect! This repository focuses on prompt engineering for documentation generation..."
```

**Phase 2: Repository Walkthrough**  
```
Tech Leader: "Let's start with the core structure. The main prompt is in src/..."
```

**Phase 3: Development Workflow**
```  
Tech Leader: "For contributions, you'll mainly work with Markdown files..."
```

**Phase 4: Contribution Guidance**
```
Tech Leader: "A great first contribution would be adding a new repository type example..."
```

## Request/Response Workflow

### Complete Generator Execution Example

**Input (User Request):**
```
@workspace /repo-onboarding

[Paste full prompt from src/repository-onboarding-generator.instructions.md]
```

**Processing Steps:**
1. Repository analysis (detects: documentation repo, Markdown-based, AI tools)
2. Documentation strategy (determines: CORE files + examples, no conditional files)
3. Content generation (creates tailored content for this specific repository)
4. Tech Leader generation (creates auto-activating AI mentor)
5. Validation (confirms all files created and cross-references accurate)

**Output (Generated Files):**
- `doc/onboarding/README.md` - Project overview with Quick Start
- `doc/onboarding/setup-guide.md` - Installation and usage instructions
- `doc/onboarding/examples/` - Usage examples (this file!)
- `.github/instructions/tech-leader-walkthrough.instructions.md` - AI mentor

**Success Metrics:**
- Total execution time: ~15 minutes
- Documentation reading time: ~30 minutes  
- Setup time for new user: ~30 minutes
- Time to first contribution: ~2 hours (well under 4-hour goal)
