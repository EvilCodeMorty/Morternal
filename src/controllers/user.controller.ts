// 用户控制器;

import { Context } from 'koa';
import userService from '../services/user.service.js';
class UserController {
  //用户注册控制器;
  async register(ctx: Context) {
    try {
      const { user_name, user_password } = ctx.request.body;
      const res = await userService.createUser({ user_name, user_password });
    } catch (error) {}
  }
}

const userController = new UserController();
export default userController;
