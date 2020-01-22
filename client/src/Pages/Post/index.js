//Dependencies
import React from "react"
import renderHTML from 'react-render-html'

//Styles
import "./CSS/index.css"

//Components
import CopyRigth from "../../Components/Copyrigth"
import Rating from "../../Components/Rating"
import Contact from "../../Components/Contact"
import Header from "../../Components/Header"
import Prueba from "./Prueba"

class Post extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { FeatImage, Author, Title, Content, Comments, Information, InfButton } = this.props.location.state;

        return (

            <div className="o-PostIndex">

                <Header
                    Visibility2={"hidden"}
                    Width2={"0"}
                    Label2={InfButton.ContactUs}
                    Ident={"#Contact"}
                />

                <div className="o-PostContainerImage">

                    <img className="o-ImagePost" src={FeatImage} alt="" />
                    <div id="TitleContent">
                        <h1 id="Titulo">{Title}</h1>
                        <h6 id="Autor" >{Author}</h6>
                    </div>

                </div>
                <div id="BodyPost">
                    {renderHTML(Content)}
                </div>


                <Rating />
                <Prueba Comments={Comments}/>

                {Information.map(
                    (Inf, Key) =>

                        Inf.Contact.map(
                            (InfContac, Key) =>

                                InfContac.Localization.map(
                                    (InfLocalization, Key) =>

                                        <section id="Contact">
                                            <Contact
                                                Button={InfButton.Submit}
                                                Title={InfContac.Title}
                                                Paragraph={InfContac.Paragraph}
                                                NameLabel={InfContac.NameLabel}
                                                EmailLabel={InfContac.EmailLabel}
                                                PhoneLabel={InfContac.PhoneLabel}
                                                MessageLabel={InfContac.MessageLabel}
                                                TitleDirection={InfLocalization.TitleDirection}
                                                Direction={InfLocalization.Direction}
                                                TitleEmail={InfLocalization.TitleEmail}
                                                Email={InfLocalization.Email}
                                                TitlePhone={InfLocalization.TitlePhone}
                                                Phone={InfLocalization.Phone}
                                                TitleAtentionHour={InfLocalization.TitleAtentionHour}
                                                Day={InfLocalization.Day}
                                                Hour={InfLocalization.Hour}
                                            />
                                        </section>
                                )
                        )
                )
                }
                
                <CopyRigth />

            </div>
        )
    }
}

export default Post;