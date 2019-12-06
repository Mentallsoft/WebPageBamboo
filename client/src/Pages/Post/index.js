//Dependencies
import React from "react"

//Styles
import "./CSS/index.css"

//Components
import CardPresentation from "../../Components/CardPresentation"
import CopyRigth from "../../Components/Copyrigth"

class Post extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { Image, Video, Author, Photo, Category, Date, Title, Content } = this.props.location.state;

        return (
            <div className="o-PostIndex">
                <img className="o-ImagePost" src={Image} alt="" />
                <h1>{Title}</h1>
                <div className="o-ClasificationCardPost" id="Post">
                    <h6 id="Category">{Category} / </h6>
                    <h6 id="Date"> / {Date} </h6>
                </div>
                {
                    Video ? <iframe src={Video} allowFullScreen /> : null
                }

                <p>{Content}</p>

                <h6>Escrito por:</h6>

                <CardPresentation Author={Author} Photo={Photo} />
                
                <CopyRigth />
            </div>
        )
    }
}

export default Post;