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

router.put("/",(req,res)=>{
    var productId = req.body.id;
    var quantity = parseInt(req.body.quantity);
    var cartItem = req.session.cart.update(productId,quantity);
    res.json(cartItem);
});

router.delete("/",(req,res)=>{
    var productId =req.body.id;
    req.session.cart.remove(productId);
    res.json({
        totalQuantity :req.session.cart.totalQuantity
    });
});

router.delete("/all",(req,res)=>{
    req.session.cart.empty();
    res.sendStatus(204);
    res.end;
})

router.post("/sendRequest",function(req,res,next) {
    let date = req.body.date;
    let id1 = req.body.id1;
    let id2 = req.body.id2;
    let userid = res.locals.userid;
    console.log(res.locals);
    console.log(req.body);

    let borrowDate = new Date(date);
    console.log(borrowDate);
    let dueDate = new Date(borrowDate.getFullYear,borrowDate.getMonth,borrowDate.getDate+15);

    let data = {
        borrowDate: borrowDate,
        dueDate: dueDate,
        BookInfoId: id1,
        UserId: userid
    }

    let borrow = require("../controllers/borrowController");
    borrow.createBorrow(data).then(borrow => {
        res.render("index");}
    )
    //if (id2 == '')
})
module.exports = router;