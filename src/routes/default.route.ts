// 默认路由;
// import { Context } from 'koa';
import Router from 'koa-router';
import { Context } from 'koa';
const router = new Router({ prefix: '/' });
router.get('/', (ctx: Context) => {
  ctx.redirect('/index.html');
});
router.get('/musicList', (ctx: Context) => {
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
  ];
});

export default router;
