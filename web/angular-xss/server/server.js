var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

mongoose.connect('mongodb://localhost/angularxss');
var app = express();

var User = mongoose.model('User', new Schema({
  username:  String,
  password: String
}, { collection: 'users' }));
var Blog = mongoose.model('Message', new Schema({
  subject:  String,
  message: String,
  to: String,
  from: String,
  date: { type: Date, default: Date.now },
}, { collection: 'messages' }));


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

app.use(require('express-session')({
    secret: 'your trip is short',
    resave: false,
    saveUninitialized: false
}));

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
app.get('/register', function(req, res) {
  res.render('register')
});

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});
app.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.redirect('/register?error=empty')
  }
  User.find({username: req.body.username}, function(result) {
    if (!result) {
      var user = new User();
      user.username = req.body.username;
      user.password = crypto.createHash('sha256').update(req.body.password);
      user.save();
      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    } else {
      return res.redirect('/register?error=usernameTaken')
    }
  });
});


app.listen(8080, function() {
  console.log('Now listening on port 8080');
})
