//Dependences
import React from 'react'

//Style
import "./CSS/Photos.css"

class Photos extends React.Component {

    render() {
        return (
            <div className="o-PhotoTeam">
                <img src={this.props.Photo} alt="" />
                <div className="o-ToAnimation">
                    <div className="o-TeamInformation">
                        <h3>{this.props.Member}</h3>
                        <h4>{this.props.Role}</h4>
                        <h5>Ext. {this.props.Extension}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photos;