//Dependences
import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';

//Styles
import "./CSS/Pilares.css"

//Configuration
import Colors from "../Configuration/InformationPilars"

class Pilares extends React.Component {
    render() {
        return (
            <div className="o-FullContainerPilares">
                <h1>Nuestros pilares</h1>
                <div className="o-PilarsContainer">
                    <Accordion className="Acordion" allowMultiple={false} isHovered={true}>
                        {
                            Colors.map(
                                (Color, key) =>
                                    
                                    <AccordionItem key={key} className="CardTitle" style={{ backgroundColor: Color.Color, width: Color.width }} title={Color.Title} >
                                        <div style={{ backgroundColor: Color.ColorDark }} className="CardDesc">
                                            <p>{Color.Paragraph}</p>
                                        </div>
                                    </AccordionItem>

                            )
                        }

                    </Accordion>
                </div>
            </div>
        )
    }

}

export default Pilares;