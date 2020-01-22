import React from 'react'

import "./CSS/Copyrigth.css"
import Logo from "../Images/ICO/Bamboo Blanco.ico"

const Copyrigth = () =>{
    return(
    <div className="o-CopyRContainer">
        <img className="o-LogoB" src={Logo} alt=""/>
        <h6>© {(new Date().getFullYear())} Bamboo analytics. All Rights Reserved</h6>
    </div>
    )
}

export default Copyrigth;