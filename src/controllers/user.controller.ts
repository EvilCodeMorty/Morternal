// 用户控制器;

import { Context } from 'koa';
import userService from '../services/user.service.js';
import { userRegisterError, userRegisterSuccess } from '../constants/user.error.type.js';
import { passwordEncryption } from '../utils/bcrypt.js';
class UserController {
  //用户注册控制器;
  async register(ctx: Context) {
    try {
      const { user_name, user_password } = ctx.request.body;
      // 对用户明文密码进行加密;
      const cryptograph = passwordEncryption(user_password);
      const res = await userService.createUser({ user_name, user_password: cryptograph });
      if (res) {
        const token = 'sadfsdfsdfsfsdfw4rsefzfzfzfqfsfvzxvvqwegergxgfsfwewgwgwgwwrwefzfzxfzfqfqf';
        ctx.status = userRegisterSuccess.status;
        // 返回token;
        userRegisterSuccess.result = {
          token: token,
        };
        ctx.body = userRegisterSuccess;
        return;
      }
      ctx.app.emit('systemError', userRegisterError, ctx);
    } catch (error) {
      ctx.app.emit('systemError', userRegisterError, ctx);
    }
  }
  // 用户登录控制器;
  async login(ctx: Context) {
    try {
    } catch (error) {}
  }
}
const userController = new UserController();
export default userController;
