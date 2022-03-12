//Require Mongoose
const mongoose = require('mongoose');

//Define a schema for our Model
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: 'Product title is required', },
    description: { type: String, },
    image: { type: String, required: 'Product image is required', },
    price: { type: Number, required: 'Product price is required', },
    prodType: { type: String, required: 'Product prodType is required', },
});

// Remove sensitive data in responses.
ProductSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['__v']
        return ret;
    }
});

// Compile model from schema
module.exports = mongoose.model('Product', ProductSchema);