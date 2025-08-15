// 系统错误统一处理;
import { Context } from 'koa';
type Error = {
  code: number;
  status: number;
  message: string;
  result: null | string | object;
};
const systemErrorHandler = (error: Error, ctx: Context) => {
  try {
    /**
     * 按日期保存到log/error/system目录下
     */
    return error;
  } catch (error) {
    return ctx.app.emit('systemError', error, ctx);
  }
};
export default systemErrorHandler;
