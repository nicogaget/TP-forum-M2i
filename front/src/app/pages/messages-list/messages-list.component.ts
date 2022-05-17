import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Message } from 'src/app/models/message.entity';
import { Sujet } from 'src/app/models/sujet.entity';
import { SujetService } from 'src/app/_services/sujet.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit {
  sujetId!: string;
  sujet!: Sujet;
  showMessage: boolean = true;
  showMessageForm: boolean = false;
  errorMessage = '';
  message!: Message[];

  constructor(
    private sujetService: SujetService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id')!;
      this.sujetId = id;
    });
  }

  displayForm() {
    this.showMessageForm = !this.showMessageForm;
  }

  initSujet() {
    this.sujetService.findById(this.sujetId).subscribe((response) => {
      this.sujet = response;
    });
  }

  sendMessage(message: Message) {
    this.sujetService.postMessage(this.sujetId, message).subscribe({
      next: (data) => {
        console.log('hello', data);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
      complete: () => {
        this.initSujet();
        this.showMessageForm = false;
      },
    });
  }

  ngOnInit(): void {
    console.log(this.sujetId);
    this.initSujet();
  }
}
