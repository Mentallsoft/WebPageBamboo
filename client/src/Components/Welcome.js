//Dependences
import React from "react"

//Style
import "./CSS/Welcome.css"

//Imagenes
import Fondo from "../Videos/Fondo.mp4"

class Welcome extends React.Component {

    render() {

        return (
            <div className="o-FullContainer" style={{ backgroundImage: `url(${this.props.BgImage})` }}>
                <video id="o-VideoBg" autoPlay muted loop>
                    <source src={Fondo} type="video/mp4" alt="Background Video" />
                </video>
                <img className={this.props.ClssNm} src={this.props.LogoT1} alt="" />
                <img className="o-LogoTipo2" src={this.props.LogoT2} alt="" />
                <img className="o-Bumb" src={this.props.Bumb} alt="" />
                <img className="o-GifUp" src={this.props.GifUp} alt="" />
            </div>
        )
    }
}

export default Welcome;