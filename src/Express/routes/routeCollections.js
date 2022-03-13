/*---------------------------
| Controllers
---------------------------*/
const Controllers = require('../controllers/index.js');

/*---------------------------
| Routes
---------------------------*/
const routeCollections = {
    public: [
        {
            resource: '/sample',
            controller: Controllers.SampleController,
            routes: [
                { method: "get",     handler: "getSample",              path: `/`,                  },
            ],
        },
        {
            resource: '/login',
            controller: Controllers.LoginController,
            routes: [
                { method: "post",     handler: "login",                 path: `/`,                  },
            ],
        },
        {
            resource: '/logout',
            controller: Controllers.LoginController,
            routes: [
                { method: "get",      handler: "logout",                path: `/`,                  },
            ],
        },
    ],
    authenticated: [
        {
            resource: '/users',
            controller: Controllers.UserController,
            routes: [
                { method: "get",     handler: "all",                    path: `/`,                 },
                { method: "post",    handler: "create",                 path: `/`,                 },
                { method: "get",     handler: "byID",                   path: `/:id`,              },
                { method: "patch",   handler: "update",                 path: `/:id`,              },
                { method: "patch",   handler: "updatePassword",         path: `/:id/password`,     },
            ],
        },
        {
            resource: '/products',
            controller: Controllers.ProductController,
            routes: [
                { method: "get",     handler: "all",                    path: `/`,                 },
                { method: "get",     handler: "byID",                   path: `/:id`,              },
            ],
        },
        {
            resource: '/orders',
            controller: Controllers.OrderController,
            routes: [
                { method: "post",     handler: "create",                path: `/`,                 },
                { method: "get",      handler: "getCart",               path: `/:userID`,          },
                { method: "patch",    handler: "purchase",              path: `/purchase/:userID`, },
            ],
        },
    ],
}

module.exports = routeCollections;
