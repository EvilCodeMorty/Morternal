// 主服务入口;
// 第三方模块导入;
import dotenv from 'dotenv';
dotenv.config();
// 底层模块导入;
import { createServer } from 'http';
// 自定义模块导入;
import app from './app/default.app.js';
import createSocket from './sockets/default.socket.js';
//导入环境变量;

const start = performance.now();
// 读取环境变量;
const appPort = process.env['APP_PORT'] || 3000;
const appName = process.env['APP_NAME'] || 'Koa App';
// http服务
const appServer = createServer(app.callback());
// socket服务,我是把socket服务和http服务挂载到一起了,如果有需求可以拆分开;
const io = createSocket(appServer);
// 启动服务;
appServer.listen(appPort, () => {
  // 监控耗时;
  const end = performance.now();
  console.log(
    `${appName}启动成功🥰,此次启动耗时: ${(end - start).toFixed(2)}ms,当前端口为;${appPort}`,
  );
});

export { io };
