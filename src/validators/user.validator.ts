//用户参数校验;
import { Context, Next } from 'koa';
// 用户注册参数校验;
export const userRegisterParameterValidator = async (ctx: Context, next: Next) => {
  // 爆出错误;

  throw new Error('用户注册参数校验失败');

  await next();
};
