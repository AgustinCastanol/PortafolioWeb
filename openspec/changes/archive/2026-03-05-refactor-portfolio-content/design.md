## Context

The current portfolio website hardcodes text strings directly into React/Vite UI components, and the text itself contains a mix of English and Spanish (Spanglish). Furthermore, the messaging does not adequately reflect the user's advanced technical background (Senior/Tech Lead, 4+ years of experience, Cloud/AWS, CI/CD). To make the portfolio maintainable and appealing for high-level roles, the content must be refactored and extracted into a structured `data.json` file.

## Goals / Non-Goals

**Goals:**
- Present a professional "Senior / Tech Lead" profile strictly in English.
- Restructure the "Skills" and "Projects" sections to strongly emphasize enterprise and cloud experience (e.g., Bonvivir, AVE, VUCE, IoT).
- Extract all static content (bio, skills, projects) from React components into a central `data.json` file.
- Update UI components to consume this `data.json`.

**Non-Goals:**
- Complete visual redesign or changing CSS frameworks.
- Transitioning away from the current React/Vite stack.
- Integrating a backend or headless CMS.

## Decisions

**Decision 1: Static `data.json` local file for Content Management**
- *Rationale*: A static JSON file imported directly into Vite is extremely lightweight, performant, and simple to maintain for a personal portfolio.
- *Alternatives Considered*: Markdown/MDX (good for blogs, clunky for structured arrays of skills/projects) or Headless CMS (unnecessary external dependency and overkill).

**Decision 2: Strict English-only Copywriting**
- *Rationale*: Aligns with industry standards for Senior/Lead roles and avoids the current Spanglish inconsistencies (like "Proyects").
- *Alternatives Considered*: i18n multi-language support (adds tooling complexity without immediate ROI for the core goal).

## Risks / Trade-offs

- **[Risk] UI components breaking during data abstraction** → *Mitigation*: Map the new JSON schema closely to existing component prop requirements. Refactor and test one section at a time.
- **[Risk] Loss of SEO metadata if hardcoded text is removed improperly** → *Mitigation*: Ensure the `data.json` content is rendered server-side or during the static build step (if applicable in Vite) or properly hydrated.
