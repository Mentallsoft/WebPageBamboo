//Dependences
import React from "react"
import { Link } from 'react-router-dom';

//Style
import "./CSS/Header.css"

import Scrollchor from 'react-scrollchor';


class Header extends React.Component {

    render() {

        return (
            <div className="o-FullFrame">
                <ul className="o-Menu">

                    <li className="o-Sheet">
                        <Link to={this.props.URL1}>
                            {this.props.Label1}
                        </Link>
                    </li>
                    <li className="o-Sheet"
                        style={{ 
                            visibility: this.props.Visibility,
                            width: this.props.Width 
                        }} >
                        <Scrollchor to={this.props.Ident} className="nav-link">
                            {this.props.Label2}
                        </Scrollchor>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;