import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './chat.service';

const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };
export const SOCKET_CONFIG_TOKEN = new InjectionToken<SocketIoConfig>(
  '__SOCKET_IO_CONFIG__'
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule], //SocketIoModule.forRoot(config)],
  providers: [
    // { provide: SOCKET_CONFIG_TOKEN, useValue: config },
    // { provide: ChatService, deps: [SOCKET_CONFIG_TOKEN] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
