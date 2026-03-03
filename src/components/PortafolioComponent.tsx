import portfolioData from '../data.json';

import IMG1 from '../assets/img/project1.jpg';
import IMG2 from '../assets/img/project2.jpg';
import IMG3 from '../assets/img/project3.jpg';
import IMG4 from '../assets/img/project-4.png';
import IMG5 from '../assets/img/project-5.png';
import IMG6 from '../assets/img/project-6.png';
import IMG7 from '../assets/img/project-7.png';

const imageMap: Record<string, string> = {
  'project-1': IMG1,
  'project-2': IMG2,
  'project-3': IMG3,
  'project-4': IMG4,
  'project-5': IMG5,
  'project-6': IMG6,
  'project-7': IMG7,
};

const PortafolioComponent: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portafolio__container">
        {projects.map((item) => (
          <article key={item.id} className="portafolio__items">
            <div className="portafolio__item-image">
              <img src={imageMap[item.image]} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            {item.description && <p className="portafolio__item-description">{item.description}</p>}
            <div className="portafolio__item-cta">
              {item.github && (
                <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortafolioComponent;
