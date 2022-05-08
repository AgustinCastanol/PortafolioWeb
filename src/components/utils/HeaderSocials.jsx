import {BsLinkedin, BsGithub,BsInstagram}from 'react-icons/bs'
export default function HeaderSocials(){
    return(
        <>
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/agustin-casta%C3%B1ol/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/AgustinCastanol" target="_blank"><BsGithub/></a>
            <a href="https://www.instagram.com/casta_211/" target="_blank"><BsInstagram/></a>

        </div>
        </>
    )
}