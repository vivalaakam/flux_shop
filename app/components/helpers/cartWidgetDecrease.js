var React = require('react');
var cartActions = require('../../actions/cart');

var DecreaseCartItem = React.createClass({
  decreaseItem: function() {
    cartActions.decreaseCartItem(this.props.item);
  },
  render: function() {
    return <button onClick={this.decreaseItem} className="b-cart__decrease">-</button>
  }
});

module.exports = DecreaseCartItem;
