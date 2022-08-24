const express = require('express');
const applyServices = require('../services/apply');
const router = express.Router();

// 채용 지원
router.post('/apply', applyServices.createApply);

module.exports = router;