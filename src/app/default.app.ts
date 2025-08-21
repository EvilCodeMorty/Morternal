// 业务主入口;
// 第三方模块导入;

import Koa from 'koa';
import { koaBody } from 'koa-body';
import serve from 'koa-static';

// 自定义模块导入;
import { nodeEnv } from '../config/dev.config.js';
import pathDir from '../utils/pathDir.js';
import defaultRoute from '../routes/default.route.js';
import userRoute from '../routes/user.route.js';
import defaultErrorHandler from './default.error.handler.js';
import userErrorHandler from './user.error.handler.js';
import systemErrorHandler from './system.error.handler.js';
const app = new Koa();
// 全局错误处理(用于捕获全局在未使用trycatch时抛出的错误);
app.use(defaultErrorHandler);
// 开启信任代理头;
app.proxy = true;
// 配置koaBody;
app.use(koaBody());

// 挂载路由;
app.use(defaultRoute.routes()).use(defaultRoute.allowedMethods());
app.use(userRoute.routes()).use(userRoute.allowedMethods());
// 静态资源服务配置;
app.use(
  serve(pathDir, {
    // 缓存7天;
    maxage: 1000 * 60 * 60 * 24 * 7,
  }),
);
// 处理未匹配到的路由和目录访问，重定向到首页;
app.use(async (ctx, next) => {
  await next();
  // 如果响应状态为404，且不是静态资源，则重定向到首页;
  if (ctx.status === 404) {
    // 开发环境;
    if (nodeEnv === 'development') {
      ctx.redirect('/index.html');
      return;
    }
    // 生产环境;
    ctx.redirect('/api/index.html');
  }
});
// 忽略连接重置错误;
app.on('error', (error) => {
  if (error.code === 'ECONNRESET') {
    return;
  }
});
// 统一用户错误处理,用户错误作为默认错误,会返回给前端;
app.on('userError', userErrorHandler);
// 统一系统错误处理,系统错误属于系统问题,仅作为本地错误处理及信息分析,不会返回给前端;
app.on('systemError', systemErrorHandler);
// 导出;
export default app;
