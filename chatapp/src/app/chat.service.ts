import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  readonly url = 'http://localhost:3000/message';
  socket: any;
  constructor() {
    this.socket = io(this.url);
  }
  joinRoom(roomName: string) {
    this.socket.emit('joinRoom', roomName);
    return new Observable((subscriber) => {
      this.socket.on('success', (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
