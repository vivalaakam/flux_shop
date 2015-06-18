var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');
var _items = [];
var _item = {};
var CHANGE_EVENT = 'change';

function _addItems(items) {
    _items = items;
    items.forEach(_addItem);
};

function _addItem(item) {
    if (!_item[item.id]) {
        _item[item.id] = item;
    }
};

var ItemStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    get: function(id) {
        return _item[id];
    },
    getAll: function() {
        return _items;
    }

});

ItemStore.dispatchToken = AppDispatcher.register(function(action) {

    switch (action.type) {
        case ActionTypes.LOAD_ITEMS:
            _addItems(action.items);
            ItemStore.emitChange();
            break;

        case ActionTypes.LOAD_ITEM:
            _addItems([action.item]);
            ItemStore.emitChange();
            break;

        default:
            // do nothing
    }

});

module.exports = ItemStore;
