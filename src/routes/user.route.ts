// 用户路由;
// import { Context } from 'koa';
import Router from 'koa-router';
import userController from '../controllers/user.controller.js';
import { userRegisterParameterValidator } from '../validators/user.validator.js';
// 用户路由配置;
const router = new Router({ prefix: '/user' });
//用户注册;
router.post('/register', userRegisterParameterValidator, userController.register);

export default router;
