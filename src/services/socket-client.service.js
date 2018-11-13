import * as io from 'socket.io-client';

export default class SocketClientService {
  constructor() {
    const self = this;
    self.url = `http://${window.document.location.hostname}:3001/`;
    self.socket = io( self.url );

    self.socket.on('action.dispatch', (msg) => {
      // dispatch your action
    });

    self.socket.on('refresh', () => {
      document.location.reload(true);
    });
  }

  globalActionDispatcher(action) {
    // dispatch your action
    this.dispatchRemoteAction(action);
  }

  dispatchRemoteAction(data) {
    this.socket.emit('action.dispatch', { data });
  }

  refreshPage() {
    this.socket.emit('refresh', true);
  }
}
