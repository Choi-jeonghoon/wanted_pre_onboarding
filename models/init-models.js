var DataTypes = require("sequelize").DataTypes;
var _apply = require("./apply");
var _company = require("./company");
var _post = require("./post");
var _user = require("./user");

function initModels(sequelize) {
  var apply = _apply(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  post.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(post, { as: "posts", foreignKey: "company_id"});
  apply.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(apply, { as: "applies", foreignKey: "post_id"});
  apply.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(apply, { as: "applies", foreignKey: "user_id"});

  return {
    apply,
    company,
    post,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
