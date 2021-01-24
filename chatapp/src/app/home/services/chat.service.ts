import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class ChatService {
  socket: any;
  constructor() {}
  joinRoom(roomName: string, path: string) {
    this.socket = io(`${environment.host}/${path}`);
    this.socket.emit('joinRoom', roomName);
    return new Observable((subscriber) => {
      this.socket.on('success', (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
