var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  cors: {
    origin: ['http://localhost:4200'],
    methods: ["GET", "POST"],
    credentials: true,
    transports:['websocket']
  }});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(function(req, res, next){
  res.io = io;
  next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const gameRooms = ["rocket league","csgo","bt1"]

io.of("/message").on("connection", socket => {
  socket.on("joinRoom", (room) => {
    if (!!gameRooms.includes(room)) {
      socket.join(room);
      return socket.emit("success",`You have successfully joined ${room}`)
    } else {
      return socket.emit("err",`room of name ${room} does n\`t exist. `)
    }
  })
})

module.exports = {app: app, server: server};