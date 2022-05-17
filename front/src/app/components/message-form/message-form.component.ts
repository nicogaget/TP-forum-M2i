import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message.entity';
import { Sujet } from 'src/app/models/sujet.entity';
import { MessageService } from 'src/app/_services/message.service';
import { SujetService } from 'src/app/_services/sujet.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
  message!: Message;
  @Input() sujetId!: string;
  @Output() sendMessageEvent = new EventEmitter<Message>();

  constructor(private fb: FormBuilder, private sujetService: SujetService) {}
  messageForm = this.fb.group({
    content: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    author: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
  });

  sendMessage() {
    this.message = this.messageForm.getRawValue();

    this.sendMessageEvent.emit(this.message);
  }
  ngOnInit(): void {}
}
