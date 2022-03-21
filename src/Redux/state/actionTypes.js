export const ActionTypes = {
    /*---------------------------
    | User
    ---------------------------*/
    USER_LOGIN: 'User: login',
    USER_LOGOUT: 'User: logOut',

    /*---------------------------
    | Products
    ---------------------------*/
    PRODUCTS_SET: 'Products: set',

    /*---------------------------
    | OrderHistory
    ---------------------------*/
    ORDER_HISTORY_SET: 'Order History: set',

    /*---------------------------
    | Cart
    ---------------------------*/
    CART_ADD_ITEM: 'Cart: addItem',
    CART_REMOVE_ITEM: 'Cart: removeItem',
    CART_CLEAR_ITEMS: 'Cart: clearItems',

    CART_QUANTITY_INCR: 'Cart: quantityIncr',
    CART_QUANTITY_DECR: 'Cart: quantityDecr',

    CART_ADD_PAYMENT: 'Cart: addPayment',

    CART_FLOW_UNLOCK_STEP: 'Checkout: flowUnlockStep',

};