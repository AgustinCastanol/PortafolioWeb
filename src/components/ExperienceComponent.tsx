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
              <BsPatchCheckFill className='' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>Typescript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>React/React-ts</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>Vue/Vuex</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        {/*End OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='' />
            <h4>NodeJS</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>C/C++</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='' />
              <h4>DenoJS</h4>
              <small className='text-light'>Basic</small>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}