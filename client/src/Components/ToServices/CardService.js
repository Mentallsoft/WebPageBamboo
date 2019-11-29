import React from "react"

//Styles
import "./CSS/CardService.css"

class CardService extends React.Component {
    render() {
        return (
            <div className="o-ContainerCardService">
                <img className="o-ServiceImage" src={this.props.Image} alt=""/>
                <div className="o-ContainerServiceInfo">
                    <h1 style={{color: this.props.Color, fontSize: "2rem"}}>{this.props.Service}</h1>
                    <p style={{color: "gray"}}>{this.props.ServiceDesc}</p>
                </div>
            </div>
        )
    }
}

export default CardService;