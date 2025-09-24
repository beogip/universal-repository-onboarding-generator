# Quickstart: Universal Onboarding AI Prompts and Scripts

1. Install and initialize

- Install the package (local dev): ensure Node.js 18+
- Initialize `.onboarding/` structure

2. Seed templates

- Run installer step: select repo type; seeds templates in `.onboarding/template/`

3. Analyze repository

- Run `.onboarding/scripts/analyze-repo.js`
- Verify `.onboarding/analysis.json`

4. Generate onboarding

- Open `.onboarding/prompts/generate-onboarding.md` with your editor AI
- Provide analysis outputs; confirm monorepo package selection if prompted
- Validate docs created under `docs/onboarding/`

5. Teach mode

- Open `.onboarding/prompts/teach.md` with your editor AI
- Follow the didactic steps; confirm logs in `.onboarding/logs`

6. Review and commit

- Review generated docs
- Commit `docs/onboarding/`
