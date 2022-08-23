'use strict';

const Sequelize = require('sequelize');
const user = require('./user');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

// 시퀄라이즈 MySQL 연결 객체 생성
let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    host: config.host,
    dialect: config.dialect,
  },
);
// 연결 객체를 나중에 재사용하기 위함
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('./user')(sequelize, Sequelize);
db.post = require('./post')(sequelize, Sequelize);
module.exports = db;
