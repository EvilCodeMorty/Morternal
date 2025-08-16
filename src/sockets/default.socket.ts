//socket主入口;
import http from 'http';
import { Server } from 'socket.io';
// 创建socket服务;
const createSocketServer = function (appServer: http.Server) {
  const io = new Server(appServer, {
    path: '/eternity',
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });
  // 创建socket连接;
  io.on('connect', (socket) => {
    socket.on('disconnect', () => {
      console.log('有新的连接!');
    });
    socket.on('error', (err) => {
      console.log('socket出错了!', err);
    });
  });
  return io;
};

export default createSocketServer;
