import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sujet } from '../models/sujet.entity';
import { SujetService } from '../_services/sujet.service';

@Component({
  selector: 'app-form-sujet',
  templateUrl: './form-sujet.component.html',
  styleUrls: ['./form-sujet.component.scss'],
})
export class FormSujetComponent implements OnInit {
  sujet!: Sujet;
  errorMessage: '' | undefined;

  @Output() addSujetEvent = new EventEmitter<Sujet>();

  constructor(private fb: FormBuilder, private sujetService: SujetService) {}
  sujetForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
  });

  sendSujet() {
    this.sujet = this.sujetForm.getRawValue();
    console.log(this.sujet);

    this.addSujetEvent.emit(this.sujet);
  }

  ngOnInit(): void {}
}
