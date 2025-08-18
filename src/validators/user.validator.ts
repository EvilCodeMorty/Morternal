//用户参数校验;
import { Context, Next } from 'koa';
import { userNameIsNull } from '../constants/user.error.type.js';
// 用户注册参数校验;
export const userRegisterParameterValidator = async (ctx: Context, next: Next) => {
  // 校验用户参数;
  // const { user_name, user_password } = ctx.request.body;
  // if (user_name === '') {
  //   ctx.app.emit('userError', userNameIsNull, ctx);
  // }
  // if (user_password === '') {
  // }

  await next();
};
