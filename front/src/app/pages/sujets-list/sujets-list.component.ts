import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.entity';
import { Sujet } from 'src/app/models/sujet.entity';
import { SujetService } from 'src/app/_services/sujet.service';

@Component({
  selector: 'app-sujets-list',
  templateUrl: './sujets-list.component.html',
  styleUrls: ['./sujets-list.component.scss'],
})
export class SujetsListComponent implements OnInit {
  sujet!: Sujet;
  errorMessage: '' | undefined;
  sujets!: Sujet[];
  showMessage: boolean = false;
  constructor(private service: SujetService) {}

  initSujets() {
    this.service.findAll().subscribe((response) => {
      this.sujets = response;
    });
  }

  ngOnInit(): void {
    this.initSujets();
  }
  addSujet(sujet: Sujet) {
    console.log(sujet);

    this.service.create(sujet).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
      complete: () => {
        this.initSujets();
      },
    });
  }
}
