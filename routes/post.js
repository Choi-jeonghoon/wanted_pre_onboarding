const express = require('express');
const postServices = require('../services/post');
const router = express.Router();

//채용공고 등록
router.post('/post', postServices.createPost);
//수정
router.put('/post/:postId', postServices.updatePost);
//삭제
router.delete('/post/:postId', postServices.deletePost);
//목록(검색)
router.get('/post', postServices.searchViewPost);
//상세 페이지
router.get('/post/:postId', postServices.PostDetailByPostId);
module.exports = router;
