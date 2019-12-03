//Dependencies
import React from 'react'

//Styles
import "./CSS/AllPosts.css"

//Information
import Posts from "../Configuration/Post.json"

//Components
import CardPost from "./ToAllPost/CardPost"

const Hola = () => {

    return (
        <div className="o-AllPost">

            {Posts.map(
                (Post, Key) =>

                    Post.id === "Post" ?

                        <CardPost
                            image={Post.image}
                            Author={Post.Author}
                            Title={Post.Title}                            
                            Category={Post.Category}
                            Date={Post.Date}
                            Resumen={Post.Resumen}
                            Content={Post.Content}
                        />

                        : null

            )}

        </div>
    )

}

export default Hola