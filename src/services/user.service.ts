// 用户服务处理;

import UserModel from '../models/user.model.js';
import uuid from '../utils/uuid.js';

class UserService {
  // 创建用户;
  async createUser(params: { user_name: string; user_password: string }) {
    const { user_name, user_password } = params;
    const user_id = `m_${uuid()}`;
    const nick_name = user_name;
    console.log(user_name, user_password, user_id, nick_name);
    const res = await UserModel.create({
      user_id,
      user_name,
      user_password,
      nick_name,
    });
    console.log(res);
    return res.dataValues;
  }
}
const userService = new UserService();
export default userService;
