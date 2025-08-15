// 用户错误统一处理;
import { Context } from 'koa';
type Error = {
  code: number;
  status: number;
  message: string;
  result: null | string | object;
};
const userErrorHandler = (error: Error, ctx: Context) => {
  try {
    ctx.status = error.status || 500;
    ctx.body = {
      code: error.code || 123456,
      message: error.message || '服务器错误',
      result: error.result || null,
    };
  } catch (error) {}
};
export default userErrorHandler;
