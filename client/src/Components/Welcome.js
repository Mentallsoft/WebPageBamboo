//Dependences
import React from "react"

//Style
import "./CSS/Welcome.css"

//Imagenes

class Welcome extends React.Component {

    render() {

        return (
            <div className="o-FullContainer"
            style={{backgroundImage: `url(${this.props.BgImage})`}}
            >
                <img className={this.props.ClssNm} src={this.props.LogoT1} alt="" />
                <img className="o-LogoTipo2" src={this.props.LogoT2} alt="" />
                <img className="o-Bumb" src={this.props.Bumb} alt="" />
            </div>
        )
    }
}

export default Welcome;