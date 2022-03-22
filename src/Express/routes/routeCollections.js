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
            resource: '/preloadState',
            controller: Controllers.PreloadStateController,
            routes: [
                { method: "get",     handler: "preloadState",            path: `/`,                     },
            ],
        },
        {
            resource: '/sample',
            controller: Controllers.SampleController,
            routes: [
                { method: "get",     handler: "getSample",              path: `/`,                      },
            ],
        },
        {
            resource: '/login',
            controller: Controllers.LoginController,
            routes: [
                { method: "post",     handler: "login",                 path: `/`,                      },
            ],
        },
        {
            resource: '/logout',
            controller: Controllers.LoginController,
            routes: [
                { method: "get",      handler: "logout",                path: `/`,                      },
            ],
        },
        {
            resource: '/auth0',
            controller: Controllers.AuthController,
            routes: [
                { method: "post",     handler: "authenticate",          path: `/authenticate`,          },
                { method: "get",      handler: "isAuthenticated",       path: `/isAuthenticated`,       },
                { method: "get",      handler: "getAccessToken",        path: `/getAccessToken`,        },
                { method: "get",      handler: "disavow",               path: `/disavow`,               },
            ],
        },
        {
            resource: '/users',
            controller: Controllers.UserController,
            routes: [
                { method: "post",    handler: "create",                 path: `/`,                      },
            ],
        },
        {
            resource: '/products',
            controller: Controllers.ProductController,
            routes: [
                { method: "get",     handler: "all",                    path: `/`,                      },
                { method: "get",     handler: "byID",                   path: `/:id`,                   },
            ],
        },
    ],
    authenticated: [
        {
            resource: '/users',
            controller: Controllers.UserController,
            routes: [
                { method: "get",     handler: "all",                    path: `/`,                      },
                { method: "get",     handler: "byID",                   path: `/:id`,                   },
                { method: "patch",   handler: "update",                 path: `/:id`,                   },
                { method: "patch",   handler: "updatePassword",         path: `/:id/password`,          },
            ],
        },
        {
            resource: '/orders',
            controller: Controllers.OrderController,
            routes: [
                { method: "post",     handler: "placeOrder",            path: `/placeOrder`,    },
                { method: "get",      handler: "getOrderHistory",       path: `/getOrderHistory/:userID`,               },
            ],
        },
    ],
}

module.exports = routeCollections;
