//Dependences
import React from "react"
import renderHTML from 'react-render-html'

//Style
import "./CSS/WeAre.css"

class WeAre extends React.Component {

    render() {

        const { Title, Paragraph } = this.props;

        return (
            <div className="o-FullContainerWA">
                <h1>{Title}</h1>
                <p>{renderHTML(Paragraph)}</p>
            </div>
        )
    }
}

export default WeAre;