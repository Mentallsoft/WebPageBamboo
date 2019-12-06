import React from 'react'
import { Link } from 'react-router-dom';

import "./CSS/CardPost.css"

class CardPost extends React.Component {

    render() {

        const {Image, Video, Author, Photo, Category, Date, Title, Content, Resumen} = this.props;

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
                            Content: Content
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
                                <p>{Resumen}</p>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        )
    }

}

export default CardPost;