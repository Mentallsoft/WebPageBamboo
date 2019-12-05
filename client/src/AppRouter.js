//Dependecies
import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactFlagsSelect from 'react-flags-select';

//Components
import App from "./Components/App";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Page404 from "./Pages/Page404"
import Post from "./Pages/Post"

//Styles
import 'react-flags-select/css/react-flags-select.css';
import "./AppRouter.css"

//Content
//ES
import ButtonsES from "./Configuration/ES/Buttons.json"
import InformationES from "./Configuration/ES/Information.json"

//ES
import ButtonsEN from "./Configuration/EN/Buttons.json"
import InformationEN from "./Configuration/EN/Information.json"


class AppRouter extends React.Component {

    constructor() {
        super();

        this.state = {
            Language: "US"
        }
    }


    onSelectFlag = (countryCode) => {
        this.setState({ Language: countryCode });
    }

    render() {

        var Content = "";
        var Information = ""

        if (this.state.Language === "US") {
            Content = ButtonsEN;
            Information = InformationEN
        }
        else {
            Content = ButtonsES
            Information = InformationES
        }


        return (

            <App>
                <ReactFlagsSelect
                    defaultCountry="US"
                    countries={["US", "CO"]}
                    customLabels={{ "US": "English", "CO": "Español" }}
                    onSelect={this.onSelectFlag}
                    className="Idioms"
                />
                <Switch>
                    <Route
                        exact path="/"
                        render={() =>
                            <Home
                                Content={Content}
                                Information={Information}
                            />} />
                    <Route exact path="/Blog" component={Blog} />
                    <Route exact path="/Post" component={Post} />
                    <Route exact component={Page404} />
                </Switch>
            </App>

        )
    }
}


export default AppRouter;