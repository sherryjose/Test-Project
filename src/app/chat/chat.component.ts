import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageInput = '';
  constructor() { }

  ngOnInit() {
  }

  setMessage(event) {
      localStorage.setItem('message', event.target.value);
  }
  onSubmit() {
    if (localStorage.getItem('message') !== '') {
      this.messageInput = this.messageInput + ' ' + localStorage.getItem('message');
    } else {
      alert('Please enter some text');
    }
  }
}
