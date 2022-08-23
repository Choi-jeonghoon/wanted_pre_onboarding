const migrations = require('../migrations/post');

async function createPost(req, res) {
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
}

async function updatePost(req, res) {
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
}

async function deletePost(req, res) {
  try {
    const postId = req.params.postId;

    await migrations.deletePost(postId);

    res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
}
async function searchViewPost(req, res) {
  try {
    const keyword = req.query.keyword;
    let PostLists;
    if (keyword) {
      PostLists = await migrations.searchViewPostByKeyword(keyword);
      console.log(keyword);
    } else {
      PostLists = await migrations.searchViewPost();
    }
    res.status(200).json(PostLists);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
}
module.exports = {
  createPost,
  updatePost,
  deletePost,
  searchViewPost,
};
