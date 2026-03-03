## Context

El portafolio actual es una app React/Vite básica con:
- Componentes en JSX plano (sin TypeScript)
- SEO mínimo (solo title tag)
- Sin tests, sin linting, sin arquitectura definida
- Archivos mezclados sin patrón claro

El objetivo es profesionalizar el código Y el SEO sin perder funcionalidad existente.

## Goals / Non-Goals

**Goals:**
- Migrar todo el código a TypeScript con tipos estrictos
- Implementar SEO técnico completo (meta tags, OG, JSON-LD, sitemap, robots.txt)
- Optimizar performance (Core Web Vitals verdes)
- Lograr accesibilidad WCAG 2.1 AA
- Setup de linting + testing con coverage decente
- Mantener 100% de funcionalidad actual

**Non-Goals:**
- Rediseño visual de la UI (quiero mantener lo que ya funciona)
- Backend/server-side rendering (SSR) - overkill para un portafolio static
- Migración a otro framework (me quedo en React)
- Contenido nuevo (texto, imágenes) - eso lo hago yo después

## Decisions

### 1. TypeScript Migration Strategy
**Decisión**: Migración gradual (incremental) de .jsx → .tsx
- **Alternativa considerada**: Rework completo desde cero (descartado - too risky, pierdo tiempo reescribiendo lo que ya funciona)
- **Rationale**: Menos riesgo, puedo validar componente por componente, mantengo el historial de git limpio
- **Config**: `tsconfig.json` con `strict: true`, `noImplicitAny: true`

### 2. SEO Implementation Approach
**Decisión**: Componente `<SEO />` react-head o react-helmet-async para meta tags dinámicos
- **Alternativa considerada**: Meta tags estáticos en index.html (descartado - no sirve para páginas dinámicas)
- **Rationale**: Componente reusable, fácil de mantener, comunidad activa
- **Para sitemap**: Generador automático basado en rutas existentes

### 3. Component Architecture
**Decisión**: Atomic Design simplificado
- **Alternativa considerada**: Folder por feature (overkill para portfiolo), Container/Presentational (viejo)
- **Rationale**: Escalable si crece el portfolio, clara separación UI/funcionalidad
- **Estructura**: `components/atoms/`, `components/molecules/`, `components/organisms/`, `components/pages/`

### 4. Testing Strategy
**Decisión**: Vitest + React Testing Library
- **Alternativa considerada**: Jest (descartado - Vite ya usa Vitest por defecto, menos config)
- **Rationale**: Faster, mejor DX, API similar a Jest
- **Coverage target**: 70% mínimo en componentes critical

### 5. Performance Optimization
**Decisión**: Vite built-in + React.lazy para componentes pesados
- **Alternativa considerada**: Next.js (overkill), Preact (no vale la pena el tradeoff)
- **Rationale**: Vite ya hace code splitting automático, solo necesito configurar lazy loading manual para components que no son above-the-fold

## Risks / Trade-offs

- **[Riesgo] Breaking changes en migración TypeScript**
  - → Mitigation: Migrar incremental, usar `any` como escape hatch temporal, testear cada componente
  
- **[Riesgo] Pérdida de SEO rankings durante migración**
  - → Mitigation: Mantener URLs exactamente iguales, agregar canonical tags, no borrar contenido

- **[Riesgo] Config de ESLint muy estricta paraliza desarrollo**
  - → Mitigation: Empezar con config relaxed, ajustar progresivamente

- **[Trade-off] TypeScript aumenta tiempo de dev inicial**
  - → Acceptable: DX mejora a largo plazo, menos bugs en prod

- **[Trade-off] Tests ralentizan feature development al principio**
  - → Acceptable: Coverage >70% evita regresiones y facilita refactoring futuro

## Migration Plan

1. **Fase 1 - Setup (1 día)**
   - Config TypeScript + ESLint + Prettier
   - Setup Vitest + RTL
   - Config Husky pre-commit

2. **Fase 2 - SEO (1 día)**
   - Crear componente `<SEO />`
   - Agregar sitemap.xml + robots.txt
   - Agregar JSON-LD (Schema.org Person)

3. **Fase 3 - Migración TypeScript (2-3 días)**
   - Renombrar .jsx → .tsx progresivamente
   - Agregar tipos a props y estado
   - Corregir errores de TypeScript

4. **Fase 4 - Performance (1 día)**
   - Lazy loading de componentes below-the-fold
   - Optimizar imágenes (webp, lazy loading)
   - Config Vite para producción

5. **Fase 5 - Accesibilidad (1 día)**
   - Agregar ARIA labels
   - Semantic HTML
   - Keyboard navigation testing

6. **Fase 6 - Testing (2 días)**
   - Escribir tests para componentes críticos
   - LLegar a 70% coverage

## Open Questions

- ¿Querés mantener el diseño actual o hay cambios menores de UX que querés hacer?
 necesito que se mantenga el diseño y la estetica actual
- ¿Hay algún componente específico que te dé problemas y quieras refactorizar primero?
 no, pero si ves que hay algo que se pueda mejorar, adelante
- ¿Tenés preferencia por alguna librería de testing en particular?
 no, pero si ves que hay algo que se pueda mejorar, adelante