## ADDED Requirements

### Requirement: Code splitting for route-based chunks
The system SHALL split JavaScript bundles by route to reduce initial load time.

#### Scenario: Route-based code splitting
- **WHEN** production build is generated
- **THEN** each route SHALL be in a separate chunk
- **THEN** chunks SHALL be lazy-loaded when navigating

### Requirement: Lazy loading for below-the-fold components
The system SHALL lazy-load components that are not visible on initial render.

#### Scenario: Heavy component lazy loading
- **WHEN** component is below the fold (not in initial viewport)
- **THEN** component SHALL be imported with React.lazy()
- **THEN** component SHALL show a loading fallback while fetching

### Requirement: Image optimization
The system SHALL optimize images for web.

#### Scenario: Image format optimization
- **WHEN** images are served in production
- **THEN** images SHALL use modern formats (WebP, AVIF) when supported
- **THEN** images SHALL have explicit width and height attributes to prevent layout shift

### Requirement: Core Web Vitals compliance
The system SHALL meet Core Web Vitals thresholds.

#### Scenario: LCP (Largest Contentful Paint)
- **WHEN** page loads
- **THEN** LCP SHALL be under 2.5 seconds

#### Scenario: FID (First Input Delay)
- **WHEN** user interacts with page
- **THEN** FID SHALL be under 100 milliseconds

#### Scenario: CLS (Cumulative Layout Shift)
- **WHEN** page loads
- **THEN** CLS SHALL be under 0.1

### Requirement: Bundle size optimization
The system SHALL keep production bundle size reasonable.

#### Scenario: Bundle size limits
- **WHEN** production build completes
- **THEN** initial JavaScript bundle SHALL be under 200KB (gzipped)
- **THEN** no unused dependencies SHALL be bundled
