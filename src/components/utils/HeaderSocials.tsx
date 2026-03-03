import { BsLinkedin, BsGithub, BsInstagram, BsAwardFill } from 'react-icons/bs';

const HeaderSocials: React.FC = () => {
  return (
    <>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/agustin-casta%C3%B1ol/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/AgustinCastanol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/casta_211/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.credly.com/users/agustin-castanol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Credly Profile"
        >
          <BsAwardFill />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
