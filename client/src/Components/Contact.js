import React from 'react'
import { Button as BstButton, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class Contact extends React.Component {

    constructor(){
        super();

        this.state={
            Name: "",
            Phone: "",
            Email: "",
            Message: "",
            Subject: "(Web) Bamboo Analytics S.A."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.Name)
        console.log(this.state.Phone)
        console.log(this.state.Email)
        console.log(this.state.Message)
    }

    async handleSubmit(e){
        e.preventDefault();

        const {Name, Email, Phone, Message, Subject} = this.state;

        const form = await axios.post('/Api/Contact',{
            Name, Email, Phone, Message, Subject
        })
    }

    render() {
        return (
            <div style={{backgroundColor:"red"}}>
                <h1 style={{ color: "black" }}>Contáctanos</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label for="Name">Tu nombre:</label>
                        <Input
                            type="text"
                            name="Name"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="Email">Tu email:</label>
                        <Input
                            type="text"
                            name="Email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="Phone">Tu teléfono:</label>
                        <Input
                            type="text"
                            name="Phone"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="Message">Tu mensaje:</label>
                        <Input
                            type="text"
                            name="Message"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <BstButton>Submit</BstButton>
                </Form>

            </div>
        )
    }
}

export default Contact;