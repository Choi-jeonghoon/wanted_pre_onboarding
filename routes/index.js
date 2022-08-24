const express = require('express');
const testRouter = require('./test');
const postRouter = require('./post');
const applyRouter = require('./apply');

const router = express.Router();
router.use(testRouter);
router.use(postRouter);
router.use(applyRouter);

module.exports = router;
