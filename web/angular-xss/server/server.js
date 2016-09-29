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
var Message = mongoose.model('Message', new Schema({
  subject:  String,
  message: String,
  to: String,
  from: String,
  date: { type: Date, default: Date.now },
}, { collection: 'messages' }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (crypto.createHash('sha256').update(password).digest('hex') != user.password) {
        console.log('no!');
        console.log(crypto.createHash('sha256').update(password).digest('hex'));
        console.log(user.password);
        return done(null, false);
      }
      console.log('almost')
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

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
  console.log(req.user);
  res.render('index', {user: req.user});
});
app.get('/flag', function(req, res) {
  if (req.user && req.user.username == 'admin') {
    res.render('flag', {user: req.user});
  } else {
    res.status(401).render('401', {user: req.user});
  }
});

app.get('/messages', function(req, res) {
  if (req.user) {
    res.render('messages', {user: req.user});
  } else {
    res.status(401).render('401', {user: req.user});
  }
});

app.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});
app.get('/register', function(req, res) {
  res.render('register', {user: req.user});
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
  User.findOne({username: req.body.username}, function(err, result) {
    console.log(result);
    if (!result) {
      User.create({ username: req.body.username,
      password: crypto.createHash('sha256').update(req.body.password).digest('hex') },
      function(err) {
        if (err) {
          console.log(err);
          res.redirect('/register?error');
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
      })
    } else {
      return res.redirect('/register?error=usernameTaken')
    }
  });
});


app.listen(8080, function() {
  console.log('Now listening on port 8080');
})
