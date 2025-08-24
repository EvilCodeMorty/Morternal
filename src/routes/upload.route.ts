// 文件上传路由;
import { Context } from 'koa';

import Router from '@koa/router';

import { uploadSingle } from '../config/multer.config.js';

const router = new Router({ prefix: '/upload' });

// 单文件上传;
router.post('/single', uploadSingle, (ctx: Context) => {
  ctx.body = '上传成功';
});

export default router;
