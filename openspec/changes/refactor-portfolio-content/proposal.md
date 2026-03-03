## Why

The current portfolio content needs to be updated to better reflect a "Senior" and "Technical Lead" profile with 4+ years of experience. Specifically, there is a mix of Spanish and English (Spanglish) that needs correction, and the architecture of the skills and projects sections needs to highlight enterprise-level achievements (e.g., AWS, GCP, CI/CD, and high-impact projects like Bonvivir). Furthermore, extracting the content into a structured `data.json` file will decouple the data from the UI components, making the portfolio much easier to maintain and scale.

## What Changes

- **Update Copywriting**: Rewrite "About Me" and experience to align with a Senior Full Stack/Tech Lead profile (4+ years experience).
- **Correct Language Issues**: Standardize terminology to English (e.g., fixing "Proyects" to "Projects").
- **Restructure Skills Taxonomy**: Organize skills into advanced, hierarchical categories (Frontend Development, Backend & Cloud, DevOps & Architecture).
- **Reorder and Update Projects**: Prioritize enterprise projects:
  - Bonvivir (IWC 2025 Best Wine E-commerce)
  - AVE (B2B Automation)
  - VUCE (Government backoffice)
  - Industrial IoT integrations
- **Abstract Data**: Extract all hardcoded content from React components into a `data.json` schema to be consumed by the frontend.

## Capabilities

### New Capabilities
- `portfolio-data-schema`: A new `data.json` structure to supply profile, projects, and skills information to the React UI dynamically.

### Modified Capabilities
- None

## Impact

- **UI Components**: Modifications to React/Vite components to consume the new `data.json` file instead of relying on hardcoded content.
- **Content**: Significant changes to HTML structure/text within the portfolio pages.
- **Maintainability**: The transition to JSON-driven content greatly simplifies future updates.
