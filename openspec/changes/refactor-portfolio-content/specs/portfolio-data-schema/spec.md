## ADDED Requirements

### Requirement: Portfolio Profile Summary Structure
The system SHALL provide a structured data schema for the user's profile information, updated to reflect a Senior/Tech Lead position with 4+ years of experience.

#### Scenario: Rendering the About Me section
- **WHEN** the React application renders the profile component
- **THEN** it consumes the profile data from the JSON schema
- **THEN** it displays "4+ Years of experience" and the updated English bio without relying on hardcoded UI text

### Requirement: Enterprise-Focused Projects Schema
The system SHALL organize project data in the JSON schema as an array, sorted by impact and relevance, starting with enterprise-level achievements.

#### Scenario: Displaying the project list
- **WHEN** the user views the Projects section
- **THEN** the application iterates over the JSON projects array
- **THEN** "Bonvivir E-commerce" is the first project shown, including metrics like "Improved web performance by 60%"
- **THEN** "AVE" and "VUCE" projects are displayed subsequently

### Requirement: Advanced Skills Taxonomy
The system SHALL define the user's skills within categorized groupings: "Frontend Development", "Backend & Cloud", and "DevOps & Architecture".

#### Scenario: Rendering the categorized skills
- **WHEN** the skills component is rendered
- **THEN** the system iterates through the customized categories in the JSON
- **THEN** "AWS Lambdas/Serverless" and "Google Cloud Associate Cloud Engineer" are displayed under the "Backend & Cloud" category
- **THEN** CI/CD pipelines, Docker, and Kubernetes are displayed under "DevOps & Architecture"
