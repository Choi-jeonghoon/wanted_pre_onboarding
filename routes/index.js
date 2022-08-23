const express = require('express');
const testRouter = require('./test');
const postRouter = require('./post');

const router = express.Router();
router.use(testRouter);
router.use(postRouter);

module.exports = router;
