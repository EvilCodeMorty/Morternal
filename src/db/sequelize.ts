import { Sequelize } from 'sequelize';
// 环境变量;
import { mysqlName, mysqlPassword, mysqlUser, mysqlHost } from '../config/dev.config.js';

// 创建数据库连接;
const seq = new Sequelize(mysqlName, mysqlUser, mysqlPassword, {
  host: mysqlHost,
  dialect: 'mysql',
});

// 测试数据库连接;
seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功!');
  })
  .catch((err) => {
    console.error('数据库连接失败', err);
  });
export default seq;
