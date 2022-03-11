const path = require('path');
const express = require('express');
const routeCollections = require('./routeCollections.js');

const renderRoutes = (app) => {
    /*---------------------------
    | Public Routes
    ---------------------------*/
    routeCollections.public.forEach((routeCollection) => {
        // Create Instance of Router Collection  -against resource (e.g. /login)
        const router = express.Router();

        routeCollection.routes.forEach((route) => {
            router[route.method](route.path, routeCollection.controller[route.handler]);
        });

        app.use(routeCollection.resource, router);

    });

    /*---------------------------
    | Authenticed Routes
    ---------------------------*/
    routeCollections.authenticated.forEach((routeCollection) => {
        // Create Instance of Router Collection  -against resource (e.g. /users)
        const router = express.Router();

        routeCollection.routes.forEach((route) => {
            router[route.method](route.path, routeCollection.controller[route.handler]);
        });

        app.use(routeCollection.resource, router);

    });

    /*---------------------------
    | Home Page and Catchall for requests that do not match our routing
    ---------------------------*/
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../../../build/index.html'));
    });
}

module.exports = renderRoutes;