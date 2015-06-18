var React = require('react');
var HeaderCart = require('./header/cart');
var Header = React.createClass({
    render: function() {
        return (
          <header className="b-header">
            <span className="b-header__name">
              Shopping
            </span>
            <HeaderCart />
          </header>
        );
    }
});

module.exports = Header;
