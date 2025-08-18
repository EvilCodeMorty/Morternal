// 系统错误统一处理;
import { Context } from 'koa';
import { ErrorType } from '../constants/user.error.type.js';
const systemErrorHandler = (error: ErrorType, ctx: Context) => {
  try {
    //在监控到系统问题时对用户进行统一错误提示;
    ctx.status = 500;
    // 出现全局错误一律响应500;
    ctx.body = { code: 500, message: '系统繁忙，请稍后再试!', result: '' };
    // 进行日志处理;

    /**
     * 按日期保存到log/error/system目录下
     */
    return error;
  } catch (error) {
    return ctx.app.emit('systemError', error, ctx);
  }
};
export default systemErrorHandler;
