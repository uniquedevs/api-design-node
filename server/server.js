// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const _ = require('lodash');

const app = express();
const upload = multer();

const lions = [{
  id: 1,
  'name': 'John',
  'pride': 'Doe',
  'age': null,
  'gender': 'male'
}];

app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(upload.array());

app.get('/lions', (req, res) => {
  res.json(lions);
});

app.post('/lions', (req, res) => {
  const newLion = req.body;
  const lastId = _.sortBy(lions, ['id'], ['desc'])[0].id;
  const newLionWithId = Object.assign(newLion, { id: lastId + 1});
  lions.push(newLionWithId);
  res.json(lions);
});

app.get('/lions/:id', (req, res) => {
  const lion = _.find(lions, { id: +req.params.id});
  res.json(lion || {});
});

app.put('lions/:id', (req, res) => {
  const lion = req.body;
  const lionWithId = Object.assign(lion, { id: +req.params.id});
  Object.assign(lions, lionWithId);
  res.json(lions);
});
app.listen(3000, () => console.log('listenning port 3000'));
