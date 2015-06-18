var AppDispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/constants').ActionTypes;
var ApiUtils = require('../utils/apiutils');

module.exports = {

    loadCartItems: function(items) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_CART_ITEMS,
            items: items
        });
    },
    addToCart: function(item) {
      AppDispatcher.dispatch({
          type: ActionTypes.ADD_TO_CART,
          item: item
      });
    },
    removeCartItem: function(item) {
      AppDispatcher.dispatch({
          type: ActionTypes.REMOVE_CART_ITEM,
          item: item
      });
    },
    increaseCartItem: function(item) {
      AppDispatcher.dispatch({
          type: ActionTypes.INCREASE_CART_ITEM,
          item: item
      });
    },
    decreaseCartItem: function(item) {
      AppDispatcher.dispatch({
          type: ActionTypes.DECREASE_CART_ITEM,
          item: item
      });
    },
    updateCartItem: function(item) {
      AppDispatcher.dispatch({
          type: ActionTypes.UPDATE_CART_ITEM,
          item: item
      });
    }

};
