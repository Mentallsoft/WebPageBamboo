//Dependences
import React from "react"
import { Link } from 'react-router-dom';

//Configuration
import items from "../Configuration/URL"
/**Si desea aderir más opciones en el header, edite el archivo ../Configuration/URL */

//Style
import "./CSS/Header.css"

//Imagenes
//import Bamboo from "../Images/SVG/Bamboo.svg"


class Header extends React.Component {

    render() {

        return (
            <div className="o-FullFrame">
                <ul className="o-Menu">
                    {
                        items && items.map(
                            (item, key) =>
                                    <li key={key}><Link to={item.url}>{item.title}</Link></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Header;