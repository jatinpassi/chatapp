import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chatapp';
  constructor(private _chatService: ChatService) {}
  ngOnInit() {
    this._chatService
      .joinRoom('csgo', 'message')
      .subscribe((data) => console.log(data));
  }
}
