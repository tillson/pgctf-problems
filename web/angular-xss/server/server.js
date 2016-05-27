var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

var app = express();

var User = new Schema({
  username: { type: String },
  password: { type: String }
});

var Message = new Schema({
  sender: { type: String },
  reciever: { type: String },
  message: { type: String },
  date: { type: Date }
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.set('view engine', 'pug');
app.set('views',  __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/bootstrap',  express.static('./node_modules/bootstrap/dist/'));
app.use('/angular',  express.static('./node_modules/angular/'));

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/flag', function(req, res) {
  res.render('flag')
});


app.get('/login', function(req, res) {
  res.render('login')
});
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/flag');
});

app.get('/register', function(req, res) {
  User.findOne({username: req.body.username}, function(result) {
    if (!result) {
      var user = new User();
      user.username = req.body.username;
      user.password = crypto.createHash('sha256').update(req.body.password);
      user.save();
    } else {
      res.redirect("/register?usernameTaken")
    }
  });
});


app.listen(8080, function() {
  console.log('Now listening on port 8080');
})