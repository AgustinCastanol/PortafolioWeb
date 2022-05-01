import { useState } from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
export default function NavComponent() {
    const [activeNav,setActiveNav]= useState('#')
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#portafolio"><RiServiceLine/></a>
            <a href="#contact"><BiMessageSquareDetail/></a>

        </nav>
    )
}