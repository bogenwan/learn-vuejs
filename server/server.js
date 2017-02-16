var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(__dirname + '/../client'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('server connected'));

app.get('/info', function(req, res) {
  res.send("hello")
});