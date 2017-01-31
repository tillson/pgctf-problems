var express = require('express');
var cron = require('node-cron');
var randomstring = require('randomstring');
var randomWords = require('random-words');
var app = express();

var pages = []
var flagPage = '';

app.get('/', function(req, res) {
  console.log(pages);
  res.send('<b>Pages:</b><br>\n' + Object.keys(pages).join('<br>'));
})

app.get('/:name', function(req, res) {
  console.log(req.params.name);
  if (pages[req.params.name] != null) {
    res.send(pages[req.params.name]);
  } else {
    res.status(404).send('not found');
  }

  if (flagPage == req.params.name) {
    res.send('flag{c0ding_1s_c00l}');
  }
});


cron.schedule('*/30 * * * * *', function(){
  generate()
});

function generate() {
  pages = [];
  for (var i = 0; i < 7; i++) {
    var word = randomWords();
    pages[randomstring.generate(7)] = word
    flagPage += word;
  }
}

generate();
app.listen(8080);
