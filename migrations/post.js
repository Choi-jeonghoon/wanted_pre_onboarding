const db = require('../models/index');
const Post = db.post;
const Company = db.company;
const SQ = require('sequelize');
const Sequelize = SQ.Sequelize;
const sequelize = require('sequelize');
const company = require('../models/company');
const post = require('../models/post');
const Op = sequelize.Op;

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

async function updatePost(
  postId,
  employ_position,
  recruitment_compensation,
  contents,
  technology_stack,
) {
  return await Post.update(
    {
      employ_position: employ_position,
      recruitment_compensation: recruitment_compensation,
      contents: contents,
      technology_stack: technology_stack,
    },
    {
      where: {
        id: postId,
      },
    },
  );
}

async function deletePost(postId) {
  return await Post.destroy({
    where: {
      id: postId,
    },
  });
}

async function searchViewPostByKeyword(keyword) {
  return await Post.findAll({
    attributes: [
      ['id', '채용공고_id'],
      [Sequelize.col('company.company_name'), '회사이름'],
      [Sequelize.col('company.country'), '국가'],
      [Sequelize.col('company.region'), '지역'],
      ['employ_position', '채용포지션'],
      ['recruitment_compensation', '채용보상금'],
      ['technology_stack', '사용기술'],
    ],
    include: [
      {
        model: Company,
        as: 'company',
        attributes: [],
      },
    ],
    where: {
      [Op.or]: [
        { employ_position: { [Op.like]: '%' + keyword + '%' } },
        { recruitment_compensation: { [Op.like]: '%' + keyword + '%' } },
        { technology_stack: { [Op.like]: '%' + keyword + '%' } },
      ],
    },
  });
}

async function searchViewPost() {
  return await Post.findAll({
    attributes: [
      ['id', '채용공고_id'],
      [Sequelize.col('company.company_name'), '회사이름'],
      [Sequelize.col('company.country'), '국가'],
      [Sequelize.col('company.region'), '지역'],
      ['employ_position', '채용포지션'],
      ['recruitment_compensation', '채용보상금'],
      ['technology_stack', '사용기술'],
    ],
    include: {
      model: Company,
      as: 'company',
      attributes: [],
    },
  });
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  searchViewPostByKeyword,
  searchViewPost,
};
