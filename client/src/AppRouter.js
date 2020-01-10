//Dependecies
import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios'

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
import ImageES from "./Configuration/ES/Images.json"
import PostsES from "./Configuration/ES/Post.json"

//EN
import ButtonsEN from "./Configuration/EN/Buttons.json"
import InformationEN from "./Configuration/EN/Information.json"
import ImageEN from "./Configuration/EN/Images.json"
import PostsEN from "./Configuration/EN/Post.json"

class AppRouter extends React.Component {

    constructor() {
        super();
        this.state = {
            Language: ""
        }
    }

    //Get information about country where is launch the app
    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            let Langua = data.languages.substring(0, 2)
            this.setState({
                Language: Langua.toUpperCase()
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    componentWillMount() {
        this.getGeoInfo();
    }

    render() {

        var InfButton = "";
        var Information = "";
        var Images = "";
        var Posts = "";

        if (this.state.Language === "ES") {
            InfButton = ButtonsES
            Information = InformationES
            Images = ImageES
            Posts = PostsES
        }
        else {
            InfButton = ButtonsEN;
            Information = InformationEN
            Images = ImageEN
            Posts = PostsEN
        }

        return (
            <App>
                <Switch>
                    <Route
                        exact path="/"
                        render={() =>
                            <Home
                                InfButton={InfButton}
                                Information={Information}
                                Images={Images}
                            />} />
                    <Route exact path="/Blog" render={() =>
                        <Blog
                            Information={Information}
                            InfButton={InfButton}
                            Images={Images}
                            Posts={Posts}
                        />} />
                    <Route exact path="/Post" component={Post} />
                    <Route exact component={Page404} />
                </Switch>
            </App>
        )
    }
}

export default AppRouter;