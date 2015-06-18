var actions = require('../actions/loadItems');
var cartActions = require('../actions/cart');
var request = require('superagent');
module.exports = {
    getAllItems: function() {
        request
            .get('/api/items')
            .send()
            .end(function(error, res) {
                if (res) {
                    var data = JSON.parse(res.text);
                    actions.loadItems(data);
                }
            });
    },
    getItem: function(id) {
        request
            .get('/api/item/' + id)
            .send()
            .end(function(error, res) {
                if (res) {
                    var data = JSON.parse(res.text);
                    actions.loadItem(data);
                }
            });
    },
    getCartItems: function() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        cartActions.loadCartItems(cart);
    },
    updateCartItems: function(items) {
        localStorage.setItem('cart' , JSON.stringify(items));
    }
}
