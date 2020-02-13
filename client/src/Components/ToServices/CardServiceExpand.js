import React from 'react'
import renderHTML from 'react-render-html'

import "./CSS/CardServiceExpand.css"

class CardServiceExpand extends React.Component {

    render() {

        const { Image, Service, ServiceTec, Point, Color } = this.props;

        console.log(Point)
        return (
            <div className="o-ContainerServiceExpand">
                <div className="o-Presentation">
                    <img className="o-IconServ" src={Image} alt="" />
                    <h1>{Service}</h1>
                </div>
                <div className="o-Description" style={{ backgroundColor: Color }}>
                    <div className="pruebita">

                        {renderHTML(ServiceTec)}

                    </div>


                </div>
            </div>
        )
    }
}

export default CardServiceExpand;