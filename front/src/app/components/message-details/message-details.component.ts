import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.entity';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss'],
})
export class MessageDetailsComponent implements OnInit {
  @Input() message!: Message;
  constructor() {}

  ngOnInit(): void {}
}
