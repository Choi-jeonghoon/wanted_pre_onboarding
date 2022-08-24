const db = require('../models/index');
const Apply = db.apply;

async function ApplyByUserIdPostId(postId, userId) {
  return await Apply.findOne({
    where: {
      postId: postId,
      userId: userId,
    },
  });
}

async function createApply(postId, userId) {
  return await Apply.create({
    postId: postId,
    userId: userId,
  });
}

module.exports = { ApplyByUserIdPostId, createApply };
