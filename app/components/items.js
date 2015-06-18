var React = require('react');
var ItemsStore = require('../stores/items');
var Utils = require('../utils/apiutils');
var Item = require('./items/item');

var Items = React.createClass({
  getInitialState: function() {
      return {
        items: ItemsStore.getAll()
      };
  },
  componentDidMount: function() {
    ItemsStore.addChangeListener(this._onChange);
    Utils.getAllItems();
  },
  _onChange: function() {
    this.setState({
      items: ItemsStore.getAll()
    })
  },
  renderItems: function() {
    return this.state.items.map(function(item) {
      return <Item item={item} />
    });
  },
    render: function() {
      return (<div className="b-items">{this.renderItems()}</div>);
    }
});

module.exports = Items;
