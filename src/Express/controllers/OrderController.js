
require('../common/mongoose.conn.js');
const Order = require('../models/Order.js');
const reqResp = require('../common/reqResp.js');

const OrderController = () => {

    /* Order: Place ---------------------------*/
    const placeOrder = reqResp(({reqBody, handleResponse, handleError}) => {
        const order = new Order();

        order.user = reqBody.userID;
        order.details = reqBody.details;

        order.save((err, dbOrder) => {
            if (err) handleError(err);
            handleResponse(dbOrder, 'Added Order Item.');
        });
    });

    /* Order: Retreive Order History by User ---------------------------*/
    const getOrderHistory = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.userID) {
            Order.find({ "user": reqParams.userID, purchased: false })
                .populate('user')
                .exec((err, dbOrders) => {
                    if (err) handleError(err);
                    handleResponse(dbOrders, 'Orders In Cart Retrieved.');
                });
        } else {
            handleResponse({ userID: reqParams.userID }, 'Get Orders In Cart Failed: User ID is required.', false);
        }
    });

    return {
        placeOrder: placeOrder,
        getOrderHistory: getOrderHistory,
    }
}

module.exports = OrderController();