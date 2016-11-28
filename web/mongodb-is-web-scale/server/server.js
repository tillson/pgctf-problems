var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

mongoose.connect('mongodb://localhost/webscale');
var app = express();

var User = mongoose.model('User', new Schema({
  username:  String,
  password: String,
  user_type: String,
  bio: String,
  color: String
}, { strict: false, collection: 'users' }));

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (crypto.createHash('sha256').update(password).digest('hex') != user.password) {
        return done(null, false);
      }
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
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

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
  if (!req.user) return res.redirect('/?notLoggedIn');
  res.render('flag', {user: req.user});
});

app.get('/messages', function(req, res) {
  if (req.user) {
    res.render('messages', {user: req.user});
  } else {
    res.status(401).render('401', {user: req.user});
  }
});

app.get('/edit', function(req, res) {
  if (!req.user) return res.redirect('/?notLoggedIn');
  res.render('edit', {user: req.user});
});

app.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});
app.get('/register', function(req, res) {
  res.render('register', {user: req.user});
});

app.get('/debug', function(req, res) {
  if (!req.user) return res.redirect('/?notLoggedIn');
  res.render('debug', {user: req.user});
});


app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login?failed' }),
  function(req, res) {
    res.redirect('/?success');
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
          res.redirect('/?success');
        });
      })
    } else {
      return res.redirect('/register?error=usernameTaken')
    }
  });
});

app.post('/edit', function(req, res) {
  User.findById(req.user._id, function(err, user) {
    var keys = Object.keys(req.body);
    for (var i = 0; i < keys.length; i++) {
      user[keys[i]] = req.body[keys[i]];
      console.log(keys[i] + '  ' + req.body[keys[i]]);
    }
    console.log(user);
    user.save(function(err) {
      if (err) throw err;
      res.redirect('/edit?saved');
    });

  });
});

app.listen(8080, function() {
  console.log('Now listening on port 8080');
})
