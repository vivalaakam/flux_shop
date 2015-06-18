var React = require('react');
var cartActions = require('../../actions/cart');

var IncreaseCartItem = React.createClass({
  displayName: 'CartWidgetInput',
  changeItem: function() {
    cartActions.increaseCartItem(this.props.item);
  },
  render: function() {
    return (<input onChange={this.changeItem} type="text" className="b-cart__input" value={this.props.cart.qty} />);
  }
});

module.exports = IncreaseCartItem;
