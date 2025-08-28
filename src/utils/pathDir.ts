import path from 'path';
import { fileURLToPath } from 'url';
// 解决 __dirname 不存在
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 静态资源目录;
const publicPathDir = path.join(__dirname, '../../public');
// 上传目录;
const uploadPathDir = path.join(__dirname, '../../uploads');
// 默认上传路径;
const defaultPathDir = path.join(__dirname, '../../uploads/unknown');
// 图片上传默认路径;
const imagePathDir = path.join(__dirname, '../../uploads/images');
// 音乐上传默认路径;
const musicPathDir = path.join(__dirname, '../../uploads/music');

export { publicPathDir, uploadPathDir, imagePathDir, defaultPathDir, musicPathDir };
