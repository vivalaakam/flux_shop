var keyMirror = require('keymirror');
module.exports = {
    ActionTypes: keyMirror({
        LOAD_ITEMS: null,
        LOAD_ITEM: null,
        LOAD_CART_ITEMS: null,
        ADD_TO_CART: null,
        REMOVE_FROM_CART: null,
        INCREASE_CART_ITEM: null,
        DECREASE_CART_ITEM: null,
        UPDATE_CART_ITEM: null
    })
};
