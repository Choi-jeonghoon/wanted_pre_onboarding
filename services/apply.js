const migrationsApply = require('../migrations/apply.js');

const createApply = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    console.log(postId, userId);
    const applyList = await migrationsApply.ApplyByUserIdPostId(postId, userId);

    if (applyList) {
      return res.status(409).json({ message: '이미 지원하셨습니다.' });
    } else {
      await migrationsApply.createApply(postId, userId);
      return res.status(200).json({ message: 'SUCCESS' });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};

module.exports = { createApply };
