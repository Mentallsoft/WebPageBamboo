//Dependencies
import React from "react"

//Styles
import "./CSS/index.css"

//Components
import Welcome from "../../Components/Welcome"
import Copyrigth from "../../Components/Copyrigth"
import Header from "../../Components/Header"
import AllPosts from "../../Components/AllPosts"

class Blog extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { InfButton, Images, Posts } = this.props;
        return (

            InfButton.map(
                (InfButton, Key) =>

                    Images.map(
                        (Images, Key) =>

                            <div className="o-indexBlog">
                                <Header
                                    Label1={InfButton.Home}
                                    URL1={"/"}
                                    Visibility={"hidden"}
                                    Width={0}
                                />
                                <Welcome
                                    ClssNm={"o-LogoTipo3"}
                                    BgImage={"black"}
                                    Bumb={Images.Bumb}
                                    LogoT1={Images.LogoType}
                                    LogoT2={Images.LogoTypeBlog}
                                />

                                <AllPosts Posts={Posts} />
                                <Copyrigth />
                            </div>
                    )
            )
        )
    }
}

export default Blog;