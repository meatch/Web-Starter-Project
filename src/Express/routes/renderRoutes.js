const path = require('path');

const routes = require('./routes.js');

const renderRoutes = (app) => {

    /*---------------------------
    | Public Routes
    ---------------------------*/
    routes.public.forEach((route) => {
        app.use(route.resource, route.controller);
    });

    /*---------------------------
    | Authenticed Routes
    ---------------------------*/
    routes.authenticated.forEach((route) => {
        app.use(route.resource, route.controller);
    });

    /*---------------------------
    | Home Page and Catchall for requests that do not match our routing
    ---------------------------*/
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../../../build/index.html'));
    });
}

module.exports = renderRoutes;