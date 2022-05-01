import CTA from "./utils/CTA";
import HeaderSocials from "./utils/HeaderSocials";
import ME from "../assets/img/me.png"
export default function HeaderComponent(){    return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Agustin Castanol</h1>
            <h5 className="text-light">Fullstack dedveloper</h5>
            <CTA></CTA>
            <HeaderSocials></HeaderSocials>

            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>)}