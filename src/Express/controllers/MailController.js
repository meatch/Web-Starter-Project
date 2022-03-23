require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');
const nodemailer = require('nodemailer');
const striptags = require('striptags');

const MailController = () => {

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f886de0ee5bd82",
            pass: "dd42f8ca92abf7"
        }
    });

    transport.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    /* Template Email ---------------------------*/
    const sendEmail = ({to='Mitch Gohman <meatch@me.com>', replyTo, message, subject}, callback) => {
        const mailOptions = {
            from: 'Enspyred <enspyred2019@gmail.com>',
            to: to,
            replyTo: replyTo,
            subject: `CrossFit Decimate: ${subject}`,
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

            <p>Thank you for your order. We will process and ship your order with the next 3 business days.</p>

            <p>
                Cheers, <br />
                CrossFit Decimate
            </p>
        `;

        const emailTo = `${reqBody.userProfile.name} <${reqBody.userProfile.email}>`;

        sendEmail({
            subject: "Thank You For Your Order",
            to: emailTo,
            message: message,
            replyTo: "Enspyred <enspyred2019@gmail.com>",
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