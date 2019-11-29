//Depemdences
import React from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

//Style
import "./CSS/Services.css"

//Configuration
import Info from "../Configuration/InformationServices"

//Components
import CardService from "./ToServices/CardService"
import CardServiceExpand from "./ToServices/CardServiceExpand"


class Services extends React.Component {

    constructor() {
        super();
        this.state = {
            titulo: "",
            Desc: "",
            Color: "",
            Image: "",
            visible: false
        }
    }

    //Metods to Show and Hide pop up!
    show = (Tl, Dsc, C, I) => e => {
        this.setState({
            titulo: Tl,
            Desc: Dsc,
            Color: C,
            Image: I,
            visible: true
        });
    }

    hide() {
        this.setState({ visible: false });
    }
    ////////////////////////////////////

    render() {

        return (

            <div className="o-FullContainerServices">
                <h1>Servicios</h1>

                <div className="o-Card">
                    
                    {Info.map(
                        (Info, key) =>
                            <div className="o-ContainerCardService" onClick={this.show(Info.Title, Info.Paragraph, Info.Color, Info.Image)}>
                                <CardService Service={Info.Title} ServiceDesc={Info.Paragraph} Color={Info.Color} Image={Info.Image} />
                            </div>
                    )}
                </div>

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                    //Styles PopUp
                    customStyles={{
                        backgroundColor: "white",
                        width: "90vw",
                        height: "90vh",
                        padding: "0",
                        display: "flex",
                        aligncontent: "center",
                        justifycontent: "center"

                    }}
                >
                    <CardServiceExpand
                        Service={this.state.titulo}
                        ServiceDesc={this.state.Desc}
                        Color={this.state.Color}
                        Image={this.state.Image}
                    />

                </Rodal>

            </div>


        )
    }

}

export default Services;