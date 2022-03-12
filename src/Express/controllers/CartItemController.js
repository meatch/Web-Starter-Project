require('../common/mongoose.conn.js');
const CartItem = require('../models/CartItem.js');
const reqResp = require('../common/reqResp.js');

const CartItemController = () => {

    /* CartItem: Create ---------------------------*/
    const create = reqResp(({reqBody, handleResponse, handleError}) => {
        const cartItem = new CartItem();

        cartItem.product = reqBody.productID;
        cartItem.user = reqBody.userID;
        cartItem.qty = reqBody.qty;

        cartItem.save((err, dbCartItem) => {
            if (err) handleError(err);
            handleResponse(dbCartItem, 'Added Cart Item.');
        });
    });

    /* CartItem: Remove ---------------------------*/
    const remove = reqResp(({reqBody, handleResponse, handleError}) => {
        CartItem.findOne({ "_id": reqBody.cartItemID }, (err, dbCartItem) => {
            if (err) handleError(err);
            if (dbCartItem) {
                dbCartItem.remove();
                handleResponse(dbCartItem, 'Removed Cart Item.');
            } else {
                handleResponse(reqBody, 'Remove Cart Items Failed: No Cart Item found.', false);
            }
        });
    });

    /* CartItem: Retreive Cart Items ---------------------------*/
    const byUserId = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.userID) {
            CartItem.find({ "user": reqParams.userID })
                .populate('user')
                .populate('product')
                .exec((err, dbCartItems) => {
                    if (err) handleError(err);
                    handleResponse(dbCartItems, 'Cart Items Retrieved.');
                });
        } else {
            handleResponse({ userID: reqParams.userID }, 'Get Cart Items Failed: User ID is required to retrieve Cart Items.', false);
        }
    });

    return {
        create: create,
        byUserId: byUserId,
        remove: remove,
    }
}

module.exports = CartItemController();