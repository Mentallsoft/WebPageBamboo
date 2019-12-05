//Dependences
import React from 'react'

//Style
import "./CSS/OurTeam.css"

//Configuration
import Info from "../Configuration/InformationOurTeam"

//Component
import Photos from "./ToOurTeams/Photos"

class OurTeam extends React.Component {

    render() {

        return (
            <div className="o-FullContainerOurTeam">
                <h1>Nuestro equipo</h1>


                <div className="o-ContainerPhotoTeam">
                    {Info.map((Info, Key) =>
                        <Photos Key={Key} Photo={Info.Photo} Member={Info.Member} Extension={Info.Extension} Role={Info.Role} />
                    )
                    }
                </div>


            </div>

        )
    }

}

export default OurTeam;