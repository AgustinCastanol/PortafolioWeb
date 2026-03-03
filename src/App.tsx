import { Suspense, lazy } from 'react';
import { SEO } from './components/SEO';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
import AboutComponent from './components/AboutComponent';
import PortafolioComponent from './components/PortafolioComponent';

// Lazy load below-the-fold components for performance
const ExperienceComponent = lazy(() => import('./components/ExperienceComponent'));
const ContactComponent = lazy(() => import('./components/ContactComponent'));
const FooterComponent = lazy(() => import('./components/FooterComponent'));

const LoadingFallback: React.FC = () => (
  <div className="loading-placeholder" aria-label="Loading content..."></div>
);

function App() {
  return (
    <>
      <SEO
        title="Home"
        description="Full Stack Developer specializing in React, Angular, TypeScript, and modern web technologies. Building exceptional digital experiences."
        type="website"
        pathname="/"
      />
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <HeaderComponent />
      <NavComponent />
      <main id="main">
        <AboutComponent />
        <PortafolioComponent />
        <Suspense fallback={<LoadingFallback />}>
          <ExperienceComponent />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactComponent />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <FooterComponent />
      </Suspense>
    </>
  );
}

export default App;
