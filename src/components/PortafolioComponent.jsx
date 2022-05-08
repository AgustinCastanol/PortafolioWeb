import DATA from "../dataFromProjects"
import IMG1 from "../assets/img/project1.jpg"
export default function PortafolioComponent() {
    return (
        <section id="portafolio">
            <h5>My Recent Work</h5>
            <h2>Portafolio</h2>
            <div className="container portafolio__container">
                {DATA.map(e => {
                    return (
                        <article className="portafolio__items">
                            <div className="portafolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <h3>{e.title}</h3>
                            <div className="portafolio__item-cta">
                                <a href={e.github} className="btn " target="_blank">Github</a>
                                <a href={e.demo} className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}