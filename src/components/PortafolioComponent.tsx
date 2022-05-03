import IMG1 from"../assets/img/project1.jpg"
import IMG2 from"../assets/img/project2.jpg"
import IMG3 from"../assets/img/project3.jpg"
import IMG4 from"../assets/img/project4.jpg"
import IMG5 from"../assets/img/project5.jpg"
export default function PortafolioComponent() {
    return (
        <section id="portafolio">
            <h5>My Recent Work</h5>
            <h2>Portafolio</h2>
            <div className="container portafolio__container">
                <article className="portafolio_item">
                    <div className="portafolio__item-image">
                    <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <a href="https://github.com/AgustinCastanol/PortafolioWeb" className="btn " target="_blank">Github</a>
                    <a href="https://dribbble.com/Agustin_Castanol" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
                <article className="portafolio_item">
                    <div className="portafolio__item-image">
                    <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <a href="https://github.com/AgustinCastanol/PortafolioWeb" className="btn " target="_blank">Github</a>
                    <a href="https://dribbble.com/Agustin_Castanol" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
                <article className="portafolio_item">
                    <div className="portafolio__item-image">
                    <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <a href="https://github.com/AgustinCastanol/PortafolioWeb" className="btn " target="_blank">Github</a>
                    <a href="https://dribbble.com/Agustin_Castanol" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
                <article className="portafolio_item">
                    <div className="portafolio__item-image">
                    <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <a href="https://github.com/AgustinCastanol/PortafolioWeb" className="btn " target="_blank">Github</a>
                    <a href="https://dribbble.com/Agustin_Castanol" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
                <article className="portafolio_item">
                    <div className="portafolio__item-image">
                    <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portafolio item title</h3>
                    <a href="https://github.com/AgustinCastanol/PortafolioWeb" className="btn " target="_blank">Github</a>
                    <a href="https://dribbble.com/Agustin_Castanol" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
            </div>
        </section>
    )
}