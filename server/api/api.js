const router = require('express').Router();
const lionRouter = require('./lion/lionRouter');
const userRouter = require('./user/userRouter');

router.use('/lions', lionRouter);
router.use('/users', userRouter);

module.exports = router;