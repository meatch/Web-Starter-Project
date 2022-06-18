/*===================================
||
|| NodeJS Server with Express Framework
||
===================================*/
/*---------------------------
| Environment Vars
---------------------------*/
require('dotenv').config();

/*---------------------------
| Resources
---------------------------*/
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

/*---------------------------
| Mongoose
---------------------------*/
const mongoose = require('mongoose');
mongoose.promise = global.Promise;
const mongoConn = process.env.MONGO_DB_CONN;
/* Connecting to Mongo ---------------------------*/
if (mongoConn) {
    mongoose
        .connect(mongoConn)
        .then((res) => {
            console.log('Mongoose: Connection made.');
        })
        .catch((err) => {
            console.log(`Mongoose Connection Error: ${err}`);
        });
} else {
    console.log('Missing MONGO_DB_CONN .env var for Mongoose connection');
}

/*---------------------------
| Express
---------------------------*/
/* Initialize ---------------------------*/
const app = express();

/* JSON support for request response ---------------------------*/
app.use(express.json());

/* Server Session support user access. ---------------------------*/
// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: oneDay,
        maxAge: oneDay,
    },
}));

/* Serve the static files from the React app ---------------------------*/
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| !IMPORTANT :: Should not be done in Production
| Bypassing CORS so Node Express can be on NODE_PORT 5000 and react can be on 3000
---------------------------*/
if (process.env.NODE_ENV === 'development') {
    console.log('Bypassing CORS for Local Development.');

    const appUrl = process.env.REACT_APP;

    const corsOptions = {
        origin: appUrl,  //Your Client, do not write '*'
        credentials: true,
    };

    console.log('corsOptions', corsOptions);
    app.use(cors(corsOptions));
}

/*---------------------------
| Route Collections
---------------------------*/
const renderRoutes = require('./src/Express/routes/renderRoutes.js');
renderRoutes(app);

/*---------------------------
| Port Management
---------------------------*/
const HEROKU_PORT = process.env.PORT;
const EXPRESS_PORT = process.env.EXPRESS_PORT;
const PORT = (EXPRESS_PORT) ? EXPRESS_PORT : HEROKU_PORT;
const FINAL_PORT = (PORT) ? PORT : 5000; // In case none are provided fall back to 5000

/*---------------------------
| Start the Server
---------------------------*/
app.listen(FINAL_PORT, () => {
    console.log('Express Server is up and running. Currently listening on port: ' + FINAL_PORT );
});