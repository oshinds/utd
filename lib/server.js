var config = require('./config');
var express = require( 'express');
var path = require ('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') })
});

app.listen(config.PORT, function(){
  console.log(`Service running. Port: ${config.PORT}`);
});