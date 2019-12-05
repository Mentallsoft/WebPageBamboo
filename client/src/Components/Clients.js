//Dendences
import React from 'react'

//Styles
import "./CSS/Clients.css"

import InfoClients from "../Configuration/InformationClients"

class Clients extends React.Component {

    render() {
        const {Title} = this.props;

        return (
            <div className="o-FullContainerClients">
                <h1>{Title}</h1>
                <div className="o-ImgContainerClients">

                    {InfoClients.map(
                        (Info, Key) =>
                            <img 
                            Key={Key} 
                            src={Info.Image} 
                            alt={Info.Client}
                            style={{
                                height: Info.Size
                            }} 
                            />
                    )}

                </div>
            </div>
        )
    }

}

export default Clients;