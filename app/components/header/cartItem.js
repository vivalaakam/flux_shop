var React = require('react');
var cartActions = require('../../actions/cart');
var CartWidget = require('../helpers/cartWidget');

var HeaderCartItem = React.createClass({
    _removeItem: function() {
      cartActions.removeCartItem(this.props.item);
    },
    render: function() {
      return ( <tr key={'hcart_'+this.props.item.id} className="b-header_cart__item">
        <td>{this.props.item.title}</td>
        <td><CartWidget item={this.props.item} /></td>
        <td>{this.props.item.qty*this.props.item.price}</td>
        <td><button onClick={this._removeItem} className="b-button">X</button></td>
      </tr>
            );
    }
});

module.exports = HeaderCartItem;
