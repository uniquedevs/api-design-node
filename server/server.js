// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const employee = [{
  first_name: 'John',
  last_name: 'Doe',
  position: 'CEO'
}];

app.use(express.static('app'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  res.json(employee);
});

app.listen(3000, () => console.log('listenning port 3000'));
