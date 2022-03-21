require('../common/mongoose.conn.js');
const Product = require('../models/Product.js');
const Order = require('../models/Order.js');
const reqResp = require('../common/reqResp.js');

const PreloadStateController = () => {

    /* User: All ---------------------------*/
    const preloadState = reqResp(({handleResponse, handleError}) => {
        // If we were getting several resources we would to Promises.all().then((aggregateResp) => { return aggregateResp; })
        Product.find({})
            .exec((err, dbProducts) => {
                if (err) handleError(err);
                handleResponse({
                    products: dbProducts
                }, 'All products retrieved.');
            });
    });

    return {
        preloadState: preloadState,
    }
}

module.exports = PreloadStateController();