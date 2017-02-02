var express = require('express');
var app = express();

app.use(express.static('public_html'));

/*app.all('/', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public_html' });
});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
