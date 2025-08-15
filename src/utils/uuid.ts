//通过uuid生成唯一id,如果存在自定义内容,在这里直接修改;
import { v7 as uuidv7 } from 'uuid';
const uuid = () => {
  let onlyID = '';
  onlyID = uuidv7();
  return onlyID.replace(/-/g, '');
};
export default uuid;
