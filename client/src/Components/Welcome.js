//Dependences
import React from "react"

//Style
import "./CSS/Welcome.css"

//Imagenes
import Fondo from "../Videos/Fondo.mp4"
import Slog from "../Images/PNG/ES_Slogan.png"

class Welcome extends React.Component {

    render() {

        const {ClssNm, LogoT1, LogoT2, Bumb, GifUp, Slogan} = this.props;

        return (
            <div className="o-FullContainer" style={{ backgroundImage: "black" }}>
                <video id="o-VideoBg" autoPlay muted loop>
                    <source src={Fondo} type="video/mp4" alt="Background Video" />
                </video>
                <img className={ClssNm} src={LogoT1} alt="" />
                <img className="o-LogoTipo2" src={LogoT2} alt="" />
                <img className="o-Bumb" src={Bumb} alt="" />
                <img className="o-GifUp" src={GifUp} alt="" />
                <img className="o-Slogan" src={Slogan} alt=""/>             
            </div>
        )
    }
}

export default Welcome;