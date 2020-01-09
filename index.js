let express = require('express');
let app = express();
let paginateHelper = require('express-handlebars-paginate');

//Set public static folder
app.use(express.static(__dirname + '/public'));

//Use view engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createPagination: paginateHelper.createPagination, 
        
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Use Body parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use Cookie parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

//Use session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: null },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

//Use cart controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;

    res.locals.fullname = req.session.user ? req.session.user.fullname : '';
    res.locals.user = req.session.user;

    res.locals.avt = req.session.user ? req.session.user.avatarPath : '';

    res.locals.isAdmin = req.session.user ? req.session.user.isAdmin : false;
    res.locals.isLoggedIn = req.session.user ? true : false; 
    res.locals.userid = req.session.user? req.session.user.id : '';
    next();
});

//Define your routes here 
app.get('/', require('./router/indexRouter'));
app.use('/admin',require('./router/AdminBookRouter'));
app.use('/books', require('./router/bookRouter'));
app.use('/cart', require('./router/cartRouter'));
app.use('/users', require('./router/userRouter'));

app.get('/sync', (req, res) =>{
    let models = require('./models');
    models.sequelize.sync()
    .then(() =>{
       res.send('database sync completed') 
    });
});

app.get('/:page', (req, res) => {
    let page = req.params.page;
    res.render(page, {});
});

//Set server port & start server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});