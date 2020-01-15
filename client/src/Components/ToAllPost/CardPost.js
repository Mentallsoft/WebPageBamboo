import React from 'react'
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html'

import "./CSS/CardPost.css"

class CardPost extends React.Component {

    render() {

        const {Image, Video, Author, Photo, Category, Date, Title, Content, Resumen, Post} = this.props;

        return (
            <div className="o-CardPost">
                <Link style={{textDecoration:"none"}}
                    to={{
                        pathname: '/Post',
                        state: {
                            Image: Image,
                            Video: Video,
                            Author: Author,
                            Photo: Photo,
                            Category: Category,
                            Date: Date,
                            Title: Title,
                            Content: Content,
                            Post: Post
                        }
                    }}
                >
                    <div className="o-FullContainerCardPost">
                        
                        <img className="o-CardImage" src={Image} alt="" />
                        
                        <div className="o-DescCardPost">
                            <h2>{Title}</h2>
                            <div className="o-ClasificationCardPost">
                                <h6 id="Category">{Category} / </h6>
                                <h6> / {Date} </h6>
                            </div>
                            <div className="o-ParagraphCardPost">
                                {renderHTML(Post.excerpt.rendered)}
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        )
    }

}

export default CardPost;