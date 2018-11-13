import { store } from '../index.js';
import * as io from 'socket.io-client';

export default class SocketClientService {
  constructor() {
    const self = this;
    self.url = `http://${window.document.location.hostname}:3001/`;
    self.socket = io( self.url );

    self.socket.on('action.dispatch', (action) => {
      store.dispatch(action);
    });

    self.socket.on('refresh', () => {
      document.location.reload(true);
    });
  }

  dispatchGlobal(action) {
    store.dispatch(action);
    this.dispatchRemoteAction(action);
  }

  dispatchRemoteAction(action) {
    this.socket.emit('action.dispatch', action);
  }

  refreshPage() {
    this.socket.emit('refresh', true);
  }
}
