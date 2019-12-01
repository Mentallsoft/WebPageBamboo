import React from 'react'
import { Button as BstButton, Form, Input } from 'reactstrap';
import axios from 'axios'

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import "./CSS/Contact.css"

class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
            Name: "",
            Phone: "",
            Email: "",
            Message: "",
            Subject: "(Web) Bamboo Analytics S.A.",
            visible: false
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



        this.setState({
            visible: true
        })

        const form = await axios.post('/Api/Contact', {
            Name, Email, Phone, Message, Subject
        })

    }

    hide() {
        this.setState({ visible: false });
        window.location.reload(false);
    }

    render() {
        return (
            <div className="o-FullContainerContact" >
                <h1 style={{ color: "black" }}>Contáctanos</h1>
                <p style={{color: "gray", margin:"0 0 3rem"}}>Si está interesado en alguno de nuestros servicios o quiere mayor información acerca de los mismos, póngase en contacto con nosotros y estaremos encantados de atenderle a la mayor brevedad posible.</p>
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
                {/**/}

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                    customStyles={{
                        backgroundColor: "white",
                        color: "green",
                        textalign: "center",
                        padding: "3rem",textAlign: "center", textJustify: "center"
                    }}
                >
                    <h1>¡Tu mensaje ha sido enviado con éxito!</h1>
                    <h3>Prontamente nos pondremos en contácto contigo.</h3>

                </Rodal>
                {/***------------------------------------------------------------- */}






            </div>
        )
    }
}

export default Contact;