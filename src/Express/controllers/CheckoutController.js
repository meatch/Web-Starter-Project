
const reqResp = require('../common/reqResp.js');

const CheckoutController = () => {

    const payment = reqResp(({handleResponse}) => {
        handleResponse({ payment: 'posted'}, 'Posted payment to session');
    });

    const review = reqResp(({handleResponse}) => {
        handleResponse({ review: 'posted'}, 'Posted review to session');
    });

    return {
        payment: payment,
        review: review,
    }
}

module.exports = CheckoutController();