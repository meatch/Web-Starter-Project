const staff = require('./staff/staff.js');
const email = require('./email/email.js');
const user = require('./user/user.js');

const routes = {
    staff: staff,
    email: email,
    user: user,
}

module.exports = routes;