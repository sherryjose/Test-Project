import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageInput: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // this.messageInput = this.messageInput + document.getElementById('content').value;
  }
}
