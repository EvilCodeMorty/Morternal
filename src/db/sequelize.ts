import { Sequelize } from 'sequelize';

// 读取环境变量;
const mysqlName = process.env['MYSQL_NAME'] || 'admin';
const mysqlPassword = process.env['MYSQL_PASSWORD'] || '123456';
// 创建数据库连接;
const seq = new Sequelize(mysqlName, 'root', mysqlPassword, {
  host: 'localhost',
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
