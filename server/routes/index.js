var express = require('express');
var router = express.Router();

var Items = [];

for (var i = 1; i < 9; i++) {
    Items.push({
        'id': i,
        'title': 'Widget #' + i,
        'summary': 'This is an awesome widget!',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
        'img': '/assets/product.png',
        'price': i,
        inCart: false,
        qty: 0
    });
}

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/api/items' , function(req , res) {
  res.json(Items);
});

module.exports = router;
