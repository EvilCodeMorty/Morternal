import path from 'path';
import { fileURLToPath } from 'url';
// 解决 __dirname 不存在
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDir = path.join(__dirname, '../../public');
export default pathDir;
