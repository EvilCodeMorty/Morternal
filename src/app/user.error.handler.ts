// 用户错误统一处理;
import { Context } from 'koa';

import { ErrorType } from '../constants/user.error.type.js';
import { systemError } from '../constants/default.error.type.js';
const userErrorHandler = (error: ErrorType, ctx: Context) => {
  try {
    ctx.status = error.status || systemError.status;
    ctx.body = {
      code: error.code || systemError.code,
      message: error.message || systemError.message,
      result: error.result || systemError.result,
    };
  } catch (error) {
    // 在处理错误时出错就调用系统错误处理;
    ctx.app.emit('systemError', error, ctx);
    return;
  }
};
export default userErrorHandler;
