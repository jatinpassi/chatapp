import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/home/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this._chatService
      .joinRoom('csgo', 'message')
      .subscribe((data) => console.log(data));
  }
}
