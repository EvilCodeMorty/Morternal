// 主服务入口;
import { createServer } from 'http';
import dotenv from 'dotenv';
import app from './app/default.app.js';
import createSocket from './sockets/default.socket.js';
//导入环境变量;
dotenv.config();
const start = performance.now();
const appPort = process.env['APP_PORT'] || 3000;
const appName = process.env['APP_NAME'] || 'Koa App';
const appServer = createServer(app.callback());
const io = createSocket(appServer);
// 启动服务;
appServer.listen(appPort, () => {
  //监控启动事件;
  const end = performance.now();
  console.log(
    `${appName}启动成功🥰,此次启动耗时: ${(end - start).toFixed(2)}ms,当前端口为;${appPort}`,
  );
});
export { io };
