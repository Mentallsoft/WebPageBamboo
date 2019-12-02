import React from 'react'

import "./CSS/Copyrigth.css"
import Logo from "../Images/ICO/Bamboo Blanco.ico"

const Copyrigth = () =>{
    return(
    <div className="o-CopyRContainer">
        <img className="o-LogoB" src={Logo} alt=""/>
        <h4>© 2017 Bamboo analytics. All Rights Reserved</h4>
    </div>
    )
}

export default Copyrigth;