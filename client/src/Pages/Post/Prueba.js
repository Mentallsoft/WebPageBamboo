import React from 'react'
import ReactRenderHTML from 'react-render-html'
import axios from 'axios'

class Prueba extends React.Component {

    PostsComments = () => {
        console.log("Comentando")
        const wpURL = 'https://www.bambooanalytics.com.co';
        
        axios.post(`${wpURL}/wp-json/wp/v2/posts`)
            .then(res => {
                console.warn(res.data);
                console.log("Terminadoo")
               
            })
            .catch(error => console.log(error))

    }

    render() {
        const { Comments } = this.props;
        return (
            Comments ?
            Comments.map(
                (Comments, key) =>
                    <div key={key}>
                        <h6 style={{ color: "black" }}>{Comments.author_name}</h6>
                        {ReactRenderHTML(Comments.content.rendered)}
                        <button onClick={this.PostsComments} >Comentar</button>
                    </div>
            ): 
            <button onClick={this.PostsComments} >Comentar</button>

        )
    }
}

export default Prueba;