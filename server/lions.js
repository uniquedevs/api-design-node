const _ = require('lodash');
const lionRouter = require('express').Router();

const lions = [{
  id: 1,
  'name': 'John',
  'pride': 'Doe',
  'age': null,
  'gender': 'male'
}];

lionRouter.get('/', (req, res) => {
  res.json(lions);
});

lionRouter.post('/', (req, res) => {
  const newLion = req.body;
  const lastId = _.sortBy(lions, ['id'], ['desc'])[0].id;
  const newLionWithId = Object.assign(newLion, { id: lastId + 1});
  lions.push(newLionWithId);
  res.json(lions);
});

lionRouter.get('/:id', (req, res) => {
  const lion = _.find(lions, { id: +req.params.id});
  res.json(lion || {});
});

lionRouter.put('/:id', (req, res) => {
  const lion = req.body;
  const lionWithId = Object.assign(lion, { id: +req.params.id});
  Object.assign(lions, lionWithId);
  res.json(lions);
});

module.exports = lionRouter;