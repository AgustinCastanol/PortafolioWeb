import { FaLinkedin } from 'react-icons/fa';
import { FiGithub, FiInstagram, FiAward } from 'react-icons/fi';

const FooterComponent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer__logo">
        AgustinCastañol
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/agustin-casta%C3%B1ol/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AgustinCastanol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/casta_211/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.credly.com/users/agustin-castanol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Credly Profile"
        >
          <FiAward />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {currentYear} Agustin Castañol Dev. All rights reserved</small>
      </div>
    </footer>
  );
};

export default FooterComponent;
