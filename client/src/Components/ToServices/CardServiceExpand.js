import React from 'react'
//import Card from "./CardService"
import "./CSS/CardServiceExpand.css"

class CardServiceExpand extends React.Component{

    render(){
        return(
            <div className="o-ContainerServiceExpand">
               <div className="o-Presentation">
                    <img className="o-IconServ" src={this.props.Image} alt=""/>
                    <h1>{this.props.Service}</h1>
               </div>
               <div className="o-Description" style={{backgroundColor: this.props.Color}}>

               </div>
            </div>
        )
    }
}

export default CardServiceExpand;