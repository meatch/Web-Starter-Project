// Require Mongoose
const { Schema, model } = require('mongoose');

// Define a schema for our Model
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const OrderSchema = new Schema({
    userID: { type: String, required: 'Order userID is required', },
    userProfile: { type: Object, required: 'Order userProfile is required', },
    details: { type: Object, required: 'Order details is required', },
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