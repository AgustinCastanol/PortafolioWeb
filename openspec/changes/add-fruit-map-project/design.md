## Context

The portfolio currently showcases various projects but lacks one that demonstrates complex map integration with a unique aesthetic. The user wants to add a "Fruit Map" project built with Svelte SSR. This project uses a Stardew Valley aesthetic and relies heavily on View Transitions for a smooth, app-like navigation experience. The image asset `8` will be used to represent this project.

## Goals / Non-Goals

**Goals:**
- Successfully add the "Fruit Map" project to the existing portfolio data structure.
- Apply a custom Stardew Valley aesthetic specifically to the "Fruit Map" project's UI elements in the portfolio.
- Enable View Transitions for interactions related to this project.
- Ensure Svelte SSR compatibility is maintained while adding these features.

**Non-Goals:**
- Completely redesigning the entire portfolio to use the Stardew Valley aesthetic; it is localized to this specific project showcase.
- Modifying the underlying data structure of other existing projects.

## Decisions

- **Aesthetic Implementation:** Use scoped CSS or styling specifically targeted. The decision is to scope it carefully so it doesn't bleed into other portfolio sections.
- **View Transitions:** Use standard HTML View Transitions API, potentially via Svelte's capabilities, to create seamless navigation from the portfolio list to the project details. This is chosen for its native feel and performance.

## Risks / Trade-offs

- [Risk] View Transitions might not be fully supported in all older browsers. → Mitigation: Ensure graceful degradation where the navigation still works without the animation if the API is unsupported.
- [Risk] Custom aesthetics might clash with the global portfolio theme. → Mitigation: Use strict scoping or specific class namespace to isolate the Stardew Valley styles.

## Migration Plan

- No structural data migration is needed, just appending to existing project data and adding corresponding CSS/assets.

## Open Questions

- What specific aspects of the Stardew Valley aesthetic are most critical (e.g., pixel art borders, specific fonts, color palettes)?
