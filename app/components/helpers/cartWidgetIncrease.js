var React = require('react');
var cartActions = require('../../actions/cart');

var IncreaseCartItem = React.createClass({
  increaseItem: function() {
    cartActions.increaseCartItem(this.props.item);
  },
  render: function() {
    return <button onClick={this.increaseItem} className="b-cart__increase">+</button>
  }
});

module.exports = IncreaseCartItem;
