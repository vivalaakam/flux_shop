var AppDispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/constants').ActionTypes;

module.exports = {

  loadItems: function(items) {
    AppDispatcher.dispatch({
      type: ActionTypes.LOAD_ITEMS,
      items: items
    });
  },
  getItem: function(item) {
    AppDispatcher.dispatch({
      type: ActionTypes.LOAD_ITEM,
      item: item
    })
  }

};
