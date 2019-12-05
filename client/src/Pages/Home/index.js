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

class Home extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        //Content of page
        const { Content } = this.props;

        return (
            <div className="o-indexHome">

                {this.props.Content.map(
                    (Cont, key) =>
                        <Header
                            Label1={Cont.Blog}
                            URL1={"/Blog"}
                            Label2={Cont.ContactUs}
                            Ident={"#Contact"}
                        />
                )}

                <Welcome //Pendiente por vincular a los archivos Json
                    BgImage={logo}
                    ClssNm={"o-LogoTipo"}
                    LogoT1={LogoT1} />

                {this.props.Information.map(
                    (Inf, Key) =>
                        <div>
                            {Inf.WeAre.map(
                                (In, k2) =>
                                    <WeAre
                                        Title={In.Title}
                                        Paragraph={In.Paragraph}
                                    />
                            )}
                        </div>
                )}

                <Pilares Object ={this.props.Information}/>


                <Services />
                <Clients />
                <OurTeam />
                <section id="Contact">
                    <Contact />
                </section>
                <Copyrigth />
            </div>
        )
    }
}

export default Home;