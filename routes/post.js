const express = require('express');
const postServices = require('../services/post');
const router = express.Router();

//채용공고 등록
router.post('/post', postServices.createPost);
//수정

//삭제

//목록(검색)

//상세 페이지
module.exports = router;
