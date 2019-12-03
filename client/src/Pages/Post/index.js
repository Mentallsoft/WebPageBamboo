//Dependencies
import React from "react"

class Home extends React.Component {
    render() {
        const {Image, Author, Category, Date, Title, Content} = this.props.location.state;
        return (
            <div style={{backgroundColor: "black"}}>
               {Author} {Category} {Date} {Title} 
            </div>
        )
    }
}

export default Home;