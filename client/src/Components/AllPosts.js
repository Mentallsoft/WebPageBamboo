//Dependencies
import React from 'react'

//Styles
import "./CSS/AllPosts.css"

//Components
import CardPost from "./ToAllPost/CardPost"

import "react-pagination-library/build/css/index.css"


class AllPost extends React.Component {

    render() {

        const { Posts } = this.props;

        return (
            <div className="o-AllPost">

                {Posts.map(
                    (Post, Key) =>

                        <CardPost
                            Image={Post.Image}
                            Video={Post.Video}
                            Author={Post.Author}
                            Photo={Post.Photo}
                            Title={Post.Title}
                            Category={Post.Category}
                            Date={Post.Date}
                            Resumen={Post.Resumen}
                            Content={Post.Content}
                        />
                )}

            </div>
        )

    }
}
export default AllPost