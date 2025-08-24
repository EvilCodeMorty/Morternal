// 文件上传参数校验;
import type { File } from '@koa/multer';
import type { IncomingMessage } from 'http';
export const fileFilter = (
  req: IncomingMessage,
  file: File,
  cb: (error: Error | null, acceptFile: boolean) => void,
) => {
  const fileType = file.originalname.substring(file.originalname.lastIndexOf('.') + 1);
  console.log(fileType);
  // 接收文件;
  cb(null, true);
};
