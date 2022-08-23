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

const PostDetailByPostId = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await migrations.PostDetailByPostId(postId);

    const otherPosts = await migrations.PostByCompanyId(
      post.company.id,
      postId,
    );

    const otherPost = otherPosts.map(obj => obj.id);

    const result = {
      채용공고_id: post.id,
      회사명: post.company.company_name,
      국가: post.company.country,
      지역: post.company.region,
      채용포지션: post.employ_position,
      채용보상금: post.recruitment_compensation,
      사용기술: post.technology_stack,
      채용내용: post.contents,
      회사가올린다른채용공고: otherPost,
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
