//Require Mongoose
const mongoose = require('mongoose');
const validator = require('validator');

// User Auth Example with bcrypt hashing
// https://stackoverflow.com/questions/14588032/mongoose-password-hashing
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


//Define a schema for our Model
const UserSchema = new mongoose.Schema({
    first: { type: String, required: 'First Name address is required', },
    last: { type: String, required: 'Last Name address is required', },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        index: { unique: true },
        validate: [ validator.isEmail, 'invalid email' ],
    },
    password: {
        type: String,
        trim: true,
        required: 'Password address is required',
    },
});

// cannot use fat arrow due to this binding issues.
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = (candidatePassword, savedPassword, cb) => {
    bcrypt.compare(candidatePassword, savedPassword, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Compile model from schema
module.exports = mongoose.model('User', UserSchema);