import CV from "../../assets/pdf/CV-AgustinCastañol.pdf"
export default function CTA(){
    return (
    <div className="cta">
        <a href={CV} className="btn">Download CV</a>
        <a href='#contact' download className='btn btn-primary '>Let's Talk</a>
    </div>)
}