import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import portfolioData from '../data.json';

const AboutComponent: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{profile.experience}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>{profile.clients}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{profile.projects}</small>
            </article>
          </div>
          <p>{profile.bio}</p>
          <a href="#contact" className="btn btn-primary">
            {profile.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
