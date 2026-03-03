## Why

El portafolio actual tiene problemas críticos de SEO (sin meta tags, sin sitemap, sin structured data, sin performance optimization) y calidad de código (JSX sin TypeScript, componentes giant, sin arquitectura, sin tests). En 2026 esto es inaceptable para un developer que se precie. El objetivo es profesionalizar el sitio para que seja taken seriously por reclutadores y clientes.

## What Changes

- **Migración completa a TypeScript** - Tipado estático para reducir bugs y mejorar DX
- **Implementación de SEO técnico completo** - Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap.xml, robots.txt
- **Optimización de performance** - Code splitting, lazy loading, image optimization, Core Web Vitals
- **Mejora de accesibilidad (a11y)** - ARIA labels, semantic HTML, keyboard navigation, contrast ratios
- **Refactorización de componentes** - De JSX plano a arquitectura limpia con patrones modernos
- **Configuración de linting y formatting** - ESLint + Prettier + Husky para calidad consistente
- **Setup de testing** - Vitest + React Testing Library para Coverage decente

## Capabilities

### New Capabilities
- `seo-technical-setup`: Implementación completa de SEO técnico (meta tags dinámicos, Open Graph, JSON-LD, sitemap, robots.txt)
- `performance-optimization`: Optimización de Core Web Vitals, code splitting, lazy loading, image optimization
- `accessibility-enhancement`: Mejoras de accesibilidad (WCAG 2.1 AA compliance)
- `typescript-migration`: Migración de JavaScript a TypeScript con tipos proper
- `code-quality-setup`: ESLint, Prettier, Husky y configuración de commits convencionales

### Modified Capabilities
- (Ninguno - es un proyecto nuevo con specs vacías)

## Impact

- **Código**: Refactorización completa de todos los componentes existentes
- **Build**: Nueva configuración de Vite para producción optimizada
- **SEO**: Archivos nuevos en `/public` (sitemap.xml, robots.txt) y meta tags dinámicos
- **Testing**: Nueva carpeta de tests con coverage inicial > 70%
- **Linting**: Configuración de hooks pre-commit
