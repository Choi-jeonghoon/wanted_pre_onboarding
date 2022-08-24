const db = require('../models/index');
const User = db.user;

async function test() {
  let selectedUser = User.findAll({}).catch(err => {
    console.error(err);
  });

  return selectedUser;
}

module.exports = { test };
