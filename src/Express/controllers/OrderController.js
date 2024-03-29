
require('../common/mongoose.conn.js');
const Order = require('../models/Order.js');
const reqResp = require('../common/reqResp.js');

const OrderController = () => {

    /* Order: Place ---------------------------*/
    const placeOrder = reqResp(({reqBody, handleResponse, handleError}) => {

        // 1. Process Faux Payment
        console.log('Process reqBody.payment', reqBody.payment);


        // 2. Record Order
        const order = new Order();

        order.userID = reqBody.userProfile.sub;
        order.userProfile = reqBody.userProfile;
        order.details = reqBody.details;

        order.save((err, dbOrder) => {
            if (err) handleError(err);
            // 3. Email receipt

            // 4.Send Response to App
            handleResponse(dbOrder, 'Added Order Item.');
        });
    });

    /* Order: Retreive Order History by User ---------------------------*/
    const getOrderHistory = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.userID) {
            Order.find({ userID: reqParams.userID })
                .sort({'created_at': -1})
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