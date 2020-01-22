//Dependences
import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';

//Styles
import "./CSS/Pilares.css"

//Configuration
//import Colors from "../Configuration/InformationPilars"

class Pilares extends React.Component {
    render() {

        const { Object } = this.props;

        return (

            Object.map(
                (Inf, Key) =>

                    <div className="o-FullContainerPilares">
                        <h1>{Inf.TitlePilares}</h1>
                        <div className="o-PilarsContainer">

                            <Accordion className="Acordion" allowMultiple={true} isHovered={true} allActive={true}>
                                {
                                    Inf.Pilars.map(
                                        (Color, key) =>
                                            <AccordionItem key={key} className="CardTitle" style={{ backgroundColor: Color.Color, width: Color.width }} title={Color.Title} >
                                                <div style={{ backgroundColor: Color.ColorDark }} className="CardDesc">
                                                    <p>{Color.Paragraph}</p>
                                                </div>
                                            </AccordionItem>
                                    )}
                            </Accordion>

                        </div>
                    </div>
            )
        )
    }

}

export default Pilares;