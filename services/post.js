const migrations = require('../migrations/post');

const createPost = async (req, res) => {
  try {
    const {
      company_id,
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    } = req.body;
    console.log(createPost, 'a');
    await migrations.createPost(
      company_id,
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    );

    res.status(201).json({ message: 'SUCCESS' });
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};
module.exports = {
  createPost,
};
