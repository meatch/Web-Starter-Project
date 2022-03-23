require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');
const nodemailer = require('nodemailer');
const striptags = require('striptags');

const MailController = () => {

    console.log('process.env.PORT', process.env.PORT);

    const transport = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS
        }
    });

    transport.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail Server is ready to take our emails.');
        }
    });

    /* Template Email ---------------------------*/
    const sendEmail = ({to=`${process.env.MAIL_TO_DEFAULT}`, replyTo, message, subject}, callback) => {
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: to,
            replyTo: replyTo,
            subject: `${process.env.MAIL_COMPANY} ${subject}`,
            text: striptags(message),
            html: message,
        };

        transport.sendMail(mailOptions, callback);
    }

    /* Contact ---------------------------*/
    const contact = reqResp(({reqBody, handleResponse}) => {

        const message = `
            <p>Hello Mitch,</p>

            <p>${reqBody.name} has emailed you from your website contact form.</p>

            <p><b>Message:</b></p>

            <p>${reqBody.message}</p>

            <p>
                Cheers, <br />
                Your Web Team
            </p>
        `;

        sendEmail({ subject: "Contact Form", message: message, replyTo: reqBody.email}, (error, info) => {
            if (error) {
                return handleResponse(error, 'Contact Failed.', false);
            }
            handleResponse(info, 'Contact Success.');
        });
    });

    /* Purchase ---------------------------*/
    const purchaseThanks = reqResp(({reqBody, handleResponse}) => {

        const message = `
            <p>Hello ${reqBody.userProfile.given_name},</p>

            <p>Thank you for your order.</p>

            <p>We will process and ship your order with the next 3 business days.</p>

            <p>
                Cheers, <br />
                ${process.env.MAIL_COMPANY}
            </p>
        `;

        const emailTo = `${reqBody.userProfile.name} <${reqBody.userProfile.email}>`;

        sendEmail({
            subject: "Thank You For Your Order",
            to: emailTo,
            message: message,
            replyTo: process.env.MAIL_TO_DEFAULT,
        }, (error, info) => {
            if (error) {
                return handleResponse(error, 'Order Thank You Failed.', false);
            }
            handleResponse(info, 'Order Thank You Success.');
        });
    });

    return {
        contact: contact,
        purchaseThanks: purchaseThanks,
    }
}

module.exports = MailController();