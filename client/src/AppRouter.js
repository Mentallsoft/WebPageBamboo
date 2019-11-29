import React from "react";
import {Route, Switch} from "react-router-dom";

//Components
import App from "./Components/App";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Page404 from "./Pages/Page404"

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact component={Page404}/>
        </Switch>
    </App>


export default AppRoutes;