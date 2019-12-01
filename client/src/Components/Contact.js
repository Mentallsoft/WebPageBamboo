import React from 'react'
import { Button as BstButton, Form, Input } from 'reactstrap';
import axios from 'axios'

import "./CSS/Contact.css"

class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
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

    async handleSubmit(e) {
        e.preventDefault();

        const { Name, Email, Phone, Message, Subject } = this.state;

        const form = await axios.post('/Api/Contact', {
            Name, Email, Phone, Message, Subject
        })
    }

    render() {
        return (
            <div className="o-FullContainerContact" >
                <h1 style={{ color: "black" }}>Contáctanos</h1>
                <Form className="o-FormContainer" onSubmit={this.handleSubmit}>
                    <div className="o-ContactInformation">
                        <Input
                            className="o-ContainerText"
                            required
                            type="text"
                            name="Name"
                            onChange={this.handleChange}
                            placeholder="Tu nombre aquí"
                        />
                        <Input
                            className="o-ContainerText"
                            required
                            type="email"
                            name="Email"
                            onChange={this.handleChange}
                            placeholder="Tu correo aquí"
                        />
                        <Input
                            className="o-ContainerText"
                            required
                            type="number"
                            name="Phone"
                            onChange={this.handleChange}
                            placeholder="Tu teléfono aquí"
                        />
                    </div>
                    <Input
                        className="o-ContainerMessage"
                        required
                        type="textarea"
                        name="Message"
                        onChange={this.handleChange}
                        placeholder="Tu mensaje aquí"
                    />
                    <BstButton className="o-ButtonSend">Enviar</BstButton>
                </Form>

            </div>
        )
    }
}

export default Contact;