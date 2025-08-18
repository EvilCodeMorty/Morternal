// 默认错误处理;
// 对于系统未监控的错误进行统一捕获并处理;
import { Context, Next } from 'koa';
const defaultErrorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error: unknown) {
    console.error('捕获异常:', error);
    let message: string;
    ctx.status = 500;
    // 出现全局错误一律响应500;
    ctx.body = { code: 500, message: '系统繁忙，请稍后再试!', result: '' };
    // 上报到系统错误处理;
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else {
      message = '未知错误';
    }
    const errorData = {
      status: 500,
      code: 100001,
      message: message,
      result: '',
    };
    console.log(errorData);
    ctx.app.emit('systemError', errorData, ctx);
  }
};
export default defaultErrorHandler;
