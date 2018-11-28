const _ = require('lodash');
const userRouter = require('express').Router();

userRouter.route('/')
  .get((req, res) => {
    res.send({ ok: true })
});

module.exports = userRouter;