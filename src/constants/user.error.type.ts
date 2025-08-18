// 用户相关的错误类型;

export type ErrorType = {
  status: number;
  code: number;
  message: string;
  result: string | object | null;
};

// 用户名不能为空;
export const userNameIsNull: ErrorType = {
  status: 400,
  code: 20001,
  message: '用户名不能为空',
  result: '',
};
// 密码不能为空;
export const passwordIsNull: ErrorType = {
  status: 400,
  code: 20002,
  message: '密码不能为空',
  result: '',
};
// 用户名格式错误;
export const userNameFormatError: ErrorType = {
  status: 400,
  code: 20003,
  message: '用户名格式错误',
  result: '',
};
// 密码格式错误;
export const passwordFormatError: ErrorType = {
  status: 400,
  code: 20004,
  message: '密码格式错误',
  result: '',
};
//注册失败;
export const userRegisterError: ErrorType = {
  status: 500,
  code: 20005,
  message: '用户注册失败',
  result: '',
};
// 用户已存在;
export const userAlreadyExited: ErrorType = {
  status: 400,
  code: 20006,
  message: '用户已存在',
  result: '',
};
