//用户参数校验;
import { Context, Next } from 'koa';
import {
  userNameIsNull,
  passwordIsNull,
  userNameFormatError,
  passwordFormatError,
  userAlreadyExited,
} from '../constants/user.error.type.js';
import { stringValidator, emailValidator, passwordValidator } from './default.validator.js';
import userService from '../services/user.service.js';

// 用户注册参数校验;
export const userRegisterParameterValidator = async (ctx: Context, next: Next) => {
  // 校验用户参数是否完整;
  const { user_name, user_password } = ctx.request.body;
  if (user_name === '') {
    ctx.app.emit('userError', userNameIsNull, ctx);
    return;
  }
  if (user_password === '') {
    ctx.app.emit('userError', passwordIsNull, ctx);
    return;
  }
  // 校验格式是否正确;
  const userOne = stringValidator(user_password);
  const userNameTwo = emailValidator(user_name);
  if (!userOne || !userNameTwo) {
    ctx.app.emit('userError', userNameFormatError, ctx);
    return;
  }
  const userPasswordOne = stringValidator(user_password);
  const userPasswordTwo = passwordValidator(user_password);
  if (!userPasswordOne || !userPasswordTwo) {
    ctx.app.emit('userError', passwordFormatError, ctx);
    return;
  }
  //查询用户是否已存在;
  const res = await userService.queryUser({ user_name: user_name });
  if (res) {
    ctx.app.emit('userError', userAlreadyExited, ctx);
    return;
  }
  await next();
};
