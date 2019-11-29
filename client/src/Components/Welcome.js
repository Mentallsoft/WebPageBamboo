//Dependences
import React from "react"

//Style
import "./CSS/Welcome.css"

//Imagenes
import Bamboo from "../Images/PNG/LogoTipo.png"


class Welcome extends React.Component {

    render() {

        return (
            <div className="o-FullContainer">
                <img className="o-LogoTipo" src={Bamboo} alt="" />
            </div>
        )
    }
}

export default Welcome;