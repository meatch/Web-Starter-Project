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
                { method: "get",     handler: "preloadState",            path: `/`,                                 },
            ],
        },
        {
            resource: '/sample',
            controller: Controllers.SampleController,
            routes: [
                { method: "get",     handler: "getSample",              path: `/`,                                  },
            ],
        },
        {
            resource: '/auth0',
            controller: Controllers.AuthController,
            routes: [
                { method: "post",     handler: "authenticate",          path: `/authenticate`,                      },
                { method: "get",      handler: "isAuthenticated",       path: `/isAuthenticated`,                   },
                { method: "get",      handler: "getAccessToken",        path: `/getAccessToken`,                    },
                { method: "get",      handler: "disavow",               path: `/disavow`,                           },
            ],
        },
        {
            resource: '/products',
            controller: Controllers.ProductController,
            routes: [
                { method: "get",     handler: "all",                    path: `/`,                                  },
                { method: "get",     handler: "byID",                   path: `/:id`,                               },
            ],
        },
        {
            resource: '/email',
            controller: Controllers.MailController,
            routes: [
                { method: "post",    handler: "contact",                path: `/contact`,                           },
                { method: "post",    handler: "purchaseThanks",         path: `/purchaseThanks`,                    },
            ],
        },
    ],
    authenticated: [
        {
            resource: '/orders',
            controller: Controllers.OrderController,
            routes: [
                { method: "post",     handler: "placeOrder",            path: `/placeOrder`,                        },
                { method: "get",      handler: "getOrderHistory",       path: `/getOrderHistory/:userID`,           },
            ],
        },
    ],
}

module.exports = routeCollections;
