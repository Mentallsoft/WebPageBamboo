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



class Home extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }



    render() {

        //Content of page
        const { InfButton, Information, Images, GifUp, PDFPolitycs} = this.props;

        return (
            <div className="o-indexHome">

                {InfButton.map(
                    (Cont, key) =>
                        <Header
                            Label1={Cont.Blog}
                            URL1={"/Blog"}
                            Label2={Cont.ContactUs}
                            Ident={"#Contact"}
                        />
                )}

                {Images.map(
                    (Img, Key) =>
                        <Welcome //Pendiente por vincular a los archivos Json
                            Slogan={Img.Slogan}
                            ClssNm={"o-LogoTipo"}
                            LogoT1={Img.LogoType}
                            GifUp={GifUp}
                        />
                )}


                {Information.map(
                    (Inf, Key) =>
                        <div style={{ padding: "0", margin: "0" }}>

                            {Inf.WeAre.map(
                                (In, k2) =>
                                    <WeAre
                                        Title={In.Title}
                                        Paragraph={In.Paragraph}
                                    />
                            )}

                        </div>
                )}

                <Pilares Object={Information} />
                <Services Object={Information} />
                <Clients Object={Information} />

                {this.props.Information.map(
                    (Inf, Key) =>
                        <OurTeam Object={Inf} />
                )}

                {InfButton.map(
                    (Cont, key) =>


                        Information.map(
                            (Inf, Key) =>

                                Inf.Contact.map(
                                    (InfContac, Key) =>

                                        InfContac.Localization.map(
                                            (InfLocalization, Key) =>
                                                <div>
                                                    <section id="Contact">
                                                        <Contact
                                                            Button={Cont.Submit}
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
                                                            DataPolitic1={InfContac.DataPolitic1}
                                                            DataPolitic2={InfContac.DataPolitic2}
                                                            SendSuccess={InfContac.SendSuccess}
                                                            MessageSuccess={InfContac.MessageSuccess}
                                                            PDFPolitycs={PDFPolitycs}
                                                        />
                                                    </section>
                                                    <Copyrigth
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
                                                </div>
                                        )
                                )
                        )
                )}

            </div>
        )
    }

}

export default Home;