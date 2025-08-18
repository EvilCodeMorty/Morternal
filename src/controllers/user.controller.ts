// 用户控制器;

import { Context } from 'koa';
import userService from '../services/user.service.js';
class UserController {
  //用户注册控制器;
  async register(ctx: Context) {
    try {
      const { user_name, user_password } = ctx.request.body;
      const res = await userService.createUser({ user_name, user_password });
      console.log(res);
      throw new Error('用户已存在');
    } catch (error) {}
  }
}

const userController = new UserController();
export default userController;
