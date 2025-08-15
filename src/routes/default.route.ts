// 默认路由;
// import { Context } from 'koa';
import Router from 'koa-router';
import { Context } from 'koa';
const router = new Router({ prefix: '/' });
router.get('/', (ctx: Context) => {
  ctx.redirect('/index.html');
});

export default router;
