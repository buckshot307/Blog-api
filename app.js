require('dotenv').config({ path: './main.env' });
require('./passport');
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const index = require('./routes/index');
const auth = require('./routes/auth');
const user = require('./routes/user');
const User = require('./models/users');

var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.Mongo_DB;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true,  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/user', passport.authenticate('jwt', {session: false}), user);
app.use('/auth', auth);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;