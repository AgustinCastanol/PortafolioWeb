import CV from "../../assets/pdf/CV-AgustinCastañol.pdf"
export default function CTA(){
    return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href='#contact' className='btn btn-primary '>Let's Talk</a>
    </div>)
}