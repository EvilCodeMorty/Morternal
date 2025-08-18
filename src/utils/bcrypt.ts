// bcrypt加密;
import bcrypt from 'bcrypt';

// 密码加密;
export const passwordEncryption = (string: string) => {
  const res = bcrypt.hashSync(string, 10);
  return res;
};
// 密码对比;
export const comparePassword = (password: string, cryptograph: string) => {
  const res = bcrypt.compareSync(password, cryptograph);
  return res;
};
