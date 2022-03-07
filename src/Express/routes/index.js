const path = require('path');

const sample = require('./sample/sample.js');
const user = require('./user/user.js');

const renderRoutes = (app) => {
    app.use('/api/sample', sample);
    app.use('/api/user', user);

    // Catchall for requests that do not match our routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../../../build/index.html'));
    });
}

module.exports = renderRoutes;