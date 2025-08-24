// 默认路由;
// import { Context } from 'koa';

import Router from '@koa/router';
import { Context } from 'koa';
import { nodeEnv } from '../config/dev.config.js';
const router = new Router();
router.get('/', (ctx: Context) => {
  // 开发环境;
  if (nodeEnv === 'development') {
    ctx.status = 200;
    ctx.redirect('/index.html');
    return;
  }
  // 生产环境;
  ctx.status = 200;
  ctx.redirect('/api/index.html');
});

router.get('/musicList', (ctx: Context) => {
  ctx.status = 200;
  ctx.body = [
    {
      music_id: '852d682f3888457a9aebac14904abe5a',
      music_name: '不凡',
      music_singer: '王铮亮',
    },
    {
      music_id: 'c6c96f7e77d4409ab9f0ab54d128f745',
      music_name: '凡人',
      music_singer: '段奥娟',
    },
    {
      music_id: 'bb012252cbb24d73b3d27ad1eb0f5b2f',
      music_name: '凡心',
      music_singer: '王铮亮',
    },
    {
      music_id: '5e958c21d00840b69c4b88f13cd25336',
      music_name: '归期',
      music_singer: '钱润玉Runyu',
    },
    {
      music_id: '3864656ec57743fa9687d3633d176739',
      music_name: '落英',
      music_singer: '银临',
    },
    {
      music_id: 'c942dd052fb34021bc04ffd8e18faa38',
      music_name: '少年不凡',
      music_singer: '刘美麟',
    },
    {
      music_id: '43115a7cb29f16df86dfb3e6ad9c75fd',
      music_name: '主角',
      music_singer: '马里奥',
    },
    {
      music_id: '9dfdb983add2537a3334833c29a7d832',
      music_name: '从别后',
      music_singer: 'AZA唱团',
    },
    {
      music_id: 'cc25f7629b82b6814c672474d981fac8',
      music_name: '从别后',
      music_singer: '流浪的蛙蛙',
    },
  ];
});

export default router;
