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
import Copyrigth from "../../Components/Copyrigth"

//Styles
import "./CSS/index.css"

//Images
import logo from "../../Images/PNG/WelcomeBackGround.png"
import LogoT1 from "../../Images/PNG/LogoTipo.png"

class Home extends React.Component{

    render(){

        return(
            <div className="o-indexHome">
                <Header
                Label1={"Blog"}
                URL1={"/Blog"}
                Label2={"Contáctanos"}
                Ident={"#Contact"}
                />
                <Welcome BgImage={logo} ClssNm={"o-LogoTipo"} LogoT1={LogoT1}/>
                <WeAre/>
                <Pilares/>
                <Services/>
                <Clients/>
                <OurTeam/>
                <section  id="Contact"><Contact/></section>
                <Copyrigth/>
            </div>
        )
    }
}

export default Home;