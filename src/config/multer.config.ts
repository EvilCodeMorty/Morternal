// @koa/multer的配置文件;
import multer from '@koa/multer';
import uuid from '../utils/uuid.js';
import { uploadPathDir } from '../utils/pathDir.js';
import { fileFilter } from '../validators/file.validator.js';
// 配置存储位置和文件名;
const storage = multer.diskStorage({
  // 存储位置;
  destination: function (req, file, cb) {
    cb(null, uploadPathDir);
  },
  // 文件名;
  filename: function (req, file, cb) {
    const fileType = file.originalname.substring(file.originalname.lastIndexOf('.') + 1);
    cb(null, `${uuid()}.${fileType}`);
  },
});

//单文件上传配置;
export const uploadSingle = multer({
  // 存储配置;
  storage: storage,
  // 文件大小限制5MB;
  limits: { fileSize: 1024 * 1024 * 5 },
  // 文件类型限制;
  fileFilter: fileFilter,
}).single('file');
