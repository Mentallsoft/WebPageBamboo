import React from 'react'

class P extends React.Component{

    render(){
        return(
            <div style={{color: "black"}}>
               ID: {this.props.match.params.id}
            </div>
        )
    }
}

export default P;