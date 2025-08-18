//用户参数校验;
import { Context, Next } from 'koa';
// 用户注册参数校验;
export const userRegisterParameterValidator = async (ctx: Context, next: Next) => {
  await next();
};
