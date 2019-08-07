const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const session = require('express-session')
const expressValidator = require('express-validator')
const expressMessages = require('express-messages')
const flash = require('connect-flash')
const multer = require('multer')
const path = require('path')

// import routers
const index = require('../routes/index')
const Add_category = require('../routes/Add_category')
const Add_product = require('../routes/Add_product')
const Add_page = require('../routes/Add_pages')

// init app
const app = express()

var corOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// uses various package
// app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())

app.use('/', index)
app.use('/product', Add_product)
app.use('/category', Add_category)
app.use('/page', Add_page)

// Express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// Express validator middleware
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/Mdela';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('connected to mogndb')
});

app.listen(process.env.PORT || 8000, function () {
  console.log('linstening to port 8000');
})