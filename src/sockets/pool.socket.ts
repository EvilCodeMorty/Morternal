// socket连接池;
import { Socket } from 'socket.io';
interface SocketContext {
  userId: string;
  socket: Socket;
  isLogin: boolean;
  connectedAt: number;
}

//已登录的socket连接
//未登录的用户socket连接池;
export class NotLoginUserSocketPool {
  private static socketPool = new Map<string, SocketContext>();
  public static getSocketPoolNumber() {
    return this.socketPool.size;
  }
  //添加socket连接
  public static addSocket(socket: SocketContext) {
    this.socketPool.set(socket.userId, socket);
  }
  //移除socket连接
  public static removeSocket(userId: string) {
    this.socketPool.delete(userId);
  }
}

//客服连接池;

//冻结连接池;
