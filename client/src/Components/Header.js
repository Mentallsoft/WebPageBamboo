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

                    <li className="o-Sheet"
                        style={{
                            visibility: this.props.Visibility2,
                            width: this.props.Width2
                        }}
                    >
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

                <div className="o-Social_Network">
                    <a href="https://www.instagram.com/bambooanalyticssas/" target="_blank">
                        <img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" alt="Instagram" id="o-Icon" />
                    </a>
                    <a href="https://www.facebook.com/BambooAnalytics/" target="_blank">
                        <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Facebook" id="o-Icon" />
                    </a>
                    <a href="https://co.linkedin.com/company/bamboo-analytics-sas" target="_blank">
                        <img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="LinkedIn" id="o-Icon" />
                    </a>
                    <a href="https://twitter.com/AnalyticsBamboo" target="_blank">
                        <img src="https://image.flaticon.com/icons/svg/1409/1409937.svg" alt="Twitter" id="o-Icon" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;