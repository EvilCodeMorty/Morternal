// 用户数据库模型;
import { DataTypes } from 'sequelize';

import seq from '../db/sequelize';

// 用户模型;
const UserModel = seq.define('morternal_user', {
  // 用户唯一id;
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户唯一id,不能为空,唯一;',
  },
  //用户名-展示用;
  nick_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名(展示使用),不能为空;',
  },
  //用户名-用户账号;
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名(用户账号),不能为空,唯一;',
  },
  //用户密码;
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户密码,不能为空;',
  },
});
// 模型同步,创建表;
// UserModel.sync();
export default UserModel;
