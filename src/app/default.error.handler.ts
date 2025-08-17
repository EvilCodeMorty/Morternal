import { Context, Next } from 'koa';

const defaultErrorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error) {
    const err = error as { isOperational?: boolean };
    console.error('捕获异常:', error);
    ctx.status = 500;
    ctx.body = { code: 500, message: '服务器内部错误', result: '' };
    if (err.isOperational) {
      ctx.app.emit('userError', error, ctx);
    } else {
      ctx.app.emit('systemError', error, ctx);
    }
  }
};
export default defaultErrorHandler;
