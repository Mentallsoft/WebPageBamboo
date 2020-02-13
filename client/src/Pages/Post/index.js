//Dependencies
import React from "react"
import renderHTML from 'react-render-html'
//import { Redirect } from 'react-router';

//Styles
import "./CSS/index.css"

//Components
import Copyrigth from "../../Components/Copyrigth"
import Contact from "../../Components/Contact"
import Header from "../../Components/Header"

//Images
import DefaultImage from "../../Images/PNG/DefaultImage.png"

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: true,
            Po: []
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    ExisteBlog = (Po, InfButton, Information) =>{
        return(
            Po.map(
                (Posts) =>

                    InfButton.map((InfButton) =>
                        <div className="o-PostIndex">

                            <Header
                                Visibility2={"hidden"}
                                Width2={"0"}
                                Label2={InfButton.ContactUs}
                                Ident={"#Contact"}
                            />

                            <div className="o-PostContainerImage">

                                <img className="o-ImagePost"
                                    src={Posts.featured_media === 0 ? DefaultImage : Posts._embedded['wp:featuredmedia']['0'].source_url}
                                    alt="" />

                                <div id="TitleContent">
                                    <h1 id="Titulo">{Posts.title.rendered}</h1>
                                    <h6 id="Autor" >{Posts._embedded.author[0].name}</h6>
                                </div>

                            </div>
                            <div id="BodyPost">
                                {renderHTML(Posts.content.rendered)}
                            </div>

                            {Information.map(
                                (Inf) =>

                                    Inf.Contact.map(
                                        (InfContac) =>

                                            InfContac.Localization.map(
                                                (InfLocalization) =>

                                                    <section id="Contact">
                                                        <Contact
                                                            Button={InfButton.Submit}
                                                            Title={InfContac.Title}
                                                            Paragraph={InfContac.Paragraph}
                                                            NameLabel={InfContac.NameLabel}
                                                            EmailLabel={InfContac.EmailLabel}
                                                            PhoneLabel={InfContac.PhoneLabel}
                                                            MessageLabel={InfContac.MessageLabel}
                                                        />
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
                                                    </section>
                                            )
                                    )
                            )
                            }
                        </div>
                    )

            )
        )
    }

    render() {

        const { Posts, InfButton, Information } = this.props;
        const Po = Posts.filter(user => user.id == this.props.match.params.id);

            return (
                this.ExisteBlog(Po, InfButton, Information)
            )  
    }
}

export default Post;