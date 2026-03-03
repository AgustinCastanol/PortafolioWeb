import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

type NavTarget = '#' | '#about' | '#experience' | '#portfolio' | '#contact';

const NavComponent: React.FC = () => {
  const [activeNav, setActiveNav] = useState<NavTarget>('#');

  const handleNavClick = (target: NavTarget): void => {
    setActiveNav(target);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick('#')}
        className={activeNav === '#' ? 'active' : ''}
        aria-label="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        aria-label="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        aria-label="Experience"
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavClick('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        aria-label="Portfolio"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        aria-label="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default NavComponent;
