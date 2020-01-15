//Dependencies
import React from "react"
import renderHTML from 'react-render-html'

//Styles
import "./CSS/index.css"

//Components
import CardPresentation from "../../Components/CardPresentation"
import CopyRigth from "../../Components/Copyrigth"
import Rating from "../../Components/Rating"

class Post extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { Image, Video, Author, Photo, Category, Date, Title, Content, Post } = this.props.location.state;
 
        return (
            
            <div className="o-PostIndex">

<h1>{Post.title.rendered}</h1>
{renderHTML(Post.content.rendered)}

                <Rating/>
                
                <CardPresentation Author={Author} Photo={Photo} />
                
                <CopyRigth />
                    
            </div>
        )
    }
}

export default Post;