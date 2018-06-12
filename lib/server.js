import config from './config';
import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') })
});

app.listen(config.PORT, function(){
  console.log(`Service running. Port: ${config.PORT}`);
});