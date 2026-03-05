import portfolioData from '../data.json';
import { useState } from 'react';
import '../assets/FruitMapDetails.css';

import IMG1 from '../assets/img/project1.jpg';
import IMG2 from '../assets/img/project2.jpg';
import IMG3 from '../assets/img/project3.jpg';
import IMG4 from '../assets/img/project-4.png';
import IMG5 from '../assets/img/project-5.png';
import IMG6 from '../assets/img/project-6.png';
import IMG7 from '../assets/img/project-7.png';
import IMG8 from '../assets/img/image-8.png';

const imageMap: Record<string, string> = {
  'project-1': IMG1,
  'project-2': IMG2,
  'project-3': IMG3,
  'project-4': IMG4,
  'project-5': IMG5,
  'project-6': IMG6,
  'project-7': IMG7,
  'project-8': IMG8,
};

const PortafolioComponent: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openDetails = (item: any) => {
    if (item.id !== 7) return;
    if (!(document as any).startViewTransition) {
      setSelectedProject(item);
      return;
    }
    (document as any).startViewTransition(() => {
      setSelectedProject(item);
    });
  };

  const closeDetails = () => {
    if (!(document as any).startViewTransition) {
      setSelectedProject(null);
      return;
    }
    (document as any).startViewTransition(() => {
      setSelectedProject(null);
    });
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portafolio__container">
        {projects.map((item) => {
          const isFruitMap = item.id === 7;
          let cardClass = 'portafolio__items';
          if (isFruitMap) cardClass += ' stardew-theme';
          if (isFruitMap && (!selectedProject || selectedProject.id !== 7)) cardClass += ' vt-card';

          return (
            <article key={item.id} className={cardClass}>
              <div className="portafolio__item-image">
                <img src={imageMap[item.image]} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              {item.description && (
                <p className="portafolio__item-description">{item.description}</p>
              )}
              <div className="portafolio__item-cta">
                {item.github && (
                  <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {item.demo && !isFruitMap && (
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {isFruitMap && (
                  <button className="btn btn-primary" onClick={() => openDetails(item)}>
                    View Details
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {selectedProject && selectedProject.id === 7 && (
        <div className="stardew-modal-overlay" onClick={closeDetails}>
          <div className="stardew-theme stardew-modal vt-card" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-close" onClick={closeDetails}>
              X Close
            </button>
            <div className="portafolio__item-image">
              <img
                src={imageMap[selectedProject.image]}
                alt={selectedProject.title}
                style={{ borderRadius: '8px', border: '2px solid #bd7c36' }}
              />
            </div>
            <h3>{selectedProject.title}</h3>
            <p className="portafolio__item-description">{selectedProject.description}</p>
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '4px',
                border: '2px solid #bd7c36',
              }}
            >
              <p>Welcome to the Fruit Map Details View!</p>
              <p>
                This application showcases interactive maps, Svelte SSR capabilities, and View
                Transitions.
              </p>
            </div>
            <div className="portafolio__item-cta" style={{ marginTop: '1rem' }}>
              <a
                href="https://frutiar.acastanol.com.ar"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play / Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortafolioComponent;
