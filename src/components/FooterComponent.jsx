import { FaLinkedin } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

export default function FooterComponent(){
    return (
        <footer>
          <a href="#" className="footer__logo">AgustinCastanol</a>
          <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/agustin-casta%C3%B1ol/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/AgustinCastanol" target="_blank"><FiGithub/></a>
            <a href="https://www.instagram.com/casta_211/" target="_blank"><FiInstagram/></a>
          </div>
          <div className="footer__copyright">
              <small>&copy; Agustin Castanol Dev. All rights reserved</small>
          </div>
        </footer>)
}