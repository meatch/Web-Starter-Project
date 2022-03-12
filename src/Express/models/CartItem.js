// Require Mongoose
const { Schema, model } = require('mongoose');

// Define a schema for our Model
const CartItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    qty: { type: Number, required: 'Cart Item qty is required', },
});

// Remove sensitive data in responses.
CartItemSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['__v']
        return ret;
    }
});

// Compile model from schema
module.exports = model('CartItem', CartItemSchema);