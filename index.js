require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const html = `
            <h4>Contact request from: ${req.body.name}</h4>
            <br/>
            <h4>Reply to: ${req.body.email}</h4>
            <br/>
            <h4>Message:</h4>
            <p>${req.body.message}</p>
        `

        //tranporter to connect to domain
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'jake.bazin@googlemail.com',
            subject: 'Contact request',
            text: req.body.message,
            html: html
        }

        transporter.sendMail(mailOptions)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log(err)
            res.status(401).json({
                success: false
            });
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})