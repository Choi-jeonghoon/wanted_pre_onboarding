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
    await migrations.createPost(
      company_id,
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    );

    res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const {
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    } = req.body;

    await migrations.updatePost(
      postId,
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    );

    res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    await migrations.deletePost(postId);

    res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
};
