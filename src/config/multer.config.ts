// @koa/multer的配置文件;
import multer from '@koa/multer';
import type { File } from '@koa/multer';
import uuid from '../utils/uuid.js';
import { imagePathDir, defaultPathDir, musicPathDir } from '../utils/pathDir.js';
import { fileFilter } from '../validators/file.validator.js';
import { imagesType, musicType } from '../config/type.config.js';

//按照文件后缀放到对应文件夹中;
const fileClassifyPath = (file: File) => {
  // 默认文件保存文件夹;
  let filePath = defaultPathDir;
  // 获取文件的后缀名;
  const fileType = file.originalname.substring(file.originalname.lastIndexOf('.') + 1);
  // 图片文件格式
  if (imagesType.includes(fileType)) {
    filePath = imagePathDir;
  }
  // 音乐文件格式;
  if (musicType.includes(fileType)) {
    filePath = musicPathDir;
  }
  return filePath;
};
// 配置存储位置和文件名;
const storage = multer.diskStorage({
  // 存储位置;
  destination: function (req, file, cb) {
    cb(null, fileClassifyPath(file));
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
