import { BsPatchCheckFill } from 'react-icons/bs';
import portfolioData from '../data.json';

const ExperienceComponent: React.FC = () => {
  const { categories } = portfolioData.skills;

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {categories.map((category) => (
          <div key={category.id} className={`experience__${category.id}`}>
            <h3>{category.title}</h3>
            <div className="experience__content">
              {category.skills.map((skill, index) => (
                <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
