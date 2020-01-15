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
import Post from "../Post"

class Blog extends React.Component {


    constructor(props) {
        super(props);

    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { InfButton, Information, Images, Posts, Alert, LoadingPost } = this.props;


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
                                />

                                {
                                    Posts.length ?
                                        LoadingPost ?
                                            <div className="Loading">
                                                <img id="o-LoadingImg" src={LoadingPost} alt="Loading" />
                                            </div> :
                                            <AllPosts Posts={Posts} /> :
                                        <h2 style={{ color: "gray" }}>{Alert}</h2>
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