// 默认的参数校验;
// 字符校验,校验字符是否在限制长度内并且是否存在禁止的字符;
export const stringValidator = (string: string) => {
  if (string.length > 25) {
    return false;
  }
  const forbidString = ['<', '>', '&', ' ', "'", '"', '|', '?'];
  const res = forbidString.every((item) => !string.includes(item));
  return res ? true : false;
};

// 校验邮箱格式;
export const emailValidator = (string: string) => {
  if (string.length > 30 || string.length < 13) {
    return false;
  }
  const commonEmail = ['@163.com', '@qq.com', '@gmail.com', '@yahoo.com'];
  const emailFormat = string.slice(string.lastIndexOf('@'));
  const res = commonEmail.some((item) => emailFormat === item);
  return res ? true : false;
};
// 校验密码格式;
export const passwordValidator = (string: string) => {
  if (string.length > 20 || string.length < 8) {
    return false;
  }
  const reg = /^\S*(?=\S{8,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^*])\S*$/;
  return reg.test(string);
};
