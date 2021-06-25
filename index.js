var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname , 'client/build')));

require('dotenv').config();

const films = require('./client/public/data.json');

app.get('/api/getFilms', function (req, res) {
  var Films = films;
  res.send(Films);
  })

const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);

