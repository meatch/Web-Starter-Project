//Require Mongoose
const mongoose = require('mongoose');

//Define a schema for our Model
const ProductTypeSchema = new mongoose.Schema({
    prodTypeID: { type: Number, required: 'ProductType prodTypeID is required', },
    type: { type: String, required: 'ProductType type is required', },
});

// Remove sensitive data in responses.
ProductTypeSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['__v']
        return ret;
    }
});

// Compile model from schema
module.exports = mongoose.model('ProductType', ProductTypeSchema);