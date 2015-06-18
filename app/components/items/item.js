var React = require('react');
var ItemCart = require('../helpers/cartWidget');

var ItemList = React.createClass({
    render: function() {
      return (
        <div className="b-item" key={'item_'+ this.props.item.id}>
        <h2 className="b-item__name">{this.props.item.title}</h2>
        <div className="b-item__price">Price: <span className="b-item__price-span">{this.props.item.price}$</span></div>
        <ItemCart item={this.props.item} />
        </div>
      );
    }
});

module.exports =  ItemList;
