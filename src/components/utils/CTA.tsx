import CV from '../../assets/pdf/CV-AgustinCastañol.pdf';

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary ">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
