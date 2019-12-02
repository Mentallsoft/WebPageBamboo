//Dependencies
import React from "react"

//Styles
import "./CSS/index.css"

//Components
import Welcome from "../../Components/Welcome"
import Copyrigth from "../../Components/Copyrigth"
import Header from "../../Components/Header"

//Images
import LogoT1 from "../../Images/SVG/LogoTipo.svg"
import LogoT2 from "../../Images/SVG/Ideas.svg"
import Bumb from "../../Images/SVG/Bumb.svg"

class Blog extends React.Component{
    render(){
        return(
            <div className="o-indexBlog">
                <Header 
                Label1={"Inicio"}
                URL1={"/"}
                Label2={"Contáctanos"}
                Ident={"#3"}
                />
            <Welcome 
            ClssNm={"o-LogoTipo3"}
            BgImage={"black"}  
            Bumb={Bumb} 
            LogoT1={LogoT1} 
            LogoT2={LogoT2}
            />
            <Copyrigth/>
            </div>
        )
    }
}

export default Blog;