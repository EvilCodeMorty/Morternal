import path from 'path';
import { fileURLToPath } from 'url';
// 解决 __dirname 不存在
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPathDir = path.join(__dirname, '../../public');
const uploadPathDir = path.join(__dirname, '../../uploads');
export { publicPathDir, uploadPathDir };
