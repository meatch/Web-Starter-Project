export const ActionTypes = {
    /*---------------------------
    | User
    ---------------------------*/
    USER_LOGIN: 'User: login',
    USER_LOGOUT: 'User: logOut',
    USER_ADD_PAYMENT: 'User: addPayment',

    /*---------------------------
    | Products
    ---------------------------*/
    PRODUCTS_SET: 'Products: set',

    /*---------------------------
    | Orders
    ---------------------------*/
    ORDERS_ADD: 'Orders: add',
    ORDERS_REMOVE: 'Orders: remove',
    ORDERS_CLEAR: 'Orders: clear',
    ORDER_QUANTITY_INCR: 'Orders: quantityIncr',
    ORDER_QUANTITY_DECR: 'Orders: quantityDecr',

    /*---------------------------
    | Checout
    ---------------------------*/
    CHECKOUT_UNLOCK_STEP: 'Checkout: unlockStep',
};