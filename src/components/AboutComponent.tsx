import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../assets/img/me-about.jpg'
export default function AboutComponent (){
    return (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>

            <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>2+ Years working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clientes</h5>
                <small>200+ worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Proyects</h5>
                <small>20+ completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum voluptatibus! Quidem similique mollitia ut accusamus officia, quisquam, deleniti iusto animi provident eos minus sit libero incidunt ipsam, earum nesciunt?</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
        </section>
        )
}