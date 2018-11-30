const router = require('express').Router();
const lionRouter = require('./lion/lionRouter');
const userRouter = require('./user/userRouter');
const documentRouter = require('./document/documentRouter');

router.use('/lions', lionRouter);
router.use('/users', userRouter);
router.use('/documents', documentRouter);

module.exports = router;