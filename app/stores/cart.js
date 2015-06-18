var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');
var CHANGE_EVENT = 'change';
var _ = require('underscore');
var ApiUtils = require('../utils/apiutils');
_cart = [];

function _addItems(items) {
    _cart = items || [];
}

function _addItem(item) {
    var searched = _.find(_cart, function(cart) {
        return cart.id === item.id;
    });
    if (searched) {
        var index = _cart.indexOf(searched);
        _increaseItem(item, index);
    } else {
        item.inCart = true;
        item.qty = 1;
        _cart.push(item);
    }
}

function _removeItem(item, index) {
    if (typeof index === 'undefined') {
        var searched = _.find(_cart, function(cart) {
            return cart.id === item.id;
        });
        index = _cart.indexOf(searched);
    }

    _cart.splice(index, 1);
}

function _increaseItem(item, index) {
    if (typeof index === 'undefined') {
        var searched = _.find(_cart, function(cart) {
            return cart.id === item.id;
        });
        index = _cart.indexOf(searched);
    }
    _cart[index].qty += 1;

}

function _decreaseItem(item, index) {
    if (typeof index === 'undefined') {
        var searched = _.find(_cart, function(cart) {
            return cart.id === item.id;
        });
        index = _cart.indexOf(searched);
    }

    if (_cart[index].qty > 1) {
        _cart[index].qty -= 1;
    } else {
        _removeItem(item, index);
    }
}

var CartStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    inCart: function(item) {
        var citem = _.find(_cart, function(cart) {
            return cart.id === item.id;
        });

        if (citem) {
            return {
                qty: citem.qty
            };
        } else {
            return false;
        }
    },
    getAll: function() {
        return _cart;
    }
});

CartStore.dispatchToken = AppDispatcher.register(function(action) {

    switch (action.type) {
        case ActionTypes.LOAD_CART_ITEMS:
            _addItems(action.items);
            CartStore.emitChange();
            break;
        case ActionTypes.ADD_TO_CART:
            _addItem(action.item);
            CartStore.emitChange();
            break;
        case ActionTypes.REMOVE_CART_ITEM:
            _removeItem(action.item);
            CartStore.emitChange();
            break;
        case ActionTypes.INCREASE_CART_ITEM:
            _increaseItem(action.item);
            CartStore.emitChange();
            break;
        case ActionTypes.DECREASE_CART_ITEM:
            _decreaseItem(action.item);
            CartStore.emitChange();
            break;

        default:
            // do nothing
    }

});

module.exports = CartStore;
