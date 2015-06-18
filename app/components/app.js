var React = require('react');
var Header = require('./header.js');
var Footer = require('./footer.js');
var Items = require('./items.js');
var CartStore = require('../stores/cart');
var ApiUtils = require('../utils/apiutils');
CartStore.addChangeListener(function() {
    ApiUtils.updateCartItems(_cart);
});
ApiUtils.getCartItems();

var Template =
  React.createClass({
    render:function(){
      return (
        <div className="cont">
          <Header />
          <div className="container">
          <Items />
          </div>
          <Footer />
        </div>
        )
    }
  });
module.exports = Template;
