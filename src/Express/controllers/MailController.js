require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');
const nodemailer = require('nodemailer');
const striptags = require('striptags');
const path = require('path');
const ejs = require('ejs');

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
    const sendEmail = ({to=`${process.env.MAIL_TO_DEFAULT}`, view, replyTo, message, subject}, callback) => {
        ejs.renderFile(path.join(__dirname, `../views${view.file}`), view.props)
            .then((emailTemplate) => {
                const mailOptions = {
                    from: process.env.MAIL_FROM,
                    to: to,
                    replyTo: replyTo,
                    subject: `${process.env.MAIL_COMPANY} ${subject}`,
                    text: striptags(emailTemplate),
                    html: emailTemplate,
                };
                transport.sendMail(mailOptions, callback);
            })
            .catch((error) => {
                callback({
                    error: error,
                    message: 'Building View Failed.'
                })
            });

    }

    /* Contact ---------------------------*/
    const contact = reqResp(({reqBody, handleResponse}) => {

        const config = {
            subject: "Contact Form",
            view: {
                file: '/contact.ejs',
                props: {
                    name: reqBody.name,
                    message: reqBody.message,
                },
            },
            replyTo: reqBody.email
        }

        sendEmail(config, (error, info) => {
            if (error) {
                return handleResponse(error, 'Contact Failed.', false);
            }
            handleResponse(info, 'Contact Success.');
        });
    });

    /* Purchase ---------------------------*/
    const purchaseThanks = reqResp(({reqBody, handleResponse}) => {

        const emailTo = `${reqBody.userProfile.name} <${reqBody.userProfile.email}>`;

        const config = {
            subject: "Thank You For Your Order",
            to: emailTo,
            view: {
                file: '/purchaseThanks.ejs',
                props: {
                    firstName: reqBody.userProfile.given_name,
                    companyName: process.env.MAIL_COMPANY,
                },
            },
            replyTo: process.env.MAIL_TO_DEFAULT,
        }

        sendEmail(config, (error, info) => {
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