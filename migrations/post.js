const db = require('../models/index');
const Post = db.post;

async function createPost(
  company_id,
  employ_position,
  recruitment_compensation,
  contents,
  technology_stack,
) {
  return await Post.create({
    company_id: company_id,
    employ_position: employ_position,
    recruitment_compensation: recruitment_compensation,
    contents: contents,
    technology_stack: technology_stack,
  });
}
console.log();
module.exports = {
  createPost,
};
