// 默认的错误类型;

import { ErrorType } from '../constants/user.error.type.js';

// 系统繁忙;
export const systemError: ErrorType = {
  status: 500,
  code: 100001,
  message: '系统繁忙，请稍后再试!',
  result: '',
};
