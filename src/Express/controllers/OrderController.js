
require('../common/mongoose.conn.js');
const Order = require('../models/Order.js');
const reqResp = require('../common/reqResp.js');

const OrderController = () => {

    /* Order: Create ---------------------------*/
    const create = reqResp(({reqBody, handleResponse, handleError}) => {
        const order = new Order();

        order.product = reqBody.productID;
        order.user = reqBody.userID;
        order.qty = reqBody.qty;

        order.save((err, dbOrder) => {
            if (err) handleError(err);
            handleResponse(dbOrder, 'Added Order Item.');
        });
    });

    /* Order: Remove ---------------------------*/
    const purchase = reqResp(({reqParams, handleResponse, handleError}) => {
        Order.find({ user: reqParams.userID, purchased: false }, (err, dbOrders) => {
            if (err) handleError(err);
            if (dbOrders) {

                // TODO: This should probably be Promise.all()
                dbOrders.forEach((dbOrder) => {
                    dbOrder.purchased = true;
                    dbOrder.save();
                });

                // After all promises complete, then its truly a success.
                handleResponse(dbOrders, 'Purchase Order Items Success.');
            } else {
                handleResponse(reqParams, 'Purchase Order Items Failed: No Order Items found.', false);
            }
        });
    });

    /* Order: Retreive Cart Items ---------------------------*/
    const getCart = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.userID) {
            Order.find({ "user": reqParams.userID, purchased: false })
                .populate('user')
                .populate('product')
                .exec((err, dbOrders) => {
                    if (err) handleError(err);
                    handleResponse(dbOrders, 'Orders In Cart Retrieved.');
                });
        } else {
            handleResponse({ userID: reqParams.userID }, 'Get Orders In Cart Failed: User ID is required.', false);
        }
    });

    return {
        create: create,
        getCart: getCart,
        purchase: purchase,
    }
}

module.exports = OrderController();