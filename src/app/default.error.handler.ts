// 默认错误处理;
// 对于系统未监控的错误进行统一捕获并处理;
import { Context, Next } from 'koa';
import { systemError } from '../constants/default.error.type.js';
const defaultErrorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error: unknown) {
    const { status, ...newErrorData } = systemError;
    console.error('捕获异常:', error);
    let message: string;
    ctx.status = systemError.status;
    // 出现全局错误一律响应500;
    ctx.body = newErrorData;
    // 上报到系统错误处理;
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else {
      message = '未知错误';
    }
    // 重置错误信息;
    const errorData = { ...systemError, message };
    ctx.app.emit('systemError', errorData, ctx);
    return;
  }
};
export default defaultErrorHandler;
