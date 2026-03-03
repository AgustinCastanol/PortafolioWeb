## 1. Setup inicial

- [x] 1.1 Instalar dependencias: typescript, @types/react, @types/node, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint, prettier, eslint-config-prettier, eslint-plugin-prettier, husky, vitest, @testing-library/react, @testing-library/jest-dom, jsdom
- [x] 1.2 Crear tsconfig.json con strict mode (strict: true, noImplicitAny: true, strictNullChecks: true)
- [x] 1.3 Crear .eslintrc.cjs con configuración React + TypeScript
- [x] 1.4 Crear .prettierrc con configuración standard (2 espacios, single quotes, trailing commas)
- [x] 1.5 Configurar Husky con pre-commit hook
- [x] 1.6 Crear vitest.config.js con @testing-library/react y jsdom
- [x] 1.7 Renombrar vite.config.js a vite.config.ts y agregar tipos

## 2. SEO Técnico

- [x] 2.1 Crear componente SEO component (src/components/SEO/SEO.tsx) con props para title, description, image, type
- [x] 2.2 Agregar meta tags dinámicos en index.html para fallback
- [x] 2.3 Crear script para generar sitemap.xml automáticamente
- [x] 2.4 Crear archivo robots.txt en public/
- [x] 2.5 Agregar JSON-LD Schema.org Person al componente SEO
- [x] 2.6 Integrar componente SEO en todas las páginas/routes

## 3. Migración TypeScript

- [x] 3.1 Renombrar src/main.jsx a src/main.tsx
- [x] 3.2 Renombrar src/App.jsx a src/App.tsx
- [x] 3.3 Migrar componentes uno por uno (Header, Footer, Nav, etc.) de .jsx a .tsx
- [x] 3.4 Crear interfaces para tipos de datos (Project, Experience, Skill, etc.)
- [x] 3.5 Renombrar src/dataFromProjects.js a .ts y agregar tipos
- [x] 3.6 Corregir todos los errores de TypeScript
- [x] 3.7 Migrar utility functions a TypeScript

## 4. Optimización Performance

- [x] 4.1 Implementar React.lazy() para componentes below-the-fold (Footer, Experience, Contact)
- [x] 4.2 Configurar Vite para code splitting automático
- [x] 4.3 Optimizar imágenes: agregar width/height, usar WebP si es posible
- [x] 4.4 Agregar loading fallbacks para componentes lazy
- [x] 4.5 Verificar bundle size con npm run build -- --report
- [x] 4.6 Medir Core Web Vitals con Lighthouse

## 5. Accesibilidad

- [x] 5.1 Agregar skip to main content link
- [x] 5.2 Revisar jerarquía de headings (h1 → h2 → h3)
- [x] 5.3 Agregar aria-labels a botones/iconos sin texto
- [x] 5.4 Asegurar que todos los enlaces tengan texto descriptivo
- [x] 5.5 Verificar contraste de colores WCAG AA
- [x] 5.6 Agregar aria-live para mensajes de error/feedback
- [x] 5.7 Testear navegación solo con keyboard

## 6. Testing

- [x] 6.1 Crear archivos de test para componentes principales (App, Header, Footer)
- [x] 6.2 Escribir tests de renderizado de componentes
- [x] 6.3 Escribir tests para SEO component
- [x] 6.4 Ejecutar coverage y verificar que llegue a 70%
- [x] 6.5 Corregir tests que fallen

## 7. Limpieza final

- [x] 7.1 Ejecutar ESLint y corregir warnings
- [x] 7.2 Ejecutar Prettier en todo el proyecto
- [x] 7.3 Verificar que build funcione sin errores
- [x] 7.4 Testear en producción con npm run preview
- [x] 7.5 Commitear con mensajes convencionales
