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
import Patio_de_pruebas from "./Pages/Patio_de_pruebas"

//Styles
import 'react-flags-select/css/react-flags-select.css';
import "./AppRouter.css"

//Content
    //ES
    import ButtonsES from "./Configuration/ES/Buttons.json"
    import InformationES from "./Configuration/ES/Information.json"
    import ImageES from "./Configuration/ES/Images.json"

    //EN
    import ButtonsEN from "./Configuration/EN/Buttons.json"
    import InformationEN from "./Configuration/EN/Information.json"
    import ImageEN from "./Configuration/EN/Images.json"

//GIF
import Loading from "../src/Images/GIF/Loading.gif"
import Up from "../src/Images/GIF/UP.gif"

//FILES
//ES
import PDFPolitycsES from "./Files/ES/PDF/POLITICA_DATOS.pdf"

//EN
import PDFPolitycsEN from "./Files/EN/PDF/POLITICA_DATOS.pdf"

class AppRouter extends React.Component {

    constructor() {
        super();
        this.state = {
            Language: "",
            wpPost: [],
            Alert: "Todavía no hay publicaciones",
            LoadingPost: Loading
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
    }

    GetPosts = () => {

        const wpURL = 'https://www.bambooanalytics.com.co';

        axios.get(`${wpURL}/wp-json/wp/v2/posts?_embed`)
            .then(res => {
                this.setState({ wpPost: res.data, LoadingPost: "" })
            })
            .catch(error => this.setState({ LoadingPost: "" }))

    }

    componentWillMount() {
        this.getGeoInfo();
        this.GetPosts();
    }

    ChangeLanguage = () => {
        if (this.state.Language === "ES") {
            this.setState({ Language: "EN" })
        } else { this.setState({ Language: "ES" }) }
    }

    render() {

        var InfButton = "";
        var Information = "";
        var Images = "";
        var Posts = "";
        var PDFPolitycs = "";

        if (this.state.Language === "ES") {
            InfButton = ButtonsES
            Information = InformationES
            Images = ImageES
            Posts = this.state.wpPost
            PDFPolitycs = PDFPolitycsES
        }
        else {
            InfButton = ButtonsEN;
            Information = InformationEN
            Images = ImageEN
            Posts = this.state.wpPost
            PDFPolitycs = PDFPolitycsEN
        }

        return (
            <App>
                {Images.map(
                    (Imgs, key) =>
                        <button id="LanguageSelector" onClick={this.ChangeLanguage} title={Imgs.Text}>
                            <img src={Imgs.Language} alt="" />
                        </button>
                )}
                <Switch>
                    <Route
                        exact path="/"
                        render={() =>
                            <Home
                                InfButton={InfButton}
                                Information={Information}
                                Images={Images}
                                GifUp={Up}
                                PDFPolitycs = {PDFPolitycs}
                            />} />
                    <Route exact path="/Blog" render={() =>
                        <Blog
                            Information={Information}
                            InfButton={InfButton}
                            Images={Images}
                            Posts={Posts}
                            Language={this.state.Language}
                            Alert={this.state.Alert}
                            LoadingPost={this.state.LoadingPost}
                            GifUp={Up}
                            PDFPolitycs = {PDFPolitycs}
                        />} />
                    <Route exact path="/Post/:id" render={({ match }) =>
                        <Post
                            match={match}
                            Posts={Posts}
                            Information={Information}
                            InfButton={InfButton}
                            PDFPolitycs = {PDFPolitycs}
                        />} />
                    <Route
                        exact path="/Patio_de_pruebas"
                        render={() =>
                            <Patio_de_pruebas />} />
                    <Route exact component={Page404} />
                </Switch>
            </App>
        )
    }
}

export default AppRouter;