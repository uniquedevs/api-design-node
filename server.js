// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('app'));

app.use(bodyParser());

app.listen(3000, () => console.log('listenning port 3000'));
