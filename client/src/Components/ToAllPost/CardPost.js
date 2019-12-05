import React from 'react'
import { Link } from 'react-router-dom';

import "./CSS/CardPost.css"

class CardPost extends React.Component {

    render() {
        return (
            <div className="o-CardPost">
                <Link style={{textDecoration:"none"}}
                    to={{
                        pathname: '/Post',
                        state: {
                            Image: this.props.image,
                            Video: this.props.Video,
                            Author: this.props.Author,
                            Photo: this.props.Photo,
                            Category: this.props.Category,
                            Date: this.props.Date,
                            Title: this.props.Title,
                            Content: this.props.Content
                        }
                    }}
                >
                    <div className="o-FullContainerCardPost">
                        
                        <img className="o-CardImage" src={this.props.image} alt="" />
                        
                        <div className="o-DescCardPost">
                            <h2>{this.props.Title}</h2>
                            <div className="o-ClasificationCardPost">
                                <h6 id="Category">{this.props.Category} / </h6>
                                <h6> / {this.props.Date} </h6>
                            </div>
                            <div className="o-ParagraphCardPost">
                                <p>{this.props.Resumen}</p>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        )
    }

}

export default CardPost;