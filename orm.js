const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('wanted_pre_onboarding', 'root', '1994', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  //noAlias: true // as 별칭 미설정 여부
});
auto.run(err => {
  if (err) throw err;
});
