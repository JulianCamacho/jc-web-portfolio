const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { error } = require('console');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({message: "Hello from server"})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

app.post("/api/contact", bodyParser.urlencoded({extended: false}), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact from submission - Portfolio",
        html: `<h3>Name: ${name}</h3>
               <h3>Email: ${email}</h3>
               <h3>Phone: ${phone}</h3>
               <h4>Message: ${message}</h4>`
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({code: 200, status: "Message sent"})
        }
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
});