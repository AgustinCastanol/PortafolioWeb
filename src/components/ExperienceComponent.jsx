import { BsPatchCheckFill } from 'react-icons/bs'
export default function ExperienceComponent() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>VUE.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Next.JS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nuxt.JS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Pinia/Redux</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        {/*End OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Microservices</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nest.JS</h4>
                <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className='experience__content'>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nats</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redis</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nats</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}