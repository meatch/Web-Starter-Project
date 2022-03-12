require('../common/mongoose.conn.js');
const Product = require('../models/Product.js');
const reqResp = require('../common/reqResp.js');

const ProductController = () => {

    /* User: All ---------------------------*/
    const all = reqResp(({handleResponse, handleError}) => {
        Product.find({})
            .exec((err, dbProducts) => {
                if (err) handleError(err);
                handleResponse(dbProducts, 'All products retrieved.');
            });
    });

    /* User: byID ---------------------------*/
    const byID = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.id) {
            Product.findOne({ "_id": reqParams.id },(err, dbProduct) => {
                if (err) handleError(err);
                handleResponse(dbProduct, 'Product retrieved.');
            });
        } else {
            handleResponse({_id: expReq.params.id, body: reqUser}, 'Unable to locate product by productID.', false);
        }
    });

    return {
        all: all,
        byID: byID,
    }
}

module.exports = ProductController();