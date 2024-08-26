const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
    const { nombre, email, empresa, estudio, mensaje } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'juanalejandrotriciclo@gmail.com', // Reemplaza con tu correo
            pass: 'triciclo2023' // Reemplaza con tu contraseña
        }
    });

    let mailOptions = {
        from: email,
        to: 'juanalejandrotriciclo@gmail.com', // Reemplaza con el correo de destino
        subject: 'Nuevo formulario de contacto',
        text: `
            Nombre: ${nombre}
            Email: ${email}
            Empresa: ${empresa}
            Estudio: ${estudio}
            Mensaje: ${mensaje}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo enviado');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
