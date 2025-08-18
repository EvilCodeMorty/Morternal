// 系统错误统一处理;
import { Context } from 'koa';
import { ErrorType } from '../constants/user.error.type.js';
import { systemError } from '../constants/default.error.type.js';
const systemErrorHandler = (error: ErrorType, ctx: Context) => {
  try {
    //在监控到系统问题时对用户进行统一错误提示;
    ctx.status = systemError.status;
    const { status, ...newErrorData } = systemError;
    // 出现全局错误一律响应500;
    ctx.body = newErrorData;
    // 进行日志处理;
    console.error(error);
    /**
     * 按日期保存到log/error/system目录下
     */
    return;
  } catch (error: unknown) {
    let message: string;
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
export default systemErrorHandler;
