//Dependences
import React from "react"

//Components
import Header from "../../Components/Header"
import Welcome from "../../Components/Welcome"
import WeAre from "../../Components/WeAre"
import Pilares from "../../Components/Pilares"
import Services from "../../Components/Services"
import Clients from "../../Components/Clients"
import OurTeam from "../../Components/OurTeam"
import Contact from "../../Components/Contact"

//Styles
import "./CSS/index.css"

class Home extends React.Component{

    render(){

        return(
            <div className="o-index">
                <Header/>
                <Welcome/>
                <WeAre/>
                <Pilares/>
                <Services/>
                <Clients/>
                <OurTeam/>
                <Contact/>
            </div>
        )
    }
}

export default Home;