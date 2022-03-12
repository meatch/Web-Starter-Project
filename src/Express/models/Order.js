// Require Mongoose
const { Schema, model } = require('mongoose');

// Define a schema for our Model
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const OrderSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    qty: { type: Number, required: 'Order qty is required', },
    purchased: { type: Boolean, default: false, },
}, schemaOptions);

// Remove sensitive data in responses.
OrderSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['__v']
        return ret;
    }
});

// Compile model from schema
module.exports = model('Order', OrderSchema);