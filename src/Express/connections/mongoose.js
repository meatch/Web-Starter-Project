// Import the mongoose module
const mongoose = require('mongoose');

// Make mongoose prosises available throughout our App.
mongoose.promise = global.Promise;

// Set up default mongoose connection
mongoose.connect(process.env.MONGO_DB_CONN);

// Get the default connection
const mongoConn = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
mongoConn.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Make available to other scripts
module.exports = mongoConn;