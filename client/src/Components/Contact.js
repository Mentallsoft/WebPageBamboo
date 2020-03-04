//Dependencies
import React from 'react'
import { Button as BstButton, Form, Input } from 'reactstrap'
import axios from 'axios'

//Popup
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

//Style
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
    }

    //Funcion asincrona para conectarse con el servidos a traves de las metodos post/get/put/put
    async handleSubmit(e) {
        e.preventDefault();

        const { Name, Email, Phone, Message, Subject } = this.state;

        //Muestra PopUp
        this.setState({
            visible: true
        })

        await axios.post('/Api/Contact', {
            Name, Email, Phone, Message, Subject
        })

    }

    //Oculta el popup
    hide() {
        this.setState({ visible: false });
        window.location.reload(false);
    }

    render() {

        const {
            Button,
            Title,
            Paragraph,
            NameLabel,
            EmailLabel,
            PhoneLabel,
            MessageLabel,
            DataPolitic1,
            DataPolitic2,
            SendSuccess,
            MessageSuccess,
            PDFPolitycs
        } = this.props;

        return (
            <div className="o-FullContainerContact" >
                <h1 style={{ color: "var(--Black)" }}>{Title}</h1>
                <p style={{ color: "var(--GrayOscure)", margin: "0 0 3rem" }}>{Paragraph}</p>
                <Form className="o-FormContainer" onSubmit={this.handleSubmit}>
                    <div className="o-ContactInformation">
                        <Input
                            className="o-ContainerText"
                            required
                            type="text"
                            name="Name"
                            onChange={this.handleChange}
                            placeholder={NameLabel}
                        />
                        <Input
                            className="o-ContainerText"
                            required
                            type="email"
                            name="Email"
                            onChange={this.handleChange}
                            placeholder={EmailLabel}
                        />
                        <Input
                            className="o-ContainerText"
                            required
                            type="number"
                            name="Phone"
                            onChange={this.handleChange}
                            placeholder={PhoneLabel}
                        />
                    </div>
                    <Input
                        className="o-ContainerMessage"
                        required
                        type="textarea"
                        name="Message"
                        onChange={this.handleChange}
                        placeholder={MessageLabel}
                    />
                    <div className="o-TermAndConditions">
                        <input type="checkbox" required />
                        <label>{DataPolitic1}</label><a href={PDFPolitycs} target="_blank">{DataPolitic2}</a>
                    </div>


                    <BstButton className="o-ButtonSend">{Button}</BstButton>

                </Form>

                {/*Pop up que enseña cuando el mensaje ha sido enviado satisfactoriamente*/}

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                    customStyles={{
                        width: "60%",
                        height: "40%",
                        backgroundColor: "green",
                        color: "white",
                        textalign: "center",
                        textAlign: "center", textJustify: "center"
                    }}
                >
                    <h1>{SendSuccess}</h1>
                    <h3>{MessageSuccess}</h3>

                </Rodal>

            </div>//Final del div global
        )
    }
}

export default Contact;