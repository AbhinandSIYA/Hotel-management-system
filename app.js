var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


let db=require('./dbconfig/db-connect');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let dashboardRouter=require('./routes/admin/dashboard-admin');
let paymentRouter=require('./routes/admin/payment-admin');
let createRoomRouter=require('./routes/admin/createRoom-admin');
let customerRouter=require('./routes/admin/customer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard-admin',dashboardRouter);
app.use('/payment-admin',paymentRouter);
app.use('/createRoom-admin',createRoomRouter);
app.use('/customer',customerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

db.connect(function (error) {
  if (error){
    console.log('Unable to connect database');
    process.exit(1);
  }else {
    console.log('Connected Successfully')
  }
});




module.exports = app;
