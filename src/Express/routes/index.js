const path = require('path');

const staff = require('./staff/staff.js');
const email = require('./email/email.js');
const user = require('./user/user.js');

const renderRoutes = (app) => {
    app.use('/api/staff', staff);
    app.use('/api/email', email);
    app.use('/api/user', user);

    // Catchall for requests that do not match our routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

module.exports = renderRoutes;