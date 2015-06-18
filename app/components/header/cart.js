var React = require('react');
var Addons = require('react/addons');
var CartStore = require('../../stores/cart');
var CartHelper = require('../helpers/cartWidget');
var CartItem = require('./cartItem');

var HeaderCart = React.createClass({
    getInitialState: function() {
        return {
            cart: CartStore.getAll(),
            expanded: false
        };
    },
    componentDidMount: function() {
      CartStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState({
        cart: CartStore.getAll()
      });
    },
    cartItems: function() {
      if(this.state.cart.length > 0 && this.state.expanded ) {
        return (
          <table className="b-header_cart__items">
            <tbody>{this.cartItemsRow()}</tbody>
          </table>
        );
      } else {
        return null;
      }
    },
    cartItemsRow: function() {
      return this.state.cart.map(function(item , i) {
        return <CartItem item={item} />
      });
    },
    cartItemsFooter: function() {
      var total = this.state.cart.reduce(function(prev , curr) {
        return prev + curr.qty * curr.price;
      } , 0);

      return <tr><td colSpan="2">Total:</td><td>{total}</td></tr>
    },
    cartTitle: function() {
      var total = 0 , items = 0;
      this.state.cart.forEach(function(item) {
        total += item.qty * item.price;
        items += item.qty;
      });

      if(this.state.cart.length > 0 ) {
        return <span>Cart has {items} item by {total}$ </span>
      } else {
        return <span>Cart is empty</span>;
      }
    },
    expand: function() {
      var state = !this.state.expanded;
      this.setState({
        expanded: state
      });
    },
    render: function() {
      var active = this.state.expanded ? 'b-header_cart b-active' : 'b-header_cart';
      return ( <div className={active}>
                  <div className="b-header_cart__name" onClick={this.expand}>{this.cartTitle()}</div>
                  {this.cartItems()}
                </div>
            );
    }
});

module.exports = HeaderCart;
