import CTA from './utils/CTA';
import HeaderSocials from './utils/HeaderSocials';
import ME from '../assets/img/sticker.png';

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Agustin Castanol</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Agustin Castañol" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
