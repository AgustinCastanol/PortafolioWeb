import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../assets/img/me-about.png'
export default function AboutComponent (){
    return (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
          <div className="container about__container">
            <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>2+ Years working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>30+ worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Proyects</h5>
                <small>20+ completed</small>
              </article>
            </div>
            <p> 
I'm a computer engineering student, expert in coding solutions. Diploma in full stack web development. Freelancer in design and development of dynamic and static web pages. Fan of minimalist design and efficiency. I love developing new knowledge to offer them in all the jobs I do.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
        </section>
        )
}