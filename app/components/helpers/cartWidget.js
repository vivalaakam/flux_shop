var React = require('react');
var CartStore = require('../../stores/cart');
var cartActions = require('../../actions/cart');
var Increase = require('./cartWidgetIncrease');
var Decrease = require('./cartWidgetDecrease');
var ChangeItem = require('./CartWidgetInput');
var CartWidget = React.createClass({
    displayName: 'CartWidget',
    getInitialState: function() {
        return {
            inCart: CartStore.inCart(this.props.item)
        }
    },
    componentDidMount: function() {
      CartStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState({
        inCart: CartStore.inCart(this.props.item)
      });
    },
    addToCart: function() {
      cartActions.addToCart(this.props.item);
    },
    addRender: function() {
      return <button className="b-cart__add" onClick={this.addToCart}>Add to Cart</button>;
    },
    inRender: function() {
      return (
        <div>
          <Decrease item={this.props.item} />
          <ChangeItem item={this.props.item} cart={this.state.inCart}/>
          <Increase item={this.props.item} />
        </div>
        );
    },
    render: function() {
        return <div className="b-cart">{this.state.inCart ? this.inRender() : this.addRender() }</div>;
    }
});

module.exports = CartWidget;
