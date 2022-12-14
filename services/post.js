const migrationsPost = require('../migrations/post');

async function createPost(req, res) {
  try {
    const {
      company_id,
      employ_position,
      recruitment_compensation,
      contents,
      technology_stack,
    } = req.body;
    await migrationsPost.createPost(
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

    await migrationsPost.updatePost(
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

    await migrationsPost.deletePost(postId);

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
      PostLists = await migrationsPost.searchViewPostByKeyword(keyword);
      console.log(keyword);
    } else {
      PostLists = await migrationsPost.searchViewPost();
    }
    res.status(200).json(PostLists);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
}

const PostDetailByPostId = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await migrationsPost.PostDetailByPostId(postId);

    const otherPosts = await migrationsPost.PostByCompanyId(
      post.company.id,
      postId,
    );

    const otherPost = otherPosts.map(obj => obj.id);

    const result = {
      ????????????_id: post.id,
      ?????????: post.company.company_name,
      ??????: post.company.country,
      ??????: post.company.region,
      ???????????????: post.employ_position,
      ???????????????: post.recruitment_compensation,
      ????????????: post.technology_stack,
      ????????????: post.contents,
      ?????????????????????????????????: otherPost,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode || 500).json({ message: 'FAIL' });
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  searchViewPost,
  PostDetailByPostId,
};
