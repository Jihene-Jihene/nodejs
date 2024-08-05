
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: 'your-email@example.com', 
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from Node.js using Nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Email sent: ', info.response);
});
