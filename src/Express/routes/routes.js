/*---------------------------
| Routes
---------------------------*/
const routes = {
    public: [
        { resource: `/sample`, controller: require('../controllers/SampleController.js') },
        { resource: `/login`, controller: require('../controllers/LoginController.js') },
    ],
    authenticated: [
        { resource: `/users`, controller: require('../controllers/UserController.js') },
    ],
}

module.exports = routes;
