import React from 'react'
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html'
import Moment from 'react-moment'

import "./CSS/CardPost.css"

class CardPost extends React.Component {

    render() {

        const {FeatImage, Title, Author, Content, Resumen, Category, Date, InfButton, Information} = this.props;


        
        return (
            <div className="o-CardPost">
                <Link style={{textDecoration:"none"}}
                    to={{
                        pathname: '/Post',
                        state: {
                            FeatImage: FeatImage,
                            Title: Title,
                            Author: Author,
                            Content: Content,
                            Resumen: Resumen,

                            Information:Information,
                            InfButton: InfButton
                        }
                    }}
                >
                    <div className="o-FullContainerCardPost">
                        
                        <img className="o-CardImage" src={FeatImage} alt="" />
                        
                        <div className="o-DescCardPost">
                            <h2>{Title}</h2>
                            <div className="o-ClasificationCardPost">
                                <h6 id="Category">{Category} / </h6>
                                <h6> / <Moment fromNow>{Date}</Moment> </h6>
                            </div>
                            <div className="o-ParagraphCardPost">
                                {renderHTML(Resumen)}<h3>...</h3>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        )
    }

}

export default CardPost;