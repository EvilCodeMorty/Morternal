// 用户错误统一处理;
import { Context } from 'koa';

import { ErrorType } from '../constants/user.error.type.js';
const userErrorHandler = (error: ErrorType, ctx: Context) => {
  try {
    ctx.status = error.status || 500;
    ctx.body = {
      code: error.code || 123456,
      message: error.message || '系统繁忙，请稍后再试!',
      result: error.result || null,
    };
  } catch (error) {
    // 在处理错误时出错就调用系统错误处理;
    ctx.app.emit('systemError', error, ctx);
    return;
  }
};
export default userErrorHandler;
