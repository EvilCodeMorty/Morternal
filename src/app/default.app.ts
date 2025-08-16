// 业务主入口;
// 第三方包导入;
import Koa from 'koa';
import { koaBody } from 'koa-body';
import serve from 'koa-static';
//系统导入;
import path from 'path';
import { fileURLToPath } from 'url';
// 自定义文件导入;
import defaultRoute from '../routes/default.route.js';
import userErrorHandler from './user.error.handler.js';
import systemErrorHandler from './system.error.handler.js';
// 解决 __dirname 不存在
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticDir = path.join(__dirname, '../../public');
const app = new Koa();
// 开启信任代理头;
app.proxy = true;
// 静态资源服务配置;
app.use(
  serve(staticDir, {
    maxage: 1000 * 60 * 60 * 24 * 30,
  }),
);
// 配置koaBody
app.use(koaBody());
// 挂载路由;
app.use(defaultRoute.routes()).use(defaultRoute.allowedMethods());
// 处理未匹配到的路由和目录访问，重定向到首页
app.use(async (ctx, next) => {
  await next();
  // 如果响应状态为404，且不是静态资源，则重定向到首页
  if (ctx.status === 404) {
    ctx.redirect('/index.html');
  }
});
// 统一用户错误处理;
app.on('userError', userErrorHandler);
// 统一系统错误处理;
app.on('systemError', systemErrorHandler);
export default app;
