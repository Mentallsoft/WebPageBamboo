//Dependencies
import React from "react"

//Styles
import "./CSS/index.css"

//Components
import Welcome from "../../Components/Welcome"
import Copyrigth from "../../Components/Copyrigth"
import Header from "../../Components/Header"
import AllPosts from "../../Components/AllPosts"
import Contact from "../../Components/Contact"

class Blog extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { InfButton, Information, Images, Posts, LoadingPost, GifUp} = this.props;


        return (
            InfButton.map(
                (InfButton, Key) =>

                    Images.map(
                        (Images, Key) =>
                            <div className="o-indexBlog">
                                <Header
                                    Label1={InfButton.Home}
                                    URL1={"/"}
                                    Label2={InfButton.ContactUs}
                                    Ident={"#Contact"}
                                />
                                <Welcome
                                    ClssNm={"o-LogoTipo3"}
                                    BgImage={"black"}
                                    Bumb={Images.Bumb}
                                    LogoT1={Images.LogoType}
                                    LogoT2={Images.LogoTypeBlog}
                                    GifUp={GifUp}
                                />

                                {
                                        LoadingPost ?
                                            <div className="Loading">
                                                <img id="o-LoadingImg" src={LoadingPost} alt="Loading" />
                                            </div> :
                                            <AllPosts 
                                            Posts={Posts}
                                            Information={Information}
                                            InfButton={InfButton}
                                            /> 
                                }

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

                                <Copyrigth />
                            </div>
                    )
            )
        )
    }
}

export default Blog;