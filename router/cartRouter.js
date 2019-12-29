let express = require('express');
let router = express.Router();

router.get('/',(req, res)=>{
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('cart');
});

router.post('/', (req, res, next) => {
    var bookId = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var bookController = require('../controllers/bookcontroller');
    bookController
    .getById(bookId)
    .then(book =>{
        var cartItem = req.session.cart.add(book, bookId, quantity);
        res.json(cartItem);
    })
    .catch(error => next(error));
});

module.exports = router;