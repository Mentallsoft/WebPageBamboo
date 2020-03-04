const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/Api/Contact', (req, res) => {

    /*Hasta el momento, este formulario solo ha funcionado con un correo de Gmail, por lo que es necesario crear un correo en esta
    plataforma dedicada al envio de información*/

    const Sender = "bambooanalyticssas@gmail.com";
    const PwdSender = "Bamboo2020*";
    const receiver = "efrain.pizarro@bambooanalytics.com.co"

    const htmlEmail = 
    `<h3>Información de contacto</h3>
    <ul>
        <li>Nombre: ${req.body.Name}</li>
        <li>Correo: ${req.body.Email}</li>
        <li>Teléfono: ${req.body.Phone}</li>
        <li style="color: green">Política de datos aceptada el: ${Date(Date.now())}
    </ul>  
    <h3>Mensaje:</h3>
    <p>${req.body.Message}</p>`


    /////////////////////////////
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Sender,
            pass: PwdSender
        }
    });

    const mailOptions = {
        from: Sender, // sender address
        to: receiver, // list of receivers
        subject: req.body.Subject, // Subject line
        html: htmlEmail// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log("Mensaje enviado");
    });
    //////////////////////////

}) //final del post


exports.app = functions.https.onRequest(app);