## ADDED Requirements

### Requirement: Dynamic meta tags per page
The system SHALL support dynamic meta tags (title, description, keywords) that change based on the current route/page.

#### Scenario: Home page meta tags
- **WHEN** user visits the home page "/"
- **THEN** meta title SHALL be "Agustín Castañol | Full Stack Developer"
- **THEN** meta description SHALL be "Full Stack Developer specialized in React, TypeScript and modern web technologies. View my portfolio and projects."

#### Scenario: About page meta tags
- **WHEN** user visits the "/about" route
- **THEN** meta title SHALL be "About Me | Agustín Castañol"
- **THEN** meta description SHALL be "Learn more about my experience, skills and background as a Full Stack Developer."

### Requirement: Open Graph meta tags
The system SHALL include Open Graph meta tags for social media sharing.

#### Scenario: OG tags present
- **WHEN** page loads
- **THEN** og:title meta tag SHALL be present
- **THEN** og:description meta tag SHALL be present
- **THEN** og:image meta tag SHALL point to a valid image URL
- **THEN** og:url meta tag SHALL match current page URL
- **THEN** og:type SHALL be "website"

### Requirement: Twitter Card meta tags
The system SHALL include Twitter Card meta tags.

#### Scenario: Twitter Card tags present
- **WHEN** page loads
- **THEN** twitter:card meta tag SHALL be present with value "summary_large_image"
- **THEN** twitter:site meta tag SHALL be present
- **THEN** twitter:title meta tag SHALL be present
- **THEN** twitter:description meta tag SHALL be present

### Requirement: JSON-LD Structured Data
The system SHALL include JSON-LD Schema.org Person data for rich search results.

#### Scenario: JSON-LD Person schema
- **WHEN** page loads
- **THEN** script tag with type="application/ld+json" SHALL be present
- **THEN** JSON content SHALL include "@context": "https://schema.org"
- **THEN** JSON content SHALL include "@type": "Person"
- **THEN** JSON content SHALL include "name": "Agustín Castañol"
- **THEN** JSON content SHALL include "url" pointing to portfolio domain

### Requirement: Sitemap.xml generation
The system SHALL generate a valid sitemap.xml file.

#### Scenario: Sitemap accessible
- **WHEN** user requests /sitemap.xml
- **THEN** response SHALL be valid XML
- **THEN** response SHALL include urlset xmlns
- **THEN** response SHALL include all application routes as url entries

### Requirement: robots.txt
The system SHALL serve a robots.txt file.

#### Scenario: Robots.txt present
- **WHEN** user requests /robots.txt
- **THEN** response SHALL include "User-agent: *"
- **THEN** response SHALL include "Allow: /"
- **THEN** response SHALL include "Sitemap:" pointing to sitemap.xml URL
