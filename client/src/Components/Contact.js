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
            TitleDirection, 
            Direction, 
            TitleEmail, 
            Email, 
            TitlePhone, 
            Phone, 
            TitleAtentionHour, 
            Day, 
            Hour
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
                    <BstButton className="o-ButtonSend">{Button}</BstButton>

                </Form>

                {/*Pop up que enseña cuando el mensaje ha sido enviado satisfactoriamente*/}

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                    customStyles={{
                        width: "75vw",
                        height: "50vh",
                        backgroundColor: "white",
                        color: "green",
                        textalign: "center",
                        textAlign: "center", textJustify: "center"
                    }}
                >
                    <h1>¡Tu mensaje ha sido enviado con éxito!</h1>
                    <h3>Prontamente nos pondremos en contácto contigo.</h3>

                </Rodal>

                <div className="o-Localization">
                    <div className="o-InfoContact">

                        <div className="o-Group1">
                            <div className="o-Info">
                <h3>{TitleDirection}</h3>
                                <h5>{Direction}</h5>
                            </div>
                            <div className="o-Info">
                <h3>{TitleEmail}</h3>
                <h5>{Email}</h5>
                            </div>
                        </div>
                        <div className="o-Group1">
                            <div className="o-Info">
                <h3>{TitlePhone}</h3>
                <h5>{Phone}</h5>
                            </div >
                            <div className="o-Info">
                <h3>{TitleAtentionHour}</h3>
                <h5 id="h5">{Day}</h5>
                <h5 id="h52">{Hour}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="o-Map">

                        PARA UTILIZAR EL MAPA HAY QUE UTILIZAR TARJETA DE CREDITO

                    </div>
                </div>

            </div>//Final del div global
        )
    }
}

export default Contact;