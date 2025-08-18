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
