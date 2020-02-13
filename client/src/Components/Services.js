//Depemdences
import React from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

//Style
import "./CSS/Services.css"

//Configuration
//import Info from "../Configuration/InformationServices"

//Components
import CardService from "./ToServices/CardService"
import CardServiceExpand from "./ToServices/CardServiceExpand"


class Services extends React.Component {

    constructor() {
        super();
        this.state = {
            Point: "",
            titulo: "",
            Desc: "",
            Tec: "",
            Color: "",
            Image: "",
            visible: false
        }
    }

    //Metods to Show and Hide pop up!
    show = (Point, Tl, Dsc, Tec, C, I) => e => {
        this.setState({
            Point: Point,
            titulo: Tl,
            Desc: Dsc,
            Tec: Tec,
            Color: C,
            Image: I,
            visible: true
        });
//console.log(Point)
        
    }

    hide() {
        this.setState({ visible: false });
    }
    ////////////////////////////////////

    render() {

        const { Object } = this.props;
console.log(Object);
        return (

            Object.map(
                (Info, Key) =>

                    <div className="o-FullContainerServices">
                        <h1>{Info.TitleServices}</h1>

                        <div className="o-Card">

                            {Info.Services.map(
                                (Info, key) =>
                                    <div
                                        className="o-ContainerCardService"
                                        onClick={this.show(Info.Point, Info.Title, Info.Paragraph, Info.Desc_Tecnic, Info.Color, Info.Image)}
                                    >
                                        <CardService
                                            Service={Info.Title}
                                            ServiceDesc={Info.Paragraph}
                                            Color={Info.Color}
                                            Image={Info.Image}
                                        />

                                    </div>
                            )}
                        </div>

                        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                            //Styles PopUp
                            customStyles={{
                                backgroundColor: "var(--White)",
                                width: "97vw",
                                height: "87vh",
                                padding: "0",
                                display: "flex",
                                aligncontent: "center",
                                justifycontent: "center"

                            }}
                        >
                            <CardServiceExpand
                                Service={this.state.titulo}
                                ServiceDesc={this.state.Desc}
                                ServiceTec={this.state.Tec}
                                Color={this.state.Color}
                                Image={this.state.Image}
                                Point={this.state.Point}
                            />

                        </Rodal>

                    </div>

            )
        )
    }
}

export default Services;