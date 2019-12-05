//Dependencies
import React from 'react'

//Styles
import "./CSS/AllPosts.css"

//Information
import PostsES from "../Configuration/Post.json"
import PostsEN from "../Configuration/PostIng.json"

//Components
import CardPost from "./ToAllPost/CardPost"

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"


class AllPost extends React.Component {

    render() {

        var a = "";

        if (this.props.Idiom === "ES") {
            a = PostsES;
        } else{a = PostsEN;}

        return (
            <div className="o-AllPost">

                {a.map(
                    (Post, Key) =>

                        <CardPost
                            image={Post.image}
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