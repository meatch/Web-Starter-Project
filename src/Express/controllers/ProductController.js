require('../common/mongoose.conn.js');
const Product = require('../models/Product.js');
const ProductType = require('../models/ProductType.js');
const reqResp = require('../common/reqResp.js');

const ProductController = () => {

    /* User: All ---------------------------*/
    const all = reqResp(({handleResponse, handleError}) => {
        Product.find({},(err, dbProducts) => {
            if (err) handleError(err);

            // const groomedProducts = dbProducts.map(async(product) => {
            //     const groomedProduct = await addProductType(product);
            //     return groomedProduct;
            // });

            handleResponse(dbProducts, 'All products retrieved.');
        });
    });

    /* User: byID ---------------------------*/
    const byID = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.id) {
            // Make sure account exists
            Product.findOne({ "_id": reqParams.id },(err, dbProducts) => {
                if (err) handleError(err);
                handleResponse(dbProducts, 'Product retrieved.');
            });
        } else {
            handleResponse({_id: expReq.params.id, body: reqUser}, 'Unable to locate product by productID.', false);
        }
    });

    const addProductType = async (product) => {

        let groomedProduct = product;

        await ProductType.find({ prodTypeID: product.prodTypeID },(err, productType) => {
            groomedProduct.productType = productType;
        });

        return groomedProduct;
    }

    return {
        all: all,
        byID: byID,
    }
}

module.exports = ProductController();