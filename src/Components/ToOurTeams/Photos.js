//Dependences
import React from 'react'

//Style
import "./CSS/Photos.css"

class Photos extends React.Component {

    render() {
        return (
            <div className="o-PhotoTeam">
                <div className="ContainerImage">
                    <img src={this.props.Photo} alt="" />
                </div>

                    <div className="o-TeamInformation">
                        <h5>
                            {this.props.Member}
                            <br />
                            <br />
                            {this.props.Role}
                            <br />
                         {/**   <br />
                            Ext. {this.props.Extension} */}
                        </h5>
                    </div>
            </div>
        )
    }
}

export default Photos;